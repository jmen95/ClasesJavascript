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

//Magic functions
function magicFunction(cb) {
	console.log('magicFunction');
	cb('Jesus');
}

function miCallBack(name) {
	console.log('miCallBack', name);
}

magicFunction(miCallBack);

//Funciones anonimas
magicFunction(function (name) {
	console.log('función anonima', name);
});

var miarray = [
	{ name: 'Carlos', age: 19 },
	{ name: 'Jhon', age: 30 },
	{ name: 'Jesus', age: 25 },
	{ name: 'Kenny', age: 24 },
];

function buscarPares(item) {
	return item.age % 2 == 0;
}
var edadesPares = miarray.filter(buscarPares);
console.log('edadesPares', edadesPares);

var edadesImares = miarray.filter(function (obj) {
	return obj.age % 2 === 1;
});
console.log('edadesImares', edadesImares);

//Callback hell
function saludoTimer(name, terminar) {
	console.log('saludoTimer');
	setTimeout(function () {
		console.log('Hola', name);
		console.log('aun no he terminado');
		terminar();
	}, 1000);
}

function comenzarProceso() {
	console.log('comenzarProceso');
	saludoTimer('Jesus', function () {
		console.log('terminarProceso');
		saludoTimer('Daniel', function () {
			saludoTimer('Mendoza', function () {
				saludoTimer('Sanchez', function () {
					saludoTimer('Daniel', function () {
						console.log('Finished');
					});
				});
			});
		});
	});
}
comenzarProceso();

//promesas
function saludoTimerPromise(name) {
	return new Promise(function (resolve, reject) {
		console.log('saludoTimer');
		if (!name) reject('Nombre es requerido');
		else
			setTimeout(function () {
				// console.log('Hola', name);
				console.log('aun no he terminado');
				resolve('Hola ' + name);
			}, 1000);
	});
}

var p = saludoTimerPromise('Carlos');
console.log('p', p);
p.then(function (saludo) {
	console.log('saludo', saludo);
	return saludoTimerPromise('Jhon');
})
	.then(function (saludo) {
		console.log('saludo', saludo);
		console.log('Finished');
	})
	.catch(function (error) {
		console.error('error', error);
	});

//Tipos de funciones declarativas y expresivas
miFuncionDeclarativa();
function miFuncionDeclarativa() {
	console.log('miFuncionDeclarativa');
}

var mifuncionExpresiva = function () {
	console.log('mifuncionExpresiva');
};
mifuncionExpresiva();
