import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return <nav>
        Navigation:&nbsp;
        <Link to="/">Films</Link>&nbsp;|&nbsp;
        <Link to="/persons">People</Link>
    </nav>
}

export default Navbar;