import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faTachometerAlt, faComments, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
    const [open, setOpen] = useState(true);

    return (
        <nav>
            
                <Link to="/"><FontAwesomeIcon icon={faHome} /></Link>
                <Link to="/admin"><FontAwesomeIcon icon={faComments} /></Link>
                <Link to="/teacher"><FontAwesomeIcon icon={faTachometerAlt} /></Link>
                <Link to="/caregiver"><FontAwesomeIcon icon={faSignOutAlt} /></Link>
            
        </nav>
    );
};

export default Nav;