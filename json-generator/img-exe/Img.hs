module Main where
import qualified System.Environment as E
import qualified System.Directory.Tree as DT
import qualified System.Directory as D
import qualified System.IO as IO
import qualified System.FilePath.Posix as P
import qualified Data.Foldable as FD
import qualified Text.RegexPR as R
import Data.Bifunctor (bimap)

onlyGroups :: Functor m => m ((String, (String, String)), [(Int, String)]) -> m [String]
onlyGroups = fmap ((map snd) . snd)

onlyGroup :: Functor m => Int -> m ((String, (String, String)), [(Int, String)]) -> m String
onlyGroup groupIdx = fmap (!! groupIdx) . onlyGroups

matchImages :: String -> [String]
matchImages = onlyGroup 0 <$> R.gmatchRegexPR "\\!\\[\\]\\(((?!http).+?)\\)" 

dropLastPath = P.dropTrailingPathSeparator . P.dropFileName . P.dropTrailingPathSeparator

copyIfExist :: FilePath -> FilePath -> IO ()
copyIfExist src dstDir =
    let dst = dstDir P.</> (P.takeFileName src)
    in D.doesFileExist src >>= \b -> 
        if b 
        then D.copyFile src dst 
        else putStrLn $ src ++ "does not exist"

main :: IO ()
main = do
    (assetPath:dbPath:_) <- E.getArgs
    dbDT <- DT.zipPaths <$> DT.readDirectoryWithL readFile dbPath
    let mdDt = FD.toList $ DT.filterDir mdFilter dbDT
    let dst'imgs = map (bimap dropLastPath matchImages) mdDt
    let img'dst = concatMap (\(dst,imgs) -> map (\img -> (assetPath P.</> img,dst)) imgs ) dst'imgs
    mapM_ (uncurry copyIfExist) img'dst

mdFilter :: DT.DirTree a -> Bool
mdFilter (DT.File name _) = P.isExtensionOf "md" name
mdFilter _ = True