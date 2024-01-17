"use client";
import React, { useState } from "react";
import { useCombobox } from "downshift";
const ips = ["192.168.1.1", "10.0.0.1", "172.16.0.1"]; // Arreglo estático de direcciones IP

const IpComboBox = ({ handleSubmit, handleChange }) => {
  const [focused, setFocused] = useState(false);

  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    highlightedIndex,
    getItemProps,
    selectedItem,
  } = useCombobox({
    items: ips,
    itemToString: (item) => item || "",
    onSelectedItemChange: (changes) => {
      handleChange(changes.selectedItem);
    },
    onInputValueChange: (changes) => {
      handleChange(changes.inputValue);
    },
  });

  return (
    <div className="input_background w-full md:bg-hero-pattern bg-hero-pattern-mobile bg-no-repeat bg-cover h-96 flex flex-col md:h-72 items-center pb-20 ">
      <h1 className="input_title text-white mt-6 text-xl md:text-2xl">
        IP Address Tracker
      </h1>
      <form onSubmit={handleSubmit} className="mt-6">
        <div className="form_wrapper flex items-center">
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
          <button
            type="submit"
            className="search_btn bg-very-dark-gray p-3.5 rounded-lg rounded-s-none hover:bg-dark-gray focus:bg-dark-gray focus:shadow-focusShadow focus-visible:shadow-focusShadow"
            {...getToggleButtonProps()}
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

          <ul
            {...getMenuProps()}
            className="autocomplete_list absolute z-50 w-full shadow-lg"
          >
            {isOpen &&
              ips.map((ip, index) => (
                <li
                  {...getItemProps({ item: ip, index })}
                  key={ip}
                  className="autocomplete_item py-1 px-2 cursor-pointer "
                  style={{
                    backgroundColor:
                      highlightedIndex === index ? "#545769" : "white",
                    color: highlightedIndex === index ? "white" : "black",
                  }}
                >
                  {ip}
                </li>
              ))}
          </ul>
        </div>
      </form>
    </div>
  );
};

export default IpComboBox;
