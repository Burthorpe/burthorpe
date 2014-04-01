# Burthorpe.com

[![Build Status](https://travis-ci.org/Burthorpe/burthorpe.svg?branch=master)](https://travis-ci.org/Burthorpe/burthorpe)

Burthorpe.com is a website that provides a social platform for the users of Runescape as well as an API for developers

## Getting Started

* git clone https://github.com/Burthorpe/burthorpe.git
* vagrant up

Services, by default, are then available at the following locations:

* Web: 192.168.250.10
* DB: 192.168.251.10

More information on vagrant can be found [here](http://www.vagrantup.com/).

## Notes

If you do not wish to use vagrant or other development tools contained in this repo, then you may setup your own development environment. The site root is located at `/public`.

If you are using your own development environment, don't forget to run `composer install --dev`.

## Copyright & License

Copyright (c) 2014 Wade Urry - Released under the [MIT license](LICENSE).
