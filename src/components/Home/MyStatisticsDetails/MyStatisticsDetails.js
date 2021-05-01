import React from 'react';

const MyStatisticsDetails = ({data}) => {
    return (
            <div className="col-md-3 d-flex justify-content-center align-items-center pt-5">
                <div className="number pb-2"><h4><span style={{color:'#706fd3',fontWeight:'bold'}}>{data.number}</span></h4></div>&nbsp;&nbsp;&nbsp;
               <div className="title"> <p><span style={{color:'#0b2154'}}>{data.title}</span></p></div>
            </div>
    );
};

export default MyStatisticsDetails;