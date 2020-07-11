//funcion basica
function saludar(nombre) {
	console.log('Hola', nombre);
}
//Hola undefined
saludar();
// Hola Jesus
saludar('Jesus');
//Hola Jesus
saludar('Jesus', 'Mendoza');

//funcion con arg
function saludarArg() {
	console.log('Hola', arguments[2]);
}

saludarArg('Jesus', 'Mendoza', 'Sanchez');
