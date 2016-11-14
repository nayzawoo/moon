<?php
/**
 * @var $api \Dingo\Api\Routing\Route
 */

$api->get('list_databases', 'App\Http\Controllers\DashboardController@listDatabases');
