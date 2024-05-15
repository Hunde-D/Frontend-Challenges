import { Link } from "react-router-dom";

const BackBtn = ({ to, className, children }) => {
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
};

export default BackBtn;
