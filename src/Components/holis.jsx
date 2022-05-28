import style from "./nav.module.css"
import AboutMe from "./AboutMe"




function Holis() {
    return(
        <div className={style.imgFondo}>
            <div className={style.saludo}>
                <h3>¡Hola!</h3>
                <h1>Soy Web Developer</h1>
                <h2>full-stack</h2>
            </div>
            <div className={style.AboutMe}>
                 <AboutMe/>
            </div>

            
            
           
            
            
        </div>
        
       
    )
}

export default Holis