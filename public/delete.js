import { enableInput, inputEnabled, message, token  } from "./index.js";

import {showJobs} from "./jobs.js"

export const handleDelete = async (jobId) => {
    if(!inputEnabled){
        return
    }
    enableInput(false)

    try {
       const response = await fetch( `/api/v1/jobs/${jobId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
       }) 
       const data = await response.json()
       if(response.status === 200){
        message.textContent = `${jobId} has been Deleted`
        showJobs()
       }else{
        message.textContent = data.msg;
       }
    } catch (err) {
        console.error(err)
        message.textContent = "A Communication Error has Occured"    
    }

    enableInput(true)
}