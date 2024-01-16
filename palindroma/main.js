let parola = prompt("Dimmi una parola");

console.log(parola);

function palindroma(word) {
    let parolaContrario = "";
    for (let i = word.length - 1; i >= 0; i--) {
        parolaContrario += word[i];
    }
    return parolaContrario;
}

let parolaContrario = palindroma(parola);

console.log(parolaContrario);

if (parola === parolaContrario) {
    alert("La parola è palindroma");
} else {
    alert("La parola non è palindroma");
}
