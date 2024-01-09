import mongoose from "mongoose";

const GeoSchema = new mongoose.Schema({
  ip: String,
  location: {
    region: String,
    city: String,
    lat: Number,
    lng: Number,
    postalCode: String,
    timezone: String,
  },
  domain: String,
  isp: String,
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
