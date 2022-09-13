import React from "react";

const Photic = () =>{
    return(
        <span className={"page-fade"}>
            <h1 className={"work-title"}>Photo gallery <br/> app</h1>
            <div className={"about-spans"}>
                <span className={"divider-span"}/>
                <span className={"divider-span child"}/>
            </div>
            <p className={"title-description desc-small"}>
                This is a web application that servers the purpose of a photo gallery. The frontend was made with React.js and JavaScript and the backend was made
                with <a href={"https://firebase.google.com/"} className={"work-links"} target={"_blank"} rel="noreferrer">Google Firebase</a>. <span className={"read-more"}>The purpose
                of this project was to learn about API requests and both the frontend and the backend development.</span>
            </p>
            <div className={"work-button-container"}>
                <div className={"work-view-button"} >
                    <a className={"no-anchor"} href={"https://github.com/designer-rxk/react-photo-gallery"} target={"_blank"} rel="noreferrer">
                        View on GitHub
                    </a>
                </div>
                <div className={"work-view-button"}>
                    <a className={"no-anchor"} href={"https://rxk-photic.netlify.app/"} target={"_blank"} rel="noreferrer">
                        View on Web
                    </a>
                </div>
            </div>
        </span>
    )
}
export default Photic;