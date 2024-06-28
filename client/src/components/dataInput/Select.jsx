import { useState } from "react";

/* eslint-disable react/prop-types */
const Select = ({ text, optionsArray }) => {
  const [selectedValue, setSelectedValue] = useState(text);

  return (
    <select
      className="select select-bordered w-full focus:outline-none"
      defaultValue={selectedValue}
      onChange={(e) => setSelectedValue(e.target.value)}
    >
      <option disabled>{text}</option>
      {optionsArray?.map((item, index) => {
        return <option key={index}>{item}</option>;
      })}
    </select>
  );
};
export default Select;
