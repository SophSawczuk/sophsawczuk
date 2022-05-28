
import MeImage from "./Me.jpg"
import style from "./nav.module.css"
import CV from "./Sawczuk Sofia - CV.pdf"



function AboutMe() {
    return(
        <div className={style.acercaDe}>  
            <img className={style.foto} src={MeImage}></img>
            <div className={style.acercaDetalle}>
                <h2>Acerca de mi</h2>
                <p className={style.estudiante}>Estudiante de Ingeniería Informática</p>
                <p>Soy Soph, tengo 20 años y soy desarrolladora web. Actualmente vivo y estudio en la ciudad de Mar del Plata, Buenos Aires, Argentina, pero me encanta viajar.</p>
                <b/>
                <p>Estudié dos años de Ingeniería Naval pero lo que realmente me interesa y apasiona es la informática. Soy consciente de que en el mundo de la tecnología la experiencia y el conocimiento tiene más peso que un título, por lo cual mi meta es empezar a trabajar lo antes posible para ganar experiencia, y poder seguir con mis estudios universitarios.
</p>
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