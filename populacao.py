import random

def funcao_evolutiva(x1, x2):
    return (
        0.25 * x1**4 - 3 * x1**3 + 11 * x1**2 - 13 * x1 +
        0.25 * x2**4 - 3 * x2**3 + 11 * x2**2 - 13 * x2
    )

def calcbin(bits):
    decimal = int(''.join(map(str, bits)), 2)
    return (decimal / 31.0) * 6

populacao = [[random.randint(0, 1) for _ in range(10)] for _ in range(10)]


individuo = populacao[0]
x1 = individuo[:5]
x2 = individuo[5:]
m1 = calcbin(x1)
m2 = calcbin(x2)

print("Indivíduo inicial:")
print("Binários:", int(''.join(map(str, x1)), 2), int(''.join(map(str, x2)), 2))
print("x1:", m1)
print("x2:", m2)
print("f(x1, x2):", funcao_evolutiva(m1, m2))

max_iteracoes = 10000
iteracao = 0

while iteracao < max_iteracoes:
    for i in range(10):
        aux = [int(random.gauss(0, 1)) for _ in range(10)]
        aux2 = [(populacao[i][j] + aux[j]) % 2 for j in range(10)]

        x1_atual = calcbin(populacao[i][:5])
        x2_atual = calcbin(populacao[i][5:])
        x1_aux = calcbin(aux2[:5])
        x2_aux = calcbin(aux2[5:])

        if funcao_evolutiva(x1_aux, x2_aux) < funcao_evolutiva(x1_atual, x2_atual):
            populacao[i] = aux2[:]
    
    iteracao += 1


melhor_individuo = min(populacao, key=lambda ind: funcao_evolutiva(calcbin(ind[:5]), calcbin(ind[5:])))
x1_final = calcbin(melhor_individuo[:5])
x2_final = calcbin(melhor_individuo[5:])
resultado_final = funcao_evolutiva(x1_final, x2_final)

print("\nMelhor solução final (bits):", melhor_individuo)
print("x1:", x1_final)
print("x2:", x2_final)
print("f(x1, x2):", resultado_final)
