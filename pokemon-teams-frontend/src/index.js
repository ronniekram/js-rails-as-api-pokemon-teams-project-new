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

        let ul = document.createElement("ul");

        card.id = trainer.id;
        add.id = trainer.id;
        name.innerText = trainer.name;

        card.appendChild(name);
        card.appendChild(add);

        trainer.pokemons.forEach(pokemon => {
            let release = document.createElement("button");
            release.className = "release";
            release.innerText = "Release";
            release.id = pokemon.id;
    
            let li = document.createElement("li");
            li.innerText = `${pokemon.nickname} (${pokemon.species})`
            li.appendChild(release);
            ul.appendChild(li);
        })

 
        card.append(ul);
        main.append(card);
    })
}