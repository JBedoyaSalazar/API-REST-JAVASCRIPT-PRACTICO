# Movie App - API REST JavaScript Práctico

Una aplicación de películas minimalista y responsiva construida con **Vanilla JavaScript** y **Tailwind CSS v4**, consumiendo la API de **The Movie Database (TMDB)**. Este proyecto forma parte del curso práctico de API REST de Platzi.

## 🚀 Características

- 🎥 **Tendencias:** Visualiza las películas más populares del momento.
- 🔍 **Buscador:** Encuentra tus películas favoritas por nombre.
- 📂 **Categorías:** Explora películas por géneros como Acción, Comedia, Drama, etc.
- 📖 **Detalles:** Información detallada de cada película, incluyendo puntuación y descripción.
- 🔄 **Películas Similares:** Recomendaciones basadas en la película que estás viendo.
- 📱 **Diseño Responsive:** Optimizado para dispositivos móviles, tablets y escritorio con un estilo dark-mode elegante.

## 🛠️ Tecnologías Utilizadas

- **HTML5** & **Semantic Web**
- **JavaScript (ES6+)**
- **Tailwind CSS v4** (Diseño y animaciones)
- **Axios** (Peticiones HTTP)
- **TMDB API** (Fuente de datos)

## 🔧 Instalación y Configuración

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/JBedoyaSalazar/API-REST-JAVASCRIPT-PRACTICO.git
   cd API-REST-JAVASCRIPT-PRACTICO
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Configurar la API Key:**
   Crea un archivo llamado `secrets.js` dentro de la carpeta `src/` y añade tu API Key de TMDB:
   ```javascript
   const API_KEY = 'TU_API_KEY_AQUÍ';
   ```

4. **Ejecutar el proyecto:**
   Para compilar el CSS de Tailwind en modo escucha:
   ```bash
   npm run dev
   ```
   Luego, abre el archivo `index.html` en tu navegador (puedes usar extensiones como *Live Server*).

## 📂 Estructura del Proyecto

```text
├── icons/            # Iconos y favicons
├── src/
│   ├── main.js       # Lógica principal y llamadas a la API
│   ├── navigation.js # Manejo de rutas y navegación
│   ├── nodes.js      # Selección de elementos del DOM
│   ├── secrets.js    # Credenciales (ignoradas en git)
│   ├── input.css     # Estilos base de Tailwind
│   └── output.css    # CSS compilado
├── index.html        # Estructura principal
├── package.json      # Dependencias y scripts
└── README.md         # Documentación del proyecto
```

## ✒️ Autor

Hecho con ❤️ por **Jefred Bedoya** - [GitHub](https://github.com/JBedoyaSalazar)

---
*Este proyecto fue desarrollado con propósitos educativos.*
