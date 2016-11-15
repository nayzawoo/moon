<?php namespace App\Http\Controllers;

use App\Transformers\DatabaseTransformer;

class DashboardController extends Controller {
    public function listDatabases() {
        sleep(1);
        $dbs = $this->server->listDatabases();
        return fractal()
            ->collection($dbs)
            ->transformWith(new DatabaseTransformer())
            ->toArray()['data'];
    }
}
