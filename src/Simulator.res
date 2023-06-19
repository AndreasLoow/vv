open Compiler
@module("./parser") external parse: string => parse_result = "parse"
@scope("window") @val external alert: string => unit = "alert"

open Verilog

@react.component
let make = () => {
  // REF: 4.5 SystemVerilog simulation reference algorithm
  // REF: execute_simulation

  let cir = vmodule_empty

  // REF: T = 0;
  // REF: initialize the values of all nets and variables;
  let sinit = build_state(cir)
  // REF: schedule all initialization events into time zero slot;
  let sinit = run_init(sinit)

  let (state, setState) = React.useState(_ => sinit)

  let handle_event = (time, i, _e) => {
   setState(s => if event_active(s, time) { run_event(s, i) } else { s })
  }

  let handle_inactive_done = (_e) => {
   setState(s => if inactive_done_active(s) { run_inactive_done(s) } else { s })
  }

  let handle_nba_done = (_e) => {
   setState(s => if nba_done_active(s) { run_nba_done(s) } else { s })
  }

  let handle_time = (_e) => {
   setState(s => if time_active(s) { run_time(s) } else { s })
  }

  let className_wrapper = (b) =>
   b ? "active" : ""

  let (parseState, setParseState) = React.useState(_ => Belt.Map.String.getExn(Templates.templates, "empty.sv"))

  let handle_parse = (_e) => {
   let p = parse(parseState)
   //Js.log(p)

   switch p {
   | ParseOk(ss) =>
     switch Verilog.build_state(Compiler.compile(ss)) {
     | s =>
       let s = run_init(s)
       setState(_ => s)
     | exception TypeCheckError(msg) => alert("Type checking failed: " ++ msg)
     | exception CompileError(msg) => alert("Compilation failed: " ++ msg)
     }
   | ParseFail(err) =>
     //Js.log(err)
     alert("Could not parse Verilog code: " ++ err)
   }
  }

  let handle_parse_change = (e) => {
   setParseState(_ => ReactEvent.Form.target(e)["value"])
   ReactEvent.Form.preventDefault(e)
  }

  let handle_template_change = (e) => {
   let val = ReactEvent.Form.target(e)["value"]
   setParseState(_ => Belt.Map.String.getExn(Templates.templates, val))
   ReactEvent.Form.preventDefault(e)
  }

  let time = React.string("Simulation time: " ++ Belt.Int.toString(state.time) ++ " (" ++ status_str(state.status) ++ ")")

  let env = Belt.Array.map(Belt.Map.String.toArray(state.env), ((k, v)) => {
   <li key={ k }> { React.string(k ++ ": " ++ Verilog.value_str(v)) } </li>
  })

  let cont_env = Belt.Array.mapWithIndex(state.cont_env, (i, v) => {
   <li key={ Belt.Int.toString(i) }> { React.string(Belt.Array.getExn(state.vmodule.conts, i).lhs ++ "(" ++ Belt.Int.toString(i) ++ "): " ++ Verilog.value_str(v)) } </li>
  })

  let proc_env = Belt.Array.mapWithIndex(state.proc_env, (i, s) => {
   <li key={ Belt.Int.toString(i) }> { React.string("state = " ++ Pp.proc_running_state_str(s.state) ++ ", pc = " ++ Belt.Int.toString(s.pc)) } </li>
  })

  let events = Belt.Array.map(state.queue, ((qi, q)) => {
   let active_es =
    Belt.Array.mapWithIndex(q.active, (i, e) =>
     <li key={ event_key(e) }
         onClick={ handle_event(qi, i) }
         className={ className_wrapper(event_active(state, qi)) }>
      { Pp.event_str(state.vmodule.conts, e) }
     </li>)

   let inactive_es =
    Belt.Array.map(q.inactive, (e) =>
     <li key={ event_key(e) }> { Pp.event_str(state.vmodule.conts, e) } </li>)

   let nba_es =
    Belt.Array.map(q.nba, (e) =>
     <li key={ event_key(e) }> { Pp.event_str(state.vmodule.conts, e) } </li>)

   <li key={ "Time" ++ Belt.Int.toString(qi) }>
    <b>{ React.string("Time: " ++ Belt.Int.toString(qi)) }</b>
    <ul>
      <li> { React.string("Active:") } <ul> { React.array(active_es) }</ul> </li>
      <li onClick={ handle_inactive_done } className={ className_wrapper(inactive_done_active(state)) }> { React.string("Inactive:") } <ul> { React.array(inactive_es) }</ul> </li>
      <li onClick={ handle_nba_done } className={ className_wrapper(nba_done_active(state)) }>
       { React.string("NBA:") } <ul> { React.array(nba_es) }</ul>
      </li>
    </ul>
   </li>
  })

  let monitor = Pp.monitor_str(state.monitor)

  let templates = Belt.Array.map(Belt.Map.String.keysToArray(Templates.templates), k => {
   <option key={k}>{ React.string(k) }</option>
  })

  <table id="main-table">
  <tbody>
  <tr>
  <td>
   <div>
   <select defaultValue="empty.sv" onChange={ handle_template_change }>
    { React.array(templates) }
   </select>
   </div>
   <div>
   <textarea rows={20} cols={60} value={ parseState } onChange={ handle_parse_change } />
   </div>
   <div>
   <button onClick={ handle_parse }>{React.string("Parse")}</button>
   </div>
  </td>
  <td><p id="code-render-title">{ React.string("Normalised Verilog module:") }</p><div id="code-render">{ Pp.vmodule_str(state.vmodule, state.proc_env) }</div></td>
  <td>
   <p id="simulation-time" onClick={ handle_time } className={ className_wrapper(time_active(state)) }>{ time }</p>

   <p>{ React.string("Environment:") }</p>
   <ul>{ React.array(env) }</ul>

   <p>{ React.string("Drivers (continuous assignments):") }</p>
   <ul>{ React.array(cont_env) }</ul>

   <p>{ React.string("Processes:") }</p>
   <ol>{ React.array(proc_env) }</ol>

   <p className={""}>{ React.string("Events:") }</p>
   <ul>{ React.array(events) }</ul>

   <p>{ React.string("Monitor:") }</p>
   <p>{ monitor }</p>
  </td>
  <td>
   <p id="output">{ React.string("Output:") }</p>
   <pre>{ React.string(state.output) }</pre>
  </td>
  </tr>
  </tbody>
  </table>
}
