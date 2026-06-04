const pokemonDetailDiv = document.getElementById('pokemon-detail');

const params = new URLSearchParams(window.location.search);
const id = params.get('id');

const cargarPokemonDetalle = async ()  => {
    const pokeResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemonData = await pokeResponse.json();
    console.log('pokemonData',pokemonData);

    let typesHtml = ``;
    for (let i = 0; i < pokemonData.types.length; i++) {
        const type = pokemonData.types[i].type;
        typesHtml += `<div class="bg-yellow-300 text-center rounded-sm p-1">${type.name}</div>`;
    }

    pokemonDetailDiv.innerHTML = '';
    pokemonDetailDiv.innerHTML += `
        <div class="bg-white rounded-2xl p-6 shadow-xl">
                <img 
                    class="w-80 h-80 mx-auto object-contain"
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png">
            </div>

            <div class="bg-white rounded-2xl p-6 shadow-xl">
                <div class="grid grid-cols-2 ">
                    <h1 class="text-2xl font-bold capitalize">${pokemonData.name}</h1>
                    <p class="text-gray-500 text-2xl text-right">#${id}</p>
                </div>

                <div class="mt-5 bg-sky-500 p-4 rounded-xl grid grid-cols-2">
                    <div>
                        <p class="text-sm text-white">Altura:</p>
                        <p class="text-xl font-bold">${pokemonData.height/10}m</p>
                    </div>
                    <div>
                        <p class="text-sm text-white">Peso:</p>
                        <p class="text-xl font-bold">${pokemonData.weight/10}kg</p>
                    </div>
                </div>

                <div class="mt-5">
                    <p class="text-sm font-bold">Tipos:</p>
                    <div class="grid grid-cols-3 mt-2 gap-3">
                        ${typesHtml}
                    </div>
                </div>

                <div class="mt-5">
                    <p class="text-sm font-bold">Estadisticas:</p>
                    <div class="grid grid-cols-3 mt-2 gap-3">
                        <div class="grid grid-row-2 text-center">
                            <p class="text-xl font-bold text-red-500 h-5 mb-1">60</p>
                            <p class="text-xs m-0 text-gray-500">Ataque</p>
                        </div>
                        <div class="grid grid-row-2 text-center">
                            <p class="text-xl font-bold text-red-500 h-5 mb-1">60</p>
                            <p class="text-xs m-0 text-gray-500">HP</p>
                        </div>
                    </div>
                </div>
                
            </div>
    `;
}

cargarPokemonDetalle();