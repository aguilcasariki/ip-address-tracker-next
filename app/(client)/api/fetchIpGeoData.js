const fetchIpGeoData = async (ipAddress) => {
  const response = await fetch(
    `https://ip-address-tracker-next.vercel.app/api/ip/${ipAddress}`
  );

  const data = await response.json();

  return data;
};

export default fetchIpGeoData;
