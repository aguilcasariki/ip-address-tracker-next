const fetchIpGeoData = async (ipAddress) => {
  const apiUrl = ipAddress
    ? `https://ip-address-tracker-next.vercel.app/api/ip/${ipAddress}`
    : "https://ip-address-tracker-next.vercel.app/api/ip";

  const response = await fetch(apiUrl);
  const data = await response.json();

  return data;
};

export default fetchIpGeoData;
