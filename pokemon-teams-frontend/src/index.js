const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`
const main = document.querySelector("main");

document.addEventListener("DOMContentLoaded", fetchTrainers);

function fetchTrainers() {
    return fetch(TRAINERS_URL)
    .then(resp => resp.json())
    .then(data => createTrainerCard(data))
}

function createTrainerCard(trainers) {
    trainers.forEach(trainer => {
        let card = document.createElement("div");
        card.className = "card";
     
        let add = document.createElement("button");
        add.innerText = "Add Pokemon"
     
        let name = document.createElement("p");

        card.id = trainer.id;
        add.id = trainer.id;
        name.innerText = trainer.name;
        card.appendChild(name);
        card.appendChild(add);
        main.append(card);
        listPokemon(trainer);
    })
}

function listPokemon(trainer) {
    trainer.pokemons.forEach(pokemon => {
        console.log(pokemon.nickname)
    })
}