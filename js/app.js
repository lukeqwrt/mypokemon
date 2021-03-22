

const pokeContainer = document.getElementById('poke-container');

const pokemons_Number = 150;

const colors = {
	fire: '#FDDFDF',
	grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
};
const main_types = Object.keys(colors);


const fetchPokemons = async () => {
    for(let i = 1; i <= pokemons_Number; i++){
        await getPokemon(i);
        // console.log(i)
        
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

const thisPokemon = document.querySelectorAll('.pokemon')

function createPokemonCard(pokemon){


    const pokemonEl = document.createElement("div");
    pokemonEl.classList.add('pokemon');

    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

	const poke_types = pokemon.types.map(type => type.type.name);
	const type = main_types.find(type => poke_types.indexOf(type) > -1);
    const pokeInnerHTML = `
        <div class="img-container" >
            <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png" loading="lazy"/>
        </div>
        <div class="info">
            <span class="number">#${pokemon.id.toString().padStart(3, '0')}</span>
            <h3 class="name"> ${name} </h3>  
        </div>
    `;


    // thisPokemon.forEach(l => {

    //     l.addEventListener('click', () => {
    //         thisPokemon.style.display = "none"
    //     })
    // });



    pokemonEl.innerHTML = pokeInnerHTML;
    pokeContainer.appendChild(pokemonEl)
}

// function createInfo() {
//     console.log('hello')
// }