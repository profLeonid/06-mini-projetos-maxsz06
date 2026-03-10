'use strict'

function calcularDesconto(){
   
    const Defpreco = document.getElementById('preco')
    const Defdesconto =  document.getElementById('desconto')

    const preco = parseFloat(Defpreco)
    const desconto = parseFloat(Defdesconto)

    if (preco === "" || desconto === "") {
        alert('Preencha todas as caixas!');
        return false;
    } else {
        let resultado = calcularDesconto(preco, desconto);

    }

function calcularDesconto (preco,desconto){

    const porcentagem = desconto/100
    const valorComDesconto = preco - (preco*porcentagem)
        return valorComDesconto

}

}