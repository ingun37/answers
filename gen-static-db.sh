#!/usr/bin/env sh

#--file-descriptor-count

ulimit -n 512
/nix/store/j2afrzqzwglsjhin0z7d8ydx0fp3l6s6-json-generator-0.1.0.0/bin/json-generator ../answers-db/books/ src/assets/db/