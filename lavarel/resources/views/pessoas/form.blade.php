<x-layout>

    <x-slot:titulo>Nova Pessoa</x-slot:titulo>

    <form method="POST" action="/pessoas/{{ isset($pessoa) ? 'atualizar' : 'armazenar' }}">

    @csrf

    <input type="hidden" name="id" value="{{ $pessoa->id ?? ''}}">

    <div>

        <label for="nome">Nome:</label><br>

        <input type="text" id="nome" name="nome" value="{{ $pessoa->nome ?? '' }}" required>

    </div>

    <div>

        <label for="cpf">CPF:</label><br>

        <input type="text" id="cpf" name="cpf" value="{{ $pessoa->cpf ?? '' }}" required>

    </div>

    <div>

        <label for="datadenascimento">Ano de Nascimento:</label><br>

        <input type="number" id="datadenascimento" name="datadenascimento" value="{{ $pessoa->datadenascimento ?? '' }}"

            required>

    </div>

    <div>

        <label for="profissao">Profissão:</label><br>

        <textarea id="profissao" name="profissao" required>{{ $pessoa->profissao ?? '' }}</textarea>

    </div>

    <button type="submit">Criar</button>

</form>


</x-layout>