import { NextRequest, NextResponse } from "next/server";
import { promises as dns } from "dns";
import net from "net";

/**
 * Interface for typing the request body.
 * This helps with code safety and autocompletion.
 */
interface RequestBody {
  target?: string;
}

// The external API that provides geolocation data.
const GEO_API_URL = "https://api.ipquery.io/";

export async function POST(request: NextRequest) {
  let body: RequestBody;

  try {
    // Get and parse the request body.
    body = await request.json();
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid JSON in request body" },
      { status: 400 }
    );
  }

  // Validate that the 'target' field is a string.
  const { target } = body;
  if (typeof target !== "string") {
    return NextResponse.json(
      { error: 'The "target" field must be a string' },
      { status: 400 }
    );
  }

  let ipAddress: string | undefined;

  // Determine if the 'target' is an IP, a domain, or empty.
  if (target === "") {
    // If target is empty, we don't set ipAddress or domain.
    // The external API will use the request's IP.
    console.log("Input is empty, fetching data for the client IP.");

    ipAddress = (await fetch(GEO_API_URL).then((res) => res.text())).toString();
  } else if (net.isIP(target)) {
    // If it's already an IP (v4 or v6), we use it directly.
    console.log(`Input '${target}' is an IP address.`);
    ipAddress = target;
  } else {
    // If it's not an IP, we treat it as a domain.
    console.log(`Input '${target}' is a domain. Resolving...`);
    try {
      // 4. Use dns.lookup to get the IP address (prefers IPv4 by default).
      const { address } = await dns.lookup(target);
      ipAddress = address;
      console.log(`Domain '${target}' resolved to IP '${ipAddress}'.`);
    } catch (error) {
      console.error(`Error resolving domain '${target}':`, error);
      return NextResponse.json(
        { error: `Could not resolve domain: ${target}` },
        { status: 400 }
      );
    }
  }

  // 5. Now, call the external Geo API.
  try {
    const externalApiUrl = `${GEO_API_URL}${ipAddress}`;
    console.log(`Calling external endpoint: ${externalApiUrl}`);

    const apiResponse = await fetch(externalApiUrl);
    const data = await apiResponse.json();

    if (!apiResponse.ok) {
      console.error("External API error:", data);
      // Forward the error from the external API
      return NextResponse.json(
        { error: data.messages || "Failed to fetch IP data." },
        { status: apiResponse.status }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error calling external endpoint:", error);
    return NextResponse.json(
      { error: "An internal server error occurred." },
      { status: 500 }
    );
  }
}
