module Main where

import Lib
import System.Environment
import System.Exit
import System.Directory.Tree
import Data.Aeson

main = getArgs >>= parse

writeJson :: [Node] -> IO ()
writeJson [] = return ()
writeJson (x:xs) = do 
    _ <- print (encode x)
    writeJson xs

parse :: [String] -> IO ()
parse (src:(dst:[])) = do
    (a :/ (Dir name contents)) <- readDirectory src
    writeJson (makeNodes name contents)
parse ["-h"] = usage   >> exit
parse ["-v"] = version >> exit
parse _     = usage >> exit

usage   = putStrLn "Usage: gen-json [-vh] src dst"
version = putStrLn "Haskell tac 0.1"
exit    = exitWith ExitSuccess
die     = exitWith (ExitFailure 1)