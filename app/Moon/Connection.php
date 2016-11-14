<?php namespace App\Moon;

use MongoDB\Client;

class Connection
{
    /**
     * The MongoDB connection handler.
     *
     * @var \MongoDB\Client
     */
    protected $connection;
    
    /**
     * Create a new database connection instance.
     *
     * @param  array $config
     */
    public function __construct(array $config) {
        $this->config = $config;
        // Build the connection string
        $dsn = $this->getDsn($config);
        // You can pass options directly to the MongoDB constructor
        $options = array_get($config, 'options', []);
        // Create the connection
        $this->connection = $this->createConnection($dsn, $config, $options);
    }
    
    /**
     * return MongoDB object.
     *
     * @return \MongoDB\Client
     */
    public function getMongoClient() {
        return $this->connection;
    }
    
    /**
     * Create a new MongoDB connection.
     *
     * @param  string $dsn
     * @param  array $config
     * @param  array $options
     *
     * @return \MongoDB\Client
     */
    protected function createConnection($dsn, array $config, array $options) {
        // By default driver options is an empty array.
        $driverOptions = [];
        if (isset($config['driver_options']) && is_array($config['driver_options'])) {
            $driverOptions = $config['driver_options'];
        }
        // Check if the credentials are not already set in the options
        if (!isset($options['username']) && !empty($config['username'])) {
            $options['username'] = $config['username'];
        }
        if (!isset($options['password']) && !empty($config['password'])) {
            $options['password'] = $config['password'];
        }

        return new Client($dsn, $options, $driverOptions);
    }
    
    /**
     * Disconnect from the underlying MongoDB connection.
     */
    public function disconnect() {
        unset($this->connection);
    }
    
    /**
     * Create a DSN string from a configuration.
     *
     * @param  array $config
     *
     * @return string
     */
    protected function getDsn(array $config) {
        // Check if the user passed a complete dsn to the configuration.
        if (!empty($config['dsn'])) {
            return $config['dsn'];
        }
        // Treat host option as array of hosts
        $hosts = is_array($config['host']) ? $config['host'] : [$config['host']];
        foreach ($hosts as &$host) {
            // Check if we need to add a port to the host
            if (strpos($host, ':') === false && !empty($config['port'])) {
                $host = $host . ':' . $config['port'];
            }
        }
        // Check if we want to authenticate against a specific database.
        $auth_database = isset($config['options']) && !empty($config['options']['database']) ? $config['options']['database'] : null;
        
        return 'mongodb://' . implode(',', $hosts) . ($auth_database ? '/' . $auth_database : '');
    }
}
