import React, {useEffect, useState} from "react";
import WorkSlider from "./WorkSlider/WorkSlider";
import {AdminDashboard, Ecommerce, FitnessApp, Calculator, Photic, Todo} from "../../index";
import {AdminDashboardImage, EcommerceImage, FitnessImage, CalculatorImage, PhoticImage, TodoImage} from "./index";
import {gsap} from "gsap";

const mobileEcoBtn = () =>{
    return(
        <div className={"page-fade"}>
            <div className={"work-button-container"}>
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
        </div>
    )
}

const mobileFitBtn = () =>{
    return(
        <div className={"page-fade"}>
            <div className={"work-button-container"}>
                <div className={"work-view-button"} >
                    <a className={"no-anchor"} href={"https://github.com/designer-rxk/project-bak"} target={"_blank"} rel="noreferrer">
                        View on GitHub
                    </a>
                </div>
            </div>
        </div>
    )
}

const mobileAdmBtn = () =>{
    return(
        <div className={"page-fade"}>
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
        </div>
    )
}

const mobilePhoBtn = () =>{
    return(
        <div className={"page-fade"}>
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
        </div>
    )
}

const mobileTodBtn = () =>{
    return(
        <div className={"page-fade"}>
            <div className={"work-button-container"}>
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
        </div>
    )
}

const mobileCalBtn = () =>{
    return(
        <div className={"page-fade"}>
            <div className={"work-button-container"}>
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
        </div>
    )
}

const mobEcomDesc = () => {
    return (
        <div className={"page-fade"}>
            <span className={"work-desc-box"}>
                This was a ecommerce website I made for fun. It uses <a href={"https://www.sanity.io/"} target={"_blank"} rel="noreferrer" className={"work-links"}>
                Sanity.io</a> for the backend, React.js for the frontend and <a href={"https://tailwindcss.com/"} target={"_blank"} rel="noreferrer"
                className={"work-links"}>Tailwind.css</a> to add some style and thus allows the users to make fake purchases of any of the selected items.
            </span>
        </div>
    );
}

const mobFitDesc = () => {
    return (
        <div className={"page-fade"}>
            <span className={"work-desc-box"}>
                This is a Python application that I made for my Bachelor's degree, where I used A.I.-<
                a href={"https://google.github.io/mediapipe/"} className={"work-links"} target={"_blank"} rel="noreferrer">MediaPipe</a> to
                track the users movement and make evaluations
                whether they are doing a curtain exercise correctly or not. The G.U.I. was made
                using <a href={"https://docs.python.org/3/library/tkinter.html"} className={"work-links"} target={"_blank"} rel="noreferrer">Tkinter</a> and PhotoShop.
            </span>
        </div>
    );
}

const mobAdmDesc = () => {
    return (
        <div className={"page-fade"}>
            <span className={"work-desc-box"}>
                This is a full frontend website that is focused on logic and the visualisation of data.
                It is a mock website, that allows users to view and edit data in various ways. <br/>
                This website uses React, <a href={"https://www.syncfusion.com/"} target={"_blank"} rel="noreferrer"
                                            className={"work-links"}>Syncfusion</a> and <a href={"https://tailwindcss.com/"} target={"_blank"} rel="noreferrer"
                                                                                           className={"work-links"}>Tailwind.css</a>.
            </span>
        </div>
    );
}

const mobPhoDesc = () => {
    return (
        <div className={"page-fade"}>
            <span className={"work-desc-box"}>
                This is a web application that servers the purpose of a photo gallery. The frontend was made with React.js and JavaScript and the backend was made
                with <a href={"https://firebase.google.com/"} className={"work-links"} target={"_blank"} rel="noreferrer">Google Firebase</a>. <span className={"read-more"}>The purpose
                of this project was to learn about API requests and both the frontend and the backend development.</span>
            </span>
        </div>
    );
}

const mobCalDesc = () => {
    return (
        <div className={"page-fade"}>
            <span className={"work-desc-box"}>
                This is a simple Web Calculator application that I made to strengthen my current knowledge of React.js Hooks and fundamentals as well as my CSS skills.
                The main objective of this project was to focus on React Hooks.
            </span>
        </div>
    );
}

const mobTodDesc = () => {
    return (
        <div className={"page-fade"}>
            <span className={"work-desc-box"}>
                This was a simple To-Do list website I made back in University to learn the fundamentals of JavaScript and React.js.
                The sole purpose of this project was to focus on logic.
            </span>
        </div>
    );
}

const MoreWork = (active) =>{
    const [playedWork, setPlayedWork] = useState(false);
    if( active.isInViewport3 === true && playedWork === false ){
        setPlayedWork(true);
    }

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
        const tl1 = gsap.timeline({ defaults: { ease: "power1.out" } });
        const tl2 = gsap.timeline({ defaults: { ease: "power1.out" } });
        tl.fromTo(".carousel-left", { opacity: 0, translateX: "-50%" }, { opacity: 1, translateX: "0%", duration: 1, delay: 0.25 });
        tl1.fromTo(".carousel-right", { opacity: 0, translateX: "50%" }, { opacity: 1, translateX: "0%", duration: 1, delay: 0.25 });
        tl1.fromTo(".work-page-num", { opacity: 0 }, { opacity: 1, duration: 0.25 });
        tl2.fromTo(".workButtons", { opacity: 0 }, { opacity: 1, duration: 1, delay: 0.5 });
    }, [playedWork]);

    const [slideIndex, setSlideIndex] = useState(1);
    const objectCount = 6;

    const nextSlide = () => {
        if(slideIndex !== objectCount){
            setSlideIndex(slideIndex + 1)
        }
        else if (slideIndex === objectCount){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(objectCount)
        }
    }

    return (
        <div className={"work"}>
           <div className={"work-page"}>
            <div className={"work-cutoff"}/>
            <div className={"work-page-container"}>
                <div className={"work-left"}/>
                <div className={"work-right"}>
                    <div className={"work-carousel"}>
                        <div className={"work-section one"}>
                            <div className={"carousel-left"}>
                                {slideIndex === 1 ? <Ecommerce playedWork={playedWork} setPlayedWork={setPlayedWork}/> : slideIndex === 2 ? <FitnessApp/> : slideIndex === 3 ? <AdminDashboard/> : slideIndex === 4 ? <Photic/> :
                                slideIndex === 5 ? <Calculator/> : slideIndex === 6 ? <Todo/> : ''}
                            </div>
                            <div className={"carousel-right"}>
                                { slideIndex === 1 ? <EcommerceImage/> : slideIndex === 2 ? <FitnessImage/> : slideIndex === 3 ? <AdminDashboardImage/> :
                                    slideIndex === 4 ? <PhoticImage/> : slideIndex === 5 ? <CalculatorImage/> : slideIndex === 6 ? <TodoImage/> : ''}
                            </div>
                        </div>
                        <div className={"workButtons"}>
                            <WorkSlider moveSlide={nextSlide} direction={"next"}/>
                            <WorkSlider moveSlide={prevSlide} direction={"prev"}/>
                        </div>
                        <div className={"work-page-num"}>
                            <p>02</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <div className={"mobile"}>
                <div className={"work-cutoff"}/>
                <div className={"mobile-wrapper"}>
                    <div className={"mobile-top"}>
                        <div className={"work-carousel"}>
                            <div className={"work-section one"}>
                                <div className={"carousel-left"}>
                                    {slideIndex === 1 ? <Ecommerce playedWork={playedWork} setPlayedWork={setPlayedWork}/> : slideIndex === 2 ? <FitnessApp/> : slideIndex === 3 ? <AdminDashboard/> : slideIndex === 4 ? <Photic/> :
                                        slideIndex === 5 ? <Calculator/> : slideIndex === 6 ? <Todo/> : ''}
                                </div>
                                <div className={"carousel-right"}>
                                    { slideIndex === 1 ? <EcommerceImage/> : slideIndex === 2 ? <FitnessImage/> : slideIndex === 3 ? <AdminDashboardImage/> :
                                        slideIndex === 4 ? <PhoticImage/> : slideIndex === 5 ? <CalculatorImage/> : slideIndex === 6 ? <TodoImage/> : ''}
                                </div>
                            </div>
                            <div className={"workButtons"}>
                                <WorkSlider moveSlide={nextSlide} direction={"next"}/>
                                <WorkSlider moveSlide={prevSlide} direction={"prev"}/>
                            </div>
                            <div className={"work-page-num mobile-num"}>
                                <p>02</p>
                            </div>
                        </div>
                    </div>
                    <div className={"mobile-bottom"}>
                        <div className={"mobile-text"}>
                            <div className={"mobile-title"}>
                                {slideIndex === 1 ? `Ecommerce website` : slideIndex === 2 ? "Fitness application" : slideIndex === 3 ? "Admin Dash website" :
                                    slideIndex === 4 ? "Photo gallery application" : slideIndex === 5 ? "Calculator application" : slideIndex === 6 ? "To-Do list application" : ''}
                            </div>
                            <div className={"mobile-desc"}>
                                {
                                    slideIndex === 1 ? mobEcomDesc() :
                                    slideIndex === 2 ? mobFitDesc() :
                                    slideIndex === 3 ? mobAdmDesc() :
                                    slideIndex === 4 ? mobPhoDesc() :
                                    slideIndex === 5 ? mobCalDesc() :
                                    slideIndex === 6 ? mobTodDesc() : ''
                                }
                            </div>
                        </div>
                        <div className={"mobile-buttons"}>
                            {slideIndex === 1 ? mobileEcoBtn() : slideIndex === 2 ? mobileFitBtn() : slideIndex === 3 ? mobileAdmBtn() :
                             slideIndex === 4 ? mobilePhoBtn() : slideIndex === 5 ? mobileCalBtn() : slideIndex === 6 ? mobileTodBtn() : ''}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MoreWork;