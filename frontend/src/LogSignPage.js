import React, { useState } from 'react'
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';

const LogSignPage = () => {

    const [show, setShow] = useState(true);

    const swit = () => {
        let temp = !show;
        setShow(temp);
    }

    return (
        <div className='flex bg-[#114859] h-screen items-center justify-around flex-col'>
            {show ?
            <div>
            <SignUp />
            <br></br>
            <button className='nobtn' onClick={swit}>Already have an account?</button>
            </div>:
            <div>
            <LogIn />
            <br></br>
            <button className='nobtn' onClick={swit}>Don't have an account?</button>
            </div>}
        </div>
    );
}



export default LogSignPage;
