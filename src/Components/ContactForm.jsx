import React, { useState } from "react"; 
import style from "./nav.module.css"
import Swal from 'sweetalert2'
import emailjs from '@emailjs/browser';


export default function ContactForm() {
    const [input, setInput] = useState({
        name: "",
        mail: "",
        message: ""
    })

    const [errors, setErrors] = useState({})

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
        console.log(input)
        console.log(errors)
    }

    function handleSubmit(e) {
        e.preventDefault()
        if(errors.name === "Se requiere un nombre" || errors.name === "El nombre debe tener al menos 4 caracteres" || errors.mail === "Se requiere un email" || errors.mail === "Ingrese un email válido" || errors.message === "Ingrese un mensaje con más de 50 caracteres") {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Faltan completar campos',
            }) 
        } else if(input.name === "" && input.mail === "" && input.message === "") {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Faltan completar campos',
            }) 
        }
        else{
            console.log(input)
            emailjs.sendForm('service_l66y4tk', 'template_jppjctl', e.target, 'Rc4HvkwJmlJbyGBKL' )
                .then(response => console.log(response))
                .catch(error => console.log(error))

            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Mensaje enviado con éxito',
            })
            setInput({
                name: "",
                mail: "",
                message: ""
            })
        }
    }

    function validate(input) {
        let errors = []
        if(!input.name) {
            errors.name = "Se requiere un nombre"
        } else if(input.name.length < 4) {
            errors.name = "El nombre debe tener al menos 4 caracteres"
        }

        if(!input.mail) {
            errors.mail = "Se requiere un email"
        } else if (!input.mail.includes("@")) {
            errors.mail = "Ingrese un email válido"
        }

        if(input.message.length < 50) {
            errors.message = "Ingrese un mensaje con más de 50 caracteres"
        } 

        return errors
    }

    return (
        <div className={style.contenedorDelForm}>
            <form onSubmit={e => handleSubmit(e)}>
                <div className={style.formGroup}>
                    <label htmlFor="name"> Nombre
                        <input type="text" id="name" name="name" value={input.name} onChange={e => handleChange(e)}
                        />
                        {errors.name && (
                            <p className={style.Alert}>{errors.name}</p>
                        )}
                    </label>
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="mail"> Correo Electrónico
                        <input type="email" id="mail" name="mail" value={input.mail} onChange={(e) => handleChange(e)}
                        />
                        {errors.mail && (
                            <p className={style.Alert}>{errors.mail}</p>
                        )}
                    </label>
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="message"> Mensaje
                        <textarea type="text" id="message" name="message" value={input.message} onChange={(e) => handleChange(e)}
                        />
                        {errors.message && (
                            <p className={style.Alert}>{errors.message}</p>
                        )}
                    </label>
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}