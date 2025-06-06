import random

moedas = [20, 11, 5, 1]
TAMANHO_POP = 50
MAX_GERACOES = 300
TAXA_MUTACAO = 0.1

class Individuo:
    def __init__(self):
        self.genes = [random.randint(0, 5) for _ in moedas]
        self.nota = 9999
        self.valor_total = 0

    def avaliar_nota(self, alvo=-1):
        self.valor_total = sum(g * m for g, m in zip(self.genes, moedas))

        if alvo == -1:
            return

        if self.valor_total == alvo:
            self.nota = self.total_moedas()
        else:
            self.nota = 9999

    def total_moedas(self):
        return sum(self.genes)

def cruzamento(pai1, pai2):
    filho = Individuo()
    filho.genes = [random.choice([g1, g2]) for g1, g2 in zip(pai1.genes, pai2.genes)]
    return filho

def mutacao(ind):
    for i in range(len(moedas)):
        if random.random() < TAXA_MUTACAO:
            ind.genes[i] = random.randint(0, 5)

def main():
    valor = int(input("Digite o valor do troco (ex: 260 para R$2,60): "))

    populacao = [Individuo() for _ in range(TAMANHO_POP)]
    melhor = Individuo()
    melhor.nota = 9999

    for geracao in range(MAX_GERACOES):
        for ind in populacao:
            ind.avaliar_nota(valor)
            if ind.nota < melhor.nota:
                melhor = ind

        nova_populacao = []
        while len(nova_populacao) < TAMANHO_POP:
            pai1 = random.choice(populacao)
            pai2 = random.choice(populacao)
            filho = cruzamento(pai1, pai2)
            mutacao(filho)
            filho.avaliar_nota(valor)
            nova_populacao.append(filho)

        populacao = nova_populacao

    print("\nMelhor solução encontrada:")
    for i, qtd in enumerate(melhor.genes):
        if qtd > 0:
            print(f"{qtd} moeda(s) de {moedas[i]} centavos")

    print(f"Total de moedas: {melhor.total_moedas()}")

if __name__ == "__main__":
    main()
