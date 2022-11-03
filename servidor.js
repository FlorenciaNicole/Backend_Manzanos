const express = require('express')

const servidor = express()

servidor.get('/bienvenida', (peticion, respuesta) => {
respuesta.end('Hola!')
})

servidor.get('/despedida' , (peticion, respuesta) => {
    respuesta.end('Chau!')
})

function conectar(puerto = 0) {
    return new Promise((resolve, reject) => {

        const servidorConectador = servidor.listen(puerto, err => {
            if (err) reject(err)
            else resolve(servidorConectador)
        })

    })
}

module.exports = {
    conectar
}