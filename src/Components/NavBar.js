import { Link } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
  return (
   <>
   <nav className='NavBar'>
      <h1>
        <Link to='/'>Budget App </Link>
      </h1>
        <button>
        <Link to="/transactions/new">New Transactions</Link>
        </button>
    </nav>
    </>
  );
};
//complete:
// The Nav bar allows me to navigate to the Index and New pages
export default NavBar;