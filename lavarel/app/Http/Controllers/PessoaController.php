<?php

namespace App\Http\Controllers;



use Illuminate\Http\Request;

use App\Models\Pessoa;



class PessoaController extends Controller

{

    public function exibirPessoa()

    {

        $pessoas = Pessoa::all();

        return view('pessoas.lista', compact('pessoas'));

    }

    public function criarPessoa()

    {

        return view('pessoas.form');

    }

    public function armazenarPessoa(Request $request)

    {

        Pessoa::create(

            [

                'nome' => $request->input('nome'),

                'cpf' => $request->input('cpf'),

                'datadenascimento' => $request->input('datadenascimento'),

                'profissao' => $request->input('profissao')

            ]

        );

        return redirect('/pessoas')->with('success', 'Pessoa criada com sucesso!');

    }

    public function editarPessoa(Request $request)

    {

        $id = $request->input('id');

        $pessoa = Pessoa::findOrFail($id);

        return view('pessoas.form', ['pessoa' => $pessoa]);

    }



    public function atualizarPessoa(Request $request)

    {

        $id = $request->input('id');

        $pessoa = Pessoa::findOrFail($id);

        $pessoa->update(

            [

                'nome' => $request->input('nome'),

                'cpf' => $request->input('cpf'),

                'datadenascimento' => $request->input('datadenascimento'),

                'profissao' => $request->input('profissao')

            ]

        );

        return redirect('/pessoas')->with('success', 'Pessoa atualizado com sucesso!');

    }



    public function deletarPessoa(Request $request)

    {

        $id = $request->input('id');

        $pessoa = Pessoa::findOrFail($id);

        $pessoa->delete();

        return redirect('/pessoas')->with('success', 'Pessoa deletada com sucesso!');

    }

}