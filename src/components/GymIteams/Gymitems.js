import React, { useEffect, useState } from 'react';
import './Gymitems.css'
import Iteam from '../Iteam/Iteam';
import Activety from '../Activetiy/Activety';

const Gymitems = () => {
    const [GymIteams, setGymitems] = useState([]);

    useEffect(() => {

        fetch(`data.json`)
            .then(res => res.json())
            .then(data => setGymitems(data));



    }, [])



    return (
        <div className='main-container grid md:grid-flow-col   '>
            <div>
                      <h1 className='pl-20 mt-5 mb-5 text-2xl  md'> Select Your Best Choise!</h1>
                <div className="left-items grid xl:grid-cols-3 gap-8 sm:p-0">

                    {
                        GymIteams.map(iteam => <Iteam iteam={iteam}></Iteam>)
                    }

                </div>
            </div>
            <div className="right-activety bg-white mt-8 ">

                <Activety ></Activety>


            </div>
        </div>
    );
};

export default Gymitems;