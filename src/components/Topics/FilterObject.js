import React, {Component} from "react";
class FilterObject extends Component{
    constructor(){
        super();
        this.state ={
            unFilteredArray:[{blah: "random"}, {secondBlah: "moreRandom"}],
            userInput: '',
            filteredArray: []
        }
    }
    handleChange(val){
        this.setState({userInput:val});
    }
    filterArray(prop){ var unFilteredArray = this.state.unFilteredArray;
        var filteredArray = [];
        
        for ( var i = 0; i < unFilteredArray.length; i++ ) {
          if ( unFilteredArray[i].hasOwnProperty(prop) ) {
            filteredArray.push(unFilteredArray[i]);
          }
        }
        this.setState ({filteredArray: filteredArray});
    }

    
    render(){
        return (
            <div className="puzzleBox filterObjectPB">
              <h4> Filter Object </h4>
              <span className="puzzleText"> Unfiltered{ JSON.stringify(this.state.unFilteredArray, null, 10)} </span>
              <input className="inputLine"onChange={ (e) => this.handleChange(e.target.value) }></input>
              <button className="confirmationButton" onClick ={ ()=> this.filterArray(this.state.userInput) }> Filter </button>
              
              <span className="resultsBox filterObjectRB"> Filtered{ JSON.stringify(this.state.filteredArray, null, 10)} </span>
            </div>
          )
        }
      }

    

export default FilterObject;