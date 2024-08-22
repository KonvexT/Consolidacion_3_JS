function Producto(id, nombre, precio) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
}

function Carrito() {
    this.productos=[];

    this.mostrarListado = function () {
        alert("Productos disponibles:\n1.- Leche $1000\n2.- Pan $2000\n3.- Queso $1200\n4.- Mermelada $890\n5.- Azúcar $1300");
    }

    this.agregarProducto = function(producto, cantidad) {
        this.productos.push({producto, cantidad });
    }

    this.mostrarDetalle = function() {
        for (var index = 0; index < this.productos.length; index++) {
            var element = this.productos[index];
            var detalle = "Detalle de la compra:\n"+ element.cantidad+" "+element.producto.nombre+"(s) agregado(s) al carrito";
        }
        return alert(detalle);
    }

    this.calcularTotal = function() {
        var total = 0;
        for (var index = 0; index < this.productos.length; index++) {
            var element = this.productos[index];
            total += element.producto.precio * element.cantidad;
        }
        return total;
    }

    this.mostrarTotalFinal = function() {
        var totalFinal = "Total: $"+this.calcularTotal();
        return alert(totalFinal);
    }
    
    this.finalizarCompra = function() {
        this.mostrarTotalFinal();
        this.productos = [];
        alert("¡Gracias por tu compra!");
    }
}

var listadoProductos = [
    new Producto(1, "Leche", 1000),
    new Producto(2, "Pan de molde", 2000),
    new Producto(3, "Queso", 1200),
    new Producto(4, "Mermelada", 890),
    new Producto(5, "Azúcar", 1300)
];

var carrito = new Carrito();

function AquiEmpiezaLaMagia() {
    carrito.mostrarListado();

    var elegirProducto = parseInt(prompt("Ingresa el número de producto que deseas agregar al carrito:"))-1;

    if (!listadoProductos[elegirProducto]) {
        alert("Opción inválida, debes elegir uno de los productos mostrados anteriormente");
        AquiEmpiezaLaMagia();
        return;
    }else{
        var elegirCantidad = prompt("Ingresa la cantidad de unidades:");
        console.log(elegirCantidad)
        if (elegirCantidad <= 0 || elegirCantidad === "" || isNaN(elegirCantidad)) {
            alert("Debes ingresar un número mayor a 0");
            AquiEmpiezaLaMagia();
            return;
        }else{
            parseInt(elegirCantidad);
            var productoSeleccionado = listadoProductos[elegirProducto];
            carrito.agregarProducto(productoSeleccionado, elegirCantidad);
            carrito.mostrarDetalle();
            var seguirAgregando = prompt("¿Deseas seguir agregando productos? (s/n)");
            if (seguirAgregando.toLowerCase() === "s") {
                AquiEmpiezaLaMagia();
            }else{
                if (seguirAgregando.toLowerCase() == "n") {
                    carrito.finalizarCompra();
                }else{
                    alert("Debes escoger una opción válida");
                    AquiEmpiezaLaMagia();
                }
                
            }
        }
    }
}

AquiEmpiezaLaMagia();