import NavLinks from "./navLinks"
import style from "./nav.module.css"

function ComputerNav() {
    return(
        <nav className={style.ComputerNav}>
            <NavLinks/>
        </nav>
    )
}

export default ComputerNav