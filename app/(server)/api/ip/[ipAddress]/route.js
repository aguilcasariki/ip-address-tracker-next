import { NextResponse } from "next/server";
import Geo from "../../../(models)/GeoIp";

export async function GET(request, { params }) {
  console.log("Ya este en el get");

  try {
    const geo = await Geo.findOne({ ip: params.ipAddress });
    return geo
      ? NextResponse.json(geo)
      : NextResponse.json(
          { error: "No se encontró el GeoIp." },
          { status: 404 }
        );
  } catch (error) {
    return NextResponse.json(
      { error: "Hubo un error al buscar el GeoIp." },
      { status: 500 }
    );
  }
}
