<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>@yield('title', 'Burthorpe - Runescape')</title>

    <link rel="stylesheet" type="text/css" href="{{ URL::asset('/assets/css/main.min.css') }}">

    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

    <script type="text/javascript" src="http://code.jquery.com/jquery-2.1.0.min.js"></script>
    <script type="text/javascript">window.jQuery || document.write('<script src="{{ URL::asset('/assets/js/vendor/jquery-2.1.0.min.js') }}"><\/script>')</script>

    @yield('base-head')

  </head>
  <body>

    @yield('base-content')

    @yield('base-javascript')

  </body>
</html>
