import {EcommerceImg} from "../../../../assets";

const EcommerceImage = () =>{
    return(
        <span className={"page-fade fade"}>
            <img src={EcommerceImg} alt={"EcommerceAlt"} className={"carousel-image"}/>
        </span>
    );
}
export default EcommerceImage;