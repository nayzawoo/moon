<?php namespace App\Http\Controllers;

use App\Transformers\DatabaseTransformer;

class DashboardController extends Controller {
    public function listDatabases() {
        $dbs = $this->server->listDatabases();
        dump(fractal()
            ->collection($dbs)
            ->transformWith(new DatabaseTransformer())
            ->toArray());
    }
}
