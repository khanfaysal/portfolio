import React from 'react';
import MyStatisticsDetails from '../MyStatisticsDetails/MyStatisticsDetails';

const MyStatistics = () => {
    const statisticsData = [
       {
        number: '3 +',
        title: 'Years Experience',
        
       },
       {
        number: '12',
        title: 'Completed Projects',

       },
       {
        number: '30 +',
        title: 'Happy Customers',

       },
       {
        number: '5 +',
        title: 'Honors & Awards',

       }
    ]
    return (
        <div className="container">
            <div className="row">
                {
                statisticsData.map(data=><MyStatisticsDetails data={data}></MyStatisticsDetails>)  
                }
            </div>
        </div>
    );
};

export default MyStatistics;