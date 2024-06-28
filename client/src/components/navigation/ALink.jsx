/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ALink = ({ linkTo, text, classProp }) => {
  return (
    <Link to={linkTo} className={classProp}>
      {text}
    </Link>
  );
};
export default ALink;
