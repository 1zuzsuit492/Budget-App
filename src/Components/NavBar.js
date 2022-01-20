import { Link } from "react-router-dom";
import './NavBar.css'

export const NavBar = () => {
  return (
   <>
   <div className='NavBar'>
    <h1>Budget App </h1>
    
    <button>
        <Link to="/new">New Transaction</Link>
          </button>
    </div>
    </>
  );
};

export default NavBar;