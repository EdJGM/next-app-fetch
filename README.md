# Pokémon Fetcher

Esta aplicación es un ejemplo de cómo obtener y mostrar información sobre Pokémon utilizando la API de PokeAPI. La aplicación está construida con Next.js y TypeScript.

## Características

- Obtiene una lista de Pokémon de la API de PokeAPI.
- Para cada Pokémon, obtiene detalles adicionales, incluyendo características en español.
- Muestra los Pokémon en una cuadrícula con sus imágenes, nombres y características.

## Instalación

1. Clona el repositorio:
    ```sh
    git clone <URL_DEL_REPOSITORIO>
    ```
2. Navega al directorio del proyecto:
    ```sh
    cd <NOMBRE_DEL_DIRECTORIO>
    ```
3. Instala las dependencias:
    ```sh
    npm install
    ```

## Uso

1. Inicia el servidor de desarrollo:
    ```sh
    npm run dev
    ```
2. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

## Estructura del Proyecto

- `pages/index.tsx`: Componente principal que muestra la lista de Pokémon.
- `lib/getsPokemons.tsx`: Función para obtener los datos de los Pokémon desde la API.
- `styles/Home.module.css`: Estilos CSS para la página principal.
- `next.config.mjs`: Configuración de Next.js.

## Dependencias

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [PokeAPI](https://pokeapi.co/)

## Contribuir

Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-caracteristica`).
3. Realiza tus cambios y haz commit (`git commit -am 'Añadir nueva característica'`).
4. Haz push a la rama (`git push origin feature/nueva-caracteristica`).
5. Abre un Pull Request.
