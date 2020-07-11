//Variables
var obj = {
	name: 'Jesus',
	phone: '000',
};

obj.email = 'jesusmendoza@gmail.com';
var mivar = [obj, obj, obj];

console.log('mivar' + mivar);
console.log('mivar', mivar);
console.group(mivar);
console.table(mivar);

var miArrayDinamico = [obj, obj, obj];
miArrayDinamico.push({ number: 1, person: obj });
console.table(miArrayDinamico);
