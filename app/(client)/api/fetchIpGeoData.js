const fetchIpGeoData = async (ipAddress) => {
  console.log("ya estA en el fetchIpGeoData");
  const response = await fetch(`${process.env.API_URL}/api/ip/${ipAddress}`);
  const data = await response.json();
  console.log("LA DATA EN EL FETCH ES: ", data);
  return data;
};

export default fetchIpGeoData;
