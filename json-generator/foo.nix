{ mkDerivation, aeson, base, base16-bytestring, bytestring
, containers, cryptohash-sha1, directory-tree, filepath, split
, stdenv, utf8-string
}:
mkDerivation {
  pname = "json-generator";
  version = "0.1.0.0";
  src = ./.;
  isLibrary = false;
  isExecutable = true;
  executableHaskellDepends = [
    aeson base base16-bytestring bytestring containers cryptohash-sha1
    directory-tree filepath split utf8-string
  ];
  license = "unknown";
  hydraPlatforms = stdenv.lib.platforms.none;
}
