const miURL = new URL('https://www.ejemplo.org/cursos/programacion?ordenar=visitas&nivel=1')

console.log(miURL.hostname); // www.ejemplo.org
console.log(miURL.pathname); // /cursos/programacion
console.log(miURL.searchParams); // URLSearchParams { 'ordenar' => 'visitas', 'nivel' => '1' }

console.log(typeof miURL.searchParams); // object

console.log(miURL.searchParams.get('ordenar')); // vistas
console.log(miURL.searchParams.get('nivel')); // 1