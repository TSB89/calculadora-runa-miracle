# 📜 Calculadora de Runas - Miracle

Uma calculadora web interativa e responsiva para otimizar a produção de runas no MMORPG OT Miracle, desenvolvida com **Programação Orientada a Objetos** usando HTML5, CSS3 e JavaScript ES6+.

## 📖 Como Executar
Você pode acessar o projeto de duas formas:

1. **Via GitHub Pages** (mais prático):  
   👉 [Acesse aqui](https://tsb89.github.io/calculadora-runa-exordion/)  
   
2. **Localmente no navegador**:
   * Clone o repositório ou baixe os arquivos.
   * Abra o arquivo `index.html` no navegador.
   * Não requer instalação de dependências.

## ✨ Características

### 🧙‍♂️ Configuração de Personagem

* **Tipos de Promotion**: 
   * Sem promotion (1 mana/6s = 600 mana/hora)
   * Com promotion (1 mana/4s = 900 mana/hora)
* **Cálculo Dinâmico**: Regeneração total de mana por hora em tempo real
* **Interface Simplificada**: Foco na experiência do usuário

### 🏆 Sistema de Ranking Top 3

* **Top 3 Runas Mais Lucrativas**: Display visual com medalhas
   * 🥇 1º lugar - Ouro (destaque maior)
   * 🥈 2º lugar - Prata
   * 🥉 3º lugar - Bronze
* **Destaque Automático**: A runa mais rentável é destacada visualmente na calculadora
* **Atualização Instantânea**: Rankings recalculados conforme você insere os preços

### 📊 Calculadora Completa

* **28 Runas Disponíveis**: Desde Light Magic Missile até Animate Dead
* **Padronização Simplificada**:
   * Todas as runas custam 15gp para criar
   * Todas as runas produzem 1 unidade por conjuração
* **Cálculos Precisos**:
   * Quantidade de runas produzidas por hora
   * Lucro por runa individual
   * Lucro total por hora
* **Interface Intuitiva**: Cards organizados em grid responsivo

### 🎨 Design

* **Visual RPG Medieval**: Tema sombrio com gradientes em azul marinho e preto
* **Totalmente Responsivo**: Adapta-se perfeitamente a desktop, tablet e mobile
* **Efeitos Visuais**: Animações, sombras e highlights para melhor UX
* **Menu de Navegação**: Sistema mobile-first com menu hambúrguer

## 🚀 Como Usar

1. **Configure seu tipo de personagem** (Sem/Com promotion)
2. **Insira os preços de venda** das runas no mercado
3. **Veja instantaneamente**:
   * Top 3 runas mais lucrativas no ranking
   * Destaque visual da melhor opção
   * Lucro por hora de cada runa
4. **Tome decisões estratégicas** sobre quais runas produzir

## 🛠️ Tecnologias

* **HTML5**: Estrutura semântica e acessível
* **CSS3**: Flexbox/Grid, gradientes, animações e transições
* **JavaScript ES6+**: Classes, módulos e programação orientada a objetos
* **Design Responsivo**: Mobile-first approach com breakpoints otimizados

## 📈 Arquitetura do Código (POO)

O projeto foi desenvolvido seguindo princípios de **Programação Orientada a Objetos**:

### Classes Principais

```javascript
class Runa
├── Propriedades: name, altName, cost, mana, quantity
└── Métodos: calcularCustoPorRuna(), calcularLucro()

class ManaManager
├── Propriedades: baseRegenNoPromotion, baseRegenWithPromotion
└── Métodos: calcularRegeneracaoTotal()

class RankingManager
├── Propriedades: resultados[]
└── Métodos: atualizar(), renderizar(), formatarNumero()

class CalculadoraRunas
├── Propriedades: runas[], manaManager, rankingManager
└── Métodos: inicializarRunas(), gerarCardRuna(), calcular(), 
             atualizarDisplayRuna(), destacarMelhorRuna()

class MenuManager
├── Propriedades: navToggle, navMenu
└── Métodos: configurarEventos(), toggleMenu(), fecharMenu()
```

### Benefícios da Arquitetura

* ✅ **Encapsulamento**: Cada classe tem responsabilidade única e bem definida
* ✅ **Reutilização**: Código modular e fácil de manter
* ✅ **Escalabilidade**: Simples adicionar novas funcionalidades
* ✅ **Legibilidade**: Estrutura clara e organizada
* ✅ **Testabilidade**: Classes independentes facilitam testes unitários

## 📈 Funcionalidades Técnicas

* Cálculo preciso de regeneração de mana baseado no tipo de personagem
* Sistema de ranking dinâmico com ordenação automática (Top 5)
* Interface reativa que atualiza em tempo real
* Validação de inputs e tratamento de edge cases
* Performance otimizada para cálculos instantâneos
* Formatação numérica em português brasileiro (pt-BR)
* Sistema de destaque visual para melhor runa

---

**Ideal para jogadores de Miracle que querem maximizar seus lucros com produção de runas! 🎯**

*Otimize sua estratégia, maximize seus ganhos!* ✨
