const Usuario = require("../models/Usuario");
const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "variables.env" });
const {Base64} = require('js-base64');

exports.signup = async (req, res) => {
    try {
      let user;
  
      //creamos el usuario
      user = new Usuario(req.body);
      console.log(user)
      user.password=Base64.encode(user.password);
      console.log(user)
      await user.save();
      res.send(user);
  
    } catch (error) {
      console.log(error);
      res.status(500).send("hubo un error :(");
    }
  };

  exports.signin = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await Usuario.findOne({ email });
      let passwordencode=Base64.encode(password);
      if (!user) return res.status(401).send("El Email no existe");
      console.log(user)
      if (user.password !== passwordencode){
        return res.status(401).send("La contraseña no coincide");}
  
      const token = jwt.sign({ _id: user._id, _rol: user.rol, _email: user.email }, process.env.KEYjwt);
  
      return res.status(200).json({ token });
    } catch (error) {
      console.log(error);
      res.status(500).send("hubo un error :(");
    }
  };

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

        res.json({ msg: 'El usuario se elimino correctamente'});


    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error al momento de actualizar el usuario');
    }
    console.log(req.body);
}