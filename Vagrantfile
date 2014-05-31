# -*- mode: ruby -*-
# vi: set ft=ruby :

VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|

  config.vm.box = "ubuntu/trusty64"

  config.vm.synced_folder "./", "/vagrant"

  config.vm.define "db" do |db|

    db.vm.network :private_network, ip: "192.168.251.10"

    db.vm.provision "chef_solo" do |chef|
      chef.add_recipe "main"
      chef.add_recipe "mysql"
    end

    db.vm.provision "shell", path: "./scripts/setup-mysql.sh"

  end

  config.vm.define "web", primary: true do |web|

    web.vm.network :private_network, ip: "192.168.250.10"

    web.vm.provision "chef_solo" do |chef|
      chef.add_recipe "main"
      chef.add_recipe "nginxphp"
      chef.add_recipe "composer"
      chef.add_recipe "burthorpe"
    end

  end

end
