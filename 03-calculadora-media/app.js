'use strict'

const removerClasses =  function(){

}
 
const calcularMedia =function(){

    let defNota1 = document.getElementById('nota1')
    let defNota2 = document.getElementById('nota2')
    let defNota3 = document.getElementById('nota3')
    let nota1 = Number(defNota1.value)
    let nota2 = Number(defNota2.value)
    let nota3 = Number(defNota3.value)

    if (nota1 == ''||nota2 == '' || nota3 ==''){
        alert('Erro: Preencha todas as colunas')
    }else if (nota1 <0 || nota1 >10 ||
              nota2 <0 || nota2 >10 ||
              nota3 <0 || nota3 >10
    ){  alert('Erro: Apenas numeros entre 0 e 10')

    }

    let mediaAluno = (nota1 + nota2 + nota3)/3
   

    if (mediaAluno>7){
        //Aprovado
    }else if (mediaAluno >=5){
        //Recuperacao
    }else if ( mediaAluno< 4.9){
        //Reprovado
    }

}