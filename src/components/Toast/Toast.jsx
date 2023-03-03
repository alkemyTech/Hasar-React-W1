import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Toast = ({status, msg}) => {
    const showToastMessageSuccess = (msg) => {    
        toast.success(msg, {
            position: toast.POSITION.TOP_CENTER
        });
    };
    const showToastMessageError = (msg) => {
        toast.error(msg, {
            position: toast.POSITION.TOP_CENTER
        });
    };
    status == "202" ? showToastMessageSuccess(msg) : showToastMessageError(msg)
    return (
        <>
        
        <ToastContainer />
        
        </>
    )
}
