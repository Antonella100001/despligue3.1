# Proyecto de API con Express y Mongoose

Este proyecto utiliza Express para crear una API RESTful y Mongoose para interactuar con una base de datos MongoDB.

## Instalación y Ejecución

### Paso 1: Instalación de Dependencias

Para instalar las dependencias necesarias, ejecuta el siguiente comando en tu terminal desde el directorio del proyecto:

npm install express mongoose

## Paso 2: Ejecución del Script

Una vez instaladas las dependencias, puedes ejecutar la aplicación con Node.js:

node app.js

### Notas

- Asegúrate de tener Node.js instalado en tu sistema.
- Configura la conexión a MongoDB en el archivo `app.js` según tus necesidades.
- La aplicación se ejecuta en el puerto `3000` por defecto.

## Acceso a la API

Una vez que la aplicación esté ejecutándose, puedes acceder a las rutas desde un navegador o herramientas como Postman:

- **Raíz (`/`)**: Abre `http://localhost:3000/` para ver la lista de alumnos.
- **Crear Alumno (`/crear`)**: Abre `http://localhost:3000/crear` para crear un nuevo alumno.