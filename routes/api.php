<?php
/**
 * @var $api \Dingo\Api\Routing\Router
 */

$api->get('databases', 'App\Http\Controllers\ListController@listDatabases');
$api->get('collections/{db_name}', 'App\Http\Controllers\ListController@listCollections');
$api->get('documents/{db_name}/{coll_name}', 'App\Http\Controllers\ListController@listDocuments');
