import React, {useRef, useState} from "react";
import './ContactPage.css';
import {FaGithub, FaLinkedin, FaInfoCircle} from "react-icons/fa";
import {ContactMain} from "../../assets";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";

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

const ContactPage = () =>{
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [subjectError, setSubjectError] = useState(false);
    const [messageError, setMessageError] = useState(false);

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const subjectRef = useRef(null);
    const messageRef = useRef(null);
    const formRef = useRef();


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
            <div className={"about-title"}>
                <h2 className={"title-text"}>
                    <p className={"title-text-tag"}>Contact<br/> me</p>
                </h2>
                <div className={"about-spans"}>
                    <span className={"divider-span"}/>
                    <span className={"divider-span child"}/>
                </div>
                <p className={"title-description"}>
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
                                <h3 className={"contact-title"}>Get in touch</h3>
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
                                        <input className={"contact-input contact-name"} type={"text"} name={"user_name"} placeholder={"Name"} ref={nameRef}/>
                                    </div>
                                </div>
                                <div className={`contact-error ${emailError === true ? 'active-error' : ''}`}>
                                    <div>
                                        <FaInfoCircle className={"error-icon"}/>
                                    </div>
                                    <div className={"contact-error-text"}>
                                        Something went wrong! (me@me.com)
                                    </div>
                                </div>
                                <div className={"contact-inputs"}>
                                    <div className={"contact-email"}>
                                        <input className={"contact-input contact-email"} type={"text"} name={"user_email"} placeholder={"E-mail"} ref={emailRef}/>
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
                                        <a href={"https://www.linkedin.com/"} target={"_blank"} rel="noreferrer">
                                            <FaLinkedin className={"contact-icons"}/>
                                        </a>
                                        <a href={"https://github.com/designer-rxk"} target={"_blank"} rel="noreferrer">
                                            <FaGithub className={"contact-icons"}/>
                                        </a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className={"about-page-num"}>
                    <p>04</p>
                </div>
            </div>
        </div>
    )
}
export default ContactPage;