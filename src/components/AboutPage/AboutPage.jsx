import React, {useEffect, useState} from "react";
import './AboutPage.scss';
import {gsap} from "gsap";


const AboutPage = (active) =>{
    const [played, setPlayed] = useState(false);
    if( active.isInViewport2 === true && played === false ){
        setPlayed(true);
    }
    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
        const txt_tl = gsap.timeline({ defaults: { ease: "power1.out" } });
        const txt_tl1 = gsap.timeline({ defaults: { ease: "power1.out" } });
        const txt_tl2 = gsap.timeline({ defaults: { ease: "power1.out" } });
        tl.fromTo(".about-image", { opacity: 0, translateY: "-50%" }, { opacity: 1, translateY: "0%", duration: 0.75,delay: 0.4 })
        txt_tl1.fromTo(".divider-span", { opacity: 0, translateX: "-50%" }, { opacity: 1, translateX: "0%", duration: 0.5, delay: 0.2 });
        txt_tl.fromTo(".about-text", { opacity: 0, translateX: "-50%" }, { opacity: 1, translateX: "0%", duration: 0.5, delay: 0.2 });
        txt_tl2.fromTo(".desc-box", { opacity: 0, translateX: "-50%" }, { opacity: 1, translateX: "0%", duration: 0.25, delay: 0.2 });
    }, [played]);

    return(
        <div className={"entire-page"}>
            <div className={"about-title"}>
                <div className={"title-text about-text"}>About me</div>
                <div className={"about-spans"}>
                    <span className={"divider-span"}/>
                    <span className={"divider-span child"}/>
                </div>
                <p className={"title-description desc-box"}>
                    Hey, my name is Raivis and I'm a nerd with
                    a passion for fitness, most things food,
                    especially pizza & kebabs. I just happen
                    to love programming and web
                    development. I've dipped my feet in
                    creating A.I., game, mobile, development
                    but nothing has captured my heart as
                    much as web development.
                </p>
            </div>
            <div className={"about-image"}>
                <div className={"about-image-container"}>
                    <div className={"about-image-cover"}/>
                    <div className={"about-image-cover-1"}/>
                </div>
                <div className={"about-page-num"}>
                    <p>01</p>
                </div>
            </div>
        </div>
    )
}
export default AboutPage;