composer_project "/vagrant/burthorpe" do
  dev true
  run_as "vagrant"
  quiet false
  action [:install, :dump_autoload]
end

bash "migrate_db" do
  user "vagrant"
  code <<-EOH
    php /vagrant/burthorpe/artisan migrate
  EOH
end
