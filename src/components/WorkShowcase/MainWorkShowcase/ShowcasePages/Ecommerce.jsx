import React from "react";
import '../WorkPage.css';

const Ecommerce = () =>{
    return(
        <span className={"page-fade"}>
            <h2 className={"work-title"}>Ecommerce <br/> website</h2>
            <div className={"about-spans"}>
                <span className={"divider-span"}/>
                <span className={"divider-span child"}/>
            </div>
            <p className={"title-description desc-small"}>
                This was a ecommerce website I made for fun. It uses <a href={"https://www.sanity.io/"} target={"_blank"} rel="noreferrer"
                                                                        className={"work-links"}>
                Sanity.io</a> for
                the backend, React.js for the frontend and <a href={"https://tailwindcss.com/"} target={"_blank"} rel="noreferrer"
                                                              className={"work-links"}>Tailwind.css</a> to add some style and thus allows the users to make fake
                purchases of any of the selected items.
            </p>
            <div className={"work-button-container"}>
                <button className={"work-view-button"}>
                    <a className={"no-anchor"} href={"https://github.com/designer-rxk/react-ecommerce"} target={"_blank"} rel="noreferrer">
                        View on GitHub
                    </a>
                </button>
                <button className={"work-view-button"}>
                    View on Web
                </button>
            </div>
        </span>
    )
}
export default Ecommerce;