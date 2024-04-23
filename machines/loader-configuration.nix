{ config, pkgs, lib, ... }:

{
  imports = [ ./common.nix ];

  environment.systemPackages = with pkgs; [
    k6
    nodejs_21
  ];
}