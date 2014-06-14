<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>@yield('title', 'Burthorpe - Runescape Social Network')</title>

    <link rel="stylesheet" type="text/css" href="{{ URL::asset('/assets/css/build/common.min.css') }}">

    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

    <script type="text/javascript" src="//code.jquery.com/jquery-2.1.0.min.js"></script>
    <script type="text/javascript">window.jQuery || document.write('<script src="{{ URL::asset('/assets/js/vendor/jquery-2.1.0.min.js') }}"><\/script>')</script>

    @yield('base-head')

  </head>
  <body>

    <div class="navbar navbar-static navbar-burthorpe navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle toggle-left hidden-md hidden-lg" data-toggle="sidebar" data-target=".sidebar-left">
            <span class="sr-only">Toggle Sidebar Navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a href="{{ URL::action('BurthorpeController@index') }}" class="navbar-brand">
            Burthorpe
          </a>
        </div>
      </div>
    </div>

    <div class="container-fluid">
      <div class="row">
        <div class="col-xs-7 col-sm-3 col-md-3 sidebar sidebar-left sidebar-animate sidebar-md-show">

          @include('lib.parts.sidebar')

        </div>

        <div class="main col-md-9 col-md-offset-3">
          <div class="page-container">

            <script type="text/javascript" src="{{ URL::asset('/assets/js/build/common.min.js') }}"></script>

            @yield('base-content')

          </div>
        </div>
      </div>
    </div>

    @yield('base-javascript')

  </body>
</html>
