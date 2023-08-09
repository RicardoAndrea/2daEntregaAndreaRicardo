const productos = [
  { id: 1, nombre: "televisor", precio: 70000 },
  { id: 2, nombre: "celular", precio: 100000 },
  { id: 3, nombre: "reloj", precio: 30000 },
  { id: 4, nombre: "tablet", precio: 50000 },
  { id: 5, nombre: "pc", precio: 300000 },
  { id: 6, nombre: "notebook", precio: 400000 },
];

let nombre = prompt("Ingrese el nombre del producto a consultar");
let producto = productos.find((item) => item.nombre === nombre);
let formasDePago = prompt ("ingrese formas de pago efvo, credito");
// const valoresConCredito = productos.map((item) => {
//   return {
//     id: item.id,
//     nombre: item.nombre,
//     precio: item.precio - item.precio * 0.21,
//   };
// });
if (formasDePago === "efvo"){
    if (producto) {
        let mensaje = `
         Id: ${producto.id}
         Nombre: ${producto.nombre}
         $${producto.precio}
        `;
        alert(mensaje);
    } else {
        alert("Producto no encontrado");
    }
}else {
    if (formasDePago === "credito"){
        if (producto) {
            let mensaje = `
            Id: ${producto.id}
            Nombre: ${producto.nombre}
            $${producto.precio*1.50}
           `;
           alert(mensaje);
    } else {
        alert("Producto no encontrado");
    }
}else {
    alert ("Escribir bien formas de pago efvo o credito");
}
}
alert ("recargue la página para otra consulta");






// const precios = productos.map((item) => item.precio);
// console.log(precios);

// const nuevosPrecios = productos.map((item) => {
//   return {
//     id: item.id,
//     nombre: item.nombre,
//     precio: item.precio - item.precio * 0.21,
//   };
// });

// console.log(nuevosPrecios);