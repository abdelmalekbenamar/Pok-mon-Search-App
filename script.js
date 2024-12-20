let apiLink = " https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/";
let data = [];
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const sprite = document.getElementById("sprite");
const type = document.getElementById("types");
const hp = document.getElementById("hp");
const attak = document.getElementById("attack");
const defence = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");



const searchButt = document.getElementById("search-button");
const fetchData = async (newLink) => {
    try{
    const res = await fetch(newLink);
    let result = await res.json();
    let resultArray = Object.keys(result);

    console.log(resultArray.length);
    
    data.push(result);
    pokemonName.textContent = data[0].name;
    pokemonId.textContent = "#" + data[0].id;
    height.textContent = data[0].height;
    weight.textContent = data[0].weight;
    sprite.setAttribute("src", data[0].sprites.front_default);
    let typesList = data[0].types;
    typesList.forEach(el => {
        let typeDiv = document.createElement("div");
        typeDiv.className = "type";
        typeDiv.textContent = el["type"].name;
        type.appendChild(typeDiv);
    });
    let statsList = data[0].stats;
    hp.textContent = statsList[0].base_stat;
    attak.textContent = statsList[1].base_stat;
    defence.textContent = statsList[2].base_stat;
    specialAttack.textContent = statsList[3].base_stat;
    specialDefense.textContent = statsList[4].base_stat;
    speed.textContent = statsList[5].base_stat;
}catch(err){
    console.log(err);
    alert("Pokémon not found");
}
    
    data = [];
}
searchButt.addEventListener("click", () =>{
    let inputSearch = document.getElementById("search-input").value;
    inputSearch = inputSearch.toLowerCase();
    const apiUrl = apiLink + inputSearch;
    type.innerHTML = "";
    pokemonName.innerHTML = "";
    fetchData(apiUrl);
});
