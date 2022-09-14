import './App.scss';
import {useEffect, useMemo, useRef, useState} from "react";
import {HeroPage, AboutPage, MoreWork, ContactPage, Navbar} from "./components";
import {gsap} from "gsap";

const directUser = (element) => {
    element.scrollIntoView({behavior: 'smooth'});
}

const App = () => {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);

    const [openModal, setOpenModal] = useState(false);

    const useIsInViewport = (ref) => {
        const [isIntersecting, setIsIntersecting] = useState(false);

        const observer = useMemo(
            () =>
                new IntersectionObserver(([entry]) =>
                    setIsIntersecting(entry.isIntersecting),
                ),
            [],
        );
        useEffect(() => {
            observer.observe(ref.current);

            return () => {
                observer.disconnect();
            };
        }, [ref, observer]);

        return isIntersecting;
    }

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
        tl.fromTo(".intro-left", { opacity: 0 }, { opacity: 1.5, duration: 1.5 });
        tl.to(".intro", { y: "-100%", duration: 0.5, delay: 0.75 }, "-=1");
    },[]);

    const isInViewport1 = useIsInViewport(ref1);
    const isInViewport2 = useIsInViewport(ref2);
    const isInViewport3 = useIsInViewport(ref3);
    const isInViewport4 = useIsInViewport(ref4);

    return (
      <div className="scroll-container">
          <div className={'bullet-points'}>
              <div className={'inner'}>
                  <p className={`bullets ${isInViewport1 === true ? 'active' : ''}`}
                     onClick={() => directUser(ref1.current)}></p>
                  <p className={`bullets ${isInViewport2 === true ? 'active' : ''}`}
                     onClick={() => directUser(ref2.current)}></p>
                  <p className={`bullets ${isInViewport3 === true ? 'active' : ''}`}
                     onClick={() => directUser(ref3.current)}></p>
                  <p className={`bullets ${isInViewport4 === true ? 'active' : ''}`}
                     onClick={() => directUser(ref4.current)}></p>
              </div>
          </div>
          <Navbar openModal={openModal} setOpenModal={setOpenModal} ref1={ref1.current} ref2={ref2.current} ref3={ref3.current} ref4={ref4.current}/>
          <div className={"section-container"}>
              <section className={"hero page"}>
                  <h2 ref={ref1} id={'hero'}>
                      <HeroPage/>
                  </h2>
              </section>
              <section className={"page"}>
                  <h2 ref={ref2} id={'about'}>
                      <AboutPage isInViewport2={isInViewport2}/>
                  </h2>
              </section>
              <section className={"page"}>
                  <h2 ref={ref3} id={'moreWork'}>
                      <MoreWork isInViewport3={isInViewport3}/>
                  </h2>
              </section>
              <section className={"page"}>
                  <h2 ref={ref4} id={'contact'}>
                      <ContactPage isInViewport4={isInViewport4}/>
                  </h2>
              </section>
          </div>

          <div className="intro">
              <div className="intro-text">
                  <h1 className="hide">
                      <div className="text intro-left test">Welcome</div>
                  </h1>
              </div>
          </div>


      </div>
  );
}

export default App;
