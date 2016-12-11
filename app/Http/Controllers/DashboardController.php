<?php namespace App\Http\Controllers;

use App\Moon\Database;
use App\Transformers\DatabaseTransformer;
class DashboardController extends Controller
{
    public function listDatabases()
    {
        sleep(0);
        $dbs = $this->server->listDatabases();
        return fractal()
            ->collection($dbs)
            ->transformWith(new DatabaseTransformer())
            ->toArray()['data'];
    }

    public function listCollections($dbName)
    {
        sleep(0);
        $collections = (new Database($this->server, $dbName))->listCollections();

        return [
            'db' => $dbName,
            'colls' => $collections,
        ];
    }
}
