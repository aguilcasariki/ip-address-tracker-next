import React, { useState } from "react";
import Downshift from "downshift";
import PropTypes from "prop-types";

const validIpAddresses = ["219.220.53.44", "192.168.1.2", "10.0.0.1"];

const IpAddressInput = ({ handleSubmit, handleChange }) => {
  const [focused, setFocused] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  const handleStateChange = (changes) => {
    if (changes.hasOwnProperty("inputValue")) {
      setSelectedItem(changes.inputValue || "");
    }
  };

  return (
    <div className="input_background w-full md:bg-hero-pattern bg-hero-pattern-mobile bg-no-repeat bg-cover h-96 flex flex-col md:h-72 items-center pb-20 ">
      <h1 className="input_title text-white mt-6 text-xl md:text-2xl">
        IP Address Tracker
      </h1>
      <form onSubmit={handleSubmit} className="mt-6">
        <div className="form_wrapper flex items-center">
          <Downshift
            onChange={handleChange}
            onStateChange={handleStateChange}
            selectedItem={selectedItem}
            inputValue={selectedItem}
          >
            {({
              getInputProps,
              getItemProps,
              getMenuProps,
              inputValue,
              highlightedIndex,
              selectedItem,
              isOpen,
            }) => (
              <div className="autocomplete_wrapper relative lg:w-96">
                <input
                  {...getInputProps({
                    onFocus: () => setFocused(true),
                    onBlur: () => setFocused(false),
                  })}
                  type="text"
                  placeholder="Search for any IP address or domain"
                  className="input_ip rounded-lg py-2 px-3 rounded-e-none shadow md:w-96 cursor-pointer outline-none focus:shadow-focusShadow focus-visible:shadow-focusShadow"
                  name="ip_address"
                  pattern="\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}"
                  required
                />
                {isOpen && (
                  <ul
                    {...getMenuProps()}
                    className="autocomplete_list absolute z-50 w-full shadow-lg"
                  >
                    {validIpAddresses
                      .filter(
                        (item) => !inputValue || item.includes(inputValue)
                      )
                      .map((item, index) => (
                        <li
                          {...getItemProps({ item, index })}
                          key={item}
                          className="autocomplete_item py-1 px-2 cursor-pointer "
                          style={{
                            backgroundColor:
                              highlightedIndex === index ? "#545769" : "white",
                            color:
                              highlightedIndex === index ? "white" : "black",
                          }}
                        >
                          {item}
                        </li>
                      ))}
                  </ul>
                )}
              </div>
            )}
          </Downshift>

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

export default IpAddressInput;

IpAddressInput.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};
