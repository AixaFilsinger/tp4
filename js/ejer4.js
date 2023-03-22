class Producto{
    constructor(codigo, nombre, precio){
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }

    mostrarDatos (){
        document.write(`
        <ul>
        <li>Codigo: ${this.codigo}</li>
        <li>Nombre: ${this.nombre}</li>
        <li>Precio: $${this.precio}</li>
        </ul>
        `);
    }

}

let jabon_ala = new Producto(001, 'Jabón Ala Mctic', 140);
let cocaCola = new Producto(002, 'Coca Cola 500ml', 200);
let marroc = new Producto(003, 'Bocadito Marroc', 70);

let arreglo = [jabon_ala, cocaCola, marroc];

arreglo.forEach(item => {
    item.mostrarDatos();
    
});