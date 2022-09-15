import React, {useEffect, useRef, useState} from "react";
import './ContactPage.scss';
import {FaGithub, FaLinkedin, FaInfoCircle} from "react-icons/fa";
import {ContactMain} from "../../assets";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";
import {gsap} from "gsap";

if (typeof window !== "undefined") {
    injectStyle();
}

const checkValidEmail = (val) => {
    const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!regEmail.test(val)){
        return false;
    }else{
        return true;
    }
}

const notify = (messageStatus) => {
    if(messageStatus === true){
        toast.success("Message sent successfully! 🚀", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }else{
        toast.error("Message failed to send! 💥", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
}

const ContactPage = (active) =>{
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [subjectError, setSubjectError] = useState(false);
    const [messageError, setMessageError] = useState(false);

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const subjectRef = useRef(null);
    const messageRef = useRef(null);
    const formRef = useRef();

    const [playedContact, setPlayedContact] = useState(false);
    if( active.isInViewport4 === true && playedContact === false ){
        setPlayedContact(true);
    }

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
        const txt_tl = gsap.timeline({ defaults: { ease: "power1.out" } });
        const txt_tl1 = gsap.timeline({ defaults: { ease: "power1.out" } });
        const txt_tl2 = gsap.timeline({ defaults: { ease: "power1.out" } });
        tl.fromTo(".contact-wrapper", { opacity: 0, translateY: "50%" }, { opacity: 1, translateY: "0%", duration: 1, delay: 0.25 });
        txt_tl1.fromTo(".divider-span", { opacity: 0, translateX: "-50%" }, { opacity: 1, translateX: "0%", duration: 0.5, delay: 0.25 });
        txt_tl.fromTo(".contact-desc", { opacity: 0, translateX: "-50%" }, { opacity: 1, translateX: "0%", duration: 0.5, delay: 0.25 });
        txt_tl2.fromTo(".contact-text", { opacity: 0, translateX: "-50%" }, { opacity: 1, translateX: "0%", duration: 0.5, delay: 0.25 });
    }, [playedContact]);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_EMAIL_JS_SERVICE_ID,
            process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID,
            formRef.current,
            process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY).then((result) => {
                notify(true);
                e.target.reset();
        }, (error) => {
                notify(false);
            });

    };

    const checkInputs = (e) => {
        e.preventDefault();

        if(!nameRef.current.value){
            setNameError(true);
        }else{
            setNameError(false);
        }
        if(!subjectRef.current.value){
            setSubjectError(true);
        }else{
            setSubjectError(false);
        }
        if(!messageRef.current.value){
            setMessageError(true);
        }else{
            setMessageError(false);
        }
        if(!emailRef.current.value){
            setEmailError(true);
        }else{
            const validatedEmail = checkValidEmail(emailRef.current.value);
            if(validatedEmail === true){
                sendEmail(e);
            }
            setEmailError(false);
        }
    }

    return(
        <div className={"contact-page"}>
            <div className={"contact-title-main"}>
                <h2 className={"title-text contact-text"}>
                    Message <br className={"break"}/> me
                </h2>
                <div className={"about-spans"}>
                    <span className={"divider-span"}/>
                    <span className={"divider-span child"}/>
                </div>
                <p className={"title-description contact-desc"}>
                    Let's chat about tech, games, <br/> sports, philosophy or<br/> simply work.
                </p>
            </div>
            <div className={"contact-wrapper"}>
                <div className="contact-container">
                    <ToastContainer theme={"dark"} style={{width:"auto", fontFamily:"Poppins, sans-serif",
                        fontWeight:"100", fontSize:"1rem", letterSpacing:"0.1em"}}/>
                    <div className={"contact-left"}>
                        <img src={ContactMain} alt={"IMG_01"} className={"contact-image"}/>
                    </div>
                    <div className={"contact-right"}>
                        <div className={"contact-right-container"}>
                            <form className={"contact-form"} ref={formRef} onSubmit={(e) => checkInputs(e)}>
                                <div className={"contact-title"}>Get in touch</div>
                                <div className={`contact-error ${nameError === true ? 'active-error' : ''}`}>
                                    <div>
                                        <FaInfoCircle className={"error-icon"}/>
                                    </div>
                                    <div className={"contact-error-text"}>
                                        Name can't be empty!
                                    </div>
                                </div>
                                <div className={"contact-inputs"}>
                                    <div className={"contact-name"}>
                                        <input className={"contact-input contact-name"} type={"text"} name={"user_name"} placeholder={"John Smith"} ref={nameRef}/>
                                    </div>
                                </div>
                                <div className={`contact-error ${emailError === true ? 'active-error' : ''}`}>
                                    <div>
                                        <FaInfoCircle className={"error-icon"}/>
                                    </div>
                                    <div className={"contact-error-text"}>
                                        Something went wrong!
                                    </div>
                                </div>
                                <div className={"contact-inputs"}>
                                    <div className={"contact-email"}>
                                        <input className={"contact-input contact-email"} type={"text"} name={"user_email"} placeholder={"example@me.com"} ref={emailRef}/>
                                    </div>
                                </div>
                                <div className={`contact-error ${subjectError === true ? 'active-error' : ''}`}>
                                    <div>
                                        <FaInfoCircle className={"error-icon"}/>
                                    </div>
                                    <div className={"contact-error-text"}>
                                        Subject can't be empty!
                                    </div>
                                </div>
                                <div className={"contact-inputs"}>
                                    <div className={"contact-subject"}>
                                        <input className={"contact-input contact-subject"} type={"text"} name={"subject"} placeholder={"Subject"} ref={subjectRef}/>
                                    </div>
                                </div>
                                <div className={`contact-error ${messageError === true ? 'active-error' : ''}`}>
                                    <div>
                                        <FaInfoCircle className={"error-icon"}/>
                                    </div>
                                    <div className={"contact-error-text"}>
                                        Message can't be empty!
                                    </div>
                                </div>
                                <div className={"contact-inputs"}>
                                    <div className={"contact-message"}>
                                        <textarea className={"contact-input-message"} name={"message"} placeholder={"Message"} ref={messageRef}/>
                                    </div>
                                </div>
                                <div className={"contact-inputs"}>
                                    <div className={"contact-button-container"}>
                                        <input type={"submit"} value={"Send message"} className={"contact-button"}/>
                                    </div>
                                </div>
                                <div className={"contact-inputs"}>
                                    <div className={"contact-links"}>
                                        <a href={"https://www.linkedin.com/in/raivis-karklins/"} target={"_blank"} rel="noreferrer" className={"contact-link"}>
                                            <FaLinkedin className={"contact-icons"}/>
                                        </a>
                                        <a href={"https://github.com/designer-rxk"} target={"_blank"} rel="noreferrer" className={"contact-link"}>
                                            <FaGithub className={"contact-icons"}/>
                                        </a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className={"work-page-num mobile-num"}>
                    <p>03</p>
                </div>
            </div>
        </div>
    )
}
export default ContactPage;