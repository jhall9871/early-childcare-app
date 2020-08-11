import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Nav = () => {
    const [open, setOpen] = useState(true);

    return (
        <nav>
            <ul>
                <li><Link to="/teacher">Dashboard</Link></li>
                <li><Link to="/admin">Messages</Link></li>
                <li><Link to="/caregiver">Log Out</Link></li>
            </ul>
        </nav>
    );
};

export default Nav;