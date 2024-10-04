import { Link } from 'react-router-dom';
import './NavBar.css'; // Import the CSS file

const NavBar = () => {
  return (
    <nav className="navbar">
      {/* <Link to="/" className="active">Home</Link> */}
      <Link to="/register">Register</Link>
      <Link to="/allusers">All Users</Link>
    </nav>
  );
};

export default NavBar;
