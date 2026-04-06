# 🧠 Design Patterns with TypeScript

## 📌 Sobre este repositório

Este repositório tem como objetivo **ensinar Design Patterns na prática**, utilizando **TypeScript** e exemplos simples, claros e testáveis.

A ideia não é apenas mostrar código, mas **explicar o motivo por trás das soluções**, ajudando a desenvolver uma visão mais sólida de arquitetura de software.

Todos os exemplos foram pensados para serem:

- simples de entender
- fáceis de testar
- aplicáveis em projetos reais

---

## 📚 Conteúdo do repositório

Neste repositório você encontrará explicações e implementações práticas de alguns dos **Design Patterns mais importantes da programação orientada a objetos**.

Você aprenderá:

- O que são **Design Patterns**
- Por que eles existem
- Quando utilizar cada padrão
- Como aplicar **POO na prática**
- Como evitar código difícil de manter
- Como escrever código **flexível, extensível e testável**

Patterns abordados neste repositório:

- **Strategy Pattern**
- **Template Method Pattern**
- *(outros podem ser adicionados futuramente)*

---

## 🎯 Público-alvo

Este repositório é ideal para:

- Desenvolvedores **iniciantes ou intermediários**
- Pessoas estudando **Programação Orientada a Objetos (POO)**
- Quem quer entender **arquitetura de software**
- Quem deseja escrever **código mais limpo e escalável**
- Quem quer aprender **Design Patterns na prática**

Não é necessário conhecimento avançado.  
Os exemplos foram construídos para serem **didáticos e progressivos**.

---

# 🧩 O que são Design Patterns?

## 📖 Definição

**Design Patterns** são **soluções reutilizáveis para problemas recorrentes de design de software**.

Eles representam **boas práticas de arquitetura**, descobertas e refinadas ao longo de muitos anos pela comunidade de desenvolvedores.

É importante entender que Design Patterns:

- **não são frameworks**
- **não são bibliotecas**
- **não são códigos prontos**

👉 Eles são **formas comprovadas de estruturar código para resolver problemas comuns**.

---

## 🤔 Por que Design Patterns existem?

Durante a evolução da engenharia de software, desenvolvedores perceberam que **os mesmos tipos de problemas apareciam repetidamente** em diferentes sistemas.

Por exemplo:

- Como trocar comportamentos sem alterar código existente?
- Como evitar grandes blocos de `if/else`?
- Como organizar responsabilidades entre classes?
- Como tornar um sistema mais fácil de estender?

Ao longo do tempo, algumas soluções se mostraram **mais eficientes e mais elegantes**.

Essas soluções começaram a ser:

1. Identificadas
2. Documentadas
3. Nomeadas

Assim surgiram os **Design Patterns**.

---

## 📚 Origem dos Design Patterns

O conceito foi popularizado pelo famoso livro:

**"Design Patterns: Elements of Reusable Object-Oriented Software" (1994)**

Escrito por:

- Erich Gamma
- Richard Helm
- Ralph Johnson
- John Vlissides

Esse grupo ficou conhecido como **Gang of Four (GoF)**.

O livro catalogou **23 padrões clássicos de design orientado a objetos**, que até hoje são amplamente utilizados.

---

## 🧠 O que um Design Pattern descreve?

Um Design Pattern geralmente descreve:

- Um **problema recorrente**
- O **contexto onde ele acontece**
- Uma **solução arquitetural**
- As **consequências dessa solução**

Ou seja, um pattern não entrega apenas código — ele explica **como pensar o design do sistema**.

---

## 🧠 Benefícios dos Design Patterns

Aplicar Design Patterns corretamente traz diversos benefícios:

### 📌 Código mais legível

O código fica mais organizado e fácil de entender.

---

### 📌 Menor acoplamento

As partes do sistema ficam **menos dependentes umas das outras**.

---

### 📌 Maior flexibilidade

Novos comportamentos podem ser adicionados **sem modificar código existente**.

---

### 📌 Facilidade de manutenção

Alterações futuras se tornam **mais simples e seguras**.

---

### 📌 Melhor comunicação entre desenvolvedores

Design Patterns criam **uma linguagem comum** entre programadores.

Por exemplo:

> "Esse módulo utiliza Strategy Pattern."

Um desenvolvedor experiente já entende **qual é a intenção da arquitetura**.

---

## ⚠️ Design Patterns não são regra

Apesar de serem extremamente úteis, Design Patterns **não devem ser usados em excesso**.

Aplicar patterns sem necessidade pode:

- aumentar a complexidade
- dificultar a leitura do código
- criar abstrações desnecessárias

👉 O objetivo de um Design Pattern é **simplificar o design**, não complicá-lo.

---

## 🧠 Como aprender Design Patterns da forma correta

A melhor forma de aprender Design Patterns é:

1️⃣ Entender o **problema original**  
2️⃣ Ver **por que a solução ingênua falha**  
3️⃣ Aplicar o **pattern como solução**

Por isso este repositório sempre segue esta estrutura:

1. **Problema**
2. **Violação de boas práticas**
3. **Aplicação do Design Pattern**
4. **Explicação dos conceitos de POO envolvidos**

Assim fica mais fácil entender **não apenas como usar um pattern, mas quando usar**.

---

## 🎯 Strategy Pattern

### 📖 Definição

O **Strategy Pattern** é um **Design Pattern comportamental** que permite **definir uma família de algoritmos**, encapsular cada um deles em uma classe separada e torná-los **intercambiáveis.**

Isso significa que **o comportamento de um objeto pode ser alterado em tempo de execução**, sem modificar o código que o utiliza.

👉 Em outras palavras:

|     O Strategy permite trocar como algo é feito sem mudar quem usa essa lógica.

---

### 🧠 Problema que o Strategy resolve

Imagine um sistema de pedidos onde o **frete pode variar dependendo do tipo de entrega.**

Por exemplo:

- Frete comum → 5%
- Frete expresso → 10%

Uma implementação inicial poderia ser feita assim:

```ts
if (type === "CLT") {
  tax = salary * 0.2;
} else if (type === "PJ") {
  tax = salary * 0.1;
} else if (type === "INTERNSHIP") {
  tax = salary * 0.05;
}
```

Esse tipo de abordagem parece simples no começo, mas rapidamente se torna problemática.

---

### 📌 Problemas dessa abordagem

Esse tipo de implementação gera diversos problemas arquiteturais:

- Código difícil de manter
- Código difícil de testar
- Forte acoplamento
- Crescimento descontrolado de if/else
- Violação do princípio **Open/Closed**
- Sempre que surgir um novo tipo de cálculo, será necessário **modificar o código existente**, aumentando o risco de bugs.

---

### ❌ Violação de Design (Exemplo real)

Um exemplo de implementação problemática pode ser visto no código abaixo:

```ts
class Pedido {
	protected valor: number;

	constructor(valor: number) {
		this.valor = valor;
	}

	getValor(): number {
		return this.valor;
	}

	setValor(valor: number): void {
		this.valor = valor;
	}

	calculaFreteComum(): number {
		return this.valor * 0.05;
	}

	calculaFreteExpresso(): number {
		return this.valor * 0.1;
	}
}
```

--- 

#### 📌 Problemas dessa implementação

Embora funcione, essa abordagem apresenta alguns problemas de design.

1️⃣ **Classe com múltiplas responsabilidades**

- A classe Pedido está responsável por:
- armazenar o valor do pedido
- calcular frete comum
- calcular frete expresso

Ou seja, ela está assumindo **responsabilidades que não pertencem diretamente a ela.**

2️⃣ **Dificuldade de expansão**

Se um novo tipo de frete surgir, como por exemplo:

- Frete internacional
- Frete premium
- Frete econômico

Será necessário **modificar a classe Pedido novamente.**

Isso viola o princípio **Open/Closed.**

3️⃣ **Forte acoplamento**

A lógica de cálculo do frete está presa dentro da classe Pedido.

Isso dificulta:

- reutilização
- testes isolados
- evolução do sistema

---

### 🧩 Conceito central do Strategy

O Strategy Pattern resolve esse problema separando:

🔹 **O que muda**

A lógica do cálculo.

🔹 **O que permanece igual**

O processo que usa esse cálculo.

No exemplo do frete:

| **Parte do sistema**      |**Muda?**|
| ------------------------- | -----   |
| Regra de cálculo do frete | ✅ Sim |
| Processo de pedido        | ❌ Não |

Portanto, o cálculo deve ser **extraído para estratégias independentes.**

---

### 🧠 Estrutura do Strategy Pattern

O Strategy é composto por três elementos principais:

1️⃣ **Strategy (Interface)**

Define o contrato que todas as estratégias devem seguir.

2️⃣ **Concrete Strategies**

Classes que implementam o algoritmo específico.

3️⃣ **Context**

Classe que utiliza a estratégia, sem conhecer os detalhes da implementação.

---

### 🧩 Implementação do Strategy

1️⃣ Strategy — Interface

Primeiro definimos uma interface que representa o comportamento comum de todas as estratégias.

```ts
interface Freight {
	calculate(value: number): number;
}
```

#### 📌 O que essa interface faz?

Ela define um contrato.

Isso significa que **qualquer classe que implemente essa interface deve possuir o método** ```calculate```.

Isso permite aplicar **polimorfismo.**

2️⃣ **Concrete Strategies — Implementações**

Cada estratégia implementa uma forma diferente de cálculo.

```ts
class FreightCommon implements Freight {
    calculate(value: number): number {
        return value * 0.05;
    }
}

class FreightExpress implements Freight {
    calculate(value: number): number {
        return value * 0.1;
    }
}

```

#### 📌 O que acontece aqui?

Cada classe:

- implementa a interface Freight
- possui sua própria regra de cálculo
- pode ser modificada sem afetar as outras

Isso cria baixo acoplamento entre as estratégias.

3️⃣ Context — Classe que usa a Strategy

A classe Order representa o Context.

```ts
class Order {
    constructor (public freight: Freight) {}

    calculateFreight(value: number) {
        return this.freight.calculate(value);
    }
}

```

#### 📌 O que o Context faz?

A classe Order:

- recebe uma estratégia no construtor
- não sabe qual estratégia está sendo usada
- apenas delega o cálculo

Ou seja:

```ts
this.freight.calculate(value)
```

Ela apenas chama o método definido pela interface.

Isso permite **trocar a estratégia sem alterar a classe.**

---

### 🧪 Testando o Strategy

O comportamento pode ser testado facilmente.

```ts
describe("Freight Calculate Strategy", () => {
    test("common freight", () => {
        const order = new Order(new FreightCommon());
        const freight = order.calculateFreight(100);
        expect(freight).toBe(5);
    });

    test("express freight", () => {
        const order = new Order(new FreightExpress());
        const freight = order.calculateFreight(100);
        expect(freight).toBe(10);
    });
});
```

#### 📌 O que acontece nesses testes?

No primeiro teste:

```ts
new Order(new FreightCommon())
```

A estratégia utilizada será **FreightCommon.**

No segundo teste:

```ts
new Order(new FreightExpress())
```

A estratégia utilizada será **FreightExpress.**

👉 A classe Order não mudou.

Apenas a estratégia foi trocada.

Esse é exatamente o objetivo do **Strategy Pattern.**

---


### Conceitos de POO aplicados

O Strategy utiliza vários conceitos fundamentais da Programação Orientada a Objetos.

| Conceito                | Onde aparece                                           |
| ----------------------- | ------------------------------------------------------ |
| Encapsulamento          | Cada cálculo está isolado em uma classe                |
| Polimorfismo            | `Freight` pode ser `FreightCommon` ou `FreightExpress` |
| Abstração               | Interface `Freight` define o contrato                  |
| Inversão de dependência | `Order` depende da interface                           |
| Open/Closed             | Novas estratégias sem modificar código                 |

--- 

### 🚀 Vantagens do Strategy Pattern

✅ **Elimina if/else complexos**

Cada regra vira uma classe independente.

✅ **Alta extensibilidade**

Novas estratégias podem ser criadas sem alterar código existente.

✅ **Melhor organização do código**

Cada algoritmo possui sua própria classe.

✅ **Facilita testes**

Cada estratégia pode ser testada isoladamente.

✅ **Baixo acoplamento**

O sistema depende de interfaces, não de implementações.

--- 

### ⚠️ Quando NÃO usar Strategy

O Strategy Pattern não deve ser usado em todos os casos.

Evite quando:

- Existe apenas uma regra
- O comportamento nunca vai variar
- A abstração adiciona complexidade desnecessária

Design Patterns devem **simplificar o código**, não complicá-lo.

### 📝 Conclusão

O **Strategy Pattern** é uma forma poderosa de aplicar os princípios da **Programação Orientada a Objetos** para criar sistemas mais flexíveis e extensíveis.

Ao separar diferentes algoritmos em estratégias independentes, o código se torna:

- mais limpo
- mais testável
- mais fácil de evoluir

Aprender Strategy é um passo fundamental para entender conceitos importantes como:

- SOLID
- baixo acoplamento 
- arquitetura orientada a objetos

---

***Dicas a mais:***

## Uso do Getter

### 1️⃣ O que é esse get?

```ts
get taxPayment() {
  return this.tax;
}
```

Isso é um **getter**.

👉 Ele permite acessar um valor **como se fosse uma propriedade**,
mas por baixo dos panos é um método.
Torna um método em atributo.

Uso:

```ts
payment.taxPayment
```

Não usa parênteses.
Parece um atributo, mas é uma função.

---

### 2️⃣ Pra que isso existe?

**🎯 Motivo principal**

**Expor um dado interno sem quebrar o encapsulamento.**

Você:

  -NÃO libera o atributo direto
  -NÃO permite alteração
  -mas permite leitura controlada

Exemplo:

```ts
private tax: Tax;
```

Sem getter:

  -ninguém de fora pode acessar tax

Com getter: 

```ts
payment.taxPayment
```
📌 Leitura permitida
📌 Escrita bloqueada


### 3️⃣ E esse segundo método?

```ts
getTaxPayment() {
  return this.taxPayment;
}
```

Aqui acontece algo importante 👇

**🚨 Ele é redundante**

Esse método:

  -só chama o getter
  -não adiciona regra
  -não adiciona validação
  -não adiciona comportamento

Na prática, isso aqui:

```ts
payment.getTaxPayment();
```

faz **exatamente a mesma coisa que:**

```ts
payment.taxPayment;
```

### 4️⃣ Quando faz sentido usar get?

#### ✅ Caso 1 — Expor estado calculado

```ts
get taxPayment() {
  return this.tax.calculate(this.salary);
}
```

Aqui:

  -não é um simples atributo
  -é um valor derivado

📌 Getter faz total sentido.

#### ✅ Caso 2 — Compatibilidade com API / padrão

xemplo:

  -framework exige propriedade
  -serialização
  -binding

Getter mantém a interface limpa.

#### ✅ Caso 3 — Proteger mudança futura

Hoje:

```ts
payment.taxPayment;
```
Amanhã:

```ts
get taxPayment() {
  return this.taxService.getTax();
}
```

📌 Quem usa não muda nada.

### 📌 Benefícios:

- Testes simples
- Cada regra testada isoladamente
- Sem mocks complexos

---

## 🎯 O que é o Template Method Pattern?

### 📖 Definição

O **Template Method Pattern** define **a estrutura de um algoritmo em um método**,
permitindo que **subclasses redefinam algumas etapas do algoritmo sem alterar sua estrutura.**

👉 Em outras palavras:

O fluxo principal do algoritmo é fixo,  mas algumas partes podem variar.

---

### 🧠 Ideia central do Template Method

Separar:

- O que sempre acontece
- O que pode variar

Exemplo genérico:

```ts
processPayment() {

  step1()
  step2()
  step3()

}
```

Alguns passos podem mudar dependendo da implementação.

---

### 🧠 Problema real (Violação)

Vamos analisar o código inicial.

**Pasta- Template-method/violation**

---

### 🚨 Problema desse código

Observe que todas as classes possuem exatamente o mesmo fluxo:

```ts
valorFinal = valor + taxa - desconto
gateway.cobrar(valorFinal)
```

Ou seja:

```ts
calcular taxa
calcular desconto
calcular valor final
executar cobrança
```

Esse algoritmo é idêntico em todas as classes.

---

### 📌 Problemas arquiteturais

❌ Duplicação de código

Esse trecho se repete:

```ts
const valorFinal =
	this.valor + this.calcularTaxa() - this.calcularDesconto();
```

---

#### ❌ Violação do princípio DRY

DRY = Don't Repeat Yourself

Código duplicado gera:

- manutenção difícil
- bugs
- inconsistência

---

#### ❌ Alto risco de inconsistência

Se amanhã a regra mudar:

```ts
valor + taxa - desconto + taxaGateway
```

Você terá que alterar em todas as classes.

---

#### ❌ Responsabilidade duplicada

Cada classe está fazendo duas coisas:

1️⃣ Definir regras
2️⃣ Controlar o fluxo do algoritmo

Isso mistura responsabilidades.

---

### 🧩 Como o Template Method resolve isso

O Template Method extrai o algoritmo comum para uma classe base.

E deixa apenas as partes variáveis nas subclasses.

**Estrutura do Template Method**

O padrão possui:

1️⃣ Abstract Class (Template)
2️⃣ Template Method
3️⃣ Primitive Operations (métodos abstratos)
4️⃣ Concrete Classes

1️⃣ Classe Abstrata (Template)

```ts
export abstract class Gateway {

  abstract calculateTax(value: number): number;

  abstract calculateDiscont(value: number): number;

  calculate(value: number): number {

    const valorFinal =
      value + this.calculateTax(value) - this.calculateDiscont(value);

    return valorFinal;
  }

}
```
---

#### 🧠 O que é abstract?

abstract significa:

👉 a classe não pode ser instanciada diretamente

Isso obriga a criação de subclasses.

Exemplo inválido:

```ts
new Gateway() ❌
```

📌 Por que usar classe abstrata?

Porque o Gateway define:

```ts
estrutura do algoritmo
```

mas não define as regras específicas.


#### 🧠 O que são métodos abstratos?

```ts
abstract calculateTax(value: number): number;
```


Significa:

esse método deve ser implementado pela subclasse


A classe base define o contrato,
mas não a implementação.

---

### 🧩 Template Method

O método:

```ts
calculate()
```

é o Template Method.

```ts
calculate(value: number): number {

  const valorFinal =
    value + this.calculateTax(value) - this.calculateDiscont(value);

  return valorFinal;

}
```

Ele define a estrutura fixa do algoritmo.

Fluxo do algoritmo

```ts
calculate()

  calcular taxa
  calcular desconto
  calcular valor final
```

Mas quem decide:

```ts
taxa
desconto
```


são as subclasses

2️⃣ Concrete Classes

Pasta- Template-method/respect

#### 🧠 O que é extends?

```ts
class PaymentCredit extends Gateway
```

Significa que a classe herda da classe base.

Isso permite:

- reutilizar código
- sobrescrever métodos
- manter estrutura comum

#### 🧠 O que é super()?

```ts
constructor() {
  super();
}

```

super() chama o construtor da classe pai.

Ele é obrigatório quando a classe pai possui construtor.

---

### 🧠 Conceitos de POO usados

| Conceito de POO         | Onde aparece                      |
| ----------------------- | --------------------------------- |
| Encapsulamento          | Cada classe define sua regra      |
| Polimorfismo            | `calculateTax()` muda por classe  |
| Herança (de tipo)       | `extends Gateway`                 |
| Abstração               | Classe `abstract Gateway`         |
| Reuso de código         | Template Method                   |

---

### 🚀 Benefícios do Template Method

✅ Elimina duplicação de código
✅ Centraliza o algoritmo
✅ Facilita manutenção
✅ Aumenta reutilização
✅ Garante consistência

---

### ⚠️ Quando NÃO usar Template Method

- Quando não existe algoritmo comum
- Quando as classes são totalmente diferentes
- Quando herança não faz sentido

---

### 🧠 Resumo do Template Method

| Parte            | Função             |
| ---------------- | ------------------ |
| Abstract Class   | Define estrutura   |
| Template Method  | Define algoritmo   |
| Abstract Methods | Pontos de variação |
| Subclasses       | Implementam regras |

---

### 📝 Conclusão

O Template Method Pattern permite definir o esqueleto de um algoritmo em uma classe base, delegando partes específicas para subclasses.

Isso permite:

- reutilizar código
- manter consistência
- evitar duplicação
- aplicar princípios sólidos de POO

Aprender Template Method ajuda a entender melhor:

- Herança
- Polimorfismo
- Abstração
- Arquitetura orientada a objetos

--- 

## 🎯 O que é o State Pattern?

### 📖 Definição

O **State Pattern** permite que um objeto altere seu comportamento quando seu estado interno muda.

👉 Em outras palavras:

O objeto parece mudar de classe quando seu estado muda.

---

### 🧠 Ideia central do State

Separar:

- Estado
- Comportamento

E fazer com que:

👉 Cada estado seja responsável pelo seu próprio comportamento

---

### 🧠 Problema real (Violação)

Código inicial:

```ts
export class Pedido {
  static readonly AGUARDANDO_PAGAMENTO = 1;
  static readonly PAGO = 2;
  static readonly CANCELADO = 3;
  static readonly ENVIADO = 4;

  public estadoAtual: number;

  public constructor() {
    this.estadoAtual = Pedido.AGUARDANDO_PAGAMENTO;
  }

  public sucessoAoPagar(): void {
    if (this.estadoAtual === Pedido.AGUARDANDO_PAGAMENTO) {
      this.estadoAtual = Pedido.PAGO;
    }
  }

  public cancelarPedido(): void {
    if (this.estadoAtual === Pedido.AGUARDANDO_PAGAMENTO) {
      this.estadoAtual = Pedido.CANCELADO;
    } else if (this.estadoAtual === Pedido.PAGO) {
      this.estadoAtual = Pedido.CANCELADO;
    }
  }

  public despacharPedido(): void {
    if (this.estadoAtual === Pedido.PAGO) {
      this.estadoAtual = Pedido.ENVIADO;
    }
  }
}
```

#### 🚨 Problemas desse código
❌ Uso excessivo de if/else

```ts
if (this.estadoAtual === X)
```

Isso se repete em todos os métodos.

#### ❌ Violação do princípio Open/Closed

Se surgir um novo estado:

```ts
DEVOLVIDO
```

Você terá que modificar vários métodos.

#### ❌ Baixa escalabilidade

Quanto mais estados:

- mais if
- mais complexidade
- mais bugs

#### ❌ Código procedural

Você está usando:

```TS
estado = número
```

Em vez de objetos com comportamento.

---

### 🧩 Quando usar State?

Use quando:

👉 O comportamento muda baseado no estado
👉 Existem muitos if/else baseados em estado
👉 O código está difícil de manter

---

### 🧱 Estrutura do State Pattern

O padrão possui:

1️⃣ Context (Order)
2️⃣ State Interface
3️⃣ Concrete States

```ts
state/
 ├── data.ts
 ├── order.ts
 ├── state.ts
 ├── waiting.state.ts
 ├── paid.state.ts
 ├── canceled.state.ts
 ├── sent.state.ts
```

1️⃣ Constantes (data.ts)

```ts
export const ORDER_STATE = {
  WAITING: "WAITING",
  PAID: "PAID",
  CANCELED: "CANCELED",
  SENT: "SENT",
} as const;
```

#### 🧠 O que é as const?

- Torna os valores imutáveis
- Mantém os tipos literais

Sem isso:

- WAITING: string ❌

Com isso:

- WAITING: "WAITING" ✅

2️⃣ Interface do Estado (state.ts)

```ts
import { Order } from "./order";

export interface OrderState {
  success(order: Order): void;
  cancel(order: Order): void;
  dispatch(order: Order): void;
  getName(): string;
}
```

#### 🧠 O que é uma interface?

Define um contrato:

👉 Toda classe que implementa deve ter esses métodos

#### 🧠 Métodos explicados

```ts
success(order: Order): void;
```

- success → nome do método
- order: Order → recebe o contexto
- void → não retorna nada

---

### 🧠 Por que passar o order?

Para permitir:

```ts
order.setState(new PaidState());
```

👉 O estado controla a transição

3️⃣ Contexto (order.ts)

```ts
import { OrderState } from "./state";
import { WaitingState } from "./waiting.state";

export class Order {
  private _state: OrderState;

  constructor() {
    this._state = new WaitingState();
  }

  get state() {
    return this._state.getName();
  }

  setState(state: OrderState) {
    this._state = state;
  }

  success() {
    this._state.success(this);
  }

  cancel() {
    this._state.cancel(this);
  }

  dispatch() {
    this._state.dispatch(this);
  }
}
```

#### 🧠 O que é _state?

- Armazena o estado atual
- Tipo: OrderState
- private → encapsulado

#### 🧠 Getter

```ts
get state()
```

Permite:

```ts
order.state
```

#### 🧠 Delegação (ESSENCIAL)

```ts
this._state.success(this);
```

👉 O Order não decide nada
👉 O estado decide tudo

4️⃣ Estados Concretos

🟡 WaitingState
🟢 PaidState
🔴 CanceledState
🚚 SentState

---

### 🧠 Conceitos de POO usados

| Conceito          | Onde aparece                     |
| ----------------- | -------------------------------- |
| Encapsulamento    | `_state` privado                 |
| Polimorfismo      | `state.success()` muda           |
| Abstração         | interface `OrderState`           |
| Baixo acoplamento | Order não conhece regras         |
| Open/Closed       | novos estados sem alterar código |

---


### 🧠 Conceitos de TypeScript usados

| Conceito        | Explicação           |
| --------------- | -------------------- |
| interface       | define contrato      |
| implements      | obriga implementação |
| private         | encapsulamento       |
| getter          | acesso controlado    |
| as const        | tipagem literal      |
| type annotation | tipagem forte        |


---

#### 🚀 Benefícios do State Pattern

✅ Remove if/else
✅ Código mais organizado
✅ Fácil manutenção
✅ Fácil extensão
✅ Baixo acoplamento

---

### ⚠️ Quando NÃO usar State

- Poucos estados simples
- Sem variação de comportamento
- Código já simples

---

### 🧠 Resumo do State

| Parte           | Função               |
| --------------- | -------------------- |
| Context (Order) | mantém estado atual  |
| State Interface | define comportamento |
| Concrete States | implementam regras   |

---

### 📝 Conclusão

O **State Pattern** transforma:

```estado = número```

em:

```estado = objeto com comportamento```


Isso permite:

- eliminar if/else
- organizar regras
- escalar o sistema
- aplicar POO corretamente

--- 

## 🎯 O que é o Chain of Responsibility Pattern?

### 📖 Definição

O **Chain of Responsibility Pattern** é um padrão comportamental que permite **passar uma requisição por uma cadeia de objetos**, onde cada um pode:

- processar a requisição  
- ou delegar para o próximo  

👉 Em outras palavras:

A requisição percorre uma sequência de handlers até que alguém a trate.

---

### 🧠 Ideia central do Chain

Separar:

- Quem envia a requisição  
- De quem processa  

E permitir que:

👉 Vários objetos tenham a chance de tratar essa requisição

---

### 🧠 Problema real (Violação)

#### Exemplo simples

```ts
export class Example {
  public attribute: number = 0;

  public testAttribute(): void {
    if (this.attribute < 10) {
      // ...
    } else if (this.attribute < 200) {
      // ...
    } else if (this.attribute < 500) {
      // ...
    } else {
      // ...
    }
  }
}
```

#### Exemplo real (PointsCalculator)

```ts
export class PointsCalculator {
  public execute(order: Order, day: number): number {
    let points: number;

    if (order.getValue() >= 70) {
      points = Math.floor(order.getValue() / 5);
    } else if (order.getValue() >= 40) {
      points = Math.floor(order.getValue() / 7);
    } else if (order.getValue() >= 20) {
      points = Math.floor(order.getValue() / 10);
    } else {
      return 0;
    }

    if (day >= 16 && day <= 31) return points * 2;
    return points;
  }
}
```

#### 🚨 Problemas desse código

- ❌ Cadeia de if/else

```ts
if (...) else if (...) else if (...)
```

👉 Difícil de escalar

- ❌ Violação do Open/Closed

Se surgir nova regra:

```ts
>=100
```

👉 Você precisa alterar o código existente

- ❌ Alto acoplamento
Toda lógica está concentrada em uma única classe

- ❌ Baixa reutilização
Não dá para reutilizar partes da lógica isoladamente

- ❌ Difícil de testar
Você não consegue testar cada regra separadamente

---

### 🧩 Quando usar Chain of Responsibility?

Use quando:

👉 Existem múltiplas regras sequenciais
👉 Cada regra pode ou não tratar a requisição
👉 Você quer evitar if/else encadeado
👉 Você quer flexibilidade na ordem das regras

### 🧱 Estrutura do Chain of Responsibility

O padrão possui:

1️⃣ Handler (classe abstrata)
2️⃣ Concrete Handlers
3️⃣ Chain (encadeamento)

---

📁 Estrutura de arquivos

```ts
chain/
 ├── entities/
 │    └── order-entity.ts
 ├── services/
 │    ├── point-calculator-abstract-service.ts
 │    ├── points-calculator-20-service.ts
 │    ├── points-calculator-40-service.ts
 │    ├── points-calculator-70-service.ts
 │    ├── points-calculator-no-point-service.ts
 │    └── points-calculator-chain.ts
```

---

### 1️⃣ Entidade (Order)

```ts
export class Order {
  constructor(public readonly value: number) {}
}
```

#### 🧠 Conceitos

```public readonly```

- public → acessível fora da classe
- readonly → não pode ser alterado

👉 Imutabilidade = mais segurança

---

### 2️⃣ Classe Abstrata (Handler)

```ts
export abstract class PointCalculator {
  protected next: PointCalculator | undefined;

  setNext(next: PointCalculator): PointCalculator {
    this.next = next;
    return this.next;
  }

  abstract execute(order: Order): number;
}
```

#### 🧠 O que é abstract?

👉 Classe que não pode ser instanciada diretamente

```ts
new PointCalculator() ❌
```

#### 🧠 Atributo next

```ts
protected next: PointCalculator | undefined;
```

- protected → acessível nas subclasses
- guarda o próximo da cadeia

#### 🧠 Método setNext

```ts
setNext(next: PointCalculator): PointCalculator
```

👉 Faz o encadeamento

```ts
points70.setNext(points40);
```

#### 🧠 Retorno do setNext

```ts
return this.next;
```


👉 Permite encadeamento fluente:

```ts
points70.setNext(points40).setNext(points20);
```

#### 🧠 Método abstrato

```ts
abstract execute(order: Order): number;
```

👉 Cada classe decide:

- se trata
- ou passa adiante

---

### 3️⃣ Handlers concretos

🟢 Points70

```ts
export class Points70 extends PointCalculator {
  execute(order: Order): number {
    if (order.value >= 70) {
      return Math.floor(order.value / 5);
    }
    return this.next!.execute(order);
  }
}
```

#### 🧠 Explicação

```ts
if (order.value >= 70)
```


👉 Se consegue tratar → resolve

```ts
return this.next!.execute(order);
```

👉 Senão → delega

#### ⚠️ Operador !

```ts
this.next!
```

👉 Diz ao TypeScript:

"confia em mim, não é undefined"

🟡 Points40

🔵 Points20

🔴 NoPoints

---

### 4️⃣ Chain (orquestrador)

```ts
export class PointsCalculatorChain {
  execute(order: Order, day: number): number {
    const noPoints = new NoPoints();
    const points20 = new Points20();
    const points40 = new Points40();
    const points70 = new Points70();

    points70.setNext(points40);
    points40.setNext(points20);
    points20.setNext(noPoints);

    return points70.execute(order);
  }
}
```

#### 🧠 O que acontece aqui?

Montagem da cadeia:
```ts
Points70 → Points40 → Points20 → NoPoints
```

Execução:
```ts
points70.execute(order)
```

Fluxo:
```ts
valor >= 70 ? resolve
senão → points40
senão → points20
senão → noPoints
```

#### 🧠 Diferença mental IMPORTANTE

❌ Antes (if/else)

```ts
if (...) else if (...) else if (...)
```

👉 lógica centralizada

✅ Depois (Chain)

```ts
handler.execute()
```

👉 lógica distribuída

---

### 🧠 Conceitos de POO usados

| Conceito          | Onde aparece                      |
| ----------------- | --------------------------------- |
| Encapsulamento    | cada handler tem sua lógica       |
| Polimorfismo      | `execute()` varia                 |
| Abstração         | classe abstrata                   |
| Baixo acoplamento | handlers independentes            |
| Open/Closed       | novos handlers sem alterar código |

---

### 🧠 Conceitos de TypeScript usados

| Conceito                 | Explicação        |            |
| ------------------------ | ----------------- | ---------- |
| abstract class           | base para herança |            |
| protected                | acesso controlado |            |
| readonly                 | imutabilidade     |            |
| union type               | `                 | undefined` |
| non-null assertion (`!`) | força não-null    |            |
| type annotation          | tipagem forte     |            |

---

### 🚀 Benefícios do Chain of Responsibility

✅ Elimina if/else
✅ Código modular
✅ Fácil extensão
✅ Regras independentes
✅ Alta reutilização

---

### ⚠️ Quando NÃO usar

- Poucas regras simples
- Sem necessidade de encadeamento
- Overengineering

---

### 🧠 Resumo do Chain

| Parte            | Função           |
| ---------------- | ---------------- |
| Handler          | define interface |
| Concrete Handler | implementa regra |
| Chain            | organiza fluxo   |


### 📝 Conclusão

O Chain of Responsibility Pattern transforma:

```ts
if/else complexo
```

em:

```ts
cadeia de objetos

```

Isso permite:

- distribuir responsabilidades
- reduzir acoplamento
- facilitar manutenção
- escalar regras

## 🎯 Command Pattern (Aplicação Real com Use Case + Factory)

---

### 📖 Definição

O **Command Pattern** é um padrão comportamental que permite **encapsular uma ação ou operação dentro de um objeto.**

👉 Em outras palavras:

Em vez de executar algo diretamente, você cria um objeto que representa essa ação.

---

### 🧠 Ideia central do Command

Separar:

- Quem pede a ação
- De quem executa a ação

E transformar a ação em algo reutilizável.

---

### 🧠 Evolução do Command (Muito importante)

#### 🟢 Forma clássica

```ts
command.executar()
command.desfazer()

👉 Usado para ações (ligar, desligar, etc.)

---

🔵 **Forma usada neste projeto**

```ts
command.toJSON()
```

👉 Aqui o Command não executa ação
👉 Ele monta dados

💡 Isso é uma evolução muito comum em sistemas reais.

---

### 🧠 Problema real (sem Command)

Imagine um sistema de cadastro:

```ts
if (profile === 'admin') {
  user.role = adminRoleDefault;
} else if (profile === 'user') {
  user.role = userRoleDefault;
}
```

---

### 🚨 Problemas dessa abordagem

❌ Uso de if/else espalhado
❌ Difícil manutenção
❌ Violação do Open/Closed
❌ Alto acoplamento
❌ Regras duplicadas

---

### 🧩 Como o Command resolve isso

Cada regra vira um objeto separado:

```ts
new AdminFeaturesSignupCommand(user)
```

👉 Cada comando sabe montar o usuário corretamente

---

### 🧱 Estrutura do Command neste projeto

O padrão possui:

1️⃣ Interface do Command
2️⃣ Commands concretos
3️⃣ Factory de Commands
4️⃣ Use Case que utiliza o Command

---

### 🧠 Organização em camadas (DDD simplificado)

O projeto segue uma divisão inspirada em **DDD (Domain-Driven Design):**

```ts
application → casos de uso (regras de negócio)
domain      → regras puras (commands, lógica)
data        → tipos e validações
infra       → acesso a dados (banco)
```

#### 📌 Explicação rápida

- application → orquestra o fluxo
- domain → onde mora a lógica de negócio
- data → contratos e validações
- infra → implementação técnica (banco, etc.)

💡 Isso reduz acoplamento e melhora escalabilidade.

---

### 🧩 1️⃣ Interface do Command

📁 data/command-data.ts

```ts
export interface FeaturesSignupCommand {
  toJSON(): User
}
```

#### 🧠 O que isso significa?

👉 Define um contrato

Qualquer classe que implementar essa interface DEVE ter:

```ts
toJSON(): User
```

#### 🧠 Por que toJSON()?

Porque o objetivo do command aqui é:

👉 transformar dados de entrada em um User válido

---

### 🧩 2️⃣ Commands concretos

📁 AdminFeaturesSignupCommand

```ts
export class AdminFeaturesSignupCommand implements FeaturesSignupCommand {
  #role: Role
  #data: User
```

---

#### 🧠 O que é esse # ?

```ts
#role
#data
```

👉 Isso é um **campo privado real do JavaScript.**

---

#### 🔐 Diferença importante

| Forma     | Tipo                      |
| --------- | ------------------------- |
| `private` | TypeScript (compilação)   |
| `#`       | JavaScript real (runtime) |

---

#### 📌 Exemplo

```ts
class Test {
  #value = 10;
}
```

👉 Isso NÃO pode ser acessado fora da classe:

```ts
obj.#value ❌ ERRO
```

💡 Ou seja:

👉 # garante encapsulamento de verdade

---

#### 🧠 Constructor

```ts
constructor(private readonly model: User)
```

#### 📌 O que isso faz?

- private → só acessível na classe
- readonly → não pode ser alterado
- model → dados de entrada

---

#### 🧠 Lógica principal

```ts
this.#role = adminRoleDefault;
```

#### 📌 O que isso faz?

👉 Define o papel do usuário como admin

```ts
this.#data = userSchema.parse({
  ...model,
  role: this.#role,
})
```

---

#### 📌 Explicação detalhada

```ts
...model
```

👉 espalha os dados do usuário

```ts
role: this.#role
```

👉 injeta as permissões de admin

```ts
userSchema.parse(...)
```

👉 valida os dados com Zod

---

#### 🧠 O que é parse()?

- valida estrutura
- garante tipagem
- lança erro se inválido

---

#### 🧠 Método final

```ts
toJSON(): User {
  return this.#data;
}
```

👉 Retorna o usuário pronto

---

### 🧩 Outros Commands

🟡 UserFeaturesSignupCommand
🔵 GuestFeaturesSignupCommand

💡 Todos seguem a mesma ideia:

👉 só muda o role

---

### 🏭 3️⃣ CommandFactory

📁 domain/factory/command-factory.ts

```ts
makeFeaturesSignup(profile, user)
```

---

#### 🧠 O que essa classe faz?

👉 Decide qual command usar

```ts
switch (profile)
```

---

#### 📌 Mapeamento

| Profile | Command      |
| ------- | ------------ |
| admin   | AdminCommand |
| user    | UserCommand  |
| guest   | GuestCommand |


#### 🧠 Por que isso é importante?

Evita isso:

```ts
if (profile === 'admin') ...
```

💡 Centraliza a decisão

---

### 🧱 4️⃣ Use Cases (Application Layer)

Aqui acontece o fluxo do sistema.

🧾 **SignupUseCase**

```ts
async execute(profile, user)
```
---

#### 🧠 Fluxo completo

1️⃣ Verifica se email existe
2️⃣ Cria command
3️⃣ Executa transformação
4️⃣ Salva no banco

#### 📌 Código importante

```ts
const command = this.commandFactory.makeFeaturesSignup(profile, user);
```

👉 Cria o command correto

```ts
command.toJSON()
```

👉 Aplica a lógica

```ts
userModel.create(...)
```

👉 Persiste no banco

---

🔄 **ChangeUseCase**

```ts
execute(profile, id)
```

---

#### 🧠 Fluxo

1️⃣ Busca usuário
2️⃣ Aplica novo command
3️⃣ Atualiza

💡 Aqui você reaproveita o mesmo Command

---

### 🏗️ Infra (Banco fake)

📁 UserModel

```ts
private db: Map<string, User>
```

---

#### 🧠 O que é Map?
estrutura chave → valor
substitui banco

📌 create()

```ts
const id = uuidv7();
```

👉 gera ID único

```ts
📌 update()
```

👉 atualiza dados

---

### 🏭 ModelFactory

```ts
makeUser()
```

#### 🧠 O que isso faz?

👉 cria ou reutiliza o model

💡 padrão simples de factory + singleton

---

### 🧪 Testes (validação do comportamento)

#### 🧠 Exemplo importante

```ts
guest → user
```


#### Fluxo testado

1️⃣ Cria guest
2️⃣ Muda para user
3️⃣ Verifica permissões

💡 Prova que Command funciona

---

### 🧠 Conceitos de POO aplicados

| Conceito          | Onde aparece                      |
| ----------------- | --------------------------------- |
| Encapsulamento    | `#role`, `#data`                  |
| Abstração         | interface `FeaturesSignupCommand` |
| Polimorfismo      | commands diferentes               |
| Baixo acoplamento | UseCase não conhece implementação |
| Open/Closed       | novos profiles sem alterar código |

---

### 🧠 Conceitos de TypeScript usados

| Conceito       | Explicação         |
| -------------- | ------------------ |
| interface      | define contrato    |
| private        | encapsulamento     |
| readonly       | imutabilidade      |
| #private       | privacidade real   |
| zod            | validação          |
| type inference | tipagem automática |

---

### 🚀 Benefícios do Command neste projeto

✅ Remove if/else
✅ Centraliza regras
✅ Facilita testes
✅ Alta escalabilidade
✅ Reuso de lógica
✅ Código organizado

---

### ⚠️ Quando NÃO usar Command

- Lógica simples
- Sem variação de comportamento
- Overengineering

---

### 🧠 Resumo do Command

| Parte             | Função            |
| ----------------- | ----------------- |
| Command Interface | define contrato   |
| Concrete Command  | implementa lógica |
| Factory           | escolhe command   |
| Use Case          | executa fluxo     |

---

### 📝 Conclusão

O Command Pattern neste projeto foi utilizado de forma mais avançada:

👉 Não para executar ações
👉 Mas para construir dados de forma inteligente e desacoplada

Isso permite:

- separar regras de negócio
- evitar if/else
- criar código escalável
- aplicar princípios SOLID

---

💡 Insight final (nível avançado)

Esse projeto mistura:

- Command Pattern
- Factory Pattern
- Strategy (indiretamente)
- Clean Architecture