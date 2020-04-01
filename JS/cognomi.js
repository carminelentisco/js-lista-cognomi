/********** COGNOMI JS **********/

// Variabili iniziali
var cognomeUente = prompt('Inserisci il tuo cognome');
var listaCognomi = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];

// Copia dell arrey ( listaCognomi -> listaCognomiOriginal )

var listaCognomiOriginal = listaCognomi.slice();

// Aggiunta 

listaCognomi.push(cognomeUente);

// Ordina la lista

listaCognomi.sort();

// Cerca l'indice del cognome

var positonCognome = listaCognomi.indexOf(cognomeUente) + 1;

//Consol log

console.log('LISTA ORIGINALE : ', listaCognomiOriginal );
console.log('LISTA ORDINATA : ', listaCognomi);
console.log('POSIZIONE NELLA LISTA : ', positonCognome);