class Contenedor {
    productos = []

    constructor(productos) {
        this.productos.push(productos)
    }

    save(productos){
        this.productos.push(productos)
        return 'Agregaste un producto'
    }

    getById(id){
        let a = this.productos.find(el => el.id === id)
        if(a){
            return 'El producto ' + a.id + 'es ' + a.title
        }else{
            return 'Producto no encontrado'
        }
    }

    getAll(){
        return this.productos
    }

    deleteById(id){
        let a = this.productos.find(el => el.id === id)
        if(a){
            const filterProductos = this.productos.filter((el)=> el.id !==id)
            this.productos = filterProductos
            return 'Producto' + a.id + '('+a.title+') eliminado'
        }else{
            return 'Producto no encontrado'
        }
        }
        
    deleteAll(){
        this.productos = []
        return 'Productos eliminados'
    }
}

const cont1 =new Contenedor({
    id: 1,
    title: 'NINA EDT REFILLABLE 80 ML',
    price: 18500,
    thumbnail: 'https://juleriaque.vteximg.com.br/arquivos/ids/189383-1000-1000/nina-edt-refillable-5A85B04C7A019CAD64D74A41E9E7AE69.jpg?v=637992869449470000',
})

console.log(cont1.save({
    id: 2,
    title:'NINA RICCI extra rouge edp for woman 30 ML',
    price: 12200,
    thumbnail:'https://farmaonline.vteximg.com.br/arquivos/ids/379625-0-0/8118035_0.jpg?v=637981710445700000'
}));

console.log(cont1.getAll());

console.log(cont1.getById(1));

console.log(cont1.deleteAll());

console.log(cont1.deleteById(1));

