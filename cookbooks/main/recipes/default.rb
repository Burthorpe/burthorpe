node.default['system']['packages'] = ['build-essential', 'curl', 'dos2unix', 'gcc', 'git', 'libmcrypt4', 'libpcre3-dev', 'make', 'python2.7-dev', 'python-pip', 're2c', 'supervisor', 'unattended-upgrades', 'whois', 'vim']

node.default['nginx']['server_name'] = "192.168.250.10"
node.default['nginx']['doc_root'] = "/vagrant/public"

node.default['php']['packages'] = ['php5-cli', 'php5-dev', 'php-pear', 'php5-mysql', 'php5-pgsql', 'php5-sqlite', 'php5-apcu', 'php5-json', 'php5-curl', 'php5-gd', 'php5-gmp', 'php5-mcrypt', 'php5-xdebug', 'php5-memcached']
node.default['python']['packages'] = ['httpie', 'fabric', 'python-simple-hipchat']
node.default['nodejs']['packages'] = ['grunt-cli', 'gulp', 'bower']
node.default['other']['packages'] = ['redis-server', 'memcached', 'beanstalkd']

execute "apt-get update" do
  command "apt-get update"
end

execute "apt-get upgrade" do
  command "apt-get upgrade -y"
end

apt_package "python-software-properties" do
  action :install
end

bash "add-apt-repository" do
  code <<-EOF
  apt-add-repository ppa:nginx/stable -y
  apt-add-repository ppa:rwky/redis -y
  apt-add-repository ppa:chris-lea/node.js -y
  apt-add-repository ppa:ondrej/php5 -y
  EOF
end

execute "apt-key update" do
  command "apt-key update"
end

execute "apt-get update" do
  command "apt-get update"
end

node['system']['packages'].each do |p|
  apt_package p do
    action :install
  end
end
