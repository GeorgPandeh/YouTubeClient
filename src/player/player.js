import React, {Component} from "react";

class Player extends Component{
   constructor(props){
       super(props);
   }
    render(){
        const video = this.props.location.query.video;        
        const styles = {
           width: "480px",
           height: "320px"
        }
        return(
           <div className="iframe-style">
               <iframe style={styles} allowfullscreen="allowfullscreen"
                    mozallowfullscreen="mozallowfullscreen" 
                    msallowfullscreen="msallowfullscreen" 
                    oallowfullscreen="oallowfullscreen" 
                    webkitallowfullscreen="webkitallowfullscreen" src={'https://www.youtube.com/embed/'+ video.id.videoId}>
                </iframe>
           </div>
        );
    }
}

export default Player;