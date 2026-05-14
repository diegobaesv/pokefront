const main = async () => {

    const pokeResponse = await fetch('https://pokeapi.co/api/v2/pokemon');

    const pokemones = await pokeResponse.json();

    console.log(pokemones);

    console.log(pokemones.results[0].name)
}

main();
