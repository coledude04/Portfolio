import React from 'react';
import { useEffect } from 'react';
import * as CGIcons from 'react-icons/cg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {

    useEffect(() => {
        toast("This website is unfinished. Some content may not function.");
    }, [])

    return(
        <>
        <p id="navigator">This is here so that the nav menu can direct the user to the top!</p>
        <div className="homeSection">
            <p id="introText">
                <span>Hello</span>, my name is Cole and you've reached my website. Here, you can find my projects and information about me.
            </p>
            <a to="#" id="downArrow" onClick={() => document.getElementById("aboutMeTitle").scrollIntoView({behavior: 'smooth'})}>
                <CGIcons.CgArrowLongDown />
            </a>
        </div>
        <ToastContainer
            position="bottom-right"
            autoClose={10000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
        />
        </>
    )
}
export default Home;