import { toast } from "react-toastify";

export const asyncHandler = promise =>{
    console.log(promise)

    promise.then(data=> data)
    .catch(error=> {
        console.log(error)
        toast.error(error.message);
    })

}