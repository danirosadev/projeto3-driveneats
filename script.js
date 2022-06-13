let pratoSelecionado;
let bebidaSelecionada;
let sobremesaSelecionada;

function selecionarPrato(elemento){
    pratoSelecionado = elemento.innerHTML;
    
    let item = document.querySelector('.selecionado');
    if (item !== null) {
        item.classList.remove('selecionado');
    }
    
    elemento.classList.add('selecionado');
    
    fazerPedido();
    
}


function selecionarBebida(elemento){
    bebidaSelecionada = elemento.innerHTML;

    let item = document.querySelector('.bebidas .selecionado');
    if (item !== null) {
        item.classList.remove('selecionado');
    }
    
    elemento.classList.add('selecionado');
    fazerPedido()
}

function selecionarSobremesa(elemento){
    sobremesaSelecionada = elemento.innerHTML;

    let item = document.querySelector('.sobremesas .selecionado');
    if (item !== null) {
        item.classList.remove('selecionado');
    }
    
    elemento.classList.add('selecionado');

    fazerPedido()
}

function fazerPedido() {
    
    let botao = document.querySelector('button');
    if (pratoSelecionado && bebidaSelecionada && sobremesaSelecionada){
        botao.classList.add('botao-ativo');
        botao.innerHTML = "Fechar Pedido"
        botao.disabled = false;

    } else {
        botao.disabled = true;
    }
   
}

function zapZap(){
    pratoSelecionado = document.querySelector('.selecionado .nome-prato').innerHTML;
    bebidaSelecionada = document.querySelector('.selecionado .nome-bebida').innerHTML;
    sobremesaSelecionada = document.querySelector('.selecionado .nome-sobremesa').innerHTML;

    let valorPrato = parseFloat(document.querySelector('.selecionado .valor-prato').innerHTML);
    let valorBebida = parseFloat(document.querySelector('.selecionado .valor-bebida').innerHTML);
    let valorSobremesa = parseFloat(document.querySelector('.selecionado .valor-sobremesa').innerHTML);

    let valorTotal = valorPrato + valorBebida + valorSobremesa;

    let mensagemZap = `Olá, gostaria de fazer o pedido:
    - Prato: ${pratoSelecionado}
    - Bebida: ${bebidaSelecionada}
    - Sobremesa: ${sobremesaSelecionada}
    Total: ${valorTotal.toFixed(2)}`

    window.location.href =  "https://wa.me/5541992748121?text=" + encodeURIComponent(mensagemZap);
}