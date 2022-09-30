import React, { useEffect, useState } from 'react';
import './Gymitems.css'
import Iteam from '../Iteam/Iteam';
import Activety from '../Activetiy/Activety';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import QA from './QuestionAnswer/QA';

const Gymitems = () => {
    const [GymIteams, setGymitems] = useState([]);
    const [timeShowFromCart, setTimeCart] = useState([]);
//  console.log(timeShowFromCart);

    useEffect(() => {

        fetch(`data.json`)
            .then(res => res.json())
            .then(data => setGymitems(data));



    }, [])

    const handelButtonClick = (items)=>{
      
    
    const newCart = [...timeShowFromCart,items]
      setTimeCart(newCart)
    }
    

    return (
        <div className='main-container    '>
            <div>
                      <h1 className='pl-48 mt-5 mb-5 text-2xl font-bold'> Select Your Best Choise!</h1>
                <div className="left-items grid 2xl:grid-cols-3    gap-8 sm:p-0">

                    {
                        GymIteams.map(iteam => <Iteam iteam={iteam} key={iteam.id} handelButtonClick={handelButtonClick}></Iteam>)
                    }
        
                </div>
                <QA></QA>
            </div>
            <div className="right-activety bg-white mt-20 ">

                <Activety timeShowFromCart={timeShowFromCart} ></Activety>


            </div>
        </div>
    );
};

export default Gymitems;