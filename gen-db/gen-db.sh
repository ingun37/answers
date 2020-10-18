#!/bin/zsh

BASEDIR=$(dirname "$0")
nix-shell "$BASEDIR/a.nix" --run "$BASEDIR/run.sh" --argstr dbPath "$1" --argstr assetsPath "$BASEDIR/../src/assets"