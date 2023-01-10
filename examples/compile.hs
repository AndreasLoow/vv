{-# LANGUAGE TupleSections #-}

import Data.List
import System.IO
import System.Directory
import System.FilePath

-- from https://codereview.stackexchange.com/questions/119926/walking-a-directory-in-haskell
walkDir :: FilePath -> IO [FilePath]
walkDir path = contents >>= fmap concat . traverse helper
  where contents = prefix . filter ((&&) . (/=) "." <*> (/=) "..") <$> getDirectoryContents path
        helper x = doesDirectoryExist x >>= \e -> if e then walkDir x else return [x]
        prefix = fmap ((if path == "." then "" else path) </>)

templatesPath :: String
templatesPath = "../src/Templates.res"

main :: IO ()
main = do
 fs <- filter ((".sv"==) . takeExtension) <$> walkDir "."
 templates <- mapM (\f -> (f,) <$> readFile f) fs

 let ([empty], templates') = partition (("empty.sv"==) . fst) templates

 withFile templatesPath WriteMode $ \h -> do
  hPutStrLn h "let templates = Belt.Map.String.fromArray("
  hPrint h $ empty : templates'
  hPutStrLn h ")"
 putStrLn $ "Templates written to " ++ templatesPath
