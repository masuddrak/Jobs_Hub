import { useEffect, useState } from "react";
import { getLocalStorage, removeLocalItems } from "../utility/localStorage";
import { useLoaderData } from "react-router-dom";
import SelectedJob from "../components/SelectedJob";

const Applied = () => {
    const [selectedJob, setSelecedJob] = useState([])
    const [displayJobs, setDisplayJobs] = useState([])
    const filterHnader = (catagry) => {
        if (catagry == "all") {
            setDisplayJobs(selectedJob)
        }
        else if (catagry = "remote") {
            const filterRemoteJob = selectedJob.filter(job => job.remote_or_onsite == "Remote")
            setDisplayJobs(filterRemoteJob)
        }
        else if (catagry = "onsite") {
            const filterRemoteJob = selectedJob.filter(job => job.remote_or_onsite == "Onsite")
            setDisplayJobs(filterRemoteJob)
        }
    }

    const jobs = useLoaderData()
    useEffect(() => {
        const localJobs = getLocalStorage()
        if (localJobs.length > 0) {
            const apliedJobs = jobs.filter(job => localJobs.includes(job.id))
            setSelecedJob(apliedJobs)
            setDisplayJobs(apliedJobs)
        }
    }, [])
    const removeItem = (id) => {
        removeLocalItems(id)
        const localJobs = getLocalStorage()

        const apliedJobs = jobs.filter(job => localJobs.includes(job.id))
        setSelecedJob(apliedJobs)
        setDisplayJobs(apliedJobs)
    }
    // console.log(selectedJob)
    return (
        <div>
            <div className="flex justify-between py-20">
                <h3 className="  text-center text-2xl font-bold">Your Applied Jobs: {selectedJob.length}</h3>
                <details className="dropdown">
                    <summary className="m-1 btn">Catagory</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={() => filterHnader("all")}><a>All</a></li>
                        <li onClick={() => filterHnader("remote")}><a>Remote</a></li>
                        <li onClick={() => filterHnader("onsite")}><a>Onsite</a></li>
                    </ul>
                </details>
            </div>
            <div className=" space-y-8">
                {
                    displayJobs.map(job => <SelectedJob key={job.id} job={job} removeItem={removeItem}></SelectedJob>)
                }
            </div>
        </div>
    );
};

export default Applied;