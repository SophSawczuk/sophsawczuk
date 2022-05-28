import React, { useState } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import style from "./nav.module.css"
import {AiOutlineCoffee} from "react-icons/ai"
import {MdArrowBack} from "react-icons/md"
import {MdArrowForward} from "react-icons/md"
import CardData from "./CardData";
 


export default function Card2() {

    const [activeIndex, setActiveIndex] = useState(0)
    const activeSlide = CardData[activeIndex]

    function handleNext() {
        if(activeIndex >= CardData.length -1 ) {
            setActiveIndex(0);
        } 
        else{
            setActiveIndex((oldIndex) => oldIndex + 1)
        }
    }

    function handlePrev() {
        if(activeIndex <= 0 ) {
            setActiveIndex(CardData.length - 1);
        } 
        else{
            setActiveIndex((oldIndex) => oldIndex - 1)
        }
    }

    return(
        <div >
            <div className={style.container4}>
                <SwitchTransition>
                    <CSSTransition>
                        <div className={style.testimonial}>
                            <div>
                                {activeSlide.icon}
                            </div>
                            <h4>
                                {activeSlide.title}
                            </h4>
                            <div className={style.testmonialDesc}>
                                <p>{activeSlide.content}</p>
                            </div>

                        </div>
                    </CSSTransition>
                </SwitchTransition>
            </div>
            <div className={style.arrows}>
                <div className={style.prev} onClick={handlePrev} role="button" tabIndex={0} onKeyDown={handlePrev}>
                    <MdArrowBack/>
                </div>
                <div className={style.next} onClick={handleNext} role="button" tabIndex={0} onKeyDown={handleNext}>
                    <MdArrowForward/>
                </div>
            </div>
        </div>
        
    )
}