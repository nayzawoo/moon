<?php namespace App\Moon;

use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Contracts\Support\Jsonable;

class Collection implements Arrayable, Jsonable
{
    /**
     * @var string
     */
    public $name;

    /**
     * @var Database
     */
    protected $database;

    public function __construct(Database $database, $name)
    {
        $this->database = $database;
        $this->name = $name;
    }

    /**
     * @return array
     */
    public function getInfo()
    {
        $collStats = $this->getCollStats();
        $collStats = json_decode(collect($collStats)->toJson(), true)[0];
        return [
            'name'         => $this->name,
            'size'         => array_get($collStats, 'size'),
            'storage_size' => array_get($collStats, 'storageSize'),
            'index_count'  => array_get($collStats, 'nindexes'),
            'index_sizes'  => array_get($collStats, 'indexSizes'),
        ];
    }

    public function getCollStats()
    {
        return $collection = $this->database->getDatabase()->command([
            'collStats' => $this->name
        ]);
    }

    /**
     * @return \MongoDB\Collection
     */
    public function command() {
        return $this->database->getDatabase()->{$this->name};
    }

    /**
     * Get the instance as an array.
     *
     * @return array
     */
    public function toArray()
    {
        return $this->getInfo();
    }

    /**
     * Convert the object to its JSON representation.
     *
     * @param  int $options
     * @return string
     */
    public function toJson($options = 0)
    {
        return json_encode($this->toArray(), $options);
    }
}
