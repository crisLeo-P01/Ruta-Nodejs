function asincrona (callback) {
  setTimeout(function () {
    try {
      const a = 3 + z
      callback(null, a)
    } catch (e) {
      callback(e)
    }
  }, 1000)
}

asincrona(function (err, dato) {
  if (err) {
    console.error('Tenemos un error')
    console.error(err)
    return false
  }

  console.log('Todo ha ido bien. Mi dato es ', dato)
})
