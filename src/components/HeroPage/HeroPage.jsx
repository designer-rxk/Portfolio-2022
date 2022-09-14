import React, {useEffect} from "react";
import './HeroPage.scss'
import {Cloud1, Cloud2, Cloud3, Cloud4, Cloud5, Moon, Moonlight, Stars} from "../../assets";
import {gsap} from "gsap";

const HeroPage = () =>{

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
        const tl1 = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.fromTo(".moon1", { opacity: 0, translateX: "100%" }, { opacity: 1, translateX: "0%", duration: 0.5, delay: 1.75 });
        tl.fromTo(".cloud-anim-right", { opacity: 0, margin: "+100%" }, { opacity: 1, margin: "0%", duration: 0.5 });
        tl1.fromTo(".desc-portfolio", { opacity: 0, translateX: "100%" }, { opacity: 1, translateX: "0%", duration: 0.75, delay: 1.75 });
    },[]);

    return(
        <main className={"barba-wrapper"}>
            <div  className={"barba-container"}>
                <div className={"fullpage fullpage-wrapper"}>
                    <div className={"section fp-section tp-table tp-completely fp-section-1"}>
                        <div className={"fp-tableCell"}>
                            <div className={"fullpage-slide"}>
                                <div className={"title title--top"}>
                                    <h1 className={"title__text js-letter"}>
                                        <span className={"name-surname"}>Raivis</span> <br/> <span className={"name-surname"}>Kārkliņš</span>
                                    </h1>
                                    <div className={"border js-letter"}>
                                        <span className={"divider-span"}/>
                                        <span className={"divider-span child "}/>
                                    </div>
                                    <p className={"title__lead js-letter mini-desc"}>
                                        junior frontend developer && <br/>
                                        web design enthusiast
                                    </p>
                                </div>
                                <div className={"moon"}>
                                    <div className={"moon__img js-parralax-moon"}>
                                        <div className={"moon__front layer"}>
                                            <div className={"moon__text-wrap"}>
                                                <p className={"moon__text js-moon desc-portfolio"}>
                                                    PORTFOLIO
                                                </p>
                                            </div>
                                        </div>
                                        <div className={"moon__front layer"}>
                                            <div className={"cloud cloud--front1 js-moon"}>
                                                <span className={"cloud1 cloud-anim-right"}>
                                                    <Cloud1/>
                                                </span>
                                            </div>
                                        </div>
                                        <div className={"moon__back layer"}>
                                            <div className={"cloud cloud--back2 js-moon"}>
                                                <span className={"cloud1 cloud-anim-right"}>
                                                    <Cloud2/>
                                                </span>
                                            </div>
                                        </div>
                                        <div className={"moon__front layer"}>
                                            <div className={"cloud cloud--front2 js-moon"}>
                                                <span className={"cloud1 cloud-anim-right"}>
                                                    <Cloud3/>
                                                </span>
                                            </div>
                                        </div>
                                        <div className={"moon__back layer"}>
                                            <span className={"moon1"}>
                                                <Moon/>
                                            </span>
                                        </div>
                                        <div className={"moon__front layer"}>
                                            <div className={"cloud cloud--front3 js-moon"}>
                                                <span className={"cloud1 cloud-anim-right"}>
                                                    <Cloud4/>
                                                </span>
                                            </div>
                                        </div>
                                        <div className={"moon__back layer"}>
                                            <div className={"cloud cloud--back1 js-moon"}>
                                                <span className={"cloud1 cloud-anim-right"}>
                                                    <Cloud5/>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"moon-background"}>
                    <div className={"moonlight"}>
                        <div className={"moonlight_wrap js-parralax-moonlight"}>
                            <div className={"layer moonlight__img"}>
                                <Moonlight/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"star js-parralax-star"}>
                    <div className={"layer"}>
                        <div className={"star__img"}>
                            <Stars/>
                        </div>
                    </div>
                </div>
                <div className={"sky-color"}/>
            </div>
        </main>
    )
}
export default HeroPage;