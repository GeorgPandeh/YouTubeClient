import React, {Component} from "react";
class Rating extends Component{
    constructor(props){
        super(props);
        this.state = {
            dataStats:[]
        }

    }
    ComponentDidMount(){
        fetch("https://www.googleapis.com/youtube/v3/videos?key=AIzaSyD8QD4MgKacB2S2moqPhZ02zGKbvAya9f0&part=snippet,statistics&id=" + this.props.stats)
        .then(response =>response.json())
        .then(dataStats=>this.setState({dataStats}))
        .then(console.log(this.state.dataStats))
        .catch(err =>console.log(err))
      }
    render(){
        return(
            <div>{console.log(this.state.dataStats)}{console.log(this.props.stats)}</div>
        )
    }
}
export default Rating