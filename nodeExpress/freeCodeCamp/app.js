const express = require('express');
const app = express();

const { infoCursos } = require('./datos/cursos.js')

// ROUTER
const routerProgramacion = require('./routers/programacion.js')
app.use('/api/cursos/programacion', routerProgramacion)

const routerMatematicas = require('./routers/matematicas.js')
app.use('/api/cursos/matematicas', routerMatematicas)

// ------------------

// Routing (Direccionamiento o enrutamiento)
app.get('/', (req, res) => {
  res.send('Mi primer servidor con Express con freeCodeCamp. Cursos 💻.')
})

app.get('/api/cursos', (req, res) => {
  res.send(JSON.stringify(infoCursos))
})

const PUERTO = process.env.PORT || 3006;

app.listen(PUERTO, () => {
  console.log(`El servidor esta escuchando en el puerto http://localhost:${PUERTO}...`);
})