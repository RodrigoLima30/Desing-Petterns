# 🧠 Design Patterns — Strategy Pattern com TypeScript

## 📌 Sobre este repositório

Este repositório tem como objetivo **ensinar Design Patterns na prática**, com foco inicial no **Strategy Pattern**, utilizando **TypeScript** e exemplos simples, reais e testáveis.

Aqui você vai aprender:
- O que são Design Patterns
- Por que eles existem
- Quando usar o Strategy Pattern
- Como aplicar Strategy usando POO
- Como evitar `if/else` complexos
- Como escrever código flexível e extensível

---

## 🎯 Público-alvo

- Desenvolvedores iniciantes ou intermediários
- Pessoas estudando **POO**
- Quem quer escrever código mais limpo e escalável
- Quem quer entender *o porquê* dos patterns, não só copiar código

---

## 🧩 O que são Design Patterns?

### 📖 Definição

**Design Patterns** são **soluções reutilizáveis para problemas recorrentes de design de software**.

Eles:
- Não são frameworks
- Não são bibliotecas
- Não são códigos prontos

👉 São **formas comprovadas de estruturar código**.

---

### 🤔 Por que Design Patterns existem?

Durante anos, desenvolvedores perceberam que:
- Os mesmos problemas apareciam repetidamente
- Algumas soluções funcionavam melhor do que outras

📌 Então essas soluções foram **catalogadas**, documentadas e nomeadas.

---

### 🧠 Benefícios dos Design Patterns

- Código mais legível
- Menos acoplamento
- Mais flexibilidade
- Facilidade de manutenção
- Comunicação clara entre desenvolvedores

Exemplo:
> “Esse código usa Strategy”  
Todo mundo entende a intenção.

---

## 🎯 O que é o Strategy Pattern?

### 📖 Definição

O **Strategy Pattern** permite **definir uma família de algoritmos**, encapsular cada um deles e torná-los **intercambiáveis**.

👉 O comportamento pode variar **sem alterar o código que o utiliza**.

---

### 🧠 Problema que o Strategy resolve

Código assim 👇

```ts
if (type === "CLT") {
  tax = salary * 0.2;
} else if (type === "PJ") {
  tax = salary * 0.1;
} else if (type === "INTERNSHIP") {
  tax = salary * 0.05;
}
```

### 📌 Problemas:

-Difícil de manter

-Difícil de testar

-Cada novo tipo exige alterar o código existente

-Viola o princípio Open/Closed

### 🧩 Conceito central do Strategy

#### Separar o QUE muda do QUE permanece igual

-O cálculo muda

-O processo de pagamento permanece

### 🧠 Estrutura do Strategy Pattern

O Strategy é composto por:

1️⃣ Strategy (Interface)
2️⃣ Concrete Strategies (Implementações)
3️⃣ Context (Classe que usa a Strategy)

### 1️⃣ Strategy — Interface

```ts
interface Tax {
  calculate(salary: number): number;
}

```

### 📌 A interface:

-Define um contrato

-Garante que todas as estratégias tenham o mesmo comportamento

-Permite polimorfismo

### 2️⃣ Concrete Strategies — Implementações

Cada classe representa uma variação do algoritmo.

```ts
class TaxCLT implements Tax {
  calculate(salary: number): number {
    return salary * 0.2;
  }
}

class TaxPJ implements Tax {
  calculate(salary: number): number {
    return salary * 0.1;
  }
}

class TaxInternship implements Tax {
  calculate(salary: number): number {
    return salary * 0.05;
  }
}

```

### 📌 Cada classe:

-Implementa o mesmo contrato

-Possui sua própria regra

-Pode ser alterada sem afetar as outras

### 3️⃣ Context — Classe que usa a Strategy

```ts
class Payment {
  constructor(private readonly tax: Tax) {}

  calculate(salary: number): number {
    return this.tax.calculate(salary);
  }
}

```

### 📌 O Context:

-Não conhece as regras internas

-Depende da interface, não da implementação

-Apenas delega o comportamento


### 🧠 Onde está a POO no Strategy?


| Conceito de POO         | Onde aparece                      |
| ----------------------- | --------------------------------- |
| Encapsulamento          | Cada regra está isolada           |
| Polimorfismo            | `Tax` pode ser CLT, PJ ou Estágio |
| Herança (de tipo)       | `implements Tax`                  |
| Inversão de dependência | `Payment` depende da interface    |
| Open/Closed             | Novas regras sem modificar código |

### 🧪 Testando o Strategy

```ts
describe("Tax Calculate Strategy", () => {
  test("CLT tax", () => {
    const payment = new Payment(new TaxCLT());
    expect(payment.calculate(1000)).toBe(200);
  });

  test("PJ tax", () => {
    const payment = new Payment(new TaxPJ());
    expect(payment.calculate(1000)).toBe(100);
  });

  test("Internship tax", () => {
    const payment = new Payment(new TaxInternship());
    expect(payment.calculate(1000)).toBe(50);
  });
});

```

### 📌 Benefícios:

-Testes simples

-Cada regra testada isoladamente

-Sem mocks complexos

### 🚀 Vantagens do Strategy Pattern

✅ Elimina if/else
✅ Facilita manutenção
✅ Código extensível
✅ Alta testabilidade
✅ Clareza de responsabilidades

### ⚠️ Quando NÃO usar Strategy

-Quando existe apenas uma regra

-Quando a variação nunca vai mudar

-Quando o uso adiciona complexidade desnecessária

### 📌 Design Patterns devem simplificar, não complicar.

### 📝 Conclusão

O Strategy Pattern é uma forma poderosa de aplicar POO na prática, criando sistemas flexíveis, limpos e preparados para mudanças.

Aprender Strategy é um passo fundamental para:

-Entender SOLID

-Escrever código profissional

-Evoluir como desenvolvedor