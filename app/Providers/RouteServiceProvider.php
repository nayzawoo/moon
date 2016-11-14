<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class RouteServiceProvider extends ServiceProvider
{
    public function boot() {
        $this->mapApiRoute();
    }
    
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
    
    protected function mapApiRoute() {
        $api = app(\Dingo\Api\Routing\Router::class);
        $api->version('v1', function ($api) {
            require base_path("routes/api.php");
        });
    }
}
