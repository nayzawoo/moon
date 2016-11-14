<?php

namespace App\Providers;

use App\Moon\Connection;
use Illuminate\Support\ServiceProvider;

class MongoDBServiceProvider extends ServiceProvider
{
    public function boot() {

    }


    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton('mongodb', function() {
            return new Connection(config('databases.mongodb'));
        });
    }
}
