import { NextResponse } from "next/server";
import Geo from "../../../(models)/GeoIp";

export async function GET(request, { params }) {
  console.log("Now in the get");

  try {
    if (!params.ipAddress) {
      throw new Error("IP address or domain is missing");
    }

    const geo = await Geo.findOne({
      $or: [{ ip: params.ipAddress }, { domain: params.ipAddress }],
    });

    return geo
      ? NextResponse.json(geo)
      : NextResponse.json({ error: "GeoIp data not found." }, { status: 404 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "An error occurred while searching for the GeoIp data." },
      { status: 500 }
    );
  }
}
