export default function gerarNumeros(total = 6) {
    let numerosMegaSena = [];
    for (let i = 0; i < total && total <= 60; i++) {
        let numero;
        let possuiNumero = false;
        do {
            numero = Math.floor(Math.random() * 60) + 1;
            possuiNumero = numerosMegaSena.includes(numero);
        } while (possuiNumero);
        numerosMegaSena.push(numero)
    }
    return numerosMegaSena.sort();
}