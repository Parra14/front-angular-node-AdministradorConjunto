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
    fechaReserva: Date,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

model("Reservacion", ReservacionSchema);

module.exports = model("Reservacion", ReservacionSchema);