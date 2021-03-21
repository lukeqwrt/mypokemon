

const pokeContainer = document.getElementById('poke-container');
const pokemons_Number = 150;




const fetchPokemons = async () => {
    for(let i = 1; i <= pokemons_Number; i++){
        await getPokemon(i);
        console.log(i)
    }
}

const getPokemon = async id => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}?limit=800&offset=800`;
    // const url = `https://pokeapi.co/api/v2/ability/1/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();

    createPokemonCard(pokemon);
};


fetchPokemons();


function createPokemonCard(pokemon){
    const pokemonEl = document.createElement("div");
    pokemonEl.classList.add('pokemon');

    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

    const pokeInnerHTML = `
        <div class="img-container">
            <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png" loading="lazy"/>
        </div>
        <div class="info">
            <span class="number">${pokemon.id}</span>
            <h3 class="name"> ${name} </h3>  
        </div>

    `;
    
    pokemonEl.innerHTML = pokeInnerHTML;
    pokeContainer.appendChild(pokemonEl)
}

