// eslint-disable-next-line react/prop-types
const SubmitButton = ({ text, classProp }) => {
  return (
    <button type="submit" className={classProp}>
      {text}
    </button>
  );
};
export default SubmitButton;
