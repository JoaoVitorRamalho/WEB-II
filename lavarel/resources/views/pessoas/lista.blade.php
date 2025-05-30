<x-layout>

    <x-slot:titulo>Pessoas</x-slot:titulo>



    @session('success')

    {{ session('success') }}

    @endsession



    @if (count($pessoas) > 0)

    <table border="1">

        <thead>

            <tr>

                <th>ID</th>

                <th>Nome</th>

                <th>CPF</th>

                <th>Ano de Nascimento</th>

                <th>Profissão</th>

                <th>Ações</th>

            </tr>

        </thead>

        <tbody>

            @foreach ($pessoas as $pessoa)

            <tr>

                <td>{{ $pessoa->id }}</td>

                <td>{{ $pessoa->nome }}</td>

                <td>{{ $pessoa->cpf }}</td>

                <td>{{ $pessoa->datadenascimento }}</td>

                <td>{{ $pessoa->profissao }}</td>
                
                <td>

                    <form action="/pessoas/editar" method="post">

                        @csrf

                        <input type="hidden" name="id" value="{{ $pessoa->id }}">

                        <button type="submit">Editar</button>

                    </form>

                    <form action="/pessoas/deletar" method="post">

                        @csrf

                        <input type="hidden" name="id" value="{{ $pessoa->id }}">

                        <button type="submit">Deletar</button>

                    </form>

                </td>

            </tr>

            @endforeach

        </tbody>

    </table>

    @else

    <p>Nenhum pessoa foi encontrada.</p>

    @endif

</x-layout>