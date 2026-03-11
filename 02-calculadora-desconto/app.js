'use strict'

function removerClasses() {
    const resultado = document.getElementById('resultado')
    resultado.classList.remove('cincoporcento', 'dezporcento','acimadedez')
}

function calcularDesconto(){
   
    const Defpreco = document.getElementById('preco') // Pegar o objeto
    const Defdesconto =  document.getElementById('desconto') // Pegar o objeto
    const ValPreco = Defpreco.value
    const ValDesconto = Defdesconto.value

    const preco = Number(ValPreco)
    const desconto = Number(ValDesconto)


    if (Defpreco === "" || Defdesconto === "") {
        alert('Preencha todas as caixas!');
        return false;
    } else {
        let resultado = calcularDesconto(preco, desconto);
    }

function calcularDesconto (preco,desconto){

    removerClasses()
    const porcentagem = desconto/100
    const valorComDesconto = preco - (preco*porcentagem)

    
    if(desconto <=5 ){
        resultado.classList.add('cincoporcento')
    }else if(desconto >=10){
        resultado.classList.add('dezporcento')
    }else if (desconto>10){
        resultado.classList.add('acimadedez')
    }

}

}