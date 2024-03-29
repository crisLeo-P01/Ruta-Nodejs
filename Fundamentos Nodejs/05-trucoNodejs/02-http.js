const http = require('http')

http.createServer(router).listen(3000)
function router (req, res) {
  console.log('Nueva petición!')
  console.log(req.url)

  switch (req.url) {
    case '/hola':
      const saludo = hola()
      res.writeHead(201, { 'Content-Type': 'text/plain' })
      res.write(saludo)
      res.end()
      break

    default:
      res.write('Error 404: No se lo que quieres')
      res.end()
  }

  res.end()
}

function hola () {
  return 'Hola que tal'
}

console.log('Escuchando http en el puerto 3000')
