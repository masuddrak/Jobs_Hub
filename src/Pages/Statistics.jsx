import { getLocalStorage } from "../utility/localStorage";




const Statistics = () => {
   const myLocalJobs=getLocalStorage()
   console.log(myLocalJobs)

    
    return (
        <div>
            <h1>This is Statistics</h1>
        </div>
    );
};

export default Statistics;