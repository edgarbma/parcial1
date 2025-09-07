console.log("=====Sistema de Informacion Personal=====");

// Declare las siguientes variables usando let, const o var según corresponda:
let nombreCompleto = "Ana Lucía Rodríguez"
let edad = 28
let salarioBase = 1200.50
let esActivo = true
let departamento = null 

// Creacion del objeto 
const empleado = {
    nombre: nombreCompleto,
    edad: edad,
    salario: salarioBase,
    activo: esActivo,
    fechaIngreso: new Date(),
    habilidades: ["Excel", "Power PI", "Análisis"],
    departamento: departamento
};

// Manipular el objeto
// Agregar una nueva propiedad
empleado.departamento = "Contabilidad";

//Modificar salario aumentando el 15%
salarioDescuento = salarioBase * 0.15;
empleado.salario = salarioBase += salarioDescuento;


delete empleado.activo;

//Generar las salidas 
console.log(`\n====FICHA DE EMPLEADO====`)
console.log(`Nombre: ${empleado.nombre.toUpperCase()}`);
console.log(`Edad: ${empleado.edad} años`);
console.log(`Salario: ${empleado.salario.toFixed(2)}`);
console.log(`Departamento: ${empleado.departamento.toLowerCase()}`);
console.log(`Año de ingreso: ${empleado.fechaIngreso.getFullYear()}`);
console.log(`Habilidades (${empleado.habilidades.length}): ${empleado.habilidades}`);
