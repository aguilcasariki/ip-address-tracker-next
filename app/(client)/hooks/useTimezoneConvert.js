const useTimezoneConvert = (timezone) => {
  return typeof timezone === "string" ? timezone.split("/") : "";
};

export default useTimezoneConvert;
