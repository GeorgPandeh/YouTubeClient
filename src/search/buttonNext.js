import React, {Component} from "react";

class ButtonNext extends Component{
    constructor(props){
        super(props);
        
    }
 
    render(){
        return(
            <div>
                <button className="buttonNext btn btn-lg active" aria-pressed="true" onClick={this.props.button}>
                    MoreVideos
                </button>
            </div>
        )
        
    }



}
export default ButtonNext;