import React from 'react';
import CountUp from 'react-countup';
import './MyStatisticsDetails';

const MyStatisticsDetails = (props) => {
    const {number,title} = props.data;
    return (
            <div className="statistics col-md-3 d-flex justify-content-center align-items-center mt-3">
                <div className="number "><h4><span style={{color:'#F2911B',fontWeight:'bold'}}>
                <CountUp
                    start={1}
                    end={number} 
                    duration={12}
                 />
                    </span></h4></div>&nbsp;&nbsp;&nbsp;
               <div className="title"> <p><span style={{color:'#0d6efd'}}>{title}</span></p></div>
            </div>
    );
};

export default MyStatisticsDetails;