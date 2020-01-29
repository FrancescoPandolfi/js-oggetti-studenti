$(document).ready(function () {


//   Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.


var studente = {'Nome' : 'Giovanna', 'Cognome' : 'D’arco', 'eta' : 608};

for (var key in studente) {
  var li = $('.template li').clone().append(studente[key]);
  $('.primaparte').append(li);
}


// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno nome e cognome

  var arrStudenti = [
    {'Nome' : 'Giovanna', 'Cognome' : 'D’arco', 'eta' : 608},
    {'Nome' : 'Clark', 'Cognome' : 'Kent', 'eta' : 1200},
    {'Nome' : 'Peter', 'Cognome' : 'Parker', 'eta' : 22}
  ];

arrStudenti.forEach(function(object) {
  var li = $('.template li').clone().append('Nome e cognome studente :' + object.Nome + ' ' + object.Cognome);
  $('.secondaparte').append(li);
});


// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

var nuovoStudente = {}
var nome = prompt('Inserisci il tuo nome');
var cognome = prompt('Inserisci il tuo cognome');
var eta = prompt('Inserisci la tua età');

nuovoStudente.Nome = nome;
nuovoStudente.Cognome = cognome
nuovoStudente.Eta = eta;
arrStudenti.push(nuovoStudente);


arrStudenti.forEach(function(object) {
  let li = $('.template li').clone().append('Nome e cognome studente :' + object.Nome + ' ' + object.Cognome);
  $('.terzaparte').append(li);
});




});
