import React, { Component } from 'react';
import "../App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import moment from 'moment';
import Rating from '../Rating/Rating';
class Video extends Component {
    constructor(props){
        super(props); 
    }
render() {
    const image = {
        width: "262.5px",
        height: "146.875px"
    }
    
    console.log(this.props.video);
    let title
    function limiting(title){
        let split = title.split(" ", 7);
        let join = split.join(' ');
        return join+"...";
    }
    const videoList = this.props.video.items;
    let videos = videoList.map( (video,index) => {
    console.log(video);
    let date = new Date(video.snippet.publishedAt);
        return(
            <div key={index} className="col col-3">
            
                <img style={image} className="image-thumbnails" src={video.snippet.thumbnails.high.url}/>
                <div>
                    <h5>
                        <Link className="text-dark" to={{pathname: `/player`,query:{video}}}>
                            <div className="thumbnails" data-title={video.snippet.title}>
                                {
                                    limiting(video.snippet.title)
                                }
                            </div>
                        </Link>
                    </h5>
                    <div>{video.snippet.channelTitle}</div>
                    <div>
                        <Rating stats={video.id.videoId}/>
                        <span className="spanDot"></span>
                        {
                          moment(new Date(video.snippet.publishedAt), "YYYYMMDD").fromNow()
                        }
                    </div>
                </div>
            </div>
        )
    })

return (
        <div className="row">
            {videos}
        </div>
    );
  }
}

export default Video;
