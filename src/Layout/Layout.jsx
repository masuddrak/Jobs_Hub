import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";


const Layout = () => {
    return (
        <div className=" flex flex-col">
            <Header></Header>
            <div className="container mx-auto  ">
                <Outlet></Outlet>
            </div>
            <div className="mt-5 flex-grow w-full">

             <Footer ></Footer>
            </div>
        </div>
    );
};

export default Layout;