const fs = require('fs')
const { randomUUID } = require('crypto')

class Contenedor {
    #elementos

    constructor() {
        this.#elementos = []
    }

    guardar(elemento) {
        this.#elementos.push(elemento)
    }

    recuperarTodos() {
        return this.#elementos
    }

}

class ContenedorArchivo {
    #elementos
    #ruta

    constructor(ruta) {
        this.#ruta = ruta
        this.#elementos = []
    }

    async guardar(elemento) {
        this.#elementos.push(elemento)
        await fs.promises.writeFile(this.#ruta, JSON.stringify(this.#elementos))
    }

    async recuperarTodos() {
        this.#elementos = JSON.parse(await fs.promises.readFile(this.#ruta,'utf-8'))
        return this.#elementos
    }

}

function test() {
    const contenedor = new Contenedor()

    contenedor.guardar({
        id: 1,
        title: 'NINA EDT REFILLABLE 80 ML',
        price: 18500,
        thumbnail: 'https://juleriaque.vteximg.com.br/arquivos/ids/189383-1000-1000/nina-edt-refillable-5A85B04C7A019CAD64D74A41E9E7AE69.jpg?v=637992869449470000',
    })

    contenedor.guardar({
        id: 2,
        title:'NINA RICCI extra rouge edp for woman 30 ML',
        price: 12200,
        thumbnail:'https://farmaonline.vteximg.com.br/arquivos/ids/379625-0-0/8118035_0.jpg?v=637981710445700000',
    })

    console.log(contenedor.recuperarTodos())
}

async function test2() {
    const rutaArchivo = './elementos.txt'
    await fs.promises.writeFile(rutaArchivo, '[]')
    const contenedor = new ContenedorArchivo(rutaArchivo)

    await contenedor.guardar({
        id: 3,
        title:'NINA ROSE EDT 80 ML',
        price: 18500,
        thumbnail:'https://juleriaque.vteximg.com.br/arquivos/ids/189643-1000-1000/nina-fleur-edt-DBF829F822DB83547642EA508567D7BB.jpg?v=637999781230300000',
    })

    await contenedor.guardar({
        id: 4,
        title:'NINA RICCIL AIR DU TEMPS EDT',
        price: 17700,
        thumbnail:'https://juleriaque.vteximg.com.br/arquivos/ids/179505-1000-1000/ninaricci-ldt-5.jpg?v=637710269758670000'
    })

    console.log(await contenedor.recuperarTodos())
}

test()
test2()