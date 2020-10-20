#!/bin/zsh

BASEDIR=$(dirname "$0")
nix-shell "$BASEDIR/a.nix" --run "json-generator $1 $BASEDIR/../src/assets"
