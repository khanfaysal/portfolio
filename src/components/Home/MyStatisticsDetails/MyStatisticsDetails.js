import React from 'react';
import CountUp from 'react-countup';

const MyStatisticsDetails = (props) => {
    const {number,title} = props.data;
    return (
            <div className="col-md-3 d-flex justify-content-center align-items-center pt-5">
                <div className="number pb-2"><h4><span style={{color:'#706fd3',fontWeight:'bold'}}>
                <CountUp
                    start={1}
                    end={number} 
                    duration={12}
                 />
                    </span></h4></div>&nbsp;&nbsp;&nbsp;
               <div className="title"> <p><span style={{color:'#0b2154'}}>{title}</span></p></div>
            </div>
    );
};

export default MyStatisticsDetails;