import React /* { useState} */ from 'react';
/* import NavLinks from './navLinks'; */
import MobileNav from './mobileNav';
import style from './nav.module.css';
import ComputerNav from './computerNav';


function Nav() {
    /* const [open, setOpen] = useState(false)
    const handleClick = () => {
        setOpen(!open)
    } */

    return(
        <nav className={style.Nav}>
            <MobileNav/>
            <ComputerNav/>
        </nav>
        
    )
    
}

export default Nav