'use strict'

const removerClasses =  function(){

    const resultado = document.getElementById('resultado')
    resultado.classList.remove('aprovado', 'recuperacao', 'reprovado')

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

    }else{

        let mediaAluno = (nota1 + nota2 + nota3)/3

        removerClasses()
        if (mediaAluno > 7) {
            resultado.classList.add('aprovado')
            resultado.textContent = 'APROVADO'
          }
          else if (mediaAluno >= 5) {
            resultado.classList.add('recuperacao')
            resultado.textContent = 'RECUPERAÇÃO'
          }
          else {
            resultado.classList.add('reprovado')
            resultado.textContent = 'REPROVADO'
          }
    }
}
