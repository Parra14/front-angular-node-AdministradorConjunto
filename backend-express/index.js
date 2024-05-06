const express = require('express');

const conectarDB = require('./config/db');

// Creacion Servidor

const app = express();

//Conectar a la bnase de datos
conectarDB();

app.use(express.json());

app.use('/api/usuarios', require('./routes/usuarios'));

app.listen(4000, () => {
    console.log('este servidor esta corriendo prefectamente')
})