import React from "react";
import no from '../images/no.jpg'
import './eatOrnot.css'

export default function NotEat(){
    return <h1 className="eatOrnot" style={{backgroundImage:`url(${no})`}}>
        You'll gain 2lb after this meal.
    </h1>
}