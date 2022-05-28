import style from "./nav.module.css"
import {AiOutlineCoffee} from "react-icons/ai"
import {SiMicrosoftoffice} from "react-icons/si"
import {IoLanguageOutline} from "react-icons/io5"
import {BsFileEarmarkCode} from "react-icons/bs"
import {BsFileEarmarkCodeFill} from "react-icons/bs"
import {VscTools} from "react-icons/vsc"

const CardData = [
    {
        id: 1,
        icon: <AiOutlineCoffee className={style.icon2} size="25px"/>,
        title: "Productividad",
        content: "Soy una persona proactiva y organizada"
    },

    {
        id: 2,
        icon: <SiMicrosoftoffice className={style.icon2} size="25px"/>,
        title: "Paquete Office",
        content: "Word, Excel, Photoshop y PowerPoint"
    },

    {
        id: 3,
        icon: <IoLanguageOutline className={style.icon2} size="25px"/>,
        title: "Idiomas",
        content: "Inglés, nivel intermedio"
    },

    {
        id: 4,
        icon: <BsFileEarmarkCode className={style.icon2} size="25px"/>,
        title: "Front-End",
        content: "HTML, JavaScript, CSS, React y Redux"
    },

    {
        id: 5,
        icon: <BsFileEarmarkCodeFill className={style.icon2} size="25px"/>,
        title: "Desarrollo Web",
        content: "Front-End, Back-End (NODE) y manejo de bases de datos (SQL)"
    },

    {
        id: 6,
        icon: <VscTools className={style.icon2} size="25px"/>,
        title: "Otras Herramientas",
        content: "Github y Slack"
    }

]

export default CardData