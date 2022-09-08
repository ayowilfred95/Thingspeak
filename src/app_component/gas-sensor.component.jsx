import React from 'react';
const Gas = (props) => {
    return (  
        <div className="container">
            <div className="cards">
                <h1>{props.name}</h1>
                <h5 className="py-4">
                    <i className={`wi ${props.weatherIcon}display-1`}></i>
                    <h1 className="py2">{props.temp_celsius}&deg;</h1>

                    {/** show max and min temp */}
                    {minmaxTemp(props.gas_rpm)}
                    <h4 className="py-3">{props.desription}</h4>
                </h5>
            </div>
        </div>
    );
}
function minmaxTemp(min,max){
    return(
        <h3>
            <span className="px-4">{min}&deg;</span>
            <span className="px-4">{max}&deg;</span>
        </h3>
    );
}
 
export default Gas;