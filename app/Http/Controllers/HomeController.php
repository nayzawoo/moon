<?php

namespace App\Http\Controllers;

use App\Moon\Themes;
use Illuminate\Support\Str;

class HomeController extends Controller
{
    public function index()
    {
        $highlightThemes = [];
        foreach (Themes::getThemes() as $value) {
            $highlightThemes[$value]  = str_replace('-', ' ', Str::title($value));
        }

        return view('home', compact('highlightThemes'));
    }
}
