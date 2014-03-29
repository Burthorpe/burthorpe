composer_project "/vagrant/burthorpe" do
  dev true
  run_as "vagrant"
  quiet false
  action [:install, :dump_autoload]
end
