import { NextResponse } from "next/server";
import Geo from "../../../(models)/GeoIp";

export async function GET(request, { params }) {
  try {
    const geo = await Geo.findOne({
      $or: [{ ip: params.ipAddress }, { domain: params.ipAddress }],
    });
    return geo
      ? NextResponse.json(geo)
      : NextResponse.json(
          { error: "GeoIp data not found for this IP or domain." },
          { status: 404 }
        );
  } catch (error) {
    return NextResponse.json(
      {
        error:
          "An error occurred while searching for the GeoIp data for this IP or domain.",
      },
      { status: 500 }
    );
  }
}
