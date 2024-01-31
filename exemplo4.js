const pessoaObj = {
    nome: "Joao",
    idade: 70,
    altura: 1.4,
    profissao: "estudante",
    faixaEtaria: function () {
        if (this.idade <= 21) {
            return ("Jovem");
        } else if (this.idade <= 65) {
            return ("Adulto(a)");
        } else {
            return ("Idoso(a)");
        }
    },
    apresentar: function () {
        const valorIdade = this.faixaEtaria()
        console.log(`Olá! Meu nome é ${this.nome}, sou um ${valorIdade} de ${this.idade} anos, ${this.altura} de altura e sou ${this.profissao}.`)
    }
};

pessoaObj.apresentar();