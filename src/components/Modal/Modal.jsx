import React from "react";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import './Modal.scss'

const Modal = ({ setModalStatus, ref1, ref2, ref3, ref4, ref5, setOpenModal, openModal }) =>{
    const redirectUser = (element) =>{
        element.scrollIntoView({behavior: 'smooth'});
        setModalStatus(prevState => !prevState);
        if(openModal === false) {
            setOpenModal(true);
        }
        if(openModal === true) {
            setOpenModal(false);
        }
    }
    return(
        <div className={"modal-test"} >
            <div className={"modal-container"}>
                <div className={"modal-item"}>
                    <div className={`modal-text`}>
                        <div className={"underline"} onClick={()=>redirectUser(ref1)}>
                            Home
                        </div>
                    </div>
                </div>
                <div className={"modal-item"}>
                    <div className={`modal-text`}>
                        <div className={"underline"} onClick={()=>redirectUser(ref2)}>
                            About
                        </div>
                    </div>
                </div>
                <div className={"modal-item"}>
                    <div className={`modal-text`} onClick={()=>redirectUser(ref3)}>
                        <div className={"underline"}>
                            Work
                        </div>
                    </div>
                </div>
                <div className={"modal-item"}>
                    <div className={`modal-text`} onClick={()=>redirectUser(ref4)}>
                        <div className={"underline"}>
                            Skills
                        </div>
                    </div>
                </div>
                <div className={"modal-item"}>
                    <div className={`modal-text`} onClick={()=>redirectUser(ref5)}>
                        <div className={"underline"}>
                            Contact
                        </div>
                    </div>
                </div>

                <div className={"modal-item modal-links"}>
                    <a href={"https://www.linkedin.com/"} target={"_blank"} rel="noreferrer">
                        <FaLinkedin className={"modal-icon"}/>
                    </a>
                    <a href={"https://github.com/designer-rxk"} target={"_blank"} rel="noreferrer">
                        <FaGithub className={"modal-icon"}/>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Modal;