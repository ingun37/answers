let git = builtins.fetchGit {
        url = https://github.com/ingun37/haskell-script.git;
        rev = "e6726c2b04767fdd27871fb5bcb131f4d2d468e1";
    };
    haskellScriptD = import git {};
in  derivation {
    name = "a";
    builder = "a";
    system = builtins.currentSystem;
    script = haskellScriptD;
}