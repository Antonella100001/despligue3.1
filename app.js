import express from 'express'; // Manejo de métodos HTTP
import mongoose from 'mongoose'; // Manejo de base de datos

/* *************************************************************************** */

/* DEFINIMOS BASE DE DATOS: Modelo para Alumno.
   El esquema especifica los campos que tendrá cada documento en la colección:
   nombre: De tipo String.
   asignatura: De tipo String. 
   nota: De tipo Number. 
*/

const AlumnoSchema = new mongoose.Schema({
  nombre: String,
  asignatura: String,
  nota: Number
});

const AlumnoModel = mongoose.model('Alumno', AlumnoSchema);

/* CONEXIONES: 
   Aplicación express para el manejo HTTP */
const app = express();

/* Conectamos con MongoDB usando la cadena de conexión.
   Si no requieres autenticación, usa esta cadena:
   mongoose.connect('mongodb://localhost:27017/test')

   Si necesitas autenticación, usa la cadena como la que tenías antes:
   mongoose.connect('mongodb://daw:abc123.@localhost:27017/test?authSource=admin')
*/

mongoose.connect('mongodb://localhost:27017/test') // Conexión sin autenticación (si tu MongoDB no usa autenticación)
/* mongoose.connect('mongodb://daw:abc123.@localhost:27017/test?authSource=admin') // Con autenticación */

/* ENDPOINTS:
   Definición de una Ruta GET para la Raíz de la Aplicación.
   Cada vez que el cliente entra en esta ruta se ejecuta:
   - _req: solicitud entrante
   - res: respuesta que enviaremos al cliente
   */
app.get('/', async (_req, res) => {
  console.log('Listando... alumnos...')
  const alumno = await AlumnoModel.find(); // Busca todos los alumnos en la base de datos
  return res.send(alumno); // Envia el resultado al cliente
})

/* Definición de una Ruta GET para crear un nuevo alumno. */
app.get('/crear', async (_req, res) => {
  console.log('Creando... alumno...')
  // Crear un nuevo alumno (corrigiendo el valor de "nota" para que sea un número)
  await AlumnoModel.create({ nombre: 'Roberto', asignatura: 'Redes Neuronales', nota: 9 });
  return res.send('Alumno creado con éxito');
});

/* Iniciamos el servidor Express en el puerto 3000.
   Si está listo, imprimimos en consola "Escuchando..." */
app.listen(3000, () => console.log('Escuchando... abre localhost:3000'));

