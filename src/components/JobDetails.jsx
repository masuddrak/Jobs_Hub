import { Link, useLoaderData, useParams } from "react-router-dom";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { savLocalStorage } from "../utility/localStorage";



const JobDetails = () => {
    const joID = useParams()
    const jobs = useLoaderData()
    const selectdJob = jobs.find(job => job.id == joID.applidID)
    const {
        id,
        job_title,
        job_description,
        job_responsibility,
        educational_requirements,
        experiences,
        salary,
        contact_information,
    } = selectdJob
    // console.log(selectdJob)
    const handelAppliedJob=()=>{
        savLocalStorage(id)
        
        // console.log(id)
    }

    return (
        <div>
            <h2 className="text-2xl font-bold text-center py-10">Job Details: {job_title}</h2>
            <section className="md:grid grid-cols-3 justify-between gap-10 my-7">
                <article className="space-y-5 col-span-2">
                    <p><span className="text-xl font-bold"> Job Description: </span>{job_description}</p>
                    <p><span className="text-xl font-bold">Job Responsibility: </span>{job_responsibility}</p>
                    <p className="text-xl font-bold">Educational Requirements:</p>
                    <p>{educational_requirements}</p>
                    <p className="text-xl font-bold">Experiences:</p>
                    <p>{experiences}</p>
                </article>
                <article className="">
                    <div className="bg-neutral  p-3 rounded-md">
                        <h3 className="text-xl font-bold  ">Job Details</h3>
                        <hr className="my-4 border-gray-600 "></hr>
                        <div className="space-y-2">
                            <div className="flex gap-3">
                                <HiOutlineCurrencyDollar className="text-2xl"></HiOutlineCurrencyDollar>
                                <p><span className="font-bold"> Salary: </span>{salary}</p>
                            </div>
                            <div className="flex gap-3">
                                <FaRegCalendarAlt className="text-xl"></FaRegCalendarAlt>
                                <p><span className="font-bold"> Job Title: </span>{job_title}</p>
                            </div>
                        </div>
                        <h3 className="text-xl font-bold mt-5 ">Contact Inromation</h3>
                        <hr className="my-4 border-gray-600 "></hr>
                        <div className="space-y-2">
                            <div className="flex gap-3 items-center">
                                <FaPhoneAlt className="text-xl"></FaPhoneAlt>
                                <p><span className="font-bold"> Phone: </span>{contact_information.phone}</p>
                            </div>
                            <div className="flex gap-3 items-center">
                                <MdOutlineEmail className="text-xl"></MdOutlineEmail>
                                <p><span className="font-bold"> Email: </span>{contact_information.email}</p>
                            </div>
                            <div className="flex gap-3 items-center">
                                <IoLocationSharp className="text-xl"></IoLocationSharp>
                                <p><span className="font-bold"> Address: </span>{contact_information.address}</p>
                            </div>
                        </div>

                    </div>

                    <Link onClick={handelAppliedJob} ><div className="bg-green-600 text-xl font-semibold text-white py-2 w-full text-center rounded-md mt-4">Apply Now</div></Link>

                </article>
            </section>
        </div>
    );
};

export default JobDetails;