export async function getPokemons() {
    const headers = new Headers({
        "Content-Type": "application/json"
    });

    const requestOptions = {
        method: 'GET',
        headers: headers,
        redirect: 'follow' as RequestRedirect
    };

    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10", requestOptions);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const pokemonDetails = await Promise.all(
            data.results.map(async (pokemon: any) => {
                const res = await fetch(pokemon.url);
                const details = await res.json();

                //fecth caracteristicas
                const characteristicsRes = await fetch(details.species.url);
                const characteristicsData = await characteristicsRes.json();
                const characteristics = characteristicsData.flavor_text_entries.find((entry: any) => entry.language.name === 'es').flavor_text;

                return {
                    id: details.id,
                    name: details.name,
                    sprites: details.sprites,
                    characteristics: characteristics
                };
            })
        );
        return pokemonDetails;
    } catch (error) {
        console.error('Failed to fetch pokemons:', error);
        return [];
    }
}