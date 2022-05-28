import style from "./nav.module.css"

import ContactInfoItem from "./ContactInfoItem"
import ContactForm from "./ContactForm"



function Holis2() {
    return(
        <div>
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
            </div>
            <footer>
                Creado por Sofia Sawczuk - 2022
            </footer>
        </div>
    )
}

export default Holis2