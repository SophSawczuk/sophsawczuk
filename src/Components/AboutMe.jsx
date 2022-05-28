import MeImage from "./Me.jpg"
import style from "./nav.module.css"
import CV from "./Sawczuk Sofia - CV.pdf"



function AboutMe() {
    return(
        <div className={style.acercaDe}>  
            <img className={style.foto} src={MeImage}></img>
            <div className={style.acercaDetalle}>
                <h2>About Me</h2>
                <p className={style.estudiante}>Estudiante</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem sit perspiciatis aperiam, quae adipisci minima enim neque voluptatem, fuga veniam labore omnis cumque accusantium itaque explicabo, odit at? Consequuntur, quis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique amet modi veniam saepe dolore veritatis nemo aspernatur odit dicta quos suscipit nostrum dolores, autem ipsum sint dignissimos maxime, blanditiis eaque?</p>
                <div className={style.botones}>
                    <a href={CV} download={"Sawczuk-Sofia-CV.pdf"}> 
                        <button>Descargar CV</button>
                    </a>
                    <a href="./holis2">
                        <button>Contacta conmigo</button>
                    </a>
                </div>
            </div>
            
        </div>
      
    )
}

export default AboutMe