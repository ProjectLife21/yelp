/* eslint-disable react/prop-types */
const Input = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="input input-bordered w-full focus:outline-none"
    />
  );
};
export default Input;
