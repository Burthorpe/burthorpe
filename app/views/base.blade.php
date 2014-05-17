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

    <script type="text/javascript" src="http://code.jquery.com/jquery-2.1.0.min.js"></script>
    <script type="text/javascript">window.jQuery || document.write('<script src="{{ URL::asset('/assets/js/vendor/jquery-2.1.0.min.js') }}"><\/script>')</script>
    @if(Config::get('app.debug') === true)
      <script type="text/javascript" charset="utf-8">
        var debug = {{ Config::get('burthorpe.debug_verbosity') }}
      </script>
    @endif

    @yield('base-head')

  </head>
  <body>

    <div class="row">
      <div class="col-md-2 col-sm-1 col-xs-1">
        <div class="page-sidebar">

          @include('lib.parts.sidebar')

        </div>
      </div>

      <div class="col-md-10 col-sm-11 col-xs-11">
        <div class="page-container">

          <script type="text/javascript" src="{{ URL::asset('/assets/js/build/common.min.js') }}"></script>

          @yield('base-content')

        </div>
      </div>
    </div>

    @yield('base-javascript')

  </body>
</html>
