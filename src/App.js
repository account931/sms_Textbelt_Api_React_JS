import React, { Component } from 'react';
import logo from './logo.svg';
//import logo from './images/logox.jpg';
import './css/App.css';
import TextAreaX from './MyComponents/TextArea/TextArea';
import ErrorLayout from './MyComponents/Error/ErrorLayout';  //display error gif
import TechnicalInfo from './MyComponents/TechnicalInfoComponent/TechnicalInfo';  //displays info instead of alert
import TopSectionButtons from './MyComponents/TopSectionButtons/TopSectionButtons';  //displays buttons (change theme, test mode)



/*import Header from './MyComponents/Header/Header';
import ButtonsLayout from './MyComponents/Buttons/ButtonsLayout';
import Instructions from './MyComponents/Instructions/Instructions';
import Results from './MyComponents/Result/Results';
import TextAreaX from './MyComponents/TextArea/TextArea';
import LiftedFrom_Component from './MyComponents/LiftUpComponent/LiftedFrom_Component';


*/


class App extends Component {
    constructor(props) {
        super(props);
		
		this.state = {
			phoneNumber : "Phone number: I am set manually in state in parent <App/>", //this state is to display in <TechnicalInfo/> only, when sms is sent, value is taken from <TerxAreaX/> state => phoneNumberChild
			smsText : "Sms text:I am set manually in state in parent <App/>",          //this state is to display in <TechnicalInfo/> only, when sms is sent, value is taken from <TerxAreaX/> state => smsTextChild
		    ifTestMode : true, //true by default, it is uplifted from <TopSectionButtons/> and passed to <TerxAreaX/>, IT IS USED IN <TerxAreaX/> when sendinf Sms //used to switch between test/prod mode, when in test mode, Api uses on server side TextBelt test key {"textbelt_test"}
			techInfo:['some'], //just tech info, instead of alert
			
			//arg1: [],  //this state will hold lifted up var(onClick) or  array with coordinates
		    //finalCoords:[], //not used???
			//techInfoState:[], //state to store alert info
			//baseState : []
        };
	   
	    //var liftPhoneNumberHandler = this.liftPhoneNumberHandler.bind(this); //gets state (phone number) from child <Textarea/> and sets as state here, in this class
	    //var liftSmsTextHandler = this.liftSmsTextHandler.bind(this); //gets state (sms text) from child <Textarea/> and sets as state here, in this class
	   	//var liftTestModeStatustHandler = this.liftTestModeStatustHandler.bind(this); //gets state (if Test button is ON) from child <TopSectionButtons/> and sets as state here, in this class

	   
	   /*
        var handleToUpdate = this.handleToUpdate.bind(this);  //for catching lifted state from LiftedFrom_Component
		var liftFinalCoordsHandler = this.liftFinalCoordsHandler.bind(this);  //for catching lifted state from TextArea Comp
		var clearStateHandler = this.clearStateHandler.bind(this);  //cathes lifted state from Buttons layout - //for lifting and clearing the state up in the parent
		var techInfoHandler = this.techInfoHandler.bind(this);  //for lifting techInfo(instead of alerts)the state up in the parent
        var reset_techInfo_State = this.reset_techInfo_State.bind(this);  //   
        */
        // preserve the initial state in a new object
        this.baseState = []; //this.state.arg1; 		
    } //end constructor

	/*
	componentWillMount() {
        this.initialState = this.state
    } */
	
	
	
	
	//method for catching lifted state from TextArea.js Component, triggered manually by {this.props.liftPhoneNumberHandler(this.state.phoneNumberChild);} in TerxArea.js
    liftPhoneNumberHandler(somePhoneNumber){
           this.setState({phoneNumber:somePhoneNumber});
    }
	
	
	//method for catching lifted state from TextArea.js Component, triggered manually by { this.props.liftSmsTextHandler(this.state.smsTextChild);} in TerxArea.js
    liftSmsTextHandler(someSmsText){
            //alert('TextArea value data lifted from Child(TextArea.js) to Parent(App.js): ' + someArgCoords);
			//instead of alert, it calls parent method from child {this.props. + method}-> passing/uplifting alert info to method techInfoHandler described in Parent App.js
	       //this.techInfoHandler('TextArea value data lifted from Child(TextArea.js) to Parent(App.js): ' + someArgCoords); 
			
           this.setState({smsText:someSmsText});
    }
	
	
	
	//method for catching lifted state from TopSectionButtons.js Component, triggered manually by {this.props.liftTestModeStatustHandler(this.state.ifTestMode);} in TopSectionButtons.js
    liftTestModeStatustHandler(someTestModeBoolValue){
           this.setState({ifTestMode:someTestModeBoolValue});
    }
	
	//method for catching lifted state from TextArea.js (from  functions_injected/sendSmsMessage.js), triggered manually by {liftTechAlertsInfoHandler(someAlert);} in sendSmsMessage.js
	liftTechAlertsInfoHandler(someNewAlertValue){
		this.setState(prevState => ({
            techInfo: [...prevState.techInfo, someNewAlertValue]
        }));
	}
	
	
	/*
	//methodfor catching lifted state from LiftedFrom_Component, triggerd onClick
    handleToUpdate(someArg){
            //alert('We pass argument from Child to Parent (now we are in <App/>): ' + someArg);
            this.setState({arg1:someArg});
    }
	
	
	//method for catching lifted state from TextArea.js Component, triggered manually by {this.props.liftFinalCoordsHandler(this.state.coordinateArray[0])} in TerxArea.js
    liftFinalCoordsHandler(someArgCoords){
            //alert('TextArea value data lifted from Child(TextArea.js) to Parent(App.js): ' + someArgCoords);
			//instead of alert, it calls parent method from child {this.props. + method}-> passing/uplifting alert info to method techInfoHandler described in Parent App.js
	       //this.techInfoHandler('TextArea value data lifted from Child(TextArea.js) to Parent(App.js): ' + someArgCoords); 
			
           this.setState({arg1:someArgCoords});
    }
	
	//WORKING!!!!!!! - clearing/reseting state arg1 onClick button="Clear"
	clearStateHandler(vv){
            //alert('Cleared' + vv);
            this.setState({arg1:''});
    }
	
	
	//for lifting techInfo(instead of alerts)the state up in the parent
	techInfoHandler(techAlert){
		const alertTempArray = this.state.techInfoState; //getting state to temp array
		alertTempArray.push(techAlert); //adds to array in this way: addressArray = [[arrayX2]];
		this.setState({ //sets new value to state
           techInfoState: alertTempArray
       }); 
	}
	

	
	//for clearing state techInfoState on every Button click
	reset_techInfo_State(some){
		//this.setState(this.initialState);
		//alert("resetting");
		//alert("this.baseState-> " + this.baseState );
		this.setState({ //sets new value to state //setState is an async function
           techInfoState: this.state.baseState
       }); 
	}
*/
	
	
  render() {
	  var liftPhoneNumberHandler  =   this.liftPhoneNumberHandler;          //for catching lifted state from TextArea.js Component
	  var liftSmsTextHandler  =   this.liftSmsTextHandler;                  //for catching lifted state from TextArea.js Component
	  var liftTestModeStatustHandler  =   this.liftTestModeStatustHandler; //for catching lifted state from TopSectionButtons.js Component
	  var liftTechAlertsInfoHandler = this.liftTechAlertsInfoHandler;      //for catching lifted state from TextArea.js (from  functions_injected/sendSmsMessage.js)
	  
	 /* var handleToUpdate =  this.handleToUpdate; //for catching lifted state from LiftedFrom_Component
	  var liftFinalCoordsHandler  =   this.liftFinalCoordsHandler; //for catching lifted state from TextArea.js Component
	  var clearStateHandler =  this.clearStateHandler ; //for lifting and clearing the state up in the parent
      var techInfoHandler = this.techInfoHandler;  //for lifting techInfo(instead of alerts)the state up in the parent
	  var reset_techInfo_State = this.reset_techInfo_State;  
	  */
    return (
	 
	    <div className="wrapper grey">
            <div className="container"> {/*<!-- container-full -->*/}
			
	            <div className="row row1">
				
                    <div className="col-sm-12 col-xs-12 divX App change-head-style"> 
		                <h4 className="header-x shadow-xx"> {this.props.name} {/* props are set in index.js */} <i className="fa fa-envelope-o" ></i>
						    <img src={logo}  className="react-logo-static" alt="logo" />
						</h4>
			            
						<TextAreaX ifTestModeData={this.state.ifTestMode } liftPhoneNumberHandler = {liftPhoneNumberHandler.bind(this)}  liftSmsTextHandler = {liftSmsTextHandler.bind(this)} liftTechAlertsInfoHandler = {liftTechAlertsInfoHandler.bind(this)} />
		            </div>
					
				   <TechnicalInfo phoneNumberData={this.state.phoneNumber}  smsTextData={this.state.smsText} ifTestModeData={this.state.ifTestMode} techInfoDate={this.state.techInfo} /> { /* displays info instead of alert */ }

					
			    </div>
			</div>
			
			<ErrorLayout/> { /* error gif animation component */ }  
			<TopSectionButtons liftTestModeStatustHandler = {liftTestModeStatustHandler.bind(this)} /> { /* displays buttons (change theme, test mode button)*/ } 
		</div>
	
	
	  
    );
  }
}

export default App;
