/********** Controllo inserimento JS **********/

//console.log('cognomi.js è stato inserito correttamente.');

var cognomeUente = prompt('Inserisci il tuo cognome');
var listaCognomi = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];

// Aggiunta 

listaCognomi.push(cognomeUente);
console.log('Lista cognomi in ordine sparso : ', listaCognomi )

// Stampa la lista in ordine alfabetico

listaCognomi.sort();
console.log('Lista cognomi ordinata alfabeticamente : ', listaCognomi);

