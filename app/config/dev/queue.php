<?php

return array(

	/*
	|--------------------------------------------------------------------------
	| Queue Connections
	|--------------------------------------------------------------------------
	|
	| Here you may configure the connection information for each server that
	| is used by your application. A default configuration has been added
	| for each back-end shipped with Laravel. You are free to add more.
	|
	*/

	'connections' => array(

		'beanstalkd' => array(

				'driver' => 'beanstalkd',
				'host'	 => 'localhost',
				'queue'  => 'burthorpe',
				'ttr'	  => 60,

		),

	),

);
