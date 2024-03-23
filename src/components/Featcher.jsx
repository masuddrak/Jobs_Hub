import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { Link } from "react-router-dom";


const Featcher = ({ feacher }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = feacher
    return (
        <div className="shadow-xl p-6 space-y-3">
            <div className="h-[70px] w-[150px]">
                <img className="object-fill w-full h-full" src={logo} alt="" />
            </div>
            <div>
                <h2 className="text-xl font-semibold">{job_title}</h2>
                <p>{company_name}</p>
            </div>
            <div className="flex gap-4">
                <a rel="noopener noreferrer" href="#" className="px-2 text-lg font-semibold border rounded border-green-600">{remote_or_onsite}</a>
                <a rel="noopener noreferrer" href="#" className="px-2  text-lg font-semibold border rounded border-green-600">{job_type}</a>
            </div>
            <div className="flex gap-10 ">
                <div className="flex gap-2 items-center">
                    <IoLocationOutline></IoLocationOutline>
                    <p>{location}</p>
                </div>
                <div className="flex gap-2 items-center">
                    <HiOutlineCurrencyDollar></HiOutlineCurrencyDollar>
                    <p>Salary: {salary}</p>
                </div>
            </div>
            <div>
                <Link to={`/applied/${id}`} rel="noopener noreferrer" href="#" className="px-2 py-2 text-lg font-semibold  rounded bg-green-600">view Details</Link>
            </div>
        </div>
    );
};

export default Featcher;