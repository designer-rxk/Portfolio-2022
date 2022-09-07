import './App.css';
import {useEffect, useMemo, useRef, useState} from "react";
import {HeroPage, AboutPage, MoreWork, WorkPage, ContactPage, Navbar} from "./components";

const directUser = (element) => {
    element.scrollIntoView({behavior: 'smooth'});
}

const App = () => {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const ref5 = useRef(null);

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

    const isInViewport1 = useIsInViewport(ref1);
    const isInViewport2 = useIsInViewport(ref2);
    const isInViewport3 = useIsInViewport(ref3);
    const isInViewport4 = useIsInViewport(ref4);
    const isInViewport5 = useIsInViewport(ref5);

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
                  <p className={`bullets ${isInViewport5 === true ? 'active' : ''}`}
                     onClick={() => directUser(ref5.current)}></p>
              </div>
          </div>
          <Navbar openModal={openModal} setOpenModal={setOpenModal}
          ref1={ref1.current} ref2={ref2.current} ref3={ref3.current} ref4={ref4.current} ref5={ref5.current}/>
          <div className={"section-container"}>
              <section className={"hero page"}>
                  <h2 ref={ref1} id={'hero'}>
                      <HeroPage/>
                  </h2>
              </section>
              <section className={"page"}>
                  <h2 ref={ref2} id={'about'}>
                      <AboutPage />
                  </h2>
              </section>
              <section className={"page"}>
                  <h2 ref={ref3} id={'work'}>
                      <WorkPage/>
                  </h2>
              </section>
              <section className={"page"}>
                  <h2 ref={ref4} id={'moreWork'}>
                      <MoreWork/>
                  </h2>
              </section>
              <section className={"page"}>
                  <h2 ref={ref5} id={'contact'}>
                      <ContactPage/>
                  </h2>
              </section>
          </div>
      </div>
  );
}

export default App;
