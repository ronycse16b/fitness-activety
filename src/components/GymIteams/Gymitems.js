import React, { useEffect, useState } from 'react';
import './Gymitems.css'
import Iteam from '../Iteam/Iteam';
import Activety from '../Activetiy/Activety';

const Gymitems = () => {
    const [GymIteams, setGymitems] = useState([]);
    const [timeShowFromCart, setTimeCart] = useState([]);

    useEffect(() => {

        fetch(`data.json`)
            .then(res => res.json())
            .then(data => setGymitems(data));



    }, [])

    const handelButtonClick = (cartTime)=>{
        setTimeCart(cartTime)
        console.log(timeShowFromCart);
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
            </div>
            <div className="right-activety bg-white mt-20 ">

                <Activety timeShowFromCart={timeShowFromCart} ></Activety>


            </div>
        </div>
    );
};

export default Gymitems;