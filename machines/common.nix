{ config, pkgs, lib, ... }: 

{
  imports = [
    <nixpkgs/nixos/modules/profiles/qemu-guest.nix>
  ];

  boot = {
    growPartition = true;
    kernelParams = [ "console=ttyS0" ];
    loader = {
      grub.device = "/dev/vda";
      timeout = 0;
    };
  };

  networking.firewall = {
    enable = true;
    allowedTCPPorts = [ 22 ];
  };

  environment.systemPackages = with pkgs; [
    neofetch
    htop
    git
  ];

  services.cloud-init.enable = true;

  services.openssh = {
    enable = true;
    ports = [ 22 ];
    settings = {
      PasswordAuthentication = true;
      AllowUsers = [ "test" ];
      X11Forwarding = false;
      PermitRootLogin = "no";
    };
  };

  system.build.qcow2 = import <nixpkgs/nixos/lib/make-disk-image.nix> {
    inherit lib config;
    pkgs = import <nixpkgs> { inherit (pkgs) system; };
    diskSize = 8192;
    format = "qcow2";
  };

  fileSystems."/" = {
    device = "/dev/disk/by-label/nixos";
    fsType = "ext4";
    autoResize = true;
  };

  users.users.test = {
    isNormalUser = true;
    extraGroups = [ "users" "wheel" ];
    password = "123"; # VM should be destroyed right after benchmarks, so i use silly password
  };

  system.stateVersion = "23.11";
}