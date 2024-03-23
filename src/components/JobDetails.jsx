import { useLoaderData, useParams } from "react-router-dom";


const JobDetails = () => {
    const joID = useParams()
    const jobs = useLoaderData()
    const selectdJob = jobs.find(job => job.id == joID.applidID)
    const { job_title, job_description, job_responsibility, educational_requirements, experiences } = selectdJob
    console.log(selectdJob)
    return (
        <div>
            <h2 className="text-2xl font-bold text-center py-10">Job Details: {job_title}</h2>
            <section className="md:grid grid-cols-3 justify-between gap-10 my-7">
                <article className="space-y-5 col-span-2">
                    <p><span className="text-xl font-bold"> Job Description: </span>{job_description}</p>
                    <p><span  className="text-xl font-bold">Job Responsibility: </span>{job_responsibility}</p>
                    <p className="text-xl font-bold">Educational Requirements:</p>
                    <p>{educational_requirements}</p>
                    <p className="text-xl font-bold">Experiences:</p>
                    <p>{experiences}</p>
                </article>
                <article className="bg-neutral  p-3 rounded-md">
                   <h3 className="text-xl font-bold text-center my-2">Job Details</h3>
                   <hr  ></hr>
                </article>
            </section>
        </div>
    );
};

export default JobDetails;