from BaseRunner import BaseRunner

class vv(BaseRunner):
    def __init__(self):
        super().__init__("vv", "vv-parse", {"parsing"})
        self.url = "https://github.com/AndreasLoow/vv"

    def prepare_run_cb(self, tmp_dir, params):
        self.cmd = [self.executable]
        self.cmd += params['files']
