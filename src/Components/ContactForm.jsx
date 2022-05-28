import React, { useState } from "react"; 
import style from "./nav.module.css"



export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    return (
        <div className={style.contenedorDelForm}>
            <form>
                <div className={style.formGroup}>
                    <label htmlFor="name"> Nombre
                        <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="email"> Correo Electrónico
                        <input type="text" id="email" email="email" value={email} onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="message"> Mensaje
                        <textarea type="text" id="message" message="message" value={message} onChange={(e) => setMessage(e.target.value)}
                        />
                    </label>
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}