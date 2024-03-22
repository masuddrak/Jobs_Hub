import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";


const Layout = () => {
    return (
        <div>
            <Header></Header>
            <div className="container mx-auto">
                <Outlet></Outlet>
            </div>
             <Footer ></Footer>
        </div>
    );
};

export default Layout;