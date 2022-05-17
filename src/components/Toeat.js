import React from "react";
import Eat from '../images/eat.jpg'
export default function ToEat() {
    return <h1 className="eatOrnot" style={{ backgroundImage: `url(${Eat})` }}>
        Don't feel guilty to eat.
    </h1>
}