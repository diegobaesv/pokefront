const pokemonListDiv = document.getElementById('pokemon-list');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let prevUrl = null;
let nextUrl = null;

const cargarPokemones = async (url) => {

    const pokeResponse = await fetch(url);
    const pokemonesData = await pokeResponse.json();
    console.log('pokemonesData',pokemonesData)
    const pokemones = pokemonesData.results;
    prevUrl = pokemonesData.previous;
    nextUrl = pokemonesData.next;

    pokemonListDiv.innerHTML = '';
    pokemones.forEach((pokemon)=>{
        const splitsId = pokemon.url.split('/');
        const id = splitsId[splitsId.length - 2];
        pokemonListDiv.innerHTML += `
        <div class="bg-white rounded-2xl shadow-md p-4 hover:scale-105 hover:shadow-xl transition duration-300 cursor-pointer">
            <img class="w-28 h-28 mx-auto" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png">
            <h2 class="mt-3 text-lg font-bold text-center capitalize">${pokemon.name}</h2>
        </div>
        `;
    });

}

prevBtn.addEventListener('click', () => {
    if(prevUrl) {
        cargarPokemones(prevUrl);
    }
});
nextBtn.addEventListener('click', () => {
    if(nextUrl) {
        cargarPokemones(nextUrl);
    }
});

cargarPokemones('https://pokeapi.co/api/v2/pokemon?limit=20');
