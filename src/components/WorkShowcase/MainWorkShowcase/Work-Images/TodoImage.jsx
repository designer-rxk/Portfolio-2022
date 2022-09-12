import {TodoImg} from "../../../../assets";

const TodoImage = () =>{
    return(
        <span className={"page-fade"}>
            <img src={TodoImg} alt={"TodoAlt"} className={"carousel-image"}/>
        </span>
    );
}
export default TodoImage;