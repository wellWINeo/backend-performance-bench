{ config, pkgs, lib, ... }:

{
  users.users.test = {
    isNormalUser = true;
    extraGroups = [ "users" "wheel" ];
    password = "123"; # VM should be destroyed right after benchmarks, so i use silly password
  };
}