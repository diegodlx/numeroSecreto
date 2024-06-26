let listaDeNumerosSorteados = [];
let ateNumero = 10;
let numeroSecreto = gerarNumeroAleatorio();
let quantidadeTentativas = 0;

reiniciarJogo();

function verificarChute(){
    quantidadeTentativas++
    let chute = document.querySelector("input").value
    if (chute == numeroSecreto){
        tentativas = quantidadeTentativas > 1 ? "tentativas" : "tentativa";
        exibirTextoNaTela("h1", "Parabéns, você acertou!!!");
        exibirTextoNaTela("p", `Você descobriu o número secreto em ${quantidadeTentativas} ${tentativas}.`)
        document.getElementById("reiniciar").removeAttribute("disabled");
        document.getElementById("chutar").setAttribute("disabled", true);
    }else if(chute < numeroSecreto){
        exibirTextoNaTela("p", "O número é maior.");
    }else {
        exibirTextoNaTela("p", "O número é menor.");
    }
    limparCampo()
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() *ateNumero +1);
    if (listaDeNumerosSorteados.length == ateNumero) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio()
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo(){
    document.querySelector("input").value = "";
}

function reiniciarJogo(){
    limparCampo()
    numeroSecreto = gerarNumeroAleatorio();
    console.log(listaDeNumerosSorteados);
    quantidadeTentativas = 0;
    iciarJogo();
    document.getElementById("reiniciar").setAttribute("disabled", true);
    document.getElementById("chutar").removeAttribute("disabled");
}

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function iciarJogo(){
    exibirTextoNaTela("h1", "Jogo do número secreto ");
    exibirTextoNaTela("p", "Escolha um número de 1 a 10");
}