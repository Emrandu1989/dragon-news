import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import NavBar from "../components/NavBar/NavBar";


const MainLayOut = () => {
    return (
        <div className="max-w-5xl mx-auto border ">
             <div className="">
             <Header />
             <NavBar />
             </div>
             <Outlet />
        </div>
    );
};

export default MainLayOut;