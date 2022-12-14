import React from "react";

const Calculator = () =>{
    return(
        <span className={"page-fade"}>
            <h1 className={"work-title mobile-hide"}>Calculator <br/> app</h1>
            <div className={"about-spans mobile-hide"}>
                <span className={"divider-span"}/>
                <span className={"divider-span child"}/>
            </div>
            <p className={"title-description desc-small mobile-hide"}>
                This is a simple Web Calculator application that I made to strengthen my current knowledge of React.js Hooks and fundamentals as well as my CSS skills.
                The main objective of this project was to focus on React Hooks.
            </p>
            <div className={"work-button-container mobile-hide"}>
                <div className={"work-view-button"} >
                    <a className={"no-anchor"} href={"https://github.com/designer-rxk/calculator"} target={"_blank"} rel={"noreferrer"}>
                        View on GitHub
                    </a>
                </div>
                <div className={"work-view-button"}>
                    <a className={"no-anchor"} href={"https://rxk-calculator.netlify.app/"} target={"_blank"} rel={"noreferrer"}>
                        View on Web
                    </a>
                </div>
            </div>
        </span>
    )
}
export default Calculator;