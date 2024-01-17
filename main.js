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
let arrayBombe= []
const difficoltaIniziale = difficoltà.value;
let gameOver= true

for(let j=0;j<= 16; j++){
     bomba = generaNumeroCasuale(1, 100)
     if (!arrayBombe.includes(bomba)) {
         arrayBombe.push(bomba);
        }
    }
    

    button.addEventListener("click", function () {
        griglia.classList.remove("d-none");
    
        const difficoltaSelezionata = difficoltà.value;
    
        creaGriglia(difficoltaSelezionata);

    });
    console.log(arrayBombe)


function creaGriglia(difficolta) {
    
    griglia.innerHTML = "";

    if (difficolta === "easy") {
        for (let i = 0; i < 100; i++) {
            if (!gameOver) {
                break; // Se il gioco è già finito, interrompi il ciclo
              }
            let box = document.createElement("div");
            box.classList.add("box");
            griglia.append(box);
            box.innerHTML = i + 1
            box.addEventListener("click", function () {
                this.classList.toggle("active");
                console.log(this);
                if (arrayBombe.includes(parseInt(box.innerHTML))) {
                    box.classList.toggle("activebomb")
                    gameOver= false
                    console.log(gameOver)
                  }
            });

            
            
        }
    } else if (difficolta === "medium") {
        for (let i = 0; i < 81; i++) {
            let box = document.createElement("div");
            box.classList.add("box2");
            griglia.append(box);
            box.innerHTML = i + 1;
            box.addEventListener("click", function () {
                this.classList.toggle("active");
                console.log(this);
                if (arrayBombe.includes(parseInt(box.innerHTML))) {
                    box.classList.toggle("activebomb");
                  }
            });
        }
    }
    else if (difficolta === "hard") {
        for (let i = 0; i < 49; i++) {
            let box = document.createElement("div");
            box.classList.add("box3");
            griglia.append(box);
            box.innerHTML = i + 1;
            box.addEventListener("click", function () {
                this.classList.toggle("active");
                console.log(this);
                if (arrayBombe.includes(parseInt(box.innerHTML))) {
                    box.classList.toggle("activebomb");
                  }
            });
        }
    }
}




function generaNumeroCasuale(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

 
  
  
  






