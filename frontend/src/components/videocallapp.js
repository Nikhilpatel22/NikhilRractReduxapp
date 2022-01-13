import {useState} from 'react'
import { Button } from "@material-ui/core";
import Videocall from './VideoCall'
import logo from '../image/googleduologo.svg'
import './videocall.css';

function Videocallapp () {
    const [inCall,setInCall] = useState(false);
    return (
        <div>
            <div className='logo-header'><img src={logo}></img></div>
            {/* <div className="video-display"  style={{height:"300px",width:"500px",marginTop:'60px'}}> */}
        <div className="video-display"  style={{height:"400px",width:"700px",marginTop:'60px'}}>
            {inCall ? (<Videocall setInCall={setInCall} />) : (<Button variant='contained'
            color="primary"
            onClick={()=>setInCall(true)}>
                join call
            </Button>)}
        </div>
        </div>
    )
}

export default Videocallapp
