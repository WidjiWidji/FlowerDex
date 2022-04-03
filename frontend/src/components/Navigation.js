import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HeaderLink = ({ page, data }) => {
    const title = page.charAt(0).toUpperCase() + page.slice(1);
    return <Link to={`/${page}`} state={{ name: data }}>{title}</Link>;
  };
const Navigation = ({props}) => {

    return (
        <>
        <div className='navigation'>
            <div className='font-bold px-2'>
             <HeaderLink page='home' />
            </div>
            <div  className='font-bold px-2'>
            <HeaderLink page='flowerDex' data={props}/>
            </div>
        </div>
        </>
    );
}

export default Navigation;