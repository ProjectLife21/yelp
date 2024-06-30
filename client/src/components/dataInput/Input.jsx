/* eslint-disable react/prop-types */
const Input = ({ name, type, placeholder }) => {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      className="input input-bordered w-full focus:outline-none"
    />
  );
};
export default Input;
