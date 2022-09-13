import React from "react";
import './AboutPage.scss';

const AboutPage = () =>{
    return(
        <div className={"entire-page"}>
            <div className={"about-title"}>
                <div className={"title-text about-text"}>About me</div>
                <div className={"about-spans"}>
                    <span className={"divider-span"}/>
                    <span className={"divider-span child"}/>
                </div>
                <p className={"title-description desc-box"}>
                    Hey, my name is Raivis and I'm a nerd with
                    a passion for fitness, most things food,
                    especially pizza & kebabs. I just happen
                    to love programming and web
                    development. I've dipped my feet in
                    creating A.I., game, mobile, development
                    but nothing has captured my heart as
                    much as web development.
                </p>
            </div>
            <div className={"about-image"}>
                <div className={"about-image-container"}>
                    <div className={"about-image-cover"}/>
                    <div className={"about-image-cover-1"}/>
                </div>
                <div className={"about-page-num"}>
                    <p>01</p>
                </div>
            </div>
        </div>
    )
}
export default AboutPage;