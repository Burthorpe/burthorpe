["mysql-server", "mysql-client"].each do |p|
  apt_package p do
    action :install
  end
end

service "mysql" do
  action [ :enable, :start ]
end

template "/etc/mysql/my.cnf" do
  source "my.cnf.erb"
  action :create
  notifies :restart, resources(:service => "mysql")
end
