import React from 'react';

const QA = () => {
    return (
        <div className="  m-20" >

            <h1 className="text-yellow-500 font-bold" > Quetion And Answer</h1>
            <h1 className="font-bold  "> 1: How Does React Work?</h1>
            <p>Ans :React goes through its virtual DOM ,creates a list of those changes that need to be made to the actual DOM and then does it all in one single process</p>

            <h1 className="font-bold  "> 2: What is difference between props and state in React?
            </h1>
            <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components</p>

            <h1 className="font-bold  ">Why used UsedEffect ?</h1>
            <p>The useEffect hook allows components to react to lifecycle events such as mounting to the DOM, re-rendering, and unmounting</p>

        </div>
    );
};

export default QA;