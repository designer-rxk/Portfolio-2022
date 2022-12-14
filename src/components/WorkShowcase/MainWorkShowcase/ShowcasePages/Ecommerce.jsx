import React from "react";
import '../WorkPage.scss';

const Ecommerce = () =>{
    return(
        <span className={"page-fade"}>
            <h2 className={"work-title mobile-hide"}>Ecommerce <br/> website</h2>
            <div className={"about-spans mobile-hide"}>
                <span className={"divider-span"}/>
                <span className={"divider-span child"}/>
            </div>
            <p className={"title-description desc-small mobile-hide"}>
                <span className={"work-desc-box"}>
                    This was a ecommerce website I made for fun. It uses <a href={"https://www.sanity.io/"} target={"_blank"} rel="noreferrer"
                                                                            className={"work-links"}>
                    Sanity.io</a> for
                    the backend, React.js for the frontend and <a href={"https://tailwindcss.com/"} target={"_blank"} rel="noreferrer"
                                                                  className={"work-links"}>Tailwind.css</a> to add some style and thus allows the users to make fake
                    purchases of any of the selected items.
                </span>
            </p>
            <div className={"work-button-container mobile-hide"}>
                <div className={"work-view-button"}>
                    <a className={"no-anchor"} href={"https://github.com/designer-rxk/react-next-ecommerce"} target={"_blank"} rel="noreferrer">
                        View on GitHub
                    </a>
                </div>
                <div className={"work-view-button"}>
                    <a className={"no-anchor"} href={"https://rxk-react-next-ecommerce.vercel.app/"} target={"_blank"} rel="noreferrer">
                        View on Web
                    </a>
                </div>
            </div>
        </span>
    )
}
export default Ecommerce;