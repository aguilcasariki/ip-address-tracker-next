import { NextResponse } from "next/server";
import Geo from "../../../(models)/GeoIp";

export async function GET(request, { params }) {
  console.log("ya este en el get");

  const geo = await Geo.findOne({ ip: params.ipAddress });
  return NextResponse.json(geo);
}
