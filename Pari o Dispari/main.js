let scelta = prompt("Pari o Dispari")

let numeroutente = prompt("Scegli un numero")

function Randomica (){
    Math.floor(Math.random()* 10)+1

}

let numerorandom = Randomica(10)

let somma = numeroutente + numerorandom

pariodispari (somma)

function pariodispari(n){

    if(n % 2 == 0 ){
        return "pari"
    } else {
        return "dispari"
    }
}

if(scelta === pariodispari (somma)){
    alert("l'utente ha vinto")
} else {
    alert("il pc ha vinto")
}
