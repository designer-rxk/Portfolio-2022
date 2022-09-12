import {PhoticImg} from "../../../../assets";

const PhotoImage = () =>{
    return(
        <span className={"page-fade"}>
            <img src={PhoticImg} alt={"TodoAlt"} className={"carousel-image"}/>
        </span>
    );
}
export default PhotoImage;