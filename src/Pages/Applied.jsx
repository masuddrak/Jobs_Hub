import { useEffect, useState } from "react";
import { getLocalStorage } from "../utility/localStorage";
import { useLoaderData } from "react-router-dom";
import SelectedJob from "../components/SelectedJob";

const Applied = () => {
    const [selectedJob,setSelecedJob]=useState([])
    const jobs=useLoaderData()
    useEffect(() => {
        const localJobs = getLocalStorage()
        if(localJobs.length>0){
            const apliedJobs=jobs.filter(job=>localJobs.includes(job.id))
            setSelecedJob(apliedJobs)
        }
    }, [])

console.log(selectedJob)
    return (
        <div>
            <h3>Your Applied Jobs: {selectedJob.length}</h3>
            <div className=" space-y-8">
                {
                    selectedJob.map(job=><SelectedJob key={job.id} job={job}></SelectedJob>)
                }
            </div>
        </div>
    );
};

export default Applied;