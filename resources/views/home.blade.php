<!doctype html>
<html>
  <head>
    <title>Moon</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link rel="shortcut icon" href="{{url('favicon.ico')}}" />
    <link rel="stylesheet" href="{{url('css/font-awesome.min.css')}}">
    <link rel="stylesheet" href="{{url('css/animate.min.css')}}">
    <link rel="stylesheet" href="{{url('css/highlight.min.css')}}">
    <link rel="stylesheet" href="{{url('css/style.css')}}">
    <link rel="stylesheet" id="hljs-theme" href="{{url('css/hljs-themes/github.css')}}">
    <script>
      var globals = {!!json_encode([
        'themeUrl' => url('css/hljs-themes/'),
        'apiRoot' => url('api'),
        'highlightThemes' => $highlightThemes
      ])!!}
    </script>
  </head>
  <body>
    <div id='app'>
    </div>
    {{-- <script src="{{url('js/highlight.pack.js')}}"></script> --}}
    @if(env('APP_ENV') != 'production')
    <script src="{{url('js/bundle.js')}}"></script>
    @else
    <script src="{{url('js/bundle.min.js')}}"></script>
    @endif
  </body>
</html>
