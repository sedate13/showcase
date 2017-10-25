import React, {Component} from "react";
class FilterString extends Component{
    constructor (){
        super()
        this.state={
          unFilteredArray: ["first string", "second string", "third string"],
          userInput: " ",  
          filteredArray: [],
        }
    }
    
    handleChange(val){
        this.setState({userInput:val});
    }

    filterArray(userInput) {
        var unFilteredArray = this.state.unFilteredArray;
        var filteredArray = [];
    
        for ( var i = 0; i < unFilteredArray.length; i++ ) {
          if ( unFilteredArray[i].includes(userInput) ) {
            filteredArray.push(unFilteredArray[i]);
          }
        }
    
        this.setState({ filteredArray: filteredArray });
      }





    
    render(){
        return (

    <div className="puzzleBox filterStringPB"> 
        <h4> Filter String </h4>
        
        <span className="puzzleText">{this.state.unFilteredArray} </span>
       <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
       <button className="confirmationButton" onClick={ ()=> this.filterArray(this.state.userInput) } > </button>
       <span className="resultsBox filterStringRB">{this.state.filteredArray} </span>
        
        
         </div>


    


        )

    }
}
export default FilterString;