import React from "react";
import style from "./nav.module.css"
import {AiOutlineInstagram} from "react-icons/ai"
import { AiOutlineWhatsApp } from "react-icons/ai"
import { AiOutlineMail } from "react-icons/ai"

export default function ContactInfoItem() {
    return(
        <div >
            <div className={style.contenedor2}>
                <AiOutlineInstagram className={style.iconos} size="1.3rem"/>
                <div className={style.info}info></div>
                <p>soph_sawczuk</p>
            </div>
            <div className={style.contenedor2}>
                <AiOutlineWhatsApp className={style.iconos} size="1.3rem" />
                <div className={style.info}info></div>
                <p>+54 9 (223) 504-7367</p>
            </div>
            <div className={style.contenedor2}>
                <AiOutlineMail className={style.iconos} size="1.3rem"/>
                <div className={style.info}info></div>
                <p>sofiasawczuka@gmail.com</p>
            </div>
            
        </div>
    )
}