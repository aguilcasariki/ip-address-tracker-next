import mongoose from "mongoose";

const GeoSchema = new mongoose.Schema({
  ip: {
    type: String,
    required: true,
  },
  location: {
    country: {
      type: String,
      required: true,
    },
    timezone: {
      type: String,
      required: true,
    },
    timezone: {
      type: String,
      required: true,
    },
  },
  domains: {
    type: String,
    required: true,
  },
  as: {
    asn: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    route: {
      type: String,
      required: true,
    },
    domain: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  isp: {
    type: String,
    required: true,
  },
});

try {
  await mongoose.connect(process.env.MONGO_URI);
  mongoose.Promise = global.Promise;
  console.log("Conexión exitosa a la base de datos");

  var Geo = mongoose.models.Geo || mongoose.model("Geo", GeoSchema);
} catch (error) {
  console.error("Error al conectar a la base de datos:", error);
}

export default Geo;
