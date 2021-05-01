import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import MyStatistics from '../MyStatistics/MyStatistics';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <>
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            <MyStatistics></MyStatistics>
        </>
    );
};

export default Header;