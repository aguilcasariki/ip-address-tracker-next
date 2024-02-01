const ips = [
  "173.145.163.32",
  "https://mapquest.com",
  "78.143.24.65",
  "http://microsoft.com",
]; // Arreglo estático de direcciones IP
const IpComboBox = ({ handleSubmit, handleChange }) => {
  return (
    <div className="input_background w-full md:bg-hero-pattern bg-hero-pattern-mobile bg-no-repeat bg-cover h-96 flex flex-col md:h-72 items-center pb-20 ">
      <h1 className="input_title text-white mt-6 text-xl md:text-2xl">
        IP Address Tracker
      </h1>
      <form onSubmit={handleSubmit} className="mt-6">
        <div className="form_wrapper flex items-center relative">
          <input
            onChange={handleChange}
            type="text"
            placeholder="Search for these IP address or domain"
            className="input_ip rounded-lg py-2 px-3 rounded-e-none shadow md:w-96 cursor-pointer outline-none focus:shadow-focusShadow focus-visible:shadow-focusShadow"
            name="ip_address"
            required
            list="ipAddresses"
          />
          <datalist id="ipAddresses">
            {ips.map((ip, index) => (
              <option key={index} value={ip} />
            ))}
          </datalist>
          <button
            type="submit"
            className="search_btn bg-very-dark-gray p-3.5 rounded-lg rounded-s-none hover:bg-dark-gray focus:bg-dark-gray focus:shadow-focusShadow focus-visible:shadow-focusShadow"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
              <path
                fill="none"
                stroke="#FFF"
                strokeWidth="3"
                d="M2 1l6 6-6 6"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default IpComboBox;
