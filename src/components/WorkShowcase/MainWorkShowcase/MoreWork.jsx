import React, {useEffect, useState} from "react";
import WorkSlider from "./WorkSlider/WorkSlider";
import {AdminDashboard, Ecommerce, FitnessApp, Calculator, Photic, Todo} from "../../index";
import {AdminDashboardImage, EcommerceImage, FitnessImage, CalculatorImage, PhoticImage, TodoImage} from "./index";
import {gsap} from "gsap";

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
    )
}
export default MoreWork;