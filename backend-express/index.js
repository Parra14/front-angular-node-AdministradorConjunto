const express = require('express');
const conectarDB = require('./config/db');
const cors = require("cors");

// Creacion Servidor

const app = express();

//Conectar a la bnase de datos
conectarDB();

app.use(cors());
app.use(express.json());

app.use('/api', require('./routes/routes'));

app.listen(4000, () => {
    console.log('este servidor esta corriendo prefectamente')
})