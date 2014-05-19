["nginx", "php5-fpm"].each do |p|
  apt_package p do
    action :install
    options "--force-yes"
  end
end

service "nginx" do
  action [ :enable, :start ]
end

service "php5-fpm" do
  action [ :enable, :start ]
  restart_command "sudo service php5-fpm restart"
  start_command "sudo service php5-fpm start"
  stop_command "sudo service php5-fpm stop"
  status_command "sudo service php5-fpm status"
  provider Chef::Provider::Service::Init::Debian
end

execute 'NginxUserGroup' do
  command "sed -i 's/www-data/vagrant/' /etc/nginx/nginx.conf"
  notifies :restart, resources(:service => "nginx")
end

execute 'PHPUserGroup' do
  command "sed -i 's/www-data/vagrant/' /etc/php5/fpm/pool.d/www.conf"
  only_if "grep -c 'vagrant' /etc/nginx/nginx.conf"
  notifies :restart, resources(:service => "php5-fpm")
end

template "/etc/nginx/sites-available/default" do
  source "vhost.erb"
  variables({
    :doc_root    => node['nginx']['doc_root'],
    :server_name => node['nginx']['server_name']
  })
  action :create
  notifies :restart, resources(:service => "nginx")
end

node['php']['packages'].each do |p|
  apt_package p do
    action :install
    options "--force-yes"
  end
end

bash "PHPSetupScript" do
  name "/vagrant/scripts/setup-php.sh"
  notifies :restart, resources(:service => "php5-fpm")
end
