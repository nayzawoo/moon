<?php

namespace App\Http\Controllers;

use App\Moon\Server;
use Laravel\Lumen\Routing\Controller as BaseController;
use Dingo\Api\Routing\Helpers;

abstract class Controller extends BaseController
{
    protected $server;
    
    /**
     * Controller constructor.
     */
    public function __construct() {
        $this->server = new Server(app('mongodb'));
    }
    
    /**
     * @return \App\Moon\Connection
     */
    public function getConnection() {
        return $this->server->getConnection();
    }
    
    /**
     * @return \MongoDB\Client
     */
    public function getMongoClient() {
        return $this->server->getMongoClient();
    }
}
