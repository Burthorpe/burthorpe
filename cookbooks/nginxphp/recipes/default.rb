["nginx", "php5-fpm"].each do |p|
  apt_package p do
    action :install
  end
end

service "nginx" do
  action [ :enable, :start ]
end

service "php5-fpm" do
  action [ :enable, :start ]
end

execute 'PHPUserGroup' do
  command "sed -i 's/www-data/vagrant/' /etc/php5/fpm/pool.d/www.conf"
  only_if "grep -c 'www-data' /etc/nginx/nginx.conf"
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
  end
end