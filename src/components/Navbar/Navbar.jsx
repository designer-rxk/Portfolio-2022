import React, {useState} from "react";
import './Navbar.css'
import {FaLinkedin, FaGithub} from "react-icons/fa";
import {Modal} from "../index";

const Navbar = ({openModal, setOpenModal, ref1, ref2, ref3, ref4, ref5}) =>{
    const [modalStatus, setModalStatus] = useState(false);
    const checkHamburger = () =>{
        setModalStatus(prevState => !prevState);
        if(openModal === false) {
            setOpenModal(true);
        }
        if(openModal === true) {
            setOpenModal(false);
        }
    }

    return(<>
            <div className={`Modal ${modalStatus === true ? "fat" : "none"}`}>
                <Modal ref1={ref1} ref2={ref2} ref3={ref3} ref4={ref4} ref5={ref5} setModalStatus={setModalStatus} setOpenModal={setOpenModal} openModal={openModal}/>
            </div>

        <div className={"header"}>
            <div className={"name-wrapper"}>
                <div className={"name"} onClick={()=>window.location.reload()}>
                    <div className={"big"}>Raivis Kārkliņš</div>
                    <div className={"small"}>Kārkliņš</div>
                </div>
            </div>
            <div className={"links"}>
                <div className={"icon-wrapper"}>
                    <a href={"https://www.linkedin.com/"} target={"_blank"} rel="noreferrer">
                        <FaLinkedin className={"icon"}/>
                    </a>
                    <a href={"https://github.com/designer-rxk"} target={"_blank"} rel="noreferrer">
                        <FaGithub className={"icon"}/>
                    </a>
                </div>
            </div>
            <div className={"wrapper"}>
                <header id="header">
                    <div className="nav">
                        <button className={`toggle-menu ${openModal === true ? 'active' : ''}`}
                                onClick={()=>checkHamburger()}>
                            <span/>
                        </button>
                    </div>
                </header>
            </div>
        </div>
        </>
    )
}
export default Navbar;