# Documentation:
#
# Download Github repo to vv-main.zip and then:
#
# > docker build -t vv .
# > docker run -p 5173:5173 vv
#

# Latest LTS at the time of writing
FROM ubuntu:noble

ENV LANG=C.UTF-8

RUN apt-get update && apt-get install -y unzip ghc npm

WORKDIR /root
COPY vv-main.zip .
RUN unzip vv-main.zip

WORKDIR /root/vv-main/examples
RUN runhaskell compile.hs

WORKDIR /root/vv-main
RUN npm i && npm run res:build

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
