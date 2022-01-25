// Teste de objetos
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
const media1 = (alunos[0].nota1 + alunos[0].nota2) / 2
const aprov1 = media1 >= 7
const media2 = (alunos[1].nota1 + alunos[1].nota2) / 2
const aprov2 = media2 >= 7

console.log("HEllo World!")

if (aprov1) {
    console.log(`${alunos[0].nome}, você obteve média igual a ${media1}, portanto, você foi APROVADO!`)
} else {
    console.log(`${alunos[0].nome}, você obteve média igual a ${media1}, portanto você foi REPROVADO!`)
}

if (aprov2) {
    console.log(`${alunos[1].nome}, você obteve média igual a ${media2}, portanto, você foi APROVADO!`)
} else {
    console.log(`${alunos[1].nome}, você obteve média igual a ${media2}, portanto você foi REPROVADO!`)
}