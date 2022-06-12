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
    fazerPedido()
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

/*function mostrarIcon () {
    
    let itemSelecionado = document.querySelector('.oculto');
    itemSelecionado.classList.remove('oculto');
}*/
let linkPedido = `https://wa.me/5541992748121?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20o%20pedido%3A-%20Prato%3A${pratoSelecionado}-%20Bebida%3A%20${bebidaSelecionada}-%20Sobremesa%3A%20${sobremesaSelecionada}Total: R$ 27.70`

function fazerPedido() {
   
    let botao = document.querySelector('button');
    if (pratoSelecionado && bebidaSelecionada && sobremesaSelecionada){
        botao.classList.add('botao-ativo');
        botao.innerHTML = "Fechar Pedido"
    } else {
        botao.disabled = true;
        botao.link(linkPedido);
    }
}
