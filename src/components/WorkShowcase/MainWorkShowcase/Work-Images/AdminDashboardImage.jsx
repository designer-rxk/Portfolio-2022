import {AdminDashboardImg} from "../../../../assets";

const AdminDashboardImage = () =>{
    return(
        <span className={"page-fade"}>
            <img src={AdminDashboardImg} alt={"AdminDashboardAlt"} className={"carousel-image"}/>
        </span>
    );
}

export default AdminDashboardImage;