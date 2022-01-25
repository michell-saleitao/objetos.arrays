// Testes com Arrays2
// Média dos alunos

const alunos = [{
        nome: "Michell",
        idade: 39,
        nota1: 8.5,
        nota2: 5.5
    },
    {
        nome: "Nielson",
        idade: 38,
        nota1: 9.5,
        nota2: 2.5
    }
]
const medias = [{
    media0: (alunos[0].nota1 + alunos[0].nota2) / 2,
    media1: (alunos[1].nota1 + alunos[1].nota2) / 2
}]
console.log("HEllo World!!!")
console.log("Resultado Aluno 1:") //Michell Sá Leitão Dev Arrays
if (medias[0] >= 7) {
    console.log(`${alunos[0].nome}, você obteve média igual a ${medias[0]}, portanto, estás APROVADO!`)
} else {
    console.log(`${alunos[0].nome}, você obteve média igual a ${medias[0]}, portanto, estás REPROVADO!`)
}
console.log("Resultado Aluno 2:")

if (medias[1] >= 7) {
    console.log(`${alunos[1].nome}, você obteve média igual a ${médias[1]}, portanto, estás APROVADO!`)
} else {
    console.log(`${alunos[1].nome}, você obteve média igual a ${medias[1]}, portanto, estás REPROVADO!`)
}