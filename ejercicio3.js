// Sistema de registro de asistentes - Taller de Tecnología 
// 1. Crear un objeto asistente con las propiedades requeridas
const person = {
    name: "Eduardo Perez",
    age: 17,
    id: "AS-3214",
    mail: "eduardoperes@hotmail.com",
    access: true
}
// 2. Agregar la propiedad institución al objeto
person.institution = "";

// 3. Modificar el valor de confirmado a false si la edad es menor de 18 años
if (person.age < 18) {
    person.access = false
};

// 4. Eliminar la propiedad institución si el correo no termina en .com
if (person.mail.endsWith(".com")) {
    delete person.institution
};

// 5. Mostrar el nombre del asistente en minúsculas
console.log(`Asistente: ${person.name.toLowerCase()}`);

// 6. Convertir la edad a cadena usando .toString()
console.log(`Edad: ${person.age.toString()}`);

// 7. Verificar si el id empieza con "AS-"
if (person.id.startsWith("AS-)")) {
    console.log("ID correcto")
};

// 8. Usar operador ternario para determinar el acceso
console.log(person.access === false ? "Acceso negado" : "Acceso Permitido");

// 9. Mostrar el objeto después de todos los cambios
console.log("\nObjeto", person);