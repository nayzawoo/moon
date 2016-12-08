<?php namespace App\Http\Controllers;

use App\Transformers\DatabaseTransformer;
use RecursiveArrayIterator;
use RecursiveIteratorIterator;

class DashboardController extends Controller {
    public function listDatabases() {
        sleep(2);
        $dbs = $this->server->listDatabases();
        return fractal()
            ->collection($dbs)
            ->transformWith(new DatabaseTransformer())
            ->toArray()['data'];
    }

    public function listCollections($dbName) {
        $collectionInfoCommandIterator  = $this->selectDb($dbName)->listCollections();
        $collections = [];
        foreach ($collectionInfoCommandIterator as $collectionInfo) {
            $collection = $this->selectDb($dbName)->command([
                'collStats' => $collectionInfo->getName()
            ]);
            $collection = json_decode(collect($collection)->toJson(), true)[0];
            $collections[] = [
                'name' => $collectionInfo->getName(),
                'size' => $collection['size'],
                'storage_size' => $collection['storageSize'],
                'index_count' => $collection['nindexes'],
                'index_sizes' => $collection['indexSizes'],
            ];
        }

        return $collections;
    }

    /**
     * @param $dbName
     * @param $collectionName
     *
     * @return \MongoDB\Collection
     */
    protected function selectCollection($dbName, $collectionName) {
        return $this->selectDb($dbName)->{$collectionName};
    }

    /**
     * @param $dbName
     *
     * @return \MongoDB\Database
     */
    protected function selectDb($dbName) {
        return $this->getMongoClient()->{$dbName};
    }

    /**
     * @return \App\Moon\Connection
     */
    protected function getConnection() {
        return $this->server->getConnection();
    }

    /**
     * @return \MongoDB\Client
     */
    protected function getMongoClient() {
        return $this->server->getMongoClient();
    }
}
