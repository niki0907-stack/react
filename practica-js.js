const productos = [
    { id: 1, nombre: 'Mouse', precio: 50000, categoria: 'Perifericos', stock: 5 },
    { id: 2, nombre: 'Teclado', precio: 90000, categoria: 'Perifericos', stock: 0 },
    { id: 3, nombre: 'PC Torre', precio: 7000000, categoria: 'Pantallas', stock: 3 },
    { id: 4, nombre: 'Iphone', precio: 5000000, categoria: 'Pantallas', stock: 4 },
    { id: 5, nombre: 'Audifonos Samsung', precio: 90000, categoria: 'Audio', stock: 8 },
    { id: 6, nombre: 'Airpods', precio: 120000, categoria: 'Audio', stock: 1 },
    { id: 7, nombre: 'Cable HDMI', precio: 650000, categoria: 'Transmision', stock: 0 },
    { id: 8, nombre: 'Cable LAN', precio: 750000, categoria: 'Transmision', stock: 2 },
    { id: 9, nombre: 'Computador portatil', precio: 2600000, categoria: 'Pantallas', stock: 7 },
    { id: 10, nombre: 'Mouse Gamer', precio: 50000, categoria: 'Perifericos', stock: 9 }
];


console.log("========= PRODUCTOS DISPONIBLES =========");
const disponibles = productos.filter(producto => producto.stock > 0);
console.log(disponibles);


console.log("========= PRODUCTO ID = 3 =========");
const producto3 = productos.find(producto => producto.id === 3);
console.log(producto3);

console.log("========= PRODUCTOS CON PRECIO MAYOR A 100.000 =========");
const mayor = productos.filter(producto => producto.precio > 100000);
console.log(mayor);


console.log("========= PRODUCTOS CON PRECIO ENTRE 50.000 Y 200.000 =========");
const rango = productos.filter(producto => producto.precio > 50000 && producto.precio < 200000);
console.log(rango);

console.log("========= PRODUCTOS CATEGORIA PARA FILTRAR =========");
const categ = productos.filter(producto => producto.categoria == "Audio");
console.log(categ);


console.log("========= PRODUCTO ID = 5 =========");
const producto5 = productos.find(producto => producto.id === 5);
console.log(producto5);


function buscarProducto(id) {
    console.log("========= PRODUCTO ENCONTRADO =========");
    const producto5 = productos.find(producto => producto.id === id);
    console.log(producto5);
}
buscarProducto(5);


console.log("========== PRODUCTOS AGOTADOS ==========");
const hayAgotados = productos.some(producto => producto.stock === 0);
console.log (hayAgotados);

console.log("======= PRECIOS VALIDOS ========");
const preciosValidos = productos.every(producto => producto.precio > 0);
console.log(preciosValidos);


console.log("========== VALOR INVENTARIO ===========")
const valorInventario = productos.reduce(
(total, producto) => total + producto.precio * producto.stock,
0
);
console.log(valorInventario);


console.log(`El producto ${productos[0].nombre} cuesta $${productos[0].precio}`);


const { nombre, precio, stock } = productos[0];
console.log(nombre, precio, stock);


const productoActualizado = {
...productos[0],
stock: 8
};
console.log(productoActualizado);


const estado = productoActualizado.stock > 0 ? 'Disponible' : 'Agotado';
console.log(estado);