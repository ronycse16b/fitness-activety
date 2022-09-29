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
                <h2 className=' ml-5 font-bold'>Weight:<span>62 kg</span></h2>

                <h2 className=' ml-5 font-bold'>Height: <span>5'5" Fit</span></h2>
                <h2 className=' ml-5 font-bold' ><span> Age : 25</span></h2>
             


            </div>

            <div className="add-break">
                 <h1 className='ml-5 font-bold'>Add A Break:</h1>
                 <div className="break-time-container flex  bg-slate-300 pt-5 pb-5 m-5 rounded-lg ">
                      <button className='hover:bg-rose-700 hover:text-white   rounded-full h-12 bg-white ml-3 p-3'>10s</button>
                      <button className='hover:bg-rose-700 hover:text-white rounded-full h-12 bg-white ml-3 p-3'>20s</button>
                      <button className='hover:bg-rose-700 hover:text-white rounded-full h-12 bg-white ml-3 p-3'>30s</button>
                      <button className='hover:bg-rose-700 hover:text-white rounded-full h-12 bg-white ml-3 p-3'>40s</button>
                      <button className='hover:bg-rose-700 hover:text-white rounded-full h-12 bg-white ml-3 p-3'>50s</button>
                 </div>

            </div>
            <div className="excersise-details font-bold">
                 <h1 className='ml-5 font-bold'>Exercise Details:</h1>
                 <div className="break-time-container justify-between  bg-slate-300 pt-5 pb-5 m-5 rounded-lg flex items-center">
                     
                      <h1 className=' ml-3 p-3'>Exercise time </h1>
                      <h1 className=' ml-10 pr-5 '>40s</h1>
                     
                 </div>

            </div>
            <div className="Breack-Time">
                 
                 <div className="break-time-container justify-between  bg-slate-300 pt-5 pb-5 m-5 rounded-lg flex items-center font-bold">
                     
                      <h1 className=' ml-3 p-3'>Break time </h1>
                      <h1 className=' ml-10 pr-5 '>40s</h1>
                     
                 </div>

            </div>
            <button className="btn bg-rose-700 w-96 m-5">Activity Completed</button>

        </div>
    );
};

export default Activety;