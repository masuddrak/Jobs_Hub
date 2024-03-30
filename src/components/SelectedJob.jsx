import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { Link } from "react-router-dom";
const SelectedJob = ({ job ,removeItem}) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job
   
    return (
        <div className="bg-neutral p-4 rounded-md flex justify-between">
            <div className="flex gap-3 ">
                <div className="w-[100px] h-[60px]">
                    <img className="w-full " src={logo} alt="" />
                </div>
                <div className=" space-y-3">
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
                </div>
            </div>
            <div className=" flex flex-col justify-between space-y-5">
                <div>
                    <button onClick={()=>removeItem(id)} className="bg-green-800 text-white px-4 py-2 font-bold rounded">Remove Job</button>
                </div>
                <div>
                    <Link to={`/applieds/${id}`} className="bg-green-800 text-white px-4 py-2 font-bold rounded">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default SelectedJob;