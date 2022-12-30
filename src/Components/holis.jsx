import style from "./nav.module.css"
import AboutMe from "./AboutMe"
import Card from "./Card"
import Card2 from "./Card2"
import Projects from "./Projects"





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
            <div>
                <Card/>
            </div>
            <div>
                <Card2/>
            </div>
            <Projects/>
            <footer>
                Creado por Sofia Sawczuk - 2022
            </footer>
            
            
           
            
            
        </div>
        
       
    )
}

export default Holis