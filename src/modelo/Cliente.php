<?php
class Cliente {
    private $nome;

    public function __construct($nome = null) {
        $this->nome = $nome;
    }

    public function getNome() {
        return $this->nome;
    }

    public function setNome($nome) {
        $this->nome = $nome;
    }

    public function save() {
        return true; // Simula o salvamento no banco de dados
    }

    public static function list() {
        return [
            new Cliente('Cliente 1'),
            new Cliente('Cliente 2'),
            new Cliente('Cliente 3')
        ];
    }

}