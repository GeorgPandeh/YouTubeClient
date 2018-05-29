//AIzaSyD8QD4MgKacB2S2moqPhZ02zGKbvAya9f0
import React, { Component } from 'react';
import './App.css';
import Search from "./search/search";
import Video from "./video/video";
import Player from "./player/player";
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import moment from 'moment';
import Rating from "./Rating/Rating"
import ButtonNext from "./search/buttonNext"

class App extends Component {
  constructor(){
    super();
    this.state={
      data: [],
      maxResults: 4,
      searchValue: 0
    }
    this.searching = this.searching.bind(this);
   
  }
  componentDidMount(){
    fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyD8QD4MgKacB2S2moqPhZ02zGKbvAya9f0&q=Vevo&maxResults="+4)
    .then(response => response.json())
    .then(data => this.setState({data}))
    .catch(err =>console.log(err))
  }
  buttonNext = () => {
    console.log("TEST");
    let total = this.state.maxResults + 4;
    this.setState({maxResults: total});
    fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyD8QD4MgKacB2S2moqPhZ02zGKbvAya9f0&q=" + this.state.searchValue + "&maxResults=" + total)
    .then(response => response.json())
    .then(data => this.setState({data}))
    .catch(err =>console.log(err))
    
  }
 
  searching(s){
    if(s.target.value != 0){
      this.state.searchValue = s.target.value;
    }
    fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyD8QD4MgKacB2S2moqPhZ02zGKbvAya9f0&q="+this.state.searchValue+"&maxResults="+this.state.maxResults)
    .then(response => response.json())
    .then(data => this.setState({data}))
    .catch(err =>console.log(err))
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col col-8">
            <div className="row">
              <div className="col col-8">
                <Search search={this.searching}/>
                
              </div>
            </div>
          </div>
        </div>
        <div className="row">                         
            { 
              (()=>{
                if(this.state.data.length != 0){
                  return (
                    <Video video={this.state.data} />
                  )
                }
              })()
              
            }
            
        </div>
        { 
              (()=>{
                if(this.state.data.length != 0){
                  return (
                   <ButtonNext button={this.buttonNext}/>
                  )
                }
              })()
              
            }
        
      </div>
      
     
    );
  }
}

export default App;
