import React, { Component } from 'react';
import $ from 'jquery';
import swal from 'sweetalert';
import '../../css/TextArea.css';
import {myValidate} from './functions_injected/Validate_RegExp'; //import function

import 'jquery-ui';
import 'jquery-ui/themes/base/autocomplete.css';  //according to folder structure in node_modules

import {AutocompleteFunction} from './functions_injected/Autocomplete'; //import my function
//import Autocomplete from 'react-autocomplete'; //???

import DisplayPhoneRegExpMessage from './child_components/DisplayPhoneRegExpMessage';
import CountSmsText from './child_components/CountSmsText';
import FlashMessage from './child_components/FlashMessage';


/*import error from '../../images/error.gif';
import axios from 'axios';
import CopyLayout from '../Copy/CopyLayout';
*/



class TextAreaX extends Component {
	constructor(props) {
    super(props);
	
	this.RegExp_Phone = /^[+][\d]{8,9}[0-9]+$/; //phone number regExp for world wide
	this.RegExp_Phone_UA = /^[+]380[\d]{2}[0-9]{7}$/; //phone number regExp for Ukraine //must have strict +380 & 9 digits ///^[+]380[\d]{1,4}[0-9]+$/;

	this.limitLatin = 120; //limit for chars in sms
	this.limitCyrill = 70; //limit for Ru chars in sms
	
	
    this.state = {
		phoneNumberChild : "+380",
		smsTextChild : "I am set manually in state in child <Textarea/>",
		phoneNumberErrorMessage : "error State message",
		isEnable: false, //true/false state for submit button
		limitForSmstext : this.limitLatin //limit for chats in sms text, set by ifCyrillicSmsCheck(), by default limit is 120
		//addressArray: [],  //this state will hold array with separ addresses from textarea input
		//coordinateArray: [],  //this state will hold array with ready coordinates returned by axios
    };
 
    // This binding is necessary to make `this` work in the callback
	this.run_This_Component_Functions_In_Queue = this.run_This_Component_Functions_In_Queue.bind(this); //runs all functions together
	this.getFormValue = this.getFormValue.bind(this);
	this.handlePhoneNumberKeyPress = this.handlePhoneNumberKeyPress.bind(this); //sends this.state.phoneNumberChild to parent <App/> to set it in parent's state {state.phoneNumber}
	this.handleTextAreaKeyPress = this.handleTextAreaKeyPress.bind(this); //sends this.state.smsTextChild to parent <App/> to set it in parent's state {state.smsText}
    this.resetFields = this.resetFields.bind(this);
	this.myValidate = myValidate.bind(this); //for injected from files function
	this.AutocompleteFunction = AutocompleteFunction.bind(this); //for binding this class/file functions
	this.ifCyrillicSmsCheck = this.ifCyrillicSmsCheck.bind(this);
	this.handleTextAreaPaste = this.handleTextAreaPaste.bind(this);
	
	
	/*this.runAjax = this.runAjax.bind(this);
	this.drawResult = this.drawResult.bind(this);
	this.htmlAnyResult = this.htmlAnyResult.bind(this);
	*/
	//this.liftFinalCoordsHandler = this.liftFinalCoordsHandler.bind(this);
  }
  
   componentDidMount(){
	   //this.AutocompleteFunction();
   }
   
   componentWillMount(){
	   
	   this.AutocompleteFunction();
   }
   
   

   
   //just runs all functions together
  // **************************************************************************************
  // **************************************************************************************
  //                                                                                     **
  run_This_Component_Functions_In_Queue() {
	  //var promises = [];  //array that will hold all promises
	  //var temp = [];     // temp array to store found coordinates before assigning it to this.state.coordinateArray
	  
	
	  
	  
	 
	  
	  //if texarea is empty, stop anything further, show/hide <Error/> component
	  if(this.getFormValue(/*promises,temp*/) === false)
	  {
		  setTimeout(function(){
		    $("html, body").animate({ scrollTop: 0 }, "slow"); //scroll the page to top(mostly for mobile convenience)
            $('.App').addClass('blur');  //blur the background
		    $(".error-parent").fadeIn(2500); //show error gif from <Error/>
		  }, 2000); // A delay of 1000ms
		
		   setTimeout(function(){
              $('.App').removeClass('blur'); //removes blur from background
			  $(".error-parent").fadeOut(1000); //hide error gif from <Error/>
           }, 4000); // A delay of 1000ms
		   
		   //display error text with function
		   this.htmlAnyResult("<h2 class='red' id='errorSign'>You submitted Empty Input</h2>");
		  
		  // calling parent method from child {this.props. + method}-> passing/uplifting array with found coords to App.js, method is described in Parent App.js
		   /*this.props.liftFinalCoordsHandler([]);*/ //sending empty array to reset this.state.arg1 in <App/>.js. Otherwise, when u found coordinates by texarea input and get the result and then solved to empty the input and click the "Geocode" button, the sign "Empty input" will appear, but table with prev coords result will stay

		  return false; //must have to stop futher Action
	  }
	  
	  
	  
       //Resetting state to Null ,calling parent method from child {this.props. + method}-> passing/uplifting alert info, described in Parent App.js
	   //this.props.techInfoHandler("");   
	   /* this.props.reset_techInfo_State("x"); */
		
	

		  
	  
	  
	  //run axios ajax in loop
	   /*this.runAjax(promises,temp); */  //must pass {promises,temp} as arg to make them visible in function runAjax()//!!!!!!! RETURN ME===============
	  //this.drawResult();  //assigned to Promise.all(promises)
	  
	  
	  
  }
  // **                                                                                  **
  // **                                                                                  **
  // **************************************************************************************
  // **************************************************************************************
  
  
  
  
  
  //gets the textarea value, split it to arraye and set to state
  // **************************************************************************************
  // **************************************************************************************
  //                                                                                     **
  getFormValue(/*promises,temp*/){
	 

		 
	  if ($("#smsTextInput").val().trim() === ""){
		 //Display error
		 //alert("empty");
		 swal("Stop!", "No sms text!", "error");
         return false;		 
	   }
	   
	    if ($("#cellNumberInput").val().trim()=== ""){
		 //Display error
		 swal("Stop!", "No cell number!", "error");
         return false;		 
	   }
	   
	   //if cell number is incorrect, uses RegExp. Additionally RegExp checking is used on cell number keypress (js/validate_regExp.js)
		if( !$("#cellNumberInput").val().match(this.RegExp_Phone)){
            swal("Stop!", "Phone number incorrect", "warning");
            return false;
		}
		
		//??????????
	   //check if "You submitted Empty Input" error sign exists and remove it if it does exists. it is done to prevent this sign to appear again if further input is not empty. Otherwise, new table coors result will appear, but error sign will remain on the screen
	   if ($("#errorSign").length){
           //alert('Does exist!');
	       $("#errorSign").remove();
       }



	   let textareaX = $("#smsTextInput").val(); //alert(textarea);
       textareaX = textareaX.trim();
	   let arrayX2 = textareaX.split('\n');
	   
	   //alert(arrayX2);  //reassigned to this.props.techInfoHandler
	   //instead of alert, it calls parent method from child {this.props. + method}-> passing/uplifting alert info to method techInfoHandler described in Parent App.js
	   /* this.props.techInfoHandler("arrayX2: " + arrayX2);  */
	   
	 
	   
	   //adding arraay with address to state---------!!!!!!!!!!!!! ERRORRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR=================================
	   let addressTempArray = this.state.addressArray; //getting state to array
	   /*addressTempArray.forEach(item => {  //this is var if u want to add existing array new values
           addressTempArray.push(arrayX2); 
       });
	   */
	   addressTempArray.unshift(arrayX2); //adds to array in this way: addressArray = [[arrayX2]]; //MEGA FIX, change push() to unshift()
	   //alert("9999cccc addressTempArray[0].length " + addressTempArray[0].length + " consists=> " +  addressTempArray[0] );
	   
	   
       this.setState({ //sets new value to state
           addressArray:addressTempArray/*[0]*/ // arrayX2 //addressTempArray[0]
       }); 
	   
	  
		   
	   
	   //instead of alert, it calls parent method from child {this.props. + method}-> passing/uplifting alert info to method techInfoHandler described in Parent App.js
	   //this.props.techInfoHandler("this.state.addressArray[0][0] => " + this.state.addressArray[0][0]); 

 
  }
  // **                                                                                  **
  // **                                                                                  **
  // **************************************************************************************
  // **************************************************************************************
   
   
   
   
  

   
   
   //Logik to Html the result with function
  // **************************************************************************************
  // **************************************************************************************
  //                                                                                     **
  htmlAnyResult(textX){
	  $("#resultFinal").stop().fadeOut("slow",function(){ 
            $(this).append( textX )   //use .append() instead of .html() to remove this <h2> error sign if texarea input is not empty
       }).fadeIn(11000);

       $("#resultFinal").css("border","1px solid red"); //  set  red  border  for  result  div 
  }
   // **                                                                                  **
   // **                                                                                  **
   // **************************************************************************************
   // **************************************************************************************
   
 


 
//===================================================================


  
  
  //On key press (on print)  in phone number input, take its value, set it to {this.state.phoneNumberChild} and send it to parent component's state in <App/>
  // **************************************************************************************
  // **************************************************************************************
  //                                                                                     **
   handlePhoneNumberKeyPress (event){
	   
	   
	   var inputPhone = event.target.value; //i.e == $("#cellNumberInput").val()
	   
	   if( inputPhone.match(/^\+380/)){  //if it is ua number use RegExp for ua numbers
	        var regExpp = this.RegExp_Phone_UA; 
		    var messageError = ' incomplete UA number';
		    var messageOK = "UA";
       } else {
		    var regExpp = this.RegExp_Phone; 
		    var messageError = ' incomplete EU number';
		    var messageOK = "EU";
	   }
	 
       this.myValidate(inputPhone, this.id, regExpp, 'sendButton', messageError, messageOK, event);   //{e} new must have arg, otherwise not visible
	   
	   // Remember that setState is asynchronous, so if you want to print the new state, you have to use the callback parameter
       this.setState({phoneNumberChild: event.target.value} //i.e == $("#cellNumberInput").val()
	     , () => {
          //sends {this.state.smsTextChild} to parent <App/>, send it as callback
	      this.props.liftPhoneNumberHandler(this.state.phoneNumberChild);
       });
	   
	   
   }
   
  
  //On key press (on print) in sms textarea, take texterea value, set it to {this.state.smsTextChild} and send it to parent component's state{state.smsText} in <App/>
  // **************************************************************************************
  // **************************************************************************************
  //                                                                                     **
   handleTextAreaKeyPress (event){
	   var smsText;
	   
	    // Handle the delete/backspace key
       /* if (event.keyCode === 8 || event.keyCode === 46) { alert('dd');
		   return;
	   } */
	   
	   //decide what limit to use for sms text input (based if text contain russ chars)
	   if(this.ifCyrillicSmsCheck()){
		    this.setState({limitForSmstext: this.limitCyrill});
			//this.limit = this.limitCyrill; //70;
		} else {
		    //this.limit = this.limitLatin; //120;
			this.setState({limitForSmstext: this.limitLatin});
		}
	    var texted = event.target.value; //textarea input

	   //Check if current sms textarea input is no bigger than limit(this.state.limitForSmstext)
	   if(texted.length >= this.state.limitForSmstext){
		    //return false;
		   
		   //flash message to show that limit is reached
		   $(".flash-message").clearQueue().fadeIn(100).fadeOut(900);
		   
		   smsText = event.target.value/* this.state.smsTextChild */.substring(0, this.state.limitForSmstext); //trim sms to limit length

		  
	   } else {
		   
		   smsText = event.target.value;
	   }
	   
	       // Update this.state.smsTextChild with new sms textarea input.
		   //Remember that setState is asynchronous, so if you want to print the new state, you have to use the callback parameter
           this.setState({smsTextChild: smsText /*event.target.value*/}
	           , () => {
               //sends {this.state.smsTextChild} to parent <App/>, send it as callback
	           this.props.liftSmsTextHandler(this.state.smsTextChild);
           });
	   
	   
	   
   }
   
   
      
   //on paste to sms textArea
  // **************************************************************************************
  // **************************************************************************************
  //                                                                                     **
   handleTextAreaPaste(e){
	   var smsText;
	   var pastedData = e.clipboardData.getData('Text'); //gets the paste text
	   e.preventDefault(); //must-have to work without errors
	   
	   //if current sms text in textarea or clipboard text contains russian
		if(this.ifCyrillicSmsCheck() || pastedData.match(/[а-яА-ЯЁё]/)){ //
			 this.setState({limitForSmstext: this.limitCyrill});
			//this.limit = this.limitCyrill; //70;
		} else {
		    //this.limit = this.limitLatin; //120;
			this.setState({limitForSmstext: this.limitLatin});
		}
		
		//Check if current sms textarea input is no bigger than limit(this.state.limitForSmstext)
	   if(pastedData.length >= this.state.limitForSmstext){
		   //flash message to show that limit is reached
		   $(".flash-message").clearQueue().fadeIn(100).fadeOut(700);
		   
		   smsText = pastedData.substring(0, this.state.limitForSmstext); //trim sms to limit length

		  
	   } else {
		   
		   smsText = pastedData;
	   }
	   
	       // Update this.state.smsTextChild with new sms textarea input.
		   //Remember that setState is asynchronous, so if you want to print the new state, you have to use the callback parameter
           this.setState({smsTextChild: smsText /*event.target.value*/}
	           , () => {
               //sends {this.state.smsTextChild} to parent <App/>, send it as callback
	           this.props.liftSmsTextHandler(this.state.smsTextChild);
           });
	   
		
		
   }
   
   
   
   
   //clear this State, ie. fields
  // **************************************************************************************
  // **************************************************************************************
  //                                                                                     **
   resetFields(){
	   this.setState({phoneNumberChild: ""}); //reset phone number
	   this.setState({smsTextChild: ""});     //reset sms text
	   this.setState({phoneNumberErrorMessage: ""}); //reset error message for phone number
	   //$('.phone-error').html("");
           
   }
	  
  //to check if sms text ru or engl 
  // **************************************************************************************
  // **************************************************************************************
  //                                                                                     ** 
   ifCyrillicSmsCheck() { 
       var ruText = /[а-яА-ЯЁё]/;	
	   if( $('#smsTextInput').val().match(ruText)){  //alert('ru');
	       return true;
	   } else {
		   return false;
	   
        }
	}   
	

  
  //RENDER ------------------------------------------------
  render() {
      //var liftFinalCoordsHandler  =   this.props.liftFinalCoordsHandler ; //for lifting state up to parent
	  
      return (
	   
	     <div>
		 {/*<CopyLayout/>*/}
	         <form className="textarea-my">
			     
				 <div className="form-group">
				     <DisplayPhoneRegExpMessage status={this.state.isEnable} phoneNumberErrorMessageX={this.state.phoneNumberErrorMessage}/> {/* Message if RegExp founds cell number OK/or NOT*/}
						 {/*<span className={this.state.isEnable ? 'err-mess-wrong phone-error' : 'err-mess-ok phone-error'} > {this.state.phoneNumberErrorMessage} </span> */ }  {/* Message if RegExp founds cell number OK/or NOT*/}
                     <input type="text" id="cellNumberInput"  placeholder="Cell number" className="form-control" value={this.state.phoneNumberChild} onChange={this.handlePhoneNumberKeyPress}/> 
				 </div>
			 
			     <div className="form-group">
                     <textarea id="smsTextInput" rows="8" cols="80" placeholder="Your sms..." className="form-control" value={this.state.smsTextChild}  onChange={this.handleTextAreaKeyPress} onPaste={this.handleTextAreaPaste}/> 
				 </div>
				 
				 <CountSmsText smsText={(this.state.limitForSmstext - this.state.smsTextChild.length)}/> {/* count chars left for smsText, i.e current limit - currentText length */}

				 <div className="form-group buttonsX">
                      <input type="button" className="btn btn-success btn-md el" value="Send" id="sendButton" onClick={this.run_This_Component_Functions_In_Queue} disabled = {this.state.isEnable} />
					  <input type="button" className="btn btn-primary btn-md el" value="Reset" id="" onClick={this.resetFields} />
				     {/*<input type="button"  value="Lift Coords" onClick={() => liftFinalCoordsHandler('Lifted_TextArea')}/> */}
				</div>  
             </form>
			 
		     <FlashMessage/>  {/* Left 0 chars */}
		</div>
	  
    );
  }
}

export default TextAreaX;
