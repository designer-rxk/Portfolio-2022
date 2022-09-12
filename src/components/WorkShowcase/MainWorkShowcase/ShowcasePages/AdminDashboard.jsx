import React from "react";

const AdminDashboard = () =>{
    return(
        <span className={"page-fade"}>
            <h2 className={"work-title"}>Admin Dash <br/> website</h2>
            <div className={"about-spans"}>
                <span className={"divider-span"}/>
                <span className={"divider-span child"}/>
            </div>
            <p className={"title-description desc-small"}>
                This is a full frontend website that is focused on logic and the visualisation of data.
                It is a mock website, that allows users to view and edit data in various ways. <br/>
                This website uses React, <a href={"https://www.syncfusion.com/"} target={"_blank"} rel="noreferrer"
                                            className={"work-links"}>Syncfusion</a> and <a href={"https://tailwindcss.com/"} target={"_blank"} rel="noreferrer"
                                                                                           className={"work-links"}>Tailwind.css</a>.
            </p>
            <div className={"work-button-container"}>
                <div className={"work-view-button"}>
                    <a className={"no-anchor"} href={"https://github.com/designer-rxk/react-admin-dashboard"} target={"_blank"} rel="noreferrer">
                        View on GitHub
                    </a>
                </div>
                <div className={"work-view-button"}>
                    <a className={"no-anchor"} href={"https://rxk-admin-dashboard.netlify.app/"} target={"_blank"} rel="noreferrer">
                        View on Web
                    </a>
                </div>
            </div>
        </span>
    )
}
export default AdminDashboard;