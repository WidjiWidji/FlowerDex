import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"
// import { flowerdata } from "./components/FlowerInfo"
import rose from './badges/rose.png';
import daisy from './badges/daisy.png';
import sunflower from './badges/sunflower.png';
import dandelion from './badges/dandelion.png';
import tulip from './badges/tulip.png'

const FlowerPage = () => {
    const location = useLocation() 
    const n  = location.state.name
    const i = location.state.id
    // const data = flowerdata;
    const [name, setName] = useState(n)
    const [id, setId] = useState(i)
    // console.log(i)

    useEffect(() => {
        setName(location.state.name)
        setId(location.state.id)
    }, []);

    const data = {
        rose: {
            rarity: 5,
            origin: "asia",
            species: "genus rosa",
            description: "roses can become infected by a number of diseases, most of them caused by fungi. Powdery mildew appears as a grayish white moldlike growth on the surface of young leaves and stems. Black spot fungus appears as conspicuous black spots on leaves and causes them to fall off. Rust is also a common disease of roses. Aphids are a common insect pest on the leaves and young stems.",
        },
        sunflower: {
            rarity: 3,
            origin: "north and south america",
            species: "genus helianthus",
            description: "annual herb with a rough hairy stem, high and broad, coarsely toothed, rough leaves arranged in spirals",
        },
        tulip: {
            rarity: 4,
            origin: "central asia and turkey",
            species: "genus tulipa",
            description: "tulips are among the most popular of all garden flowers, and numerous cultivars and varieties have been developed.",
        },
        dandelion: {
            rarity: 1,
            origin: "Eurasia",
            species: "genus taraxacum",
            description: "it has a rosette of leaves at the base of the plant; a deep taproot; a smooth, hollow stem; leaves that may be nearly smooth-margined, toothed, or deeply cut; and a solitary yellow flower head composed only of ray flowers (no disk flowers). The fruit is a ball-shaped cluster of many small, tufted, one-seeded fruits. The bitter young leaves are used in salads, and the roots can be used to make a coffee-like beverage.",
        },
        daisy: {
            rarity: 2,
            origin: "europe and asia",
            species: "asteraceae",
            description: "found on every continent except for Antarctica. Their abundance is also partially due to their adaptive nature. Daisies can thrive in both wet and dry climates, and sunny or shady areas. They can grow high in the mountains or in flat, grassy fields. Basically, daisies are botanical chameleons. Daisies are related to sunflowers, so they grow in similar habitats to their larger yellow cousins.",
        },
    }
    

   
    // console.log(name)
    // useEffect(() => {
    //     let temp = location.state;
    //     console.log(temp.name)
    //     setName(temp.name)
    //     // setData(flowerdata)
    //     // console.log(data)
    //     // const { name }  = location.state
    //     // const data = flowerdata;
    //     // const path = data[name].path
    // }, []);
    
    
    // if(name == 'rose'){
    //     let img = rose;
    // } 
    // if(name == 'daisy'){
    //     let img = daisy;
    
    // else if(data.name == 'sunflower'){
    //     let img = sunflower;
    // }
    // else if(data.name == 'dandelion'){
    //     let img = dandelion;
    // }
    // else{
    //     let img = tulip;
    // }

    return(
        
    <div className='flex bg-[#114859] h-screen items-center justify-center flex-col'>
        <h1 className='titleWhite' >
            {name} information
            {/* <img src={data[name].path} width='100' height='100'></img> */}
        </h1>

        <h2 className='titleWhite'>
            rarity: {data[name].rarity}
        </h2>

        <h3 className='titleWhite'>
            {data[name].origin}
        </h3>

        <h4 className='titleWhite'>
            {data[name].specices}
        </h4>

        <h5 className='titleWhite mx-36'>  
            {data[name].description}
        </h5>

        <br></br>

        <Link to='/flowerDex' state={{ name: id }}><button className='btnGreen'>back</button></Link>
        
    </div>

    );

}

export default FlowerPage;