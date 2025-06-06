# Movie Browser (React 19)

<div style="text-align: center;">
    <img src="/src/assets/logo.svg" alt="Movie Browser Logo" width="200" />
</div>

## Descripción

**Movie Browser** es una aplicación web diseñada para explorar y buscar información sobre películas. La aplicación está desplegada y accesible en el siguiente enlace: [Movie Browser en Vercel](https://movie-spa-react-movie-browser.vercel.app/).

## Funcionalidades

- **Búsqueda de películas**: Encuentra información detallada sobre tus películas favoritas.
- **Detalles de películas**: Consulta sinopsis, reparto, calificaciones. relacionados, etc.
- **Interfaz amigable**: Diseño intuitivo y responsivo para una experiencia de usuario óptima.

## Tecnologías utilizadas

- **React 19**: Biblioteca principal para la construcción de la interfaz de usuario.
- **React Router DOM**: Manejo de rutas y navegación dentro de la aplicación.
- **Vite**: Herramienta de desarrollo rápida para aplicaciones modernas.
- **CSS Modules**: Estilización modular y reutilizable.

## Estructura de carpetas
movie-spa-react/
├── .env.local
├── .env.local.example
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── public/
│   └── vite.svg
└── src/
    ├── App.css
    ├── App.tsx
    ├── index.css
    ├── main.tsx
    ├── vite-env.d.ts
    ├── assets/
    │   ├── logo.png
    │   ├── logo.svg
    │   └── react.svg
    ├── components/
    │   ├── MovieCard.tsx
    │   └── SearchBar.tsx
    ├── interfaces/
    │   └── movies.ts
    ├── pages/
    │   ├── Home.tsx
    │   └── MovieDetails.tsx
    ├── routes/
    │   └── AppRoutes.tsx
    └── services/
        ├── movie.ts
        └── themoviedb.tsx

## Clonar y ejecutar el proyecto

Sigue estos pasos para clonar y ejecutar la aplicación en tu entorno local:

1. Clona el repositorio desde GitHub:
    ```bash
    git clone <URL_DEL_REPOSITORIO>
    cd movie-spa-react
    ```

2. Crea un archivo `.env.local` basado en el ejemplo proporcionado:
    ```bash
    cp .env.local.example .env.local
    ```
    Asegúrate de completar las variables necesarias en el archivo `.env.local`.

3. Instala las dependencias del proyecto:
    ```bash
    npm install
    ```

4. Inicia el servidor de desarrollo:
    ```bash
    npm run dev
    ```

## Desplegar la aplicación

Para construir la aplicación para producción, utiliza el siguiente comando:
```bash
npm run build
```

Esto generará una carpeta `dist` con los archivos optimizados para producción.

## Notas adicionales

- Asegúrate de tener Node.js y npm instalados en tu sistema.
- Consulta el archivo `package.json` para más detalles sobre las dependencias y scripts disponibles.

¡Disfruta explorando películas con **Movie Browser**!  