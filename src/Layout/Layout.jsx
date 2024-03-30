import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Layout = () => {
    return (
        <div className=" ">
            <Header></Header>
            <div className="container mx-auto  ">
                <Outlet></Outlet>
            </div>
            <div className="mt-5 ">

             <Footer ></Footer>
            </div>
          
        </div>
    );
};

export default Layout;