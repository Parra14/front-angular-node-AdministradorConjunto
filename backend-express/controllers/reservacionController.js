const Reservacion = require("../models/Reservacion");

exports.crearReservacion = async (req, res) => {

    try {

        //guardamos el Reservacion que llega en el body en la variable reservacion
        let reservacion = new Reservacion(req.body);
        //guardamos el Reservacion en la base de datos
        await reservacion.save();
        //Enviamos resultado del reservacion al usuario que realiza la peticion
        res.send(reservacion);

    } catch (error) {
        console.log(error);
        res.status(500).send('ha ocurrido un error!');
    }
}

exports.obtenerReservacions = async (req, res) => {
    try {

        const reservacion = await Reservacion.find();
        res.json(reservacion)

    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error :(');
    }
}

exports.obtenerReservacion = async (req, res) => {
    try {
        let reservacion = await Reservacion.findById(req.params.id);

        if (!reservacion) {
            res.status(404).json({ msg: 'No existe el Reservacion' })
        }

        res.json(reservacion);

    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error :(');
    }
}

exports.eliminarReservacion = async (req, res) => {
    try {
        let reservacion = await Reservacion.findById(req.params.id);

        if (!reservacion) {
            res.status(404).json({ msg: 'No existe el Reservacion' })
        }

        await Reservacion.findByIdAndDelete({ _id: req.params.id })
        res.json({ msg: 'Reservacion eliminado con exito' });

    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error :(');
    }
}