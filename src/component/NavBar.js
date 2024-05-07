import { NavLink } from "react-router-dom"; 

function NavBar() { 
    return ( 
        <nav className="navbar">
            <NavLink to='/'>Home</NavLink> 
            <div>
            {/* <NavLink to='/SneakerPage'>Sneaker Page</NavLink>  */}
            <NavLink to='/NewSneakerForm'>New Sneaker Form</NavLink>
            </div>
        </nav>
    );
}; 

export default NavBar;