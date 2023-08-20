const productos = [
    { nombre: "Manzana", precio: 1.5 },
    { nombre: "Banana", precio: 0.8 },
    { nombre: "Zanahoria", precio: 0.6 },
    { nombre: "Lechuga", precio: 1.2 },
    { nombre: "Papa", precio: 1.6 },
    { nombre: "Cebolla", precio: 0.9 },
    { nombre: "Tomate", precio: 0.7 },
    { nombre: "Durazno", precio: 1.2 },
    { nombre: "Frambuesa", precio: 1.6 },
    { nombre: "Cereza", precio: 0.6 },
];

const compraBtn = document.getElementById("compra-boton");
const resultadoDiv = document.getElementById("resultado");

const ACEPTAR_DESCRIPCION = "Presione 'Aceptar' para sumar productos al carrito.";
const CANCELAR_DESCRIPCION = "Presione 'Cancelar' para finalizar la compra.";

function comprar() {
    const seleccion = prompt(
        ACEPTAR_DESCRIPCION + "\n" +
        CANCELAR_DESCRIPCION + "\n" +
        "Seleccione un producto:\n" +
        productos.map((producto, index) => `(${index + 1}) ${producto.nombre}`).join("\n"));

    if (seleccion !== null) {
        const indexProducto = parseInt(seleccion) - 1;

        if (indexProducto >= 0 && indexProducto < productos.length) {
            const precioProducto = productos[indexProducto].precio;
            return precioProducto + comprar();
        } else {
            alert("Selección inválida. Por favor, elija un número válido.");
            return comprar();
        }
    }

    return 0;
}

function mostrarResultado(total) {
    resultadoDiv.textContent = `El total de su compra es: €${total.toFixed(2)}`;
}

compraBtn.addEventListener("click", () => {
    const totalCompra = comprar();
    mostrarResultado(totalCompra);
});