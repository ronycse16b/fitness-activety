import React from 'react';
import './iteam.css';

const Iteam = ({ iteam }) => {
    const {id,tittleName,requeredTime,discription,ageRange,img} = iteam;
    console.log(iteam);
    return (
        <div>
            <div className="card md:w-96 lg:w-96 h-full bg-sky-100 shadow-xl">
                <figure className="px-4 pt-4">
                    <img src={img} alt="Shoes" className=" h-52 rounded-xl" />
                </figure>
                <div className="card-body items-strat ">
                    <h2 className="card-title">{tittleName}</h2>
                    <p className='text-justify'>{discription}</p>
                    <small>Age Range: {ageRange}</small>
                    <p className='font-bold'>Requeried Time: {requeredTime}s</p>
                    <div className="card-actions">
                        <button className="btn btn-primary w-full">Add To Cart List</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Iteam;