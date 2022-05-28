import NavLinks from "./navLinks.jsx"
import style from "./nav.module.css"
import { IoIosMenu } from 'react-icons/io'
import { VscClose } from 'react-icons/vsc'
import { useState } from 'react'
import { VscCode } from 'react-icons/vsc'

function MobileNav() {

    const [open, setOpen] = useState(false)

    const hamburguerIcon = <IoIosMenu 
                                className={style.Hamburguer} size="30px" color="white"
                                onClick={() => setOpen(!open)}
                            />

    const closeIcon =  <VscClose 
                                className={style.Hamburguer} size="30px" color="white"
                                onClick={() => setOpen(!open)}
                        />

    const closeMobileMenu = () => setOpen(false)

    return(
        <nav className={style.MobileNav}>
            <div className={style.aber}>
                <VscCode size="30px" color="white" className={style.icon}/>
                <h3>Soph</h3>
            </div>
            {open ? closeIcon : hamburguerIcon}
            {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu}/>}
        </nav>
    )
}

export default MobileNav