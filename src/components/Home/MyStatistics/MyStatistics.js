import React from 'react';
import MyStatisticsDetails from '../MyStatisticsDetails/MyStatisticsDetails';

const MyStatistics = () => {
    const statisticsData = [
        {
            number: '2',
            title: 'Years Experience',

        },
        {
            number: '12',
            title: 'Completed Projects',

        },
        {
            number: '900',
            title: 'Hours Coding',

        },
        {
            number: '5',
            title: 'Honors & Awards',

        }
    ]
    return (
        <div className="container">
            <div className="row">
                {
                    statisticsData.map(data => <MyStatisticsDetails data={data}></MyStatisticsDetails>)
                }
            </div>
        </div>
    );
};

export default MyStatistics;