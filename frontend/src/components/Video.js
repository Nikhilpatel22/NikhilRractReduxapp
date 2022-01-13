import { AgoraVideoPlayer } from "agora-rtc-react";
import { Grid } from "@material-ui/core";
import { useState, useEffect } from "react";

export default function Video(props) {
  const { users, tracks } = props;
  const [gridSpacing, setGridSpacing] = useState(12);

  useEffect(() => {
    setGridSpacing(Math.max(Math.floor(12 / (users.length + 1)), 4));
  }, [users, tracks]);

  return (
    <Grid container style={{ height: "100%",marginTop:"50px"}}>
      <Grid item xs={gridSpacing}>
        <AgoraVideoPlayer
          videoTrack={tracks[1]}
          style={{ height: "100%", width: "100%" ,padding:'20px 20px',marginTop:'30px'}}
        />
      </Grid>
      {users.length > 0 &&
        users.map((user) => {
          if (user.videoTrack) {
            return (
              <Grid item xs={gridSpacing}>
                <AgoraVideoPlayer
                  videoTrack={user.videoTrack}
                  key={user.uid}
                  style={{ height: "100%", width: "100%",marginTop:'30px',padding:'20px 20px'}}
                />
              </Grid>
            );
          } else return null;
        })}
    </Grid>
  );
}



// import { AgoraVideoPlayer } from "agora-rtc-react";
// import { Grid } from "@material-ui/core";
// import { useState, useEffect } from "react";

// export default function Video(props) {
//   const { users, tracks } = props;
//   const [gridSpacing, setGridSpacing] = useState(12);

//   useEffect(() => {
//     setGridSpacing(Math.max(Math.floor(12 / (users.length + 1)), 4));
//   }, [users, tracks]);

//   return (
//     <Grid container style={{ height: "100%" }}>
//       <Grid item xs={gridSpacing}>
//         <AgoraVideoPlayer
//           videoTrack={tracks[1]}
//           style={{ height: "100%", width: "100%" }}
//         />
//       </Grid>
//       {users.length > 0 &&
//         users.map((user) => {
//           if (user.videoTrack) {
//             return (
//               <Grid item xs={gridSpacing}>
//                 <AgoraVideoPlayer
//                   videoTrack={user.videoTrack}
//                   key={user.uid}
//                   style={{ height: "100%", width: "100%" }}
//                 />
//               </Grid>
//             );
//           } else return null;
//         })}
//     </Grid>
//   );
// }




// // import React,{useState,useEffect} from "react";
// // import { AgoraVideoPlayer } from "agora-rtc-react";
// // import { Grid } from "@material-ui/core";





// // export default function Video(props){
// //     const {users,tracks} = props;
// //     const [gridSpacing, setGridSpacing] = useState(12);
   
// //     useEffect(() => {
// //         setGridSpacing(Math.max(Math.floor(12 / (users.length + 1)), 4));
// //       }, [users, tracks]);

// //     return (
// //     <Grid container style={{height:'100%'}}>
// //          <Grid item xs={gridSpacing}>
// //              <AgoraVideoPlayer
// //               videoTrack={tracks[1]}
// //                 style={{height:'100%',width:'100%'}}
// //              />
// //          </Grid>
// //          {users.lenght > 0 && users.map((user)=>{
// //              if(user.videoTrack){
// //                  return ( <Grid item xs={gridSpacing}>
// //                      <AgoraVideoPlayer videoTrack={user.videoTrack}
// //                      key={user.uid}
// //                 style={{height:'100%',width:'100%'}}
// //              />
// //                  </Grid>
// //                  )
// //              }else return null;
// //          })
// //          }
// //     </Grid>
// //     )
// // }