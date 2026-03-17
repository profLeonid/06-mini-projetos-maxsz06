'use strict'

function IMCcalculado(altura, peso) {
    return peso / (altura * altura)
}

function classificacao(imc){
    if (imc < 18.5) {
        return { classe: "abaixopeso", texto: "Abaixo do peso" }
    } else if (imc < 25) {
        return { classe: "pesonormal", texto: "Peso normal" }
    } else if (imc < 30) {
        return { classe: "sobrepeso", texto: "Sobrepeso" }
    } else if (imc < 35) {
        return { classe: "obesidade1", texto: "Obesidade grau I" }
    } else if (imc < 40) {
        return { classe: "obesidade2", texto: "Obesidade grau II" }
    } else {
        return { classe: "obesidade3", texto: "Obesidade grau III" }
    }

}

function calcularIMC() {

    let nome = document.getElementById('nomeUser').value
    let altura = Number(document.getElementById('altura').value)/100
    let peso = Number(document.getElementById('peso').value)
    const resultado = document.getElementById('resultado')

    const valorImc = IMCcalculado(altura,peso)

    const situacao = classificacao(valorImc)
    resultado.textContent = `O Peso do ${nome} É ${valorImc.toFixed(2)}, Ele Esta ${situacao.texto}`
    resultado.classList.remove('abaixopeso','pesonormal','sobrepeso','sobrepeso','obesidade1','obesidade2','obesidade3')
    resultado.classList.add(situacao)


}

