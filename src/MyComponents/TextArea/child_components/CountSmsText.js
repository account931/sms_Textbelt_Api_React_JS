import React, { Component } from 'react';
//import '../../css/Technical_Info.css';
//import LiftedTo_Component from '../LiftUpComponent/LiftedTo_Component';
//import error from '../../images/error.gif';
/*
import State_Array_List_Builder from '../Build_List_from_State_Array/State_Array_List_Builder';  //Component creates List from State Array
import LiftedFrom_Component from '../LiftUpComponent/LiftedFrom_Component';
*/
//import $ from 'jquery';



class CountSmsText extends Component {
	constructor(props) {
    super(props);
    this.state = {
		
    };
 
   
  }
  

 
  
  
  
  
  //RENDER ------------------------------------------------
  render() {
	
	  
      return (
		<div className="col-sm-12 col-xs-12"> 	 
          <div className="">
		  {/* Count: {160 - (this.props.smsText.length)}*/}
		  <span className="text-shadow"> Count: {this.props.smsText}</span>
          </div>
		</div>
	  
    );
  }
}

export default CountSmsText;
