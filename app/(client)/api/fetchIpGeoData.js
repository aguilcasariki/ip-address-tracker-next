const fetchIpGeoData = async (ipAddress) => {
  console.log("ya estA en el fetchIpGeoData", ipAddress);
  const response = await fetch(
    `https://ip-address-tracker-next.vercel.app/api/ip/${ipAddress}`
  );
  console.log("LA RESPONSE ES:", response.text());
  const data = await response.json();
  console.log("LA DATA EN EL FETCH ES: ", data);
  return data;
};

export default fetchIpGeoData;
