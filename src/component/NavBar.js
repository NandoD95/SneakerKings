import { NavLink } from "react-router-dom"; 

function NavBar() { 
    return ( 
        <nav className="navbar">
            <NavLink to='/'>Home</NavLink> 
            <div>
            <NavLink to='/NewSneakerForm'>New Sneaker Form</NavLink>
            <NavLink to='/SneakerCard'>Sneaker Card </NavLink>
            </div>
        </nav>
    );
}; 

export default NavBar;