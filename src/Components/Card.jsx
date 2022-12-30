import React from "react"
import style from "./nav.module.css"
import {AiOutlineCoffee} from "react-icons/ai"
import {SiMicrosoftoffice} from "react-icons/si"
import {IoLanguageOutline} from "react-icons/io5"
import {BsFileEarmarkCode} from "react-icons/bs"
import {BsFileEarmarkCodeFill} from "react-icons/bs"
import {VscTools} from "react-icons/vsc"


function Card() {
    return(
        <div className={style.contenedor3}>
            <div className={style.cards}>
                <div className={style.card}>
                    <AiOutlineCoffee className={style.icon2} size="25px"/>
                    <h4>Productividad</h4>
                    <p>Soy una persona proactiva y organizada</p>
                </div>

                <div className={style.card}>
                    <SiMicrosoftoffice className={style.icon2} size="25px"/>
                    <h4>Paquete Office</h4>
                    <p>Word, Excel, Photoshop y PowerPoint</p>
                </div>

                <div className={style.card}>
                    <IoLanguageOutline className={style.icon2} size="25px"/>
                    <h4>Idiomas</h4>
                    <p>Inglés, nivel avanzado (C1)</p>
                </div>
            </div>
            <div className={style.cards}>
                <div className={style.card}>
                    <BsFileEarmarkCode className={style.icon2} size="25px"/>
                    <h4>Front-End</h4>
                    <p>HTML, JavaScript, CSS, React y Redux</p>
                </div>

                <div className={style.card}>
                    <BsFileEarmarkCodeFill className={style.icon2} size="25px"/>
                    <h4>Desarrollo Web</h4>
                    <p>Front-End, Back-End (Node.js y Express) y manejo de bases de datos (PostrgreSQL y Sequelize)</p>
                </div>

                <div className={style.card}>
                    <VscTools className={style.icon2} size="25px"/>
                    <h4>Otras Herramientas</h4>
                    <p>Github, Slack, Figma, SCRUM</p>
                </div>
            </div>
        </div>
    )
}

export default Card