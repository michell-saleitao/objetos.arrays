// Criando objeto empresa Shaman Engenharia

const empresa = [{
    nome: "Shaman Engenharia",
    cor: "Azul",
    Foco: "Tecnologia",
    endereco: {
        rua: "Machado de Assis",
        numero: 56
    }
}]

console.log(`A empresa ${empresa[0].nome} está localizada na rua ${empresa[0].endereco.rua}, número ${empresa[0].endereco.numero}.`)