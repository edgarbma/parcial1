//Sistema de compras SnackExpress
console.log("====Sistema de Compras SnackExpress====");

// 1. Declarar las variables nombreCliente, producto, precioUnidad, cantidad y cupon.
let clientName = "Fernando Castaneda";
let product = "Chocolate";
let unitPrice = 4.25;
let items = 12;
let coupon = "SWEET-123";

// 2. Mostrar el nombre del cliente en mayúsculas y el nombre del producto con su cantidad de caracteres.
console.log(`\nNombre del cliente: ${clientName.toUpperCase()}`);
console.log(`Producto: ${product}, caracteres: ${product.length}`);

// 3. Calcular el subtotal multiplicando precio por cantidad.
let subtotal = unitPrice * items;
console.log(`Subtotal: ${subtotal}`);

// 4. Aplicar un 10% de descuento si el cupón empieza con "SWEET", en caso contrario no aplicar descuento (usar operador ternario).

// 5. Usar un operador de asignación para acumular el valor del descuento.
let discount = 0;

// 6. Calcular el total restando el descuento al subtotal.
if (coupon.startsWith("SWEET")) {
    discount = subtotal * 0.10
    subtotal -= discount
    console.log(`Descuento: ${discount.toFixed(2)}`);
};
console.log(`Total a pagar: ${subtotal.toFixed(2)}`);

// 7. Evaluar si la compra es grande (cantidad > 3 && subtotal >= 10) o regular.
console.log(items > 3 && subtotal >= 10 ? "Compra grande" : "Compra regular");

//8. Mostrar en consola todos los resultados: nombre del cliente, producto y longitud, subtotal, descuento, total final y el mensaje de compra.
