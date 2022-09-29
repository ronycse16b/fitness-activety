import React from 'react';
import profile from '../../image/RonyFormal.jpg';
import './Activety.css';

const Activety = () => {
    return (
        <div>
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
                <h2 className=' ml-5'>Weight:<span>62 kg</span></h2>

                <h2 className=' ml-5'>Height: <span>5'5" Fit</span></h2>
                <h2 className=' ml-5'><span> Age : 25</span></h2>
             


            </div>

            <div className="add-break">
                 <h1>Add Break</h1>
                 <div className="break-time-container flex  bg-slate-300 pt-5 pb-5 m-5 rounded-lg">
                      <h1 className='rounded-full h-12 bg-white ml-3 p-3'>10s</h1>
                      <h1 className='rounded-full h-12 bg-white ml-3 p-3'>20s</h1>
                      <h1 className='rounded-full h-12 bg-white ml-3 p-3'>30s</h1>
                      <h1 className='rounded-full h-12 bg-white ml-3 p-3'>40s</h1>
                      <h1 className='rounded-full h-12 bg-white ml-3 p-3'>50s</h1>
                 </div>

            </div>
            <div className="excersise-details">
                 <h1>Excersise Details:</h1>
                 <div className="break-time-container   bg-slate-300 pt-5 pb-5 m-5 rounded-lg flex items-center">
                     
                      <h1 className=' ml-3 p-3'>Excersise Time </h1>
                      <h1 className=' ml-10 '>40s</h1>
                     
                 </div>

            </div>
            <div className="Breack-Time">
                 
                 <div className="break-time-container   bg-slate-300 pt-5 pb-5 m-5 rounded-lg flex items-center">
                     
                      <h1 className=' ml-3 p-3'>Break Time </h1>
                      <h1 className=' ml-10 '>40s</h1>
                     
                 </div>

            </div>
            <button className="btn btn-primary w-96 m-5">Activity Completed</button>

        </div>
    );
};

export default Activety;