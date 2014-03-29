# -*- mode: ruby -*-
# vi: set ft=ruby :

VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|

  config.vm.box = "hashicorp/precise64"

  config.vm.network :private_network, ip: "192.168.250.10"

  config.vbguest.auto_update = false

  config.vm.provision "chef_solo" do |chef|
    chef.add_recipe "main"
  end

  config.vm.synced_folder "./", "/vagrant"

end
