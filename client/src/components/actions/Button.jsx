const Button = ({ text, handleClick }) => {
  return (
    <button className="btn btn-secondary" onClick={handleClick}>
      {text}
    </button>
  );
};
export default Button;
