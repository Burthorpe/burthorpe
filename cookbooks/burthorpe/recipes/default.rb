composer_project "/vagrant" do
  dev true
  run_as "vagrant"
  quiet false
  action [:install, :dump_autoload]
end

node["other"]["packages"].each do |p|
  apt_package p do
    action :install
  end
end

execute "ConfigureBeanstalkd" do
  command "sudo sed -i \"s/#START=yes/START=yes/\" /etc/default/beanstalkd"
end

service "beanstalkd" do
  action [ :enable, :start ]
end
