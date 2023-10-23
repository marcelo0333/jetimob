<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LivroController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
Route::get('/', function(){
    return response()->json([
        'success' => true
    ]);
});
Route::patch('/livros/{id}', [LivroController::class, 'update']);
Route::delete('/livros/{id}', [LivroController::class, 'destroy']);
Route::get('/livros/{id}', [LivroController::class, 'show']);
Route::post('/livros', [LivroController::class, 'cadastrar']);
Route::get('/livros', [LivroController::class, 'index']);


