/* const { conectar } = require('./servidor.js');
const {
    randomUUID
} = require('crypto')
class Contenedor {
    #ruta
    #productos
    constructor() {
        this.#productos = []
    }
    save(productos) {
        this.#productos.push(productos)
        return 'Agregaste un producto'
    }
    getById(id) {
        let a = this.productos.find(el => el.id === id)
        if (a) {
            return 'El producto ' + a.id + 'es ' + a.title
        } else {
            return 'Producto no encontrado'
        }
    }
    getAll() {
        return this.#productos
    }
    deleteById(id) {
        let a = this.productos.find(el => el.id === id)
        if (a) {
            const filterProductos = this.productos.filter((el) => el.id !== id)
            this.productos = filterProductos
            return 'Producto' + a.id + '(' + a.title + ') eliminado'
        } else {
            return 'Producto no encontrado'
        }
    }
    deleteAll() {
        this.productos = []
        return 'Productos eliminados'
    }
}
class ContenedorArchivo {
    #ruta
    #productos
    constructor(ruta) {
        this.#ruta = ruta
        this.#productos = []
    }
    async save(productos) {
        this.#productos.push(productos)
        await express.promises.writeFile(this.#ruta, JSON.stringify(this.#productos))
    }
    async getAll() {
        this.#productos = JSON.parse(await express.promises.readFile(this.#ruta, 'utf-8'))
        return this.#productos
    }
}
function test() {
    const contenedor = new Contenedor()
    contenedor.save({
        id: 1,
        title: 'NINA EDT REFILLABLE 80 ML',
        price: 18500,
        thumbnail: 'https://juleriaque.vteximg.com.br/arquivos/ids/189383-1000-1000/nina-edt-refillable-5A85B04C7A019CAD64D74A41E9E7AE69.jpg?v=637992869449470000',
    })
    contenedor.save({
        id: 2,
        title: 'NINA RICCI extra rouge edp for woman 30 ML',
        price: 12200,
        thumbnail: 'https://farmaonline.vteximg.com.br/arquivos/ids/379625-0-0/8118035_0.jpg?v=637981710445700000',
    })
    contenedor.save({
        id: 3,
        title: 'NINA ROSE EDT 80 ML',
        price: 18500,
        thumbnail: 'https://juleriaque.vteximg.com.br/arquivos/ids/189643-1000-1000/nina-fleur-edt-DBF829F822DB83547642EA508567D7BB.jpg?v=637999781230300000',
    })
    contenedor.save({
        id: 4,
        title: 'NINA RICCIL AIR DU TEMPS EDT',
        price: 17700,
        thumbnail: 'https://juleriaque.vteximg.com.br/arquivos/ids/179505-1000-1000/ninaricci-ldt-5.jpg?v=637710269758670000',
    })
    console.log(contenedor.getAll())
}
async function test2() {
    const rutaArchivo = './productos.txt'
    await express.promises.writeFile(rutaArchivo, '[]')
    const contenedor = new ContenedorArchivo(rutaArchivo)
    await contenedor.save({
        id: 4,
        title: 'NINA RICCIL AIR DU TEMPS EDT',
        price: 17700,
        thumbnail: 'https://juleriaque.vteximg.com.br/arquivos/ids/179505-1000-1000/ninaricci-ldt-5.jpg?v=637710269758670000',
    })
    console.log(await contenedor.getAll())
}
test()
test2() */

/* const { conectar } = require('./server')

async function index() {
    try {
        const serv = await conectar(8080)
        console.log(`Conectado al puerto ${serv.address().port}`)
    } catch (error) {
        console.log('Algo falló: ' + error);
    }
}

index() */