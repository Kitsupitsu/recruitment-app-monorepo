<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('You Are Welcome To High Tech Satellite Of Trio\'s');

});
Route::get('/ranking', function () {
    return view('Ranking Page');

});
Route::post('/add_candidate', function () {
    return view('Add Candidate Page');
});


