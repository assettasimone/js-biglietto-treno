/* Ask Tickets km */
const ticketKm = Number(prompt('Inserisci il numero di kilometri per il biglietto'));
console.log(ticketKm);

/* Ask user Age */
const userAge = Number(prompt('Inserisci la tua età'));
console.log(userAge);

/* Calcolo il prezzo del biglietto base in base ai km */

const basePrice = ticketKm * 0.21;

/* Controllo l'età dell'utente per applicare scontistiche */
let finalPrice = 1;


if (userAge > 65) {
    /* applico lo sconto del 40% al prezzo di base */
    finalPrice = basePrice - (basePrice / 100 * 40)
    console.log(finalPrice)
} else if (userAge < 18) {
    /* applico lo sconto del 40% al prezzo di base */
    finalPrice = basePrice - (basePrice / 100 * 20)
    console.log('lo sconto del 20% è stato applicato ' + finalPrice)
}
else {
    console.log('Non puoi ricevere uno sconto')
    finalPrice = basePrice;
}

document.writeln('il prezzo finale del tuo biglietto è ' + finalPrice + '€');