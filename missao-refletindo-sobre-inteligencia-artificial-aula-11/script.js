const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você se considera bom em Programação?",
        alternativas: [
            {
                texto: "Sim!",
                afirmacao: "Respostas: Certo, "
            },
            {
                texto: "+ OU -",
                afirmacao: "Respostas: Errado (continue se aprimorando), "
            }
        ]
    },
    {
        enunciado:"Quando o código não está funcionando, o que você faz?" ,
        alternativas: [
            {
                texto: "Pesquiso sobre na internet para solucionar o problema, sem me importar em aprender como solucionar.",
                afirmacao: "Errado, "
            },
            {
                texto: "Pesquiso e aprendo como resolver, sempre de forma ativa, para que o erro não se repita.",
                afirmacao: "Certo, "
            }
        ]
    },
    {
        enunciado: "O que é HTML?",
        alternativas: [
            {
                texto: "Estrutura de um site.",
                afirmacao: "Certo, "
            },
            {
                texto: "Visual do site",
                afirmacao: "Errado, "
            }
        ]
    },
    {
        enunciado: "Qual é a forma mais correta de se definir AI (Inteligência Artificial)?",
        alternativas: [
            {
                texto: "Inteligência artificial atua na reprodução de padrões de comportamento semelhantes ao humano por dispositivos e programas computacionais e futuramente vai dominar o mundo.",
                afirmacao: "Errado."
            },
            {
                texto: "Serve como uma ferramenta, feita para ajudar o serhumano no seu cotidiano, criar textos, imagens ou até vídeos.",
                afirmacao: "Certo."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
