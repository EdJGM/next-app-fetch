# Pokémon Fetcher

Pokémon Fetcher es una aplicación web desarrollada como ejemplo académico para el curso de Desarrollo Web Avanzado. Permite consultar y visualizar información de Pokémon usando la API pública de PokeAPI. El proyecto está construido con Next.js, TypeScript y Tailwind CSS, siguiendo buenas prácticas de desarrollo moderno.

## Características

- Consulta una lista de Pokémon desde la PokeAPI (limitado a 10 por defecto).
- Para cada Pokémon, obtiene detalles adicionales, incluyendo descripción/características en español.
- Muestra los Pokémon en una cuadrícula visual con sus imágenes, nombres y características.
- Interfaz moderna y responsiva.

## Instalación

1. Clona el repositorio:
    ```sh
    git clone <URL_DEL_REPOSITORIO>
    ```
2. Navega al directorio del proyecto:
    ```sh
    cd next-app-fetch
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

- `src/pages/index.tsx`: Componente principal que muestra la lista de Pokémon y renderiza la cuadrícula.
- `src/lib/getsPokemons.tsx`: Función asíncrona que obtiene los datos de los Pokémon y sus características en español desde la API.
- `src/styles/Home.module.css`: Estilos CSS para la página principal (puedes migrar a Tailwind si lo prefieres).
- `next.config.mjs`: Configuración de Next.js, incluye dominios permitidos para imágenes.
- `public/`: Imágenes y recursos estáticos.
- `src/app/`: Archivos globales y layout.

## Tecnologías y dependencias principales

- [Next.js](https://nextjs.org/): Framework React para aplicaciones web modernas.
- [TypeScript](https://www.typescriptlang.org/): Tipado estático para JavaScript.
- [Tailwind CSS](https://tailwindcss.com/): Utilidades CSS para estilos rápidos y responsivos.
- [PokeAPI](https://pokeapi.co/): API pública para datos de Pokémon.

## Contexto académico

Este proyecto fue realizado como parte del Segundo Parcial de la materia Desarrollo Web Avanzado (Mayo-Septiembre 2024). El objetivo es demostrar el consumo de APIs REST, renderizado dinámico y buenas prácticas con Next.js y TypeScript.

## Mejoras futuras sugeridas

- Paginación para mostrar más Pokémon.
- Búsqueda y filtrado por nombre o tipo.
- Mejorar el diseño con Tailwind CSS o componentes UI.
- Tests unitarios y de integración.
- Despliegue en Vercel u otra plataforma.

## Autor

EdJGM

---
¡Contribuciones y sugerencias son bienvenidas!