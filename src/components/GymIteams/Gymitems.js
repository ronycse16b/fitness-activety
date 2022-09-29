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
        <div className='main-container'>
            <div>
                      <h1 className='pl-20 mt-5 mb-5 text-2xl '> Select Your Best Choise!</h1>
                <div className="left-items">

                    {
                        GymIteams.map(iteam => <Iteam iteam={iteam}></Iteam>)
                    }

                </div>
            </div>
            <div className="right-activety bg-slate-400">

                <Activety ></Activety>


            </div>
        </div>
    );
};

export default Gymitems;