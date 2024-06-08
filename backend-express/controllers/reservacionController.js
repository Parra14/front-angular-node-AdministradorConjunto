const Reservacion = require("../models/Reservacion");

exports.crearReservacion = async (req, res) => {
    try {
        const { sitio, fechaReserva, horaReserva } = req.body;

        const [day, month, year] = fechaReserva.split('/');
        const reservacionFechaHora = new Date(`${year}-${month}-${day}T${horaReserva}`);
        const now = new Date();

        if (reservacionFechaHora < now) {
            return res.status(400).send('No se puede realizar una reservación en el pasado.');
        }

        const existingReservacion = await Reservacion.findOne({ fechaReserva, horaReserva, sitio });

        if (existingReservacion) {
            return res.status(400).send('El lugar ya está reservado para la fecha y hora seleccionadas.');
        }

        let reservacion = new Reservacion(req.body);
        await reservacion.save();
        res.send(reservacion);

    } catch (error) {
        console.log(error);
        res.status(500).send('¡Ha ocurrido un error!');
    }
};

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