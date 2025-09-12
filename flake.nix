{
  description = "A very basic flake";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
    answers_script = {
      type = "github";
      owner = "ingun37";
      repo = "answers-script";
      rev = "9e2fe83ca2960af82146264699b118d3481278de";
    };
  };

  outputs = { self, nixpkgs, answers_script }: {
    apps.x86_64-linux.default = { type = "app"; program = "${self.packages.x86_64-linux.answers_script}/bin/answers-script"; };
    packages.x86_64-linux.default = self.packages.x86_64-linux.answers_script;
    # packages.x86_64-linux.hello = nixpkgs.legacyPackages.x86_64-linux.hello;

    # packages.x86_64-linux.default = self.packages.x86_64-linux.hello;

  };
}
