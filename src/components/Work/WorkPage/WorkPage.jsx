import React from "react";
import './WorkPage.css';
import {BiLeftArrowAlt, BiRightArrowAlt} from "react-icons/bi";
import {AdminDashboard, Ecommerce, FitnessApp} from "../../index";
import {AdminDashboardImg, FitnessAppImg} from "../../../assets";

const WorkPage = () =>{
    const buttons = document.querySelectorAll("[data-carousel-button]");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const offset = button.dataset.carouselButton === "next" ? 1 : -1;
            const slides = button.closest("[data-carousel]").querySelector("[data-slides]");

            const activeSlide = slides.querySelector("[data-active]");
            let newIndex = [...slides.children].indexOf(activeSlide) + offset;
            if (newIndex < 0) newIndex = slides.children.length - 1;
            if (newIndex >= slides.children.length) newIndex = 0;

            slides.children[newIndex].dataset.active = true;
            delete activeSlide.dataset.active;
        });
    });

    return(
        <div className={"work-page"}>
            <div className={"work-cutoff"}/>
            <div className={"work-page-container"}>
                <div className={"work-left"}/>
                <div className={"work-right"}>
                    <div className={"work-carousel"} data-carousel>
                        <button className={"work-carousel-button prev"} data-carousel-button={"prev"}>
                            <BiLeftArrowAlt/>
                        </button>
                        <button className={"work-carousel-button next"} data-carousel-button={"next"}>
                            <BiRightArrowAlt/>
                        </button>
                        <ul data-slides>
                            <li className="work-slide" data-active>
                                <div className={"work-section one"}>
                                    <div className={"carousel-left"}>
                                        <Ecommerce/>
                                    </div>
                                    <div className={"carousel-right"}>
                                        <div className={"carousel-image-one"}/>
                                    </div>
                                </div>
                            </li>

                            <li className="work-slide">
                                <div className={"work-section two"}>
                                    <div className={"carousel-left"}>
                                        <FitnessApp/>
                                    </div>
                                    <div className={"carousel-right"}>
                                        <img className={"carousel-image"} src={FitnessAppImg} alt={"Fitness App Img"}/>
                                    </div>
                                </div>
                            </li>

                            <li className="work-slide">
                                <div className={"work-section three"}>
                                    <div className={"carousel-left"}>
                                        <AdminDashboard/>
                                    </div>
                                    <div className={"carousel-right"}>
                                        <img className={"carousel-image"} src={AdminDashboardImg} alt={"Admin Dashboard Img"}/>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div className={"work-page-num"}>
                            <p>02</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WorkPage;