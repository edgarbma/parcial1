//1. Crear el objeto con la estructura
const products = {
    client: {
        name: "juan Carlos Romero",
        clientCode: "JCR-123"
    },
    cart: {
        product: "Lenovo Tab 11",
        unitPrice: 155.79,
        items: 2
    },
    coupon: "OFERTA0202025",
    madeIn: new Date()
};

//2. Reto: Normalizar el nombre del cliente en formato Title Case (primera letra en mayúscula, resto en minúscula).
products.client.name = products.client.name
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

console.log(`Nombre del cliente: ${products.client.name}`);

//3. Obtener el año del pedido con .getFullYear() y mostrarlo.
console.log(`Año del pedido: ${products.madeIn.getFullYear()}`);

//4. Convertir la fecha creadoEn a ISO con .toISOString(). 
console.log(`Fecha: ${products.madeIn.toISOString()}`);

//5. Calcular el subtotal y luego aplicar descuentos acumulados con operadores de asignación:* 15% si el cupón empieza con "OFERTA". * 5% adicional si la cantidad es mayor o igual a 3 y el subtotal supera 100. 
let subtotal = products.cart.unitPrice * products.cart.items;
let descuentos = 0;

if (products.coupon && products.coupon.startsWith("OFERTA")) {
    descuentos += subtotal * 0.15
};

if (products.cart.items >= 3 && subtotal > 100) {
    descuentos += subtotal * 0.05
};

let total = subtotal - descuentos;

console.log(`El total es: ${subtotal}`);
console.log(`El descuento es: ${descuentos.toFixed(2)}`);
console.log(`Total a pagar: ${total.toFixed(2)}`);

//6. Validar la información:
//      Si el código de cliente no empieza con "CL-", agregar la propiedad observacion.
//      Si el nombre del producto está vacío o tiene menos de 3 caracteres, reemplazar por "PRODUCTO DESCONOCIDO".
//      Si no hay cupón, eliminar la propiedad cupon.

if (!products.client.clientCode.startsWith("CL-")) {
    products.client.observacion = "Código invalido"
    console.log(`Codigo de cliente: ${products.client.observacion}`)
};

if (!products.cart.product || products.cart.product.length < 3) {
    products.cart.product = "Producto invalido"
    console.log(`Estado del producto: ${products.cart.product}`)
};

if (!products.coupon) {
    delete products.coupon
} else if (products.coupon.trim() === "") {
    delete products.coupon
};

//7. Usar operadores ternarios para asignar:
//      estadoPago: "APROBADO" si el total es mayor o igual a 50, "RECHAZADO" en caso contrario.
//      etiquetaEnvio: "ENVÍO PRIORITARIO" si el total es mayor a 120 o si la cantidades mayor o igual a 5, "ENVÍO ESTÁNDAR" en caso contrario. 
products.paymentStatus = total >= 50 ? "Aprobado" : "Rechazado";
products.delivery = (total > 120 || products.cart.items >= 5) ? "Envio Prioritario" : "Envío estándar";

console.log(`Estado de pago: ${products.paymentStatus}`);
console.log(`Estado de envío: ${products.delivery}`);