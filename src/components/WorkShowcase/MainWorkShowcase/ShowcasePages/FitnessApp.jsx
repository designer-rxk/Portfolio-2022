import React from "react";

const FitnessApp = () =>{
    return(
        <span className={"page-fade"}>
            <h1 className={"work-title"}>A.I. Fitness <br/> app</h1>
            <div className={"about-spans"}>
                <span className={"divider-span"}/>
                <span className={"divider-span child"}/>
            </div>
            <p className={"title-description desc-small"}>
                This is a Python application that I made for my Bachelor's degree, where I used A.I.-<
                a href={"https://google.github.io/mediapipe/"} className={"work-links"} target={"_blank"} rel="noreferrer">MediaPipe</a> to
                track the users movement and make evaluations
                whether they are doing a curtain exercise correctly or not. The G.U.I. was made
                using <a href={"https://docs.python.org/3/library/tkinter.html"} className={"work-links"} target={"_blank"} rel="noreferrer">Tkinter</a> and PhotoShop.
            </p>
            <div className={"work-button-container"}>
                <div className={"work-view-button"} >
                    <a className={"no-anchor"} href={"https://github.com/designer-rxk/project-bak"} target={"_blank"} rel="noreferrer">
                        View on GitHub
                    </a>
                </div>
            </div>
        </span>
    )
}
export default FitnessApp;