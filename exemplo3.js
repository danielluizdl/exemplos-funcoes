const pessoaObj = {
    nome: "Joao",
    idade: 12,
    altura: 1.4,
    profissao: "estudante"
};
function verificarIdade(idade) {
    if (idade <= 21) {
        return ("Jovem");
    } else if (idade <= 65) {
        return ("Adulto(a)");
    } else {
        return ("Idoso(a)");
    }
}
const valorIdade = verificarIdade(pessoaObj.idade)
function apresentar(pessoa) {
    console.log(`Olá! Meu nome é ${pessoa.nome}, sou um ${valorIdade} de ${pessoa.idade} anos, ${pessoa.altura} de altura e sou ${pessoa.profissao}.`)
}

apresentar(pessoaObj)