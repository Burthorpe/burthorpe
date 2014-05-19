["nodejs"].each do |p|
  apt_package p do
    action :install
  end
end

service "mysql" do
  action [ :enable, :start ]
end
