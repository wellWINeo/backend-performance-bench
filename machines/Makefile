
runner-iso:
	 nix build -f '<nixpkgs/nixos>' -I nixos-config=./runner-configuration.nix config.system.build.qcow2

loader-iso:
	nix build -f '<nixpkgs/nixos>' -I nixos-config=./loader-configuration.nix config.system.build.qcow2