<!doctype html>
<html>
  <head>
    <title>Moon</title>
    <link rel="stylesheet" href="{{url('css/font-awesome.min.css')}}">
    <link rel="stylesheet" href="{{url('css/animate.min.css')}}">
    <link rel="stylesheet" href="{{url('css/style.css')}}">
    <script>
      var globals = {!!json_encode([
        'apiRoot' => url('api')
      ])!!}
    </script>
  </head>
  <body>
    <div id='root'>
    </div>
    @if(env('APP_ENV') != 'production')
    <script src="{{url('js/bundle.js')}}"></script>
    @else
    <script src="{{url('js/bundle.min.js')}}"></script>
    @endif
  </body>
</html>
