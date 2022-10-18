class Contenedor {
    
    #productos;
    constructor(){
        this.#productos = []
    }

    save(id, title, price, thumbnail){
        let objeto = {id: id, title: title, price: price, thumbnail: thumbnail};
        this.#productos.push(objeto)
    }

    getById(id){
        const objetoBuscado = productos.find((p)=>p.id===id)
        if (objetoBuscado===undefined){
            return null
        } else {
            return objetoBuscado
        }
    }

    getAll(){
        return productos
    }

    deleteById(id){
        for(let i = 0; i <productos.length; i ++){
            if(productos[i].id===id){
                productos.splice(i, 1)
            }
        }
    }

    deleteAll(){
        productos.splice(0, productos.lenght + 1)
    }
}