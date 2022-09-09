import {useState} from "react";
import WorkSlider from "./WorkSlider/WorkSlider";
import {AdminDashboard, Ecommerce, FitnessApp, MusicApp, Photic} from "../../index";
import {AdminDashboardImage, EcommerceImage, FitnessImage, MusicImage, PhoticImage} from "./index";

const MoreWork = () =>{
    const [slideIndex, setSlideIndex] = useState(1);
    const objectCount = 5;

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
                                    {slideIndex === 1 ? <Ecommerce/> : slideIndex === 2 ? <FitnessApp/> : slideIndex === 3 ? <AdminDashboard/> : slideIndex === 4 ? <Photic/> :
                                    slideIndex === 5 ? <MusicApp/> : ''}
                                </div>
                                <div className={"carousel-right"}>
                                    { slideIndex === 1 ? <EcommerceImage/> : slideIndex === 2 ? <FitnessImage/> : slideIndex === 3 ? <AdminDashboardImage/> :
                                        slideIndex === 4 ? <PhoticImage/> : slideIndex === 5 ? <MusicImage/> : ''}
                                </div>
                            </div>
                        <WorkSlider moveSlide={nextSlide} direction={"next"}/>
                        <WorkSlider moveSlide={prevSlide} direction={"prev"}/>
                </div>
            </div>
        </div>
    </div>
    )
}
export default MoreWork;