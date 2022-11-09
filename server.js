const express = require('express')

function controladorGetRoot(req, res) {
    res.send('Todo ok!')
}

function controladorGetBienvenida(req, res) {
    res.send('Hola!!')
}

function controladorGetProductos(req, res) {
    res.json({title:'NINA EDT REFILLABLE 80 ML'})
}

function controladorGetDespedida(req, res) {
    res.send('Chau!!')
}

const app = express()

app.get('/', controladorGetRoot)

app.get('/bienvenida', controladorGetBienvenida)

app.get('/productos', controladorGetProductos)

app.get('/despedida', controladorGetDespedida)

const server = app.listen(8080)


