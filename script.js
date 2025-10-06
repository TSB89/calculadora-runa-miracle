// Classe Runa
class Runa {
    constructor(name, altName, mana) {
        this.name = name;
        this.altName = altName;
        this.cost = 15; // Todas as runas custam 15gp
        this.mana = mana;
        this.quantity = 1; // Todas as runas tem quantidade 1
    }

    calcularCustoPorRuna() {
        return this.cost / this.quantity;
    }

    calcularLucro(precoVenda, manaHora) {
        const conjuracoesPorHora = manaHora / this.mana;
        const runasPorHora = conjuracoesPorHora * this.quantity;
        const custoPorRuna = this.calcularCustoPorRuna();
        const lucroPorRuna = precoVenda - custoPorRuna;
        const lucroPorHora = runasPorHora * lucroPorRuna;

        return {
            runasPorHora,
            lucroPorRuna,
            lucroPorHora
        };
    }
}

// Classe para gerenciar a regeneração de mana
class ManaManager {
    constructor() {
        this.baseRegenNoPromotion = 1 / 6; // 1 mana a cada 6 segundos
        this.baseRegenWithPromotion = 1 / 4; // 1 mana a cada 4 segundos
    }

    calcularRegeneracaoTotal() {
        let manaPerHour = 0;

        // Regeneração base
        if (document.getElementById('no-promotion').checked) {
            manaPerHour = this.baseRegenNoPromotion * 3600;
        } else {
            manaPerHour = this.baseRegenWithPromotion * 3600;
        }

        return Math.floor(manaPerHour);
    }
}

// Classe para gerenciar o ranking
class RankingManager {
    constructor() {
        this.resultados = [];
    }

    atualizar(resultados) {
        this.resultados = resultados.sort((a, b) => b.lucroPorHora - a.lucroPorHora);
        this.renderizar();
    }

    renderizar() {
        // Primeiro lugar
        if (this.resultados.length > 0 && this.resultados[0].lucroPorHora > 0) {
            document.getElementById('best-rune-name').textContent = this.resultados[0].nome;
            document.getElementById('best-rune-profit').textContent =
                this.formatarNumero(Math.floor(this.resultados[0].lucroPorHora)) + ' gp/hora';
        } else {
            document.getElementById('best-rune-name').textContent = 'Selecione preços para ver resultados';
            document.getElementById('best-rune-profit').textContent = '-';
        }

        // Segundo lugar
        if (this.resultados.length > 1 && this.resultados[1].lucroPorHora > 0) {
            document.getElementById('second-rune-name').textContent = this.resultados[1].nome;
            document.getElementById('second-rune-profit').textContent =
                this.formatarNumero(Math.floor(this.resultados[1].lucroPorHora)) + ' gp/h';
        } else {
            document.getElementById('second-rune-name').textContent = '-';
            document.getElementById('second-rune-profit').textContent = '-';
        }

        // Terceiro lugar
        if (this.resultados.length > 2 && this.resultados[2].lucroPorHora > 0) {
            document.getElementById('third-rune-name').textContent = this.resultados[2].nome;
            document.getElementById('third-rune-profit').textContent =
                this.formatarNumero(Math.floor(this.resultados[2].lucroPorHora)) + ' gp/h';
        } else {
            document.getElementById('third-rune-name').textContent = '-';
            document.getElementById('third-rune-profit').textContent = '-';
        }
    }

    formatarNumero(num) {
        return num.toLocaleString('pt-BR');
    }
}

// Classe principal da calculadora
class CalculadoraRunas {
    constructor() {
        this.runas = this.inicializarRunas();
        this.manaManager = new ManaManager();
        this.rankingManager = new RankingManager();
        this.melhorIndice = -1;
    }

    inicializarRunas() {
        return [
            new Runa("Light Magic Missile", "Adori", 30),
            new Runa("Heavy Magic Missile", "Adori gran", 70),
            new Runa("Sudden Death", "Adori vita vis", 220),
            new Runa("Intense Healing", "Adura gran", 60),
            new Runa("Ultimate Healing", "Adura vita", 100),
            new Runa("Fireball", "Adori flam", 60),
            new Runa("Great Fireball", "Adori gran flam", 120),
            new Runa("Magic Wall", "Adevo grav tera", 250),
            new Runa("Destroy Field", "Adito grav", 60),
            new Runa("Desintegrate", "Adito tera", 100),
            new Runa("Poison Field", "Adevo grav pox", 50),
            new Runa("Fire Field", "Adevo grav flam", 60),
            new Runa("Energy Field", "Adevo grav vis", 80),
            new Runa("Envenom", "Adevo res pox", 100),
            new Runa("Soulfire", "Adevo res flam", 150),
            new Runa("Paralyze", "Adana ani", 600),
            new Runa("Explosion", "Adevo mas hur", 180),
            new Runa("Poison Wall", "Adevo mas grav pox", 160),
            new Runa("Fire Wall", "Adevo mas grav flam", 200),
            new Runa("Energy Wall", "Adevo mas grav vis", 250),
            new Runa("Poison Bomb", "Adevo mas pox", 130),
            new Runa("Fire Bomb", "Adevo mas flam", 150),
            new Runa("Energy Bomb", "Adevo mas vis", 220),
            new Runa("Chameleon", "Adevo ina", 150),
            new Runa("Convince Creature", "Adeta sio", 100),
            new Runa("Animate Dead", "Adana mort", 300)
        ];
    }

    gerarCardRuna(runa, index) {
        const custoPorRuna = runa.calcularCustoPorRuna();

        return `
            <div class="rune-card" id="rune-${index}">
                <div class="rune-name">
                    ${runa.name}
                    ${runa.altName ? `<span class="alt-name">(${runa.altName})</span>` : ''}
                </div>
                <div class="rune-details">
                    <div class="detail-item">
                        <strong>Custo:</strong> ${runa.cost}gp
                    </div>
                    <div class="detail-item">
                        <strong>Mana:</strong> ${runa.mana}
                    </div>
                    <div class="detail-item">
                        <strong>Quantidade:</strong> ${runa.quantity}
                    </div>
                    <div class="detail-item">
                        <strong>Custo/Runa:</strong> ${custoPorRuna.toFixed(2)}gp
                    </div>
                </div>
                <input type="number" class="price-input" placeholder="Preço de venda por runa" 
                       id="price-${index}" min="0" step="0.01">
                <div class="results">
                    <div class="result-item">
                        <div class="result-label">Runas/Hora</div>
                        <div class="result-value neutral" id="quantity-${index}">0</div>
                    </div>
                    <div class="result-item">
                        <div class="result-label">Lucro/Runa</div>
                        <div class="result-value neutral" id="profit-per-rune-${index}">0gp</div>
                    </div>
                    <div class="result-item">
                        <div class="result-label">Lucro/Hora</div>
                        <div class="result-value neutral" id="profit-per-hour-${index}">0gp</div>
                    </div>
                </div>
            </div>
        `;
    }

    calcular() {
        const manaTotal = this.manaManager.calcularRegeneracaoTotal();
        document.getElementById('total-mana-regen').textContent = manaTotal;

        const resultadosRanking = [];

        this.runas.forEach((runa, index) => {
            const inputPreco = document.getElementById(`price-${index}`);
            const precoVenda = parseFloat(inputPreco.value) || 0;

            const resultado = runa.calcularLucro(precoVenda, manaTotal);

            // Armazenar para o ranking
            if (precoVenda > 0) {
                resultadosRanking.push({
                    index: index,
                    nome: runa.name,
                    lucroPorHora: resultado.lucroPorHora
                });
            }

            // Atualizar display
            this.atualizarDisplayRuna(index, resultado);
        });

        // Atualizar ranking
        this.rankingManager.atualizar(resultadosRanking);

        // Destacar melhor runa
        this.destacarMelhorRuna(resultadosRanking);
    }

    atualizarDisplayRuna(index, resultado) {
        document.getElementById(`quantity-${index}`).textContent = resultado.runasPorHora.toFixed(1);

        const elementoLucroPorRuna = document.getElementById(`profit-per-rune-${index}`);
        elementoLucroPorRuna.textContent = resultado.lucroPorRuna.toFixed(2) + 'gp';
        elementoLucroPorRuna.className = `result-value ${resultado.lucroPorRuna > 0 ? 'positive' :
            resultado.lucroPorRuna < 0 ? 'negative' : 'neutral'
            }`;

        const elementoLucroPorHora = document.getElementById(`profit-per-hour-${index}`);
        elementoLucroPorHora.textContent = this.formatarNumero(Math.floor(resultado.lucroPorHora)) + 'gp';
        elementoLucroPorHora.className = `result-value ${resultado.lucroPorHora > 0 ? 'positive' :
            resultado.lucroPorHora < 0 ? 'negative' : 'neutral'
            }`;
    }

    destacarMelhorRuna(resultados) {
        const melhorIndice = resultados.length > 0 ? resultados[0].index : -1;

        this.runas.forEach((_, index) => {
            const card = document.getElementById(`rune-${index}`);
            if (index === melhorIndice && resultados[0]?.lucroPorHora > 0) {
                card.classList.add('best-profit');
            } else {
                card.classList.remove('best-profit');
            }
        });
    }

    formatarNumero(num) {
        return num.toLocaleString('pt-BR');
    }

    renderizar() {
        const container = document.getElementById('runes-container');
        container.innerHTML = this.runas.map((runa, index) =>
            this.gerarCardRuna(runa, index)
        ).join('');
    }

    configurarEventos() {
        // Eventos de mudança de configuração
        document.querySelectorAll('input[type="radio"]').forEach(radio => {
            radio.addEventListener('change', () => this.calcular());
        });

        // Eventos de mudança de preço
        this.runas.forEach((_, index) => {
            document.getElementById(`price-${index}`).addEventListener('input', () => this.calcular());
        });
    }

    inicializar() {
        this.renderizar();
        this.configurarEventos();
        this.calcular();
    }
}

// Classe para gerenciar o menu mobile
class MenuManager {
    constructor() {
        this.navToggle = document.getElementById('nav-toggle');
        this.navMenu = document.getElementById('nav-menu');
        this.configurarEventos();
    }

    configurarEventos() {
        if (this.navToggle && this.navMenu) {
            this.navToggle.addEventListener('click', () => this.toggleMenu());

            // Fechar menu ao clicar em um link
            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => this.fecharMenu());
            });
        }
    }

    toggleMenu() {
        this.navMenu.classList.toggle('active');
        this.navToggle.classList.toggle('active');
    }

    fecharMenu() {
        this.navMenu.classList.remove('active');
        this.navToggle.classList.remove('active');
    }
}

// Inicialização da aplicação
document.addEventListener('DOMContentLoaded', () => {
    const calculadora = new CalculadoraRunas();
    calculadora.inicializar();

    const menuManager = new MenuManager();
});