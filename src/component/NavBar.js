import { NavLink } from "react-router-dom"; 

function NavBar() { 
    return ( 
        <nav className="navbar">
            <NavLink to='/'>Home</NavLink> 
            <div>
            <NavLink to='/NewSneakerForm'>New Sneaker Form</NavLink>
            <div><NavLink to='/SneakerCard'>Sneaker Card </NavLink></div>
            </div>
        </nav>
    );
}; 

export default NavBar;