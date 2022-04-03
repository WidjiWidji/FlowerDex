import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import BadgeDisplay from './components/badgeDisplay';
import { Link, useLocation } from "react-router-dom"
import axios from 'axios';
import { auth } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth';


const FlowerDexPage = () => {

    const [user, loading, error] = useAuthState(auth);
    const [config, setConfig] = useState({})
    // const location = useLocation()
    // const n  = location.state.name
    // const [uid, setuid] = useStaten(n)
    // const uid = location.state.name !== undefined ? location.state.name : '';
    // if(location.state.name !== undefined){
    //     let uidName = location.state.name
    //     setuid(uidName)
    // }else {
    //     setuid(uid)
    //     console.log('none')
    // }
    // console.log(location.state.name)
    // const [name, setName] = useState()
    // setuid(name)
    // console.log(name)
    useEffect(() => {
        // const uid = location.state.name !== undefined ? location.state.name : '';
        // setuid(location.state.name)
        // if(user.uid !== undefined){
        axios({
            method: 'post',
            url: 'http://localhost:5000/config',
            data: {
              uid: user.uid,
            }
          })
        .then(res => {
            const data = res.data;
            // console.log(data[0])
            setConfig(data[0])

        })
    }, [config]);

    // let props = {
    //     config:  config,
    //     id: uid
    // }
    return (
        <div className = 'flex bg-[#114859] h-screen items-center justify-around flex-col'>


            <Navigation />

            <BadgeDisplay data={config}/>

        </div>



    );
}

export default FlowerDexPage;