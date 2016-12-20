<?php namespace App\Moon;

use Illuminate\Support\Facades\Cache;

class Themes
{

    public static function getThemes() {
        if (Cache::has('hljs-themes')) {
            return Cache::get('hljs-themes');
        }

        $themes = static::globThemes();
        Cache::forever('hljs-themes', $themes);

        return $themes;
    }

    public static function globThemes()
    {
        $themes = [];
        foreach (glob(APP_PUBLIC_PATH . '/css/hljs-themes/*.css') as $filename) {
            $themes[] = basename($filename, '.css');
        }
        return $themes;
    }
}
