import { useEffect, useRef } from "react";
import { useState } from "react";
import Featcher from "./Featcher";

const Featchers = () => {
    const [featchers, setFeatchers] = useState([])
    const [displayData, setDisplayData] = useState(4)
    const [searchData, setSearchData] = useState([])
    const inputValu = useRef(null)
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setFeatchers(data))
    }, [])

    useEffect(() => {
        if (featchers.length > 0) {
            setSearchData(featchers)
        }
    }, [featchers])
    // handel searche

    const handelSearch = () => {
        const searchText = inputValu.current.value
        console.log(searchText)
        if (searchText == '') {
            setSearchData(featchers)
        }
        else if (searchText == "remote") {
            const filterRemoteJob = featchers.filter(job => job.remote_or_onsite == "Remote")
            setSearchData(filterRemoteJob)
        }
        else if (searchText == "onsite") {
            const filterRemoteJob = featchers.filter(job => job.remote_or_onsite == "Onsite")
            setSearchData(filterRemoteJob)
        }
    }
    return (
        <div id="#fechers">

            <div className="flex justify-center mb-10">
                <div className="flex gap-4">
                    <input ref={inputValu} type="text" placeholder="Onsite/Remote" className="input input-bordered input-success w-full max-w-xs" />
                    <button onClick={handelSearch} className="btn btn-success">searche</button>
                </div>
            </div>
            <div className="md:grid grid-cols-2 gap-10">
                {
                    searchData.slice(0, displayData).map(feacher => <Featcher key={feacher.id} feacher={feacher}></Featcher>)
                }
            </div>
            <div className={displayData === featchers.length ? "hidden" : "flex justify-center my-10"}>
                <button onClick={() => setDisplayData(featchers.length)} className="btn bg-success text-neutral text-center">Show All</button>
            </div>
        </div>
    );
};

export default Featchers;