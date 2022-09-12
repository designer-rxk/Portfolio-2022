import React from "react";

const MusicApp = () =>{
    return(
        <span className={"page-fade"}>
            <h1 className={"work-title"}>Music player <br/> app</h1>
            <div className={"about-spans"}>
                <span className={"divider-span"}/>
                <span className={"divider-span child"}/>
            </div>
            <p className={"title-description desc-small"}>
                This is a simple Music player that I made to strengthen my current knowledge of React.js Hooks and fundamentals as well as my CSS skills.
                The main objective of this project was to focus on React Hooks.
            </p>
            <div className={"work-button-container"}>
                <div className={"work-view-button"} >
                    <a className={"no-anchor"} href={"https://github.com/designer-rxk/music-thing"} target={"_blank"} rel={"noreferrer"}>
                        View on GitHub
                    </a>
                </div>
                <div className={"work-view-button"}>
                    <a className={"no-anchor"} href={"https://rxk-music-player.netlify.app/"} target={"_blank"} rel={"noreferrer"}>
                        View on Web
                    </a>
                </div>
            </div>
        </span>
    )
}
export default MusicApp;