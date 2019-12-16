#!/usr/bin/env sh

protoc -I=../answers-proto dash.proto \
--js_out=import_style=commonjs,binary:src/app \
--grpc-web_out=import_style=typescript,mode=grpcwebtext:src/app
