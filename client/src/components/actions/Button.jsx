/* eslint-disable react/prop-types */
const Button = ({ text, handleClick, classProp }) => {
  return (
    <button className={`btn btn-secondary ${classProp}`} onClick={handleClick}>
      {text}
    </button>
  );
};
export default Button;
