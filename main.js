const firstName = "Patryk";
const age = "22";

alert("Witaj na mojej stronie!");

console.log("Witaj na mojej stronie!");
console.log(`Nazywam się ${firstName} i mam ${age} lata.`);

const heading = document.querySelector('.main__heading--js');

heading.innerHTML = `Nazywam się ${firstName} i mam ${age} lata.`

const summary = document.querySelector('.week-summary--js');

summary.innerHTML = 'TU JEST TEKST WPISANY DO HTML POPRZEZ JS'