// function imprimirNomes(nome, idade, altura, profissao) {
//     console.log(`Olá! Meu nome é ${nome}, sou um jovem de ${idade} anos, ${altura} de altura e sou ${profissao}.`)
// }

// imprimirNomes("Joao", "12", "1.4", "estudante")

// Correcao do exercicio

const pessoaObj = {
    nome: "Joao",
    idade: 12,
    altura: 1.4,
    profissao: "estudante"
};

function apresentar(pessoa) {
    console.log(`Olá! Meu nome é ${pessoa.nome}, sou um jovem de ${pessoa.idade} anos, ${pessoa.altura} de altura e sou ${pessoa.profissao}.`)
}
apresentar(pessoaObj)