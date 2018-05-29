import React, { Component } from 'react';
class Search extends Component {
    constructor(props){
        super(props);
        this.props.search.bind(this);
      }
    
    render() {
    return (
     <input className="search" type="text" onChange={this.props.search}/>
    );
  }
}

export default Search;
