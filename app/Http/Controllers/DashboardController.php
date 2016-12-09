<?php namespace App\Http\Controllers;

use App\Moon\Database;
use App\Transformers\DatabaseTransformer;

class DashboardController extends Controller
{
    public function listDatabases()
    {
        $dbs = $this->server->listDatabases();

        return fractal()
            ->collection($dbs)
            ->transformWith(new DatabaseTransformer())
            ->toArray()['data'];
    }

    public function listCollections($dbName)
    {
        return (new Database($this->server, $dbName))->listCollections();
    }
}
