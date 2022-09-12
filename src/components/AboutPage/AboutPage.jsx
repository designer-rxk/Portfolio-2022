import React from "react";
import './AboutPage.css';

const AboutPage = () =>{
    return(
        <div className={"entire-page"}>
            <div className={"about-title"}>
                <h2 className={"title-text"}>About me</h2>
                <div className={"about-spans"}>
                    <span className={"divider-span"}/>
                    <span className={"divider-span child"}/>
                </div>
                <p className={"title-description"}>
                    I love Design, Technology, <br/> and Story.
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