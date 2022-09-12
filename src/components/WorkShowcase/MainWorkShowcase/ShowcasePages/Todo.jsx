import React from "react";

const Todo = () =>{
    return(
        <span className={"page-fade"}>
            <h1 className={"work-title"}>To-Do List <br/> app</h1>
            <div className={"about-spans"}>
                <span className={"divider-span"}/>
                <span className={"divider-span child"}/>
            </div>
            <p className={"title-description"}>
                This was a simple To-Do list website I made back in University to learn the fundamentals of JavaScript and React.js.
                The sole purpose of this project was to focus on logic.
            </p>
            <div className={"work-button-container"}>
                <button className={"work-view-button"} >
                    <a className={"no-anchor"} href={"https://github.com/designer-rxk/todo-list"} target={"_blank"} rel="noreferrer">
                        View on GitHub
                    </a>
                </button>
                <button className={"work-view-button"}>
                    <a className={"no-anchor"} href={"https://rxk-todo-list.netlify.app/"} target={"_blank"} rel="noreferrer">
                        View on Web
                    </a>
                </button>
            </div>
        </span>
    )
}
export default Todo;