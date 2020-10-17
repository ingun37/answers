{-# LANGUAGE DeriveGeneric #-}


module Main where

import System.Environment (getArgs)

import Lib (parse)

main = getArgs >>= parse