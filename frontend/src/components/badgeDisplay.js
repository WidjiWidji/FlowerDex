import rose from '../badges/rose.png';
import daisy from '../badges/daisy.png';
import sunflower from '../badges/sunflower.png';
import dandelion from '../badges/dandelion.png';
import tulip from '../badges/tulip.png'
import { Link } from 'react-router-dom';

function BadgeDisplay({data}) {
    // console.log(props.data)
    // console.log(props.id)
    // let data = 0;
    if(data !== undefined){
        return (
            <div className='my-6'>
            <table class="table-fixed">
            <thead>
            <tr>
                {data['rose'] ?
                <>
                <Link to='/flowerPage'  state={{ name: 'rose'}}>
                <button className= 'gridbtn'><th><img src={rose} width='100' height='100'/></th></button>
                </Link>
                </> :
                <>
                </> }
                {data['daisy'] ?
                <>
                <Link to='/flowerPage'  state={{ name: 'daisy'}}>
                <button className= 'gridbtn'><th><img src={daisy} width='101' height='100'/></th></button>
                </Link>
                </> :
                <>
                </>}
                {data.sunflower ?
                <>
                <Link to='/flowerPage'  state={{ name: 'sunflower'  }}>
                <button className= 'gridbtn'><th><img src={sunflower} width='102' height='100'/></th></button>
                </Link>
                </> :
                <>
                </>}
                {data.dandelion ?
                <>
                <Link to='/flowerPage'  state={{ name: 'dandelion'  }}>
                <button className= 'gridbtn'><th><img src={dandelion} width='103' height='100'/></th></button>
                </Link>
                </> :
                <>
                </>}
                {data.tulip ?
                <>
                <Link to='/flowerPage'  state={{ name: 'tulip' }}>
                <button className= 'gridbtn'><th><img src={tulip} width='100' height='100'/></th></button>
                </Link>
                </> :
                <>
                </>}
            </tr>
            </thead>
            </table>
            </div>
        );}
    else {
        return(<></>)
    }
}
export default BadgeDisplay;