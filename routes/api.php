<?php
/**
 * @var $api \Dingo\Api\Routing\Route
 */

$api->get('list_databases', 'App\Http\Controllers\DashboardController@listDatabases');
$api->get('list_collections/{db_name}', 'App\Http\Controllers\DashboardController@listCollections');
