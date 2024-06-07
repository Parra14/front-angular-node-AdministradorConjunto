const { Schema, model } = require("mongoose");

const ReservacionSchema = new Schema(
  {
    sitio: {
      type: String,
      required: [true, "Campo requerido"],
      uppercase: true,
    },    
    apto: {
        type: String,
        required: [true, "Campo requerido"],
        uppercase: true,
    },   
    residenteReserva: {
      type: String,
      required: [true, "Campo requerido"],
      uppercase: true,
    },
    fechaReserva: {
        type: String,
        required: [true, "Campo requerido"],
        validate: {
          validator: function(v) {
            // This regex checks for the format dd/mm/yyyy
            return /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[012])\/(19|20)\d{2}$/.test(v);
          },
          message: props => `${props.value} no es una fecha válida. El formato correcto es DD/MM/AAAA`
        }
      },
    horaReserva: {
        type: String,
        required: [true, "Campo requerido"],
        validate: {
          validator: function(v) {
            // This regex checks if the time is in HH:MM format and in 30-minute intervals
            return /^([01]?[0-9]|2[0-3]):([03]0)$/.test(v);
          },
          message: props => `${props.value} no es un intervalo válido de 30 minutos`
        }
      },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

model("Reservacion", ReservacionSchema);

module.exports = model("Reservacion", ReservacionSchema);