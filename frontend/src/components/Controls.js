import { useState } from "react";
import { useClient } from "../setting";
import { Grid, Button } from "@material-ui/core";
//import MicIcon from "@material-ui/icons/Mic";
//import MicOffIcon from "@material-ui/icons/MicOff";
//import VideocamIcon from "@material-ui/icons/Videocam";
//import VideocamOffIcon from "@material-ui/icons/VideocamOff";
//import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import MicIcon from '@mui/icons-material/Mic';
import MicoffIcon from '@mui/icons-material/MicOff'
import VideocamIcon from '@mui/icons-material/Videocam';
import VideocamoffIcon from '@mui/icons-material/VideocamOff';


export default function Controls(props) {
  const client = useClient();
  const { tracks, setStart, setInCall } = props;
  const [trackState, setTrackState] = useState({ video: true, audio: true });

  const mute = async (type) => {
    if (type === "audio") {
      await tracks[0].setEnabled(!trackState.audio);
      setTrackState((ps) => {
        return { ...ps, audio: !ps.audio };
      });
    } else if (type === "video") {
      await tracks[1].setEnabled(!trackState.video);
      setTrackState((ps) => {
        return { ...ps, video: !ps.video };
      });
    }
  };

  const leaveChannel = async () => {
    await client.leave();
    client.removeAllListeners();
    tracks[0].close();
    tracks[1].close();
    setStart(false);
    setInCall(false);
  };

  return (
    <Grid container spacing={2} alignItems="center">
     <div className="button-back">
      <Grid item>
        <button
          
          color={trackState.audio ? "black" : "black"}
          onClick={() => mute("audio")}
        >
          {trackState.audio ? <MicIcon /> : <MicoffIcon />}
        </button>
      </Grid>
      <Grid item>
        <button
          color={trackState.video ? "black" : "black"}
          onClick={() => mute("video")}
        >
          {trackState.video ? <VideocamIcon /> : <VideocamoffIcon />}
        </button>
      </Grid>
      <Grid item>
        <button
          color="black"
          onClick={() => leaveChannel()}
        >
          Leave
          <ExitToAppIcon />
        </button>
      </Grid>
      </div>
    </Grid>
  );
}


// import React,{useState} from "react";
// import {useClient} from '../setting';
// import { Grid } from "@material-ui/core";
// import { Button } from "@material-ui/core";
// import MicIcon from '@mui/icons-material/Mic';
// import MicoffIcon from '@mui/icons-material/MicOff'
// import VideocamIcon from '@mui/icons-material/Videocam';
// import VideocamoffIcon from '@mui/icons-material/VideocamOff';
// import ExitToAppIcon from '@mui/icons-material/ExitToApp';


// export default function Controls(props){
//     const client = useClient();
//     const { tracks ,setStart,setInCall} = props;
//     const [trackState,setTracksState] = useState({video:true,audio:true});

//     const mute = async (type) =>{
//          if(type === "audio"){
//              await tracks[0].setEnabled(!trackState.audio);
//              setTracksState((ps)=>{
//                  return {...ps,audio:!ps.audio};
//              })
//          }
//          else if(type === "video"){
//             await tracks[1].setEnabled(!trackState.video);
//             setTracksState((ps)=>{
//                 return {...ps,video:!ps.video};
//             })
//         }
//     }


//     const leaveChannel = async () =>{
//         await client.leave();
//         client.removeAllListeners();
//         tracks[0].close();
//         tracks[1].close();
//         setStart(false);
//         setInCall(false);
//     }
//     return(
//        <Grid container spacing={2} alignItems="center">
//             <Grid item>
//                 <Button variant="contained" 
//                 color={trackState.audio ? "primary" : "secondary"}
//             onClick={()=> mute("audio")}>
//             {trackState.audio ? <MicIcon /> : <MicoffIcon />}</Button></Grid>
//             <Grid item>
//                 <Button variant="contained"
//                 color={trackState.video ? "primary" : "secondary"}
//                 onClick={()=> mute("video")}>
//             {trackState.video ? <VideocamIcon/> : <VideocamoffIcon/>}</Button></Grid>
//             <Grid item>
//             <Button 
//             variant="contained" 
//             color="default"
//             onClick={()=> leaveChannel()}
//             >
//             Leave
//             <ExitToAppIcon/>
//             </Button></Grid>
//        </Grid>
//     )
// }