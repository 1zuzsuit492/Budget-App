import { Link } from "react-router-dom";
import './NavBar.css'

export const NavBar = () => {
  return (
   <>
   <div className='NavBar'>
    <h1>Budget App </h1>
        <Link style={{position: 'right'}} to="/">Home</Link>
    </div>
    </>
  );
};
//complete:
// The Nav bar allows me to navigate to the Index and New pages
export default NavBar;