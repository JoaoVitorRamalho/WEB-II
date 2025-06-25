import random

# Dados de entrada e saída esperada
entrada = list(range(11))
saida_esperada = [6, 2, 0, 0, 2, 6, 12, 20, 30, 42, 56]

# Avalia o erro da função y = a*x^2 + b*x + c
def avaliar(a, b, c):
    erro = 0
    for x, y_esperado in zip(entrada, saida_esperada):
        y_pred = a * x**2 + b * x + c
        erro += (y_pred - y_esperado) ** 2
    return erro

# Cria indivíduo aleatório (coeficientes a, b, c)
def criar_individuo():
    return [random.uniform(-10, 10) for _ in range(3)]

# Mutação simples: altera ligeiramente os coeficientes
def mutar(individuo, taxa_mutacao=0.1):
    return [gene + random.uniform(-1, 1) if random.random() < taxa_mutacao else gene for gene in individuo]

# Crossover entre dois indivíduos
def cruzar(pai1, pai2):
    ponto = random.randint(1, 2)
    filho1 = pai1[:ponto] + pai2[ponto:]
    filho2 = pai2[:ponto] + pai1[ponto:]
    return filho1, filho2

# Parâmetros do algoritmo genético
pop_tam = 50
geracoes = 10000
taxa_mutacao = 0.2

# Inicialização da população
populacao = [criar_individuo() for _ in range(pop_tam)]

for geracao in range(geracoes):
    # Avaliação
    populacao.sort(key=lambda ind: avaliar(*ind))
    melhor = populacao[0]
    melhor_erro = avaliar(*melhor)

    if geracao % 100 == 0 or melhor_erro == 0:
        print(f"Geração {geracao} | Melhor erro: {melhor_erro:.4f} | Coef: {melhor}")

    if melhor_erro < 1e-6:
        break

    # Seleção dos melhores (elitismo)
    nova_pop = populacao[:10]

    # Cruzamento e mutação
    while len(nova_pop) < pop_tam:
        pais = random.sample(populacao[:25], 2)
        filho1, filho2 = cruzar(pais[0], pais[1])
        nova_pop.append(mutar(filho1, taxa_mutacao))
        if len(nova_pop) < pop_tam:
            nova_pop.append(mutar(filho2, taxa_mutacao))

    populacao = nova_pop

# Resultado final
a, b, c = melhor
print("\nMelhor função encontrada:")
print(f"y = {a:.3f}x² + {b:.3f}x + {c:.3f}")

# Comparação com os dados
print("\nComparação com os valores esperados:")
for x, y in zip(entrada, saida_esperada):
    y_pred = a * x**2 + b * x + c
    print(f"x = {x:2d} | Esperado = {y:5.1f} | Predito = {y_pred:6.2f}")
