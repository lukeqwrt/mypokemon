const pokedex = document.getElementById('pokedex')

const fetchPokemon = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=150`;
    const res = await fetch(url);
    const data = await res.json();
     pokemon = data.results.map((result, index) => 
    ({
        ...result,
        id: index + 1,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
        
    }))
    displayPokemon(pokemon);
    // console.log(pokemon)
};
// const name = pokeman.name[0].toUpperCase() + pokemon.name.slice(1);
const displayPokemon = (pokemon) => {

    // console.log(pokemon);
    // const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    // console.log(pokemon.name)
    const pokemonHTMLString = pokemon
        .map(
   
            (pokeman) => `
        <li class="pokemon" onclick="selectPokemon(${pokeman.id})">
            <div class="img-container">
                <img class="card-image" src="https://pokeres.bastionbot.org/images/pokemon/${pokeman.id}.png"/>
            </div
            <div class="info">
                <span class="number">#${pokeman.id.toString().padStart(3, '0')}</span>
                <h3 class="name"> ${pokeman.name} </h3>  
            </div>

        </li>
    `
        )
        .join('');
    pokedex.innerHTML = pokemonHTMLString;
};



const searchBar = document.getElementById('searchBar');



const selectPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokeman = await res.json();
    displayopup(pokeman);
}


const displayopup = (pokeman) =>{
    const mywidth = document.querySelector('.poke-container')
    // console.log(mywidth)
    mywidth.style.maxWidth = "100vmin"
    mywidth.style.marginBottom = "20px"

    const ability = pokeman.abilities.map((ability) => ability.ability.name).join(',');
    const type = pokeman.types.map((type) => type.type.name).join(' , ');
    const htmlString = `
        <div class="popup">
       
            <div class="pokemon">
                    <h3 class="name"> ${pokeman.name} </h3>  
                    <div class="img-container">
                        <img class="card-image" src="https://pokeres.bastionbot.org/images/pokemon/${pokeman.id}.png"/>
                    </div>
            </div>

            <div class="info">
                <h3>About</h3>
                <div class="about">
                    <span class="number">#${pokeman.id.toString().padStart(3, '0')}</span>
                        
                    <p> Height: ${pokeman.height} </p>
                    <p> Weight: ${pokeman.weight} </p>
                    <p> Type: ${type} </p>
                    <p> Ablilities: ${ability} </p>
            </div>
               
        </div>
     `;
     pokedex.innerHTML = htmlString;
    //  console.log(htmlString)
}


fetchPokemon();


// const colors = {
// 	fire: '#FDDFDF',
// 	grass: '#DEFDE0',
// 	electric: '#FCF7DE',
// 	water: '#DEF3FD',
// 	ground: '#f4e7da',
// 	rock: '#d5d5d4',
// 	fairy: '#fceaff',
// 	poison: '#98d7a5',
// 	bug: '#f8d5a3',
// 	dragon: '#97b3e6',
// 	psychic: '#eaeda1',
// 	flying: '#F5F5F5',
// 	fighting: '#E6E0D4',
// 	normal: '#F5F5F5'
// };
// const main_types = Object.keys(colors);


// const fetchPokemons = async () => {
//     for(let i = 1; i <= pokemons_Number; i++){
//         await getPokemon(i);
//         // console.log(i)
        
//     }
// }

// const getPokemon = async id => {
//     const url = `https://pokeapi.co/api/v2/pokemon/${id}?limit=800&offset=800`;
//     // const url = `https://pokeapi.co/api/v2/ability/1/${id}`;
//     const res = await fetch(url);
//     const pokemon = await res.json();

//     createPokemonCard(pokemon);
    
// };


// fetchPokemons();


// function createPokemonCard(pokemon){


//     const pokemonEl = document.createElement("div");
//     pokemonEl.classList.add('pokemon');

//     const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

// 	const poke_types = pokemon.types.map(type => type.type.name);
// 	const type = main_types.find(type => poke_types.indexOf(type) > -1);
//     const pokeInnerHTML = `
//         <div class="img-container" >
//             <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png" loading="lazy"/>
//         </div>
//         <div class="info">
//             <span class="number">#${pokemon.id.toString().padStart(3, '0')}</span>
//             <h3 class="name"> ${name} </h3>  
//         </div>
//     `;


//     const thisPokemon = document.querySelectorAll('.pokemon')
//     thisPokemon.forEach(l => {

//         l.addEventListener('click', clicking);
//     });



//     pokemonEl.innerHTML = pokeInnerHTML;
//     pokeContainer.appendChild(pokemonEl)
// }
// function clicking(){
//     window.location.href = "./pokemon-info.html"
//     document.getElementById('poke-info')[0].style.background = "red";
  
// }
// function createInfo() {
//     console.log('hello')
// }