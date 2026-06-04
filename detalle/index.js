const params = new URLSearchParams(window.location.search);

const id = params.get('id');

const cargarPokemonDetalle = async ()  => {
    const pokeResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemonData = await pokeResponse.json();
    console.log('pokemonData',pokemonData);
}

cargarPokemonDetalle();