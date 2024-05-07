import { NavLink } from "react-router-dom"; 

function NavBar() { 
    return ( 
        <nav className="navbar">
            <NavLink to='/'>Home</NavLink> 
            {/* <NavLink to='/SneakerPage'>Sneaker Page</NavLink>  */}
            <NavLink to='/NewSneakerForm'>New Sneaker Form</NavLink>

        </nav>
    );
}; 

export default NavBar;