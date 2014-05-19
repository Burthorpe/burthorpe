#!/usr/bin/env bash

mysql -u root -e "GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY '' WITH GRANT OPTION; FLUSH PRIVILEGES;"
mysql -u root -e "CREATE DATABASE IF NOT EXISTS burthorpe;"
