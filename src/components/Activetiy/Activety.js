import { click } from '@testing-library/user-event/dist/click';
import React, { useEffect, useState } from 'react';
import profile from '../../image/RonyFormal.jpg';
import './Activety.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Activety = ({ timeShowFromCart }) => {

// alert function call 
    const notify = () =>  toast.success("Success ! Your Activety completed !", {
        position: toast.POSITION.TOP_CENTER
      });;

    const [time, setTime] = useState([JSON.parse(localStorage.getItem('time'))])
    // 
    const handleBreakTime = (event) => {
        const timer = event.target.innerText;

        setTime(timer);


    }
    if (handleBreakTime) {

        localStorage.setItem('time', JSON.stringify(time));


    }

    // Grand Total Time Claculate 
    let GrandTotalTime = 0;
    for (const totalTime of timeShowFromCart) {
        GrandTotalTime = GrandTotalTime + parseInt(totalTime.requeredTime);

        // Secounds to minitues convaerted 
        const minute = Math.floor(GrandTotalTime / 60);
        const rest_seconds = GrandTotalTime % 60;
        var GrandTotalTimeShow = minute + " minutes " + rest_seconds + " sec.";

    }


    return (
        <div className=''>
            <div className="profile-info">
                <div className="img">
                    <img src={profile} alt="" />
                </div>
                <div className="info ml-5">
                    <h2 className='font-bold'>REFAET RONY</h2>
                    <p>Dhaka,Mohakhali-1212</p>
                </div>
            </div>

            <div className="profile-other-info flex bg-slate-300 pt-5 pb-5 m-5 rounded-lg">
                <h2 className=' ml-5 font-bold'>Weight:<span>62 kg</span></h2>

                <h2 className=' ml-5 font-bold'>Height: <span>5'5" Fit</span></h2>
                <h2 className=' ml-5 font-bold' ><span> Age : 25</span></h2>



            </div>

            <div className="add-break">
                <h1 className='ml-5 font-bold'>Add A Break:</h1>
                <div className="break-time-container flex  bg-slate-300 pt-5 pb-5 m-5 rounded-lg ">
                    <button onClick={(event) => handleBreakTime(event)} className='hover:bg-rose-700 hover:text-white   rounded-full h-12 bg-white ml-3 p-3'>10s</button>
                    <button onClick={(event) => handleBreakTime(event)} className='bg-rose-700 text-white rounded-full h-12 ml-3 p-3'>20s</button>
                    <button onClick={(event) => handleBreakTime(event)} className='hover:bg-rose-700 hover:text-white rounded-full h-12 bg-white ml-3 p-3'>30s</button>
                    <button onClick={(event) => handleBreakTime(event)} className='hover:bg-rose-700 hover:text-white rounded-full h-12 bg-white ml-3 p-3'>40s</button>
                    <button onClick={(event) => handleBreakTime(event)} className='hover:bg-rose-700 hover:text-white rounded-full h-12 bg-white ml-3 p-3'>50s</button>
                </div>

            </div>
            <div className="excersise-details font-bold">
                <h1 className='ml-5 font-bold'>Exercise Details:</h1>
                <div className="break-time-container justify-between  bg-slate-300 pt-5 pb-5 m-5 rounded-lg flex items-center">

                    <h1 className=' ml-3 p-3'>Exercise time </h1>
                    <h1 className=' ml-10 pr-5 '>{GrandTotalTimeShow}</h1>

                </div>

            </div>
            <div className="Breack-Time">

                <div className="break-time-container justify-between  bg-slate-300 pt-5 pb-5 m-5 rounded-lg flex items-center font-bold">

                    <h1 className=' ml-3 p-3'>Break time </h1>
                    <h1 className=' ml-10 pr-5 '>{time}</h1>


                </div>

            </div>
            <button onClick={notify} className="btn bg-rose-700  m-5 ">Activity Completed</button>
            <ToastContainer />
        </div>
        
    );
};

export default Activety;