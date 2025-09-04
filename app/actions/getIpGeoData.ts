"use server";
import { GeoData } from "@/types/geoData";
import { promises as dns } from "dns";
import net from "net";

// The external API that provides geolocation data.
const GEO_API_URL = "https://api.ipquery.io/";

export async function getGeoData(target: string = ""): Promise<GeoData> {
  let ipAddress: string | undefined;

  // Determine if the 'target' is an IP, a domain, or empty.
  if (target === "") {
    // If target is empty, we don't set ipAddress or domain.
    // The external API will use the request's IP.
    console.log("Input is empty, fetching data for the client IP.");
    // We pass an empty string to the external API, which will use the request's IP.
    ipAddress = (await fetch(GEO_API_URL).then((res) => res.text())).toString();
  } else if (net.isIP(target)) {
    // If it's already an IP (v4 or v6), we use it directly.
    console.log(`Input '${target}' is an IP address.`);
    ipAddress = target;
  } else {
    // If it's not an IP, we treat it as a domain.
    console.log(`Input '${target}' is a domain. Resolving...`);
    try {
      const { address } = await dns.lookup(target);
      ipAddress = address;
      console.log(`Domain '${target}' resolved to IP '${ipAddress}'.`);
    } catch (error) {
      console.error(`Error resolving domain '${target}':`, error);
      return { error: `Could not resolve domain: ${target}` };
    }
  }

  // Now, call the external Geo API.
  try {
    const externalApiUrl = `${GEO_API_URL}${ipAddress}`;
    console.log(`Calling external endpoint: ${externalApiUrl}`);

    const apiResponse = await fetch(externalApiUrl);
    const data = await apiResponse.json();

    if (!apiResponse.ok) {
      console.error("External API error:", data);
      // Forward the error from the external API
      return { error: data.messages || "Failed to fetch IP data." };
    }

    return data;
  } catch (error) {
    console.error("Error calling external endpoint:", error);
    return { error: "An internal server error occurred." };
  }
}
