import { Link } from 'react-router-dom';
import style from './nav.module.css'
import { VscCode } from 'react-icons/vsc'





function NavLinks (props) {
    return (
        <div  className={style.NavLinks} >
           
            <Link to="/" className={style.code}>
                <VscCode size="30px" color="white" className={style.icon}/>
                <h3>Soph</h3>
            </Link>
            <Link to="/" onClick={() => props.isMobile && props.closeMobileMenu()}>
                Home
            </Link>
            <Link to="/contacto" onClick={() => props.isMobile && props.closeMobileMenu()}>
                Contacto
            </Link>
            
        </div>
      );
}

export default NavLinks
