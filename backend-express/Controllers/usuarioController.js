const Usuario = require("../models/Usuario");

exports.crearUsuario = async (req, res) => {

    try{
        let usuario;

        //Creamos nuestro usuario

        usuario = new Usuario(req.body);

        await usuario.save();
        res.send(usuario);

    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error al momento de crear usuario');
    }
    console.log(req.body);
}

exports.listarUsuarios = async (req, res) => {

    try{

        const usuario = await Usuario.find();
        res.json(usuario);

    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error al momento de listar los usuarios');
    }
    console.log(req.body);
}

exports.actualizarUsuario = async (req, res) => {

    try{

        const { DNI, nombre, apellido, correo, telefono, rol } = req.body;
        let usuario = await Usuario.findById(req.params.id);

        if(!usuario){
            res.status(404).json({ msg: 'No existe el usuario'});
        }

        usuario.DNI = DNI;
        usuario.nombre = nombre;
        usuario.apellido = apellido;
        usuario.correo = correo;
        usuario.telefono = telefono;
        usuario.rol = rol;

        usuario= await Usuario.findOneAndUpdate({_id: req.params.id}, usuario, { new: true})
        res.json(usuario);



    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error al momento de actualizar el usuario');
    }
    console.log(req.body);
}

exports.obtenerUsuario = async (req, res) => {

    try{

        let usuario = await Usuario.findById(req.params.id);

        if(!usuario){
            res.status(404).json({ msg: 'No existe el usuario'});
        }
        res.json(usuario);



    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error al momento de actualizar el usuario');
    }
    console.log(req.body);
}


exports.eliminarUsuario = async (req, res) => {

    try{

        let usuario = await Usuario.findById(req.params.id);

        if(!usuario){
            res.status(404).json({ msg: 'No existe el usuario'});
        }

        await Usuario.findByIdAndDelete({_id: req.params.id});

        res.json({ msg: 'El producto se elimino correctamente'});


    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error al momento de actualizar el usuario');
    }
    console.log(req.body);
}