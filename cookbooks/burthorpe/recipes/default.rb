composer_project "/vagrant" do
  dev true
  run_as "vagrant"
  quiet false
  action [:install, :dump_autoload]
end

composer_project "/vagrant" do
  dev true
  run_as "vagrant"
  quiet false
  action [:install, :dump_autoload]
end
