//Eerste opdracht, vertelt of een getal even of oneven is. 
function opdracht1(num){
     if(num % 2 == 0){
         console.log(`${num} is even.`);
     }
     else {
         console.log(`${num} is uneven.`);
     }
 }

//Verwijdert het woord "not" uit de string.
const string = 'Programming is not so cool.'
function opdracht2() {
    console.log (string.replace (' not',''));
}

//Vergelijk waarde met string. Slaat nergens op, het is als appels met peren vergelijken.
function opdracht3() {
    if (1400 == 'Ik woon in Naboo.') {
        console.log ('True')
    }
    else {
        console.log ('False')
    }
}