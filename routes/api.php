<?php
/**
 * @var $api \Dingo\Api\Routing\Route
 */

$api->get('databases', 'App\Http\Controllers\DashboardController@listDatabases');
$api->get('collections/{db_name}', 'App\Http\Controllers\DashboardController@listCollections');
$api->get('documents/{db_name}/{coll_name}', 'App\Http\Controllers\DashboardController@listDocuments');
