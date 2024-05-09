import { NavLink } from "react-router-dom"; 

function NavBar() { 
    // links to home page and adding a sneaker
    return ( 
        <div id="navbar-container">
        <nav className="navbar">
            <NavLink to='/'>Home</NavLink> 
            <div>
            <NavLink to='/NewSneakerForm'>New Sneaker Form</NavLink>
            </div>
        </nav>
        </div>
    );
}; 

export default NavBar;