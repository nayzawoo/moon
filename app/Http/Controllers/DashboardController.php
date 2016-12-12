<?php namespace App\Http\Controllers;

use App\Moon\Collection;
use App\Moon\Database;
use App\Transformers\DatabaseTransformer;
use App\Transformers\DocumentOutputTransformer;

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
        $collections = (new Database($this->server, $dbName))->listCollections();

        return [
            'db' => $dbName,
            'colls' => $collections,
        ];
    }

    public function listDocuments($dbName, $collName) {
        $db = new Database($this->server, $dbName);
        $collection = new Collection($db, $collName);
        $data = $collection->command()->find([], ['limit' => 10]);
        return fractal()
            ->collection($data)
            ->transformWith(new DocumentOutputTransformer())
            ->toArray()['data'];
    }
}
