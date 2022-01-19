import { Link } from "react-router-dom";
import './NavBar.css'
// src/Components/NavBar.css

export const NavBar = () => {
  return (
   <>
   <div className='NavBar'>
    <button>
        <Link to="/new">New Button</Link>
          </button>
    </div>
    </>
  );
};

export default NavBar;