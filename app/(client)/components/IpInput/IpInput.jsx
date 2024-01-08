"use client";
import Downshift from "downshift";
import PropTypes from "prop-types";
import { useState } from "react";

const ipAddresses = ["192.168.1.1", "192.168.1.2", "10.0.0.1"];

const IpInput = ({ handleSubmit, handleChange }) => {
  const [focused, setFocused] = useState(false);
  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  return (
    <div className="input_background w-full md:bg-hero-pattern bg-hero-pattern-mobile bg-no-repeat bg-cover h-96 flex flex-col md:h-72 items-center pb-20 ">
      <h1 className="input_title text-white mt-6 text-xl md:text-2xl">
        IP Address Tracker
      </h1>
      <form onSubmit={handleSubmit} className="mt-6">
        <div className="form_wrapper flex items-center">
          <Downshift itemToString={(item) => (item ? item : "")}>
            {({
              getInputProps,
              getItemProps,
              getMenuProps,

              inputValue,
              highlightedIndex,
              selectedItem,
            }) => (
              <div className="autocomplete_wrapper relative lg:w-96">
                <input
                  onChange={handleChange}
                  {...getInputProps()}
                  type="text"
                  placeholder="Search for any IP address or domain"
                  className="input_ip rounded-lg py-2 px-3 rounded-e-none shadow md:w-96 cursor-pointer outline-none focus:shadow-focusShadow focus-visible:shadow-focusShadow"
                  name="ip_address"
                  pattern="^(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)\.)+(?:[a-zA-Z]{2,6}\.?))|(?:(?:(?:(?:[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}(?:[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))|(?:(?:(?:[A-Fa-f0-9]{1,4}:){7}[A-Fa-f0-9]{1,4})|(?:(?:[A-Fa-f0-9]{1,4}:){1,7}:)|(?:(?:[A-Fa-f0-9]{1,4}:){1,6}:[A-Fa-f0-9]{1,4})|(?:(?:[A-Fa-f0-9]{1,4}:){1,5}(?::[A-Fa-f0-9]{1,4}){1,2})|(?:(?:[A-Fa-f0-9]{1,4}:){1,4}(?::[A-Fa-f0-9]{1,4}){1,3})|(?:(?:[A-Fa-f0-9]{1,4}:){1,3}(?::[A-Fa-f0-9]{1,4}){1,4})|(?:(?:[A-Fa-f0-9]{1,4}:){1,2}(?::[A-Fa-f0-9]{1,4}){1,5})|(?:(?:[A-Fa-f0-9]{1,4}:)(?::[A-Fa-f0-9]{1,4}){1,6})|(?::(?::[A-Fa-f0-9]{1,4}){1,7}|:)))$"
                  required
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
                <ul
                  {...getMenuProps()}
                  className="autocomplete_list absolute z-50 w-full shadow-lg"
                >
                  {focused &&
                    ipAddresses
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
                            fontWeight:
                              selectedItem === item ? "bold" : "normal",
                          }}
                        >
                          {item}
                        </li>
                      ))}
                </ul>
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

export default IpInput;

IpInput.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};
