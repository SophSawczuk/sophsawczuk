import React from "react";
import style from "./nav.module.css"
import {AiOutlineInstagram} from "react-icons/ai"
import { AiOutlineWhatsApp } from "react-icons/ai"
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";

export default function ContactInfoItem() {
    return(
        <div >
            <div className={style.contenedor2}>
                <AiOutlineInstagram className={style.iconos} size="1.3rem"/>
                <div className={style.info}info></div>
                <a href="https://www.instagram.com/soph_sawczuk/">Soph_Sawczuk</a>
            </div>
            <div className={style.contenedor2}>
                <AiOutlineWhatsApp className={style.iconos} size="1.3rem" />
                <div className={style.info}info></div>
                <a href="https://wa.me/542235047367">+54 9 (223) 504-7367</a>
            </div>
            <div className={style.contenedor2}>
                <AiOutlineGithub className={style.iconos} size="1.3rem"/>
                <div className={style.info}info></div>
                <a href="https://github.com/SophSawczuk">SophSawczuk</a>
            </div>
            <div className={style.contenedor2}>
                <AiOutlineLinkedin className={style.iconos} size="1.3rem"/>
                <div className={style.info}info></div>
                <a href="https://www.linkedin.com/in/sofia-sawczuk/">Sofia Sawczuk</a>
            </div>
            
        </div>
    )
}