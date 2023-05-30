<?php

use App\Http\Controllers\Api\TemaController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::controller(TemaController::class)->group(function (){
    Route::get('temas', [TemaController::class, 'index']);
    Route::post('tema', [TemaController::class, 'store']);
    Route::get('tema/{id_tema}', [TemaController::class, 'show']);
    Route::put('tema/{id_tema}', [TemaController::class, 'update']);
    Route::delete('tema/{id_tema}', [TemaController::class, 'destroy']);
});
