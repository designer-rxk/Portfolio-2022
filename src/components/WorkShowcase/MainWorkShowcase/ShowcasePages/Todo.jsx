import React from "react";

const Todo = () =>{
    return(
        <span className={"page-fade"}>
            <h1 className={"work-title mobile-hide"}>To-Do List <br/> app</h1>
            <div className={"about-spans mobile-hide"}>
                <span className={"divider-span"}/>
                <span className={"divider-span child"}/>
            </div>
            <p className={"title-description desc-small mobile-hide"}>
                This was a simple To-Do list website I made back in University to learn the fundamentals of JavaScript and React.js.
                The sole purpose of this project was to focus on logic.
            </p>
            <div className={"work-button-container mobile-hide"}>
                <div className={"work-view-button"} >
                    <a className={"no-anchor"} href={"https://github.com/designer-rxk/todo-list"} target={"_blank"} rel={"noreferrer"}>
                        View on GitHub
                    </a>
                </div>
                <div className={"work-view-button"}>
                    <a className={"no-anchor"} href={"https://rxk-todo-list.netlify.app/"} target={"_blank"} rel={"noreferrer"}>
                        View on Web
                    </a>
                </div>
            </div>
        </span>
    );
}
export default Todo;