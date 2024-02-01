const fetchIpGeoData = async (ipAddress) => {
  console.log("ipAddress", encodeURIComponent(ipAddress));
  const apiUrl = ipAddress
    ? `https://ip-address-tracker-next.vercel.app/api/ip/${encodeURIComponent(
        ipAddress
      )}`
    : "https://ip-address-tracker-next.vercel.app/api/ip";

  const response = await fetch(apiUrl);
  const data = await response.json();
  console.log("Dentro del fetch", data);
  return data;
};

export default fetchIpGeoData;
