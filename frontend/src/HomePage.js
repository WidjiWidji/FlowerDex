import React, { useState, useEffect} from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import Navigation from './components/Navigation';
import { auth, db, logout } from "./firebase";
import {WebcamCapture} from './components/webcam';
import styled, { css } from "styled-components";
import MaterialButtonNavigation from "./components/MaterialButtonNavigation";
import MaterialButtonUpload from "./components/MaterialButtonUpload";
import MaterialButtonSnapshot from "./components/MaterialButtonSnapshot";

// import {AuthPage} from "./components/AuthPage";

const HomePage  = () => {

    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState('');
    const navigate = useNavigate();

    // uuid.di
    // const userData =  {
    //     name: {name},
    //     settings: {},
    //     // lastLogin: 2400,
    // };

    const submitForm = () => {
        alert("Form submitted");
    }

    // const printUser = () => {
    //     let id = user.uid
    //     console.log(user)
    //     console.log(user.displayName)
    //     console.log(id)
    // }

   
      

    useEffect(() => {
        // if (user.displayName){
        //     setName(user.displayName);
        // }
        if(!user) return navigate("/");
        // dispatch(user.uuid);
        setName(user.uid)
        // if (user.displayName != null){
        //     setName(user.displayName)
        // }
    }, [user]);
    return (
    //     <Container> 
    //         <FlowerDexRow>
    //             <FlowerDex>FlowerDex</FlowerDex>
    //             <MaterialButtonNavigation
    //       style={{
    //         height: 36,
    //         width: 100,
    //         backgroundColor: "rgba(15,15, 15,0)",
    //         marginLeft: 682,
    //         marginTop: 25
    //       }}
    //     ></MaterialButtonNavigation>
    //     <MaterialButtonNavigation
    //       style={{
    //         height: 36,
    //         width: 100,
    //         backgroundColor: "rgba(15,15, 15,0)",
    //         marginTop: 25
    //       }}
    //     ></MaterialButtonNavigation>
    //     <FlowerDex1>ðŸŒ·FlowerDex</FlowerDex1>
    //         </FlowerDexRow>
    //         <Or3>or</Or3>
    //   <MaterialButtonUpload
    //     style={{
    //       height: 52,
    //       width: 125,
    //       marginTop: 82,
    //       marginLeft: 606
    //     }}
    //   ></MaterialButtonUpload>
    //   <MaterialButtonSnapshot
    //     style={{
    //       height: 67,
    //       width: 225,
    //       marginTop: -251,
    //       marginLeft: 556
    //     }}
    //   ></MaterialButtonSnapshot>
    //   <MaterialButtonUpload
    //     style={{
    //       height: 52,
    //       width: 148,
    //       marginTop: 63,
    //       marginLeft: 594
    //     }}
    //   ></MaterialButtonUpload>
    //     </Container>

    
    <div className='flex bg-[#114859] h-screen items-center justify-around flex-col'>

        <Navigation props={name || ''}/>
        {/* <div>{user.displayName != null ? <h1>{user.displayName} FlowerDex</h1> : <h1> FlowerDex</h1>}</div> */}
        <h1 className='titleWhite'>
        Please Scan Flower
        </h1>



        <WebcamCapture id={name || ''}/>


        <button className='btnGreen' onClick={ logout }>Logout</button>

    </div>
    );
}
const Container = styled.div`
  display: flex;
  background-color: rgba(11,57,75,1);
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const FlowerDex = styled.span`
  font-family: Rubik;
  font-style: normal;
  font-weight: 800;
  color: rgba(255,255,255,1);
  font-size: 60px;
`;

const FlowerDex1 = styled.span`
  font-family: Rubik;
  font-style: normal;
  font-weight: 800;
  color: rgba(255,255,255,1);
  font-size: 60px;
  margin-left: 109px;
  margin-top: 21px;
`;

const FlowerDexRow = styled.div`
  height: 100px;
  flex-direction: row;
  display: flex;
  margin-top: 23px;
  margin-left: 56px;
  margin-right: -462px;
`;

const Rect = styled.div`
  width: 795px;
  height: 356px;
  background-color: #E6E6E6;
  border-radius: 16px;
  margin-left: 285px;
`;

const Or3 = styled.span`
  font-family: Rubik;
  font-style: normal;
  font-weight: 600;
  color: rgba(255,255,255,1);
  font-size: 30px;
  margin-top: 105px;
  margin-left: 653px;
`;

export default HomePage;
//<FileUpload/>

// const [user, loading, error] = useAuthState(auth);
// const [name, setName] = useState('');
// const navigate = useNavigate();



// const userData =  {
//     name: {name},
//     settings: {},
//     lastLogin: 2400,
// };

// const submitForm = () => {
//     alert("Form submitted");
// }

// useEffect(() => {
//     //setName(userData.name);
//     if(!user) return navigate("/");
// }, [user, userData]);

// return (
//     <div className='Home'>
//     <Navigation />
//     <h1 className='title'>
//     This is Home Page
//     </h1>
//     <form className="form">
//         <WebcamCapture/>
//         <button type="submit" onClick={(e) => submitForm(e)}>Submit</button>
//     </form>
//     <button onClick={ logout }>Logout</button>


// </div>

// );