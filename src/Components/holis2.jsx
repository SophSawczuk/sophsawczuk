import style from "./nav.module.css"

import ContactInfoItem from "./ContactInfoItem"
import ContactForm from "./ContactForm"



function Holis2() {
    return(
        <div className={style.container}>
            <h1>CONTACTO</h1>
            <div className={style.contactSectionWrapper}>
                <div className={style.left}>
                    <ContactInfoItem/>
                </div>
                <div className={style.right}>
                <h2>Dejame un mensaje</h2>
                <ContactForm/>
                
                </div>
            </div>





            {/* <div className={style.content}>
                <h2>Contacta conmigo</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio cupiditate facere praesentium, consectetur similique ad saepe officia optio rerum totam, eligendi labore! Excepturi suscipit illum, ad rerum ut molestiae minima?</p>
            </div>

            <div className={style.tomaOtroDiv}>
                <div className={style.contenedor}>
                    <div className={style.caja}>
                        <AiOutlineInstagram size="30px" color="black"/>
                        <div class="text">
                            <h3>Instagram</h3>
                            <p>soph_sawczuk</p>
                        </div>
                    </div>

                    <div className={style.caja}>
                        <AiOutlineWhatsApp size="30px" color="black"/>
                        <div class="text">
                            <h3>WhatsApp</h3>
                            <p>+54 9 (223)504-7367</p>
                        </div>
                    </div>

                    <div className={style.caja}>
                        <AiOutlineMail size="30px" color="black"/>
                        <div class="text">
                            <h3>Correo Electrónico</h3>
                            <p>sofiasawczuka@gmail.com</p>
                        </div>
                    </div>
                </div>

                <div className={style.contactForm}>
                    <form>
                        <h2>Envíame un mensaje</h2>
                        <div className={style.inputBox}>
                            <span>Nombre</span>
                            <input type="text" name="" required="required"/>                    
                        </div>
                        <div className={style.inputBox}>
                            <span>Correo Electrónico</span>
                            <input type="text" name="" required="required"/>       
                        </div>
                        <div className={style.inputBox}>
                            <span>Escribe tu mensaje...</span>
                            <textarea required="required"></textarea>
                        </div>
                        <div className={style.inputBox}>
                            <input type="submit" name="" value="send"/>
                        </div>
                    </form>
                </div>
            </div> */}
        </div>
        
    )
}

export default Holis2