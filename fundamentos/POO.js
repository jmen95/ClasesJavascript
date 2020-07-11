// function miClase() {}

// miClase.prototype.saludar = function (name) {
// 	console.log('Hola', name);
// };

// miClase.prototype.saludar('Jesus');

//Objetos
//Clases
//Abstraccion
//Modelo
class Person {
	//Es una funcion que se ejecuta cuando inicializan el componente
	constructor(name, age) {
		//Propiedades
		this.name = name;
		this.age = age;
	}

	saludar(name) {
		console.log('Hola ' + name + ', mi nombre es ' + this.name);
	}
}
var p = new Person('Carlos', 19);
console.log(p);
p.saludar('Jhon');
//Herencia
class Doctor extends Person {
	constructor(name, age, especialidad) {
		//Llama al constructor de la clase padre
		super(name, age);
		this.especialidad = especialidad;
	}
}
var medico = new Doctor('Jhon', 30, 'Otorrino');
console.log(medico);
medico.saludar('Carlos');
//Polimorfismo
class Conductor extends Person {
	constructor(name, age, licencia) {
		//Llama al constructor de la clase padre
		super(name, age);
		this.licencia = licencia;
	}

	saludar(name, age) {
		super.saludar(name);
		console.log('Tu edad es de ' + age);
	}
}
var conductor = new Conductor('Kenny', 30, 'A4');
console.log(conductor);
conductor.saludar('Jesus', 25);
