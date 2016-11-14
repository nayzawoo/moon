<?php

namespace App\Moon;

class Server
{
    /**
     * @var Connection
     */
    protected $connection;
    
    /**
     * Server constructor.
     *
     * @param Connection $connection
     */
    public function __construct(Connection $connection) {
        $this->connection = $connection;
    }
    
    /**
     * @return Connection
     */
    public function getConnection() {
        return $this->connection;
    }
    
    /**
     * @return \MongoDB\Client
     */
    public function getMongoClient() {
        return app('mongodb')->getMongoClient();
    }
    
    /**
     * @return array
     */
    public function listDatabases() {
        $dbIterator = $this->getMongoClient()->listDatabases();
        $dbs = [];
        foreach ($dbIterator as $db) {
            $dbs[] = $db;
        }
        return $dbs;
    }
}
