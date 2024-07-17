import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';
import { getPokemons } from '../lib/getsPokemons';
import Image from 'next/image';

export default function Home() {
    const [pokemons, setPokemons] = useState<{ id: number, sprites: { front_default: string }, name: string, characteristics: string }[]>([]);

    useEffect(() => {
        const fetchPokemons = async () => {
            console.log('Fetching pokemons...');
            const pokemonData = await getPokemons();
            console.log('Fetched pokemons:', pokemonData);
            setPokemons(pokemonData);
        };

        fetchPokemons();
    }, []);

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1 className={styles.title}>Pokémons</h1>
                <div className={styles.grid}>
                    {pokemons.map(pokemon => (
                        <div key={pokemon.id} className={styles.card}>
                            <Image
                                src={pokemon.sprites.front_default}
                                alt={pokemon.name}
                                width={96}
                                height={96}
                            />
                            <h3 className={styles.subtitle}>{pokemon.name}</h3>
                            <p className={styles.paragraph}>{pokemon.characteristics}</p>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}