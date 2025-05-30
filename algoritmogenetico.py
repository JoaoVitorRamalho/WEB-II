import random
import math

class Individuo:
    def __init__(self, tamanho):
        self.tamanho = tamanho
        self.cromossomo = [0] * tamanho
        self.x1 = 0.0
        self.x2 = 0.0

    def gerar_individuo(self):
        self.cromossomo = [random.randint(0, 1) for _ in range(self.tamanho)]

    def calcular_decimal_x1(self):
        decimal = 0
        for i in range(self.tamanho // 2):
            decimal = decimal * 2 + self.cromossomo[i]
        return decimal

    def calcular_decimal_x2(self):
        decimal = 0
        for i in range(self.tamanho // 2, self.tamanho):
            decimal = decimal * 2 + self.cromossomo[i]
        return decimal

    def normalizar_x1(self):
        decimal_x1 = self.calcular_decimal_x1()
        self.x1 = decimal_x1 * (6.0 / (2**(self.tamanho // 2) - 1))
        return self.x1

    def normalizar_x2(self):
        decimal_x2 = self.calcular_decimal_x2()
        self.x2 = decimal_x2 * (6.0 / (2**(self.tamanho // 2) - 1))
        return self.x2

    def calcular_fx(self):
        self.normalizar_x1()
        self.normalizar_x2()

        fx1 = 0.25 * self.x1**4 - 3 * self.x1**3 + 11 * self.x1**2 - 13 * self.x1
        fx2 = 0.25 * self.x2**4 - 3 * self.x2**3 + 11 * self.x2**2 - 13 * self.x2

        return fx1 + fx2

    def mutacao(self, taxa):
        for i in range(self.tamanho):
            if random.random() < taxa:
                self.cromossomo[i] = 1 - self.cromossomo[i]

    @staticmethod
    def cruzamento(pai1, pai2):
        ponto_corte = random.randint(0, pai1.tamanho - 1)

        filho1 = Individuo(pai1.tamanho)
        filho2 = Individuo(pai2.tamanho)

        filho1.cromossomo = pai1.cromossomo[:]
        filho2.cromossomo = pai2.cromossomo[:]

        for i in range(ponto_corte, pai1.tamanho):
            filho1.cromossomo[i], filho2.cromossomo[i] = filho2.cromossomo[i], filho1.cromossomo[i]

        return filho1, filho2

    def mostrar_resultado(self):
        cromossomo_str = ''.join(str(bit) for bit in self.cromossomo)
        print(f"Cromossomo: {cromossomo_str}")
        print(f"x1 = {self.x1}, x2 = {self.x2}")
        print(f"f(x1, x2) = {self.calcular_fx()}\n")


def main():
    random.seed()

    tamanho = int(input("Digite o tamanho do vetor: "))
   
    taxa_mutacao = 0.05
    populacao_tamanho = 10
    max_geracoes = 1000
    mostrar_individuos = False
    mostrar_filhos = True

    populacao = []
    for i in range(populacao_tamanho):
        ind = Individuo(tamanho)
        ind.gerar_individuo()
        if mostrar_individuos:
            print(f"Indivíduo {i+1} gerado:")
            ind.mostrar_resultado()
            print("------------------------")
        populacao.append(ind)

    melhor = populacao[0]
    melhor_fx = melhor.calcular_fx()

    for geracao in range(1, max_geracoes + 1):
        for _ in range(populacao_tamanho // 2):
            idx1 = random.randint(0, populacao_tamanho - 1)
            idx2 = random.randint(0, populacao_tamanho - 1)

            filhos = Individuo.cruzamento(populacao[idx1], populacao[idx2])

            filhos[0].mutacao(taxa_mutacao)
            filhos[1].mutacao(taxa_mutacao)

            if mostrar_filhos:
                print("\nFilho 1 gerado:")
                filhos[0].mostrar_resultado()
                print("Filho 2 gerado:")
                filhos[1].mostrar_resultado()

            fx1 = filhos[0].calcular_fx()
            fx2 = filhos[1].calcular_fx()

            if fx1 < melhor_fx:
                melhor = filhos[0]
                melhor_fx = fx1
                print(f"Geração {geracao}: Nova melhor solução - f(x1,x2): {melhor_fx}")

            if fx2 < melhor_fx:
                melhor = filhos[1]
                melhor_fx = fx2
                print(f"Geração {geracao}: Nova melhor solução - f(x1,x2): {melhor_fx}")

            populacao[idx1] = filhos[0]
            populacao[idx2] = filhos[1]

    print("\nMelhor solução encontrada:")
    melhor.mostrar_resultado()


if __name__ == "__main__":
    main()