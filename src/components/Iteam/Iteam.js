import React from 'react';
import './iteam.css';

const Iteam = (props) => {
    const {id ,tittleName,requeredTime,discription,ageRange,img} = props.iteam;
    const {handelButtonClick} = props;



    return (
        <div>
            <div className="card md:w-full lg:w-96 bg-white  shadow-2xl">
                <figure className="px-4 pt-4">
                    <img src={img} alt="Shoes" className=" h-52 rounded-xl" />
                </figure>
                <div className="card-body items-strat ">
                    <h2 className="card-title">{tittleName}</h2>
                    <p className='text-justify'>{discription}</p>
                    <small>Age Range: {ageRange}</small>
                    <p className='font-bold'>Requeried Time: {requeredTime}s</p>
                    <div className="card-actions">
                        <button onClick={ ()=>handelButtonClick(props.iteam) } className= "btn bg-rose-700 w-full">Add To Cart List</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Iteam;