<?php

use App\Http\Controllers\LoginController;
use App\Http\Controllers\PessoaController;

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('index');
});

Route::get('/login', [LoginController::class, 'digitarLogin'])->name('login');

Route::post('/login', [LoginController::class, 'login']);

Route::get('/logout', [LoginController::class, 'logout']);

Route::get('/pessoas', [PessoaController::class, 'exibirPessoa'])->middleware('auth');

Route::get('/pessoas/criar', [PessoaController::class, 'criarPessoa'])->middleware('auth');

Route::post('/pessoas/armazenar', [PessoaController::class, 'armazenarPessoa'])->middleware('auth');

Route::post('/pessoas/editar', [PessoaController::class, 'editarPessoa'])->middleware('auth');

Route::post('/pessoas/atualizar', [PessoaController::class, 'atualizarPessoa'])->middleware('auth');

Route::post('/pessoas/deletar', [PessoaController::class, 'deletarPessoa'])->middleware('auth');