import React from "react";
import './HeroPage.css'
import {Cloud1, Cloud2, Cloud3, Cloud4, Cloud5, Moon, Moonlight, Stars} from "../../assets";

const HeroPage = () =>{

    return(
        <div className={"hero-wrapper"}>
            <div className={"cutoff"}/>
            <div className={"hero-main"}>
                <div className={"moon-background"}>
                    <div className={"stars"}>
                        <div className={"stars-wrapper"}>
                            <div className={"stars-image-container"}>
                                <div className={"stars-image-itself"}>
                                    <Stars/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"moonlight"}>
                        <div className={"moonlight-wrapper"}>
                            <div className={"moonlight-image"}>
                                <Moonlight/>
                                <Stars/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"title"}>
                    <div className={"name-surname"}>Raivis <br/>Kārkliņš</div>
                    <span className={"divider-span"}/>
                    <span className={"divider-span child"}/>
                    <div className={"current-title"}>
                        junior front end developer &&
                        <br/> web design enthusiast
                    </div>
                </div>
                <div className={"planets"}>
                    <div className={"planet-container"}>
                        <div className={"moon moon-back"}>
                            <Moon/>
                        </div>
                        <div className={"moon-front layer"}>
                            <div className={"cloud cloud-front"}>
                                <div className={"cloud-image"}>
                                    <Cloud1/>
                                </div>
                            </div>
                        </div>
                        <div className={"moon-front2 layer"}>
                            <div className={"cloud cloud-front2"}>
                                <div className={"cloud-image"}>
                                    <Cloud3/>
                                </div>
                            </div>
                        </div>
                        <div className={"moon-front3 layer"}>
                            <div className={"cloud cloud-front3"}>
                                <div className={"cloud-image"}>
                                    <Cloud4/>
                                </div>
                            </div>
                        </div>
                        <div className={"moon-back layer"}>
                            <div className={"cloud cloud-back3"}>
                                <div className={"cloud-image"}>
                                    <Cloud2/>
                                </div>
                            </div>
                        </div>
                        <div className={"moon-back layer"}>
                            <div className={"cloud cloud-back2"}>
                                <div className={"cloud-image"}>
                                    <Cloud5/>
                                </div>
                            </div>
                        </div>
                        <div className={"portfolio-text"}>
                            PORTFOLIO
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HeroPage;