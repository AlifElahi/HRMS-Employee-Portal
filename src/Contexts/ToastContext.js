//importing all the libraries  
import React, { useContext, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'antd/dist/antd.css';
import { Spin } from 'antd';
import Backdrop from '@mui/material/Backdrop';
import Alert from 'react-popup-alert'

export const ToastContext = React.createContext();

// exported the useToastify to use all over the app
export const useToastify = () => {
    const toastHelpers = useContext(ToastContext);
    return toastHelpers;
};


//context provider 
export const ToastProvider = (props) => {

    const [isloading, setLoading] = useState(false) //  useState - isloading set as flase
    const [tip, setTip] = useState('Loading...')  //  useState - tip set as "loading"
    const [alert, setAlert] = React.useState({
        type: 'error',
        text: 'This is a alert message',
        show: false
      })  

    const startLoading = () => setLoading(true)  // to initialized loading-true
    const stopLoading = () => setLoading(false)  // to stop loading-false

    const successToast = (string) => toast.success(string); // show success
    const errorToast = (string) => toast.error(string); // show error
    const infoToast = (string) => toast.info(string); // info toast
    const warnToast = (string) => toast.warn(string);  // warning toast

    const showToast = (type, string) => {
// switch cases to set strings
        switch (type) {
            case 'success':
                successToast(string)
                break;
            case 'error':
                errorToast(string)
                break;
            case 'info':
                infoToast(string)
                break;
            case 'warn':
                warnToast(string)
                break;
            case 'info':
                infoToast(string)
                break;    // dui bar likha hyse eita -- not necessary

            default:
                infoToast(string)
                break;
        }
        return
    }




    return (
        //passed the values
        <ToastContext.Provider value={{ showToast, successToast, infoToast, errorToast, warnToast, startLoading, stopLoading }}>  
            {/* <Spin tip={tip} spinning={isloading} style={{ display: 'flex', justifyContent: 'center' }}> */}
            {props.children}
            <ToastContainer
                style={{ wordSpacing: 'normal' }}
                theme="light"
                autoClose={3000}
                position="top-right"
                hideProgressBar={true}
                newestOnTop={true}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            {/* </Spin> */}
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={isloading}
            >
                <Spin size="large" tip={tip} />

                {/* <CircularProgress color="inherit" /> */}
            </Backdrop>
        </ToastContext.Provider>
    )
}