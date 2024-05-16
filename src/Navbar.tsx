import {NavLink} from "react-router-dom";

const Navbar = () => {
    return <nav>
        Navigation:&nbsp;
        <NavLink to="/">Films</NavLink>&nbsp;|&nbsp;
        <NavLink to="/persons">People</NavLink>
    </nav>
}

export default Navbar;