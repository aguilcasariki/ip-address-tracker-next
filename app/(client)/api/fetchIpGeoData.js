const fetchIpGeoData = async (ipAddress) => {
  const response = await fetch(`${process.env.API_URL}/api/ip/${ipAddress}`);
  const data = await response.json();
  return data;
};

export default fetchIpGeoData;
