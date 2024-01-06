const fetchIpGeoData = async (ipAddress) => {
  const response = await fetch(`http://localhost:3000/api/ip/${ipAddress}`);
  const data = await response.json();
  return data;
};

export default fetchIpGeoData;
