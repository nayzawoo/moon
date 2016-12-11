<?php namespace App\Moon;

class Database
{
    /**
     * @var string
     */
    public $name;

    /**
     * @var \MongoDB\Database
     */
    protected $database;

    /**
     * @var Server
     */
    private $server;

    public function __construct(Server $server, $name)
    {
        $this->server = $server;
        $this->name = $name;
        $this->database = $server->getMongoClient()->{$this->name};
    }

    /**
     * @return \MongoDB\Database
     */
    public function getDatabase()
    {
        return $this->database;
    }

    public function listCollections()
    {
        $collections = [];
        foreach ($this->listCollectionNames() as $coll) {
            $collection = new Collection($this, $coll);
            $collections[] = $collection;
        }

        return $collections;
    }

    public function listCollectionNames()
    {
        $collectionInfos = $this->getDatabase()->listCollections();
        $names = [];
        foreach ($collectionInfos as $collectionInfo) {
            $names[] = $collectionInfo->getName();
        }

        return $names;
    }

    public function drop()
    {
        $this->database->drop();
    }
}
