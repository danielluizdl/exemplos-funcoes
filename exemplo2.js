function verificarIdade(idade) {
    if (idade <= 21) {
        return ("Jovem");
    } else if (idade <= 65) {
        return ("Adulto(a)");
    } else {
        return ("Idoso(a)");
    }
}

// const valorRetornado = verificarIdade(25)
console.log(verificarIdade(18))
console.log(verificarIdade(25))
console.log(verificarIdade(70))