import { Link, useNavigate } from "react-router-dom";
import useAuth from "../auth/userLogin";

const ProtectedLink = ({ to, children }) => {
  const navigate = useNavigate();
  const currentUser = useAuth(); // Use the useAuth hook to get the current user

  const handleClick = (e) => {
    if (!currentUser) {
      e.preventDefault();
      navigate("/Login"); // Redirect to login page if not authenticated
    }
  };

  return (
    <Link to={"/Login"} onClick={handleClick}>
      {children}
    </Link>
  );
};

export default ProtectedLink;