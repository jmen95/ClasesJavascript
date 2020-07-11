//Variables
var miNuevaVarriable = 'Hola';
console.log(typeof miNuevaVarriable);
miNuevaVarriable = 12;
console.log(typeof miNuevaVarriable);

var obj = {
	name: 'Jesus',
	phone: '000',
};

obj.email = 'jesusmendoza@gmail.com';
console.table(obj);

var mivar = [obj, obj, obj];

console.log('mivar' + mivar);
console.log('mivar', mivar);
console.group(mivar);
console.table(mivar);

var miArrayDinamico = [obj, obj, obj];
miArrayDinamico.push({ number: 1, person: obj });
console.table(miArrayDinamico);
