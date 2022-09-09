import React from "react";
import {BiLeftArrowAlt, BiRightArrowAlt} from "react-icons/bi";

export default function WorkSlider({ direction, moveSlide }) {
    return (
        <button onClick={moveSlide} className={direction === "next" ? "work-carousel-button next" : "work-carousel-button prev"}>
             {direction === "next" ? <BiRightArrowAlt/> : <BiLeftArrowAlt/>}
        </button>
    );
}