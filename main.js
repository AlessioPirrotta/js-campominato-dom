// Il computer deve generare 16 numeri casuali nello stesso range 
// della difficoltà prescelta: le bombe. Attenzione: Nell’array d
// elle bombe non potranno esserci due numeri uguali.
// In seguito l'utente clicca su una cella: se il numero è 
// presente nella lista dei numeri generati - abbiamo calpes
// tato una bomba - la cella si colora di rosso e la partita termina. 
// Altrimenti la cella cliccata si colora di azzurro e l'utente può c
// ontinuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando 
// raggiunge il numero massimo possibile di numeri consentiti 
// (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, 
// cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

const griglia = document.getElementById("grid");
const button = document.getElementById("btn");
const difficoltà = document.getElementById("sct");
let risultato = document.getElementById("rs");
let punteggio = document.getElementById("pt");
let arrayBombeE = [];
let arrayBombeM = [];
let arrayBombeH = [];
let arrayBox = [];
const difficoltaIniziale = difficoltà.value;
let gameOver = false;
let checkbox = 0;
let safebox = 0;

for (let j = 0; j < 16; j++) {
    bomba = generaNumeroCasuale(1, 100);
    if (!arrayBombeE.includes(bomba)) {
        arrayBombeE.push(bomba);
    }
}

for (let j = 0; j < 16; j++) {
    bomba = generaNumeroCasuale(1, 81);
    if (!arrayBombeM.includes(bomba)) {
        arrayBombeM.push(bomba);
    }
}

for (let j = 0; j < 16; j++) {
    bomba = generaNumeroCasuale(1, 49);
    if (!arrayBombeH.includes(bomba)) {
        arrayBombeH.push(bomba);
    }
}

button.addEventListener("click", function () {
    griglia.classList.remove("d-none");

    const difficoltaSelezionata = difficoltà.value;

    creaGriglia(difficoltaSelezionata);
    gameOver = false;
    checkbox = 0;
    safebox = 0;
});

function creaGriglia(difficolta) {

    griglia.innerHTML = "";

    if (difficolta === "easy") {
        for (let i = 0; i < 100; i++) {
            let box = document.createElement("div");
            box.classList.add("box");
            griglia.append(box);
            box.innerHTML = i + 1;

            box.addEventListener("click", function () {
                if (gameOver === true) {
                    return;
                }

                this.classList.toggle("active");
                console.log(this);

                if (arrayBombeE.includes(parseInt(box.innerHTML))) {
                    box.classList.toggle("activebomb");
                    gameOver = true;
                    risultato.innerHTML= "Hai perso"
                    punteggio.innerHTML= `Punteggio ${checkbox}`
                } else {
                    checkbox++;
                }

                if (checkbox === 100 - arrayBombeE.length) {
                    gameOver = true;
                    risultato.innerHTML= "Hai vinto"
                }
            });

            arrayBox.push(box);
        }

    } else if (difficolta === "medium") {
        for (let i = 0; i < 81; i++) {
            let box = document.createElement("div");
            box.classList.add("box2");
            griglia.append(box);
            box.innerHTML = i + 1;

            box.addEventListener("click", function () {
                if (gameOver === true) {
                    return;
                }

                this.classList.toggle("active");
                console.log(this);

                if (arrayBombeM.includes(parseInt(box.innerHTML))) {
                    box.classList.toggle("activebomb");
                    gameOver = true;
                } else {
                    checkbox++;
                }

                if (checkbox === 81 - arrayBombeM.length) {
                    gameOver = true;
                }
            });

            arrayBox.push(box);
        }
    } else if (difficolta === "hard") {
        for (let i = 0; i < 49; i++) {
            let box = document.createElement("div");
            box.classList.add("box3");
            griglia.append(box);
            box.innerHTML = i + 1;

            box.addEventListener("click", function () {
                if (gameOver === true) {
                    return;
                }

                this.classList.toggle("active");
                console.log(this);

                if (arrayBombeH.includes(parseInt(box.innerHTML))) {
                    box.classList.toggle("activebomb");
                    gameOver = true;
                } else {
                    checkbox++;
                }

                if (checkbox === 49 - arrayBombeH.length) {
                    gameOver = true;
                }
            });

            arrayBox.push(box);
        }
    }
}

console.log(arrayBombeH);

function generaNumeroCasuale(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


//   limite di tentativi e messaggio finale 



  
 
  
  
  






