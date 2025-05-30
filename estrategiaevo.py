import random

def funcao_evolutiva(x1, x2):
    return (
        0.25 * x1**4 - 3 * x1**3 + 11 * x1**2 - 13 * x1 +
        0.25 * x2**4 - 3 * x2**3 + 11 * x2**2 - 13 * x2
    )

def calcbin(bits):
    decimal = int(''.join(map(str, bits)), 2)
    return (decimal / 31.0) * 6

individuo = [random.randint(0, 1) for _ in range(10)]
x1 = individuo[:5]
x2 = individuo[5:]

m1 = calcbin(x1)
m2 = calcbin(x2)

print("Binários:", int(''.join(map(str, x1)), 2), int(''.join(map(str, x2)), 2))
print("x1:", m1)
print("x2:", m2)
print("f(x1, x2):", funcao_evolutiva(m1, m2))

solucao_atual = [random.randint(0, 1) for _ in range(10)]
max_iteracoes = 10000
iteracao = 0

while iteracao < max_iteracoes:
    aux = [int(random.gauss(0, 1)) for _ in range(10)]
    aux2 = [(solucao_atual[i] + aux[i]) % 2 for i in range(10)]

    x1_atual = calcbin(solucao_atual[:5])
    x2_atual = calcbin(solucao_atual[5:])
    x1_aux = calcbin(aux2[:5])
    x2_aux2 = calcbin(aux2[5:])

    if funcao_evolutiva(x1_aux, x2_aux2) < funcao_evolutiva(x1_atual, x2_atual):
        solucao_atual = aux2[:]

    iteracao += 1

x1_final = calcbin(solucao_atual[:5])
x2_final = calcbin(solucao_atual[5:])
resultado_final = funcao_evolutiva(x1_final, x2_final)

print("\nSolução final (bits):", solucao_atual)
print("x1:", x1_final)
print("x2:", x2_final)
print("f(x1, x2):", resultado_final)