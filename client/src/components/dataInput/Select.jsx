import { useState } from "react";

/* eslint-disable react/prop-types */
const Select = ({ name, text, optionsArray }) => {
  // const [selectedValue, setSelectedValue] = useState(text);

  return (
    <select
      name={name}
      className="select select-bordered w-full focus:outline-none"
      defaultValue={text}
      // onChange={(e) => setSelectedValue(e.target.value)}
    >
      <option disabled>{text}</option>
      {optionsArray?.map((item, index) => {
        return (
          <option key={index} value={index + 1}>
            {item}
          </option>
        );
      })}
    </select>
  );
};
export default Select;
