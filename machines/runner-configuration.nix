{ config, pkgs, lib, ...}:

{
  imports = [ ./common.nix ];

  networking.firewall.allowedTCPPorts = [ 22 8080 ];

  environment.systemPackages = with pkgs; [ docker ];

  virtualisation.docker.enable = true;

  users.users.test.extraGroups = [ "docker" ];
}