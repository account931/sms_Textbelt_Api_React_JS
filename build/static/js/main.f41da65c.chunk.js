(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return scrollResults});var jquery__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),jquery__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);function scrollResults(divName,parent){if("undefined"===typeof parent)jquery__WEBPACK_IMPORTED_MODULE_0___default()("html, body").animate({scrollTop:jquery__WEBPACK_IMPORTED_MODULE_0___default()(divName).offset().top},"slow");else{var stringX="$(divName)"+parent+"offset().top";jquery__WEBPACK_IMPORTED_MODULE_0___default()("html, body").animate({scrollTop:eval(stringX)},"slow")}}},14:function(e,t,a){e.exports=/*a.p+*/"static/media/loaddd.9209e391.gif"},31:function(e,t,a){e.exports=/*a.p+*/"static/media/logo.5d5d9eef.svg"},32:function(e,t,a){e.exports=/*a.p+*/"static/media/loaddd_PREV.584b607f.gif"},33:function(e,t,a){e.exports=/*a.p+*/"static/media/error.52edd8e9.gif"},35:function(e,t,a){e.exports=a(77)},40:function(e,t,a){},42:function(e,t,a){},63:function(e,t,a){},69:function(e,t,a){},71:function(e,t,a){},73:function(e,t,a){},75:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),r=a(30),c=a.n(r),i=(a(40),a(34)),l=a(3),o=a(4),m=a(6),p=a(5),u=a(7),d=a(31),h=a.n(d),b=(a(42),a(10)),f=a(2),g=a(1),v=a.n(g),y=a(11),x=a.n(y);a(45),a(63);a(16),a(26),a(66);function S(e){v()(".ajax-loader").fadeOut(5e3),e.setState({ifUserClickedSendSms:!0}),window.screen.width<=640&&e.scrollResults(".resultScroll"),v()("#sendButton").prop("disabled",!1),setTimeout(function(){v()(".child-div-sms").css("opacity","0")},3e3)}var T=a(13),w=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"col-sm-12 col-xs-12 err-message-div shadow-xx"},n.a.createElement("span",{className:this.props.status?"err-mess-wrong phone-error":"err-mess-ok phone-error"}," ",this.props.phoneNumberErrorMessageX," "),"  ")}}]),t}(s.Component),_=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"col-sm-12 col-xs-12"},n.a.createElement("div",{className:""},n.a.createElement("span",{className:"text-shadow"}," Count: ",this.props.smsText)))}}]),t}(s.Component),j=(a(69),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"col-sm-12 col-xs-12 flash-message"},"Left ",n.a.createElement("br",null)," 0 chars")}}]),t}(s.Component)),N=a(14),E=a.n(N),O=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"ajax-loader col-sm-12 col-xs-12"},n.a.createElement("img",{src:E.a,className:"error-img",alt:"logo"}),"  ")}}]),t}(s.Component),A=a(12),C=a(32),k=a.n(C),P=function(e){function t(e){var a,s;return Object(l.a)(this,t),(s=Object(m.a)(this,Object(p.a)(t).call(this,e))).state=(a={deliveryStatus:"here will be status",textIfTestModeOn:s.props.ifTestModeData2},Object(A.a)(a,"deliveryStatus","some status"),Object(A.a)(a,"deliveredOK",!1),a),s.checkSmsDeliveryStatus=s.checkSmsDeliveryStatus.bind(Object(f.a)(Object(f.a)(s))),s.runSomeActionsOnAjaxResult=s.runSomeActionsOnAjaxResult.bind(Object(f.a)(Object(f.a)(s))),s.scrollResults=T.a.bind(Object(f.a)(Object(f.a)(s))),s}return Object(u.a)(t,e),Object(o.a)(t,[{key:"checkSmsDeliveryStatus",value:function(){v()(".child-div").css("opacity","1"),v()(".ajax-loader").show();var e="";e=window.location.href.match(/localhost/)?"http://localhost/sms_Textbelt_Api_React_JS/sms-api-react/Server_Side/ajax_script/getSmsDeliveryStatus.php":"../Server_Side/ajax_script/getSmsDeliveryStatus.php",v.a.ajax({url:e,type:"GET",dataType:"JSON",crossDomain:!0,data:{serverTextID:this.props.answer.textId},success:function(e){console.log(e),e.status?(this.setState({deliveryStatus:e.status}),"DELIVERED"==e.status?this.setState({deliveredOK:!0}):this.setState({deliveredOK:!1})):this.setState({deliveryStatus:"error happened, may be a test message???"}),this.runSomeActionsOnAjaxResult()}.bind(this),error:function(e){alert("Check Delivery  failed"),this.setState({deliveryStatus:"Check delivery error"}),this.runSomeActionsOnAjaxResult()}.bind(this)})}},{key:"runSomeActionsOnAjaxResult",value:function(){v()(".ajax-loader").fadeOut(3e3),this.props.handleToUpdateIfDeliverClicked(!0),this.scrollResults(".btn-scroll"),setTimeout(function(){v()(".child-div").css("opacity","0")},3e3)}},{key:"render",value:function(){var e=this.props.answer;Object.keys(e).map(function(t,a){return n.a.createElement("span",{key:a}," #",t," => ",e[t]," \xa0\xa0 ")});return n.a.createElement("div",{className:"col-sm-12 col-xs-12 resultScroll"},n.a.createElement("div",{className:"col-sm-3 col-xs-0"}),"  ",n.a.createElement("div",{className:"col-sm-6 col-xs-12"+(this.props.showHideDivData?" show-div":" hide-div")}," "," ",n.a.createElement("div",{className:"col-sm-12 col-xs-12  parent-div-sms"},n.a.createElement("div",{className:"col-sm-12 col-xs-12 textbelt-answer child-div-sms"},n.a.createElement("p",null,"This should be over the parent"),n.a.createElement("img",{src:k.a,className:"delivery-loader-sms",alt:"logo"})),n.a.createElement("div",{className:"col-sm-12 col-xs-12 textbelt-answer"+(this.props.answer.success?" sms-sent":" sms-not-sent")}," ",n.a.createElement("p",null,this.props.answer.clientMessage),n.a.createElement("p",null," Api Success: ",this.props.answer.success.toString())," ",n.a.createElement("p",null," Api error: ",this.props.answer.errorFromApi),"  ",n.a.createElement("p",null," Left: ",this.props.answer.quotaRemaining," quota"),n.a.createElement("p",null," if Test Sms: ",this.props.ifTestModeData2.toString()," ")))," ",n.a.createElement("div",{className:"col-sm-12 col-xs-12 btn-scroll"+(this.props.answer.success?" show-delivery-button":" hide-delivery-button")},n.a.createElement("input",{type:"button",className:"btn btn-success btn-md el",value:"Check Delivery",onClick:this.checkSmsDeliveryStatus})),n.a.createElement("div",{id:"delivText",className:"col-sm-12 col-xs-12 textbelt-answer del-st parent-div"+(this.props.answer.success&&this.props.ifUserClickedCheckDeliveryData?" show-div":" hide-div")+(this.state.deliveredOK?" deliv-ok":" deliv-fail")},n.a.createElement("div",{className:"child-div"},n.a.createElement("p",null,"This should be over the parent"),n.a.createElement("img",{src:E.a,className:"delivery-loader",alt:"logo"})),n.a.createElement("p",null,n.a.createElement("i",{className:"fa fa-envelope-o fa-2x"})),n.a.createElement("p",null,this.state.deliveryStatus))))}}]),t}(s.Component),R=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).RegExp_Phone=/^[+][\d]{8,9}[0-9]+$/,a.RegExp_Phone_UA=/^[+]380[\d]{2}[0-9]{7}$/,a.limitLatin=120,a.limitCyrill=70,a.state={phoneNumberChild:"+380",smsTextChild:"",phoneNumberErrorMessage:"phone number message",isEnable:!1,limitForSmstext:a.limitLatin,ifTestMode:a.props.ifTestModeData,answerFromTextbelt:{success:!1,textId:"",quotaRemaining:"",clientMessage:"",errorFromApi:""},ifUserClickedSendSms:!1,ifUserClickedCheckDelivery:!1},a.run_This_Component_Functions_In_Queue=a.run_This_Component_Functions_In_Queue.bind(Object(f.a)(Object(f.a)(a))),a.getFormValue=a.getFormValue.bind(Object(f.a)(Object(f.a)(a))),a.handlePhoneNumberKeyPress=a.handlePhoneNumberKeyPress.bind(Object(f.a)(Object(f.a)(a))),a.handleTextAreaKeyPress=a.handleTextAreaKeyPress.bind(Object(f.a)(Object(f.a)(a))),a.resetFields=a.resetFields.bind(Object(f.a)(Object(f.a)(a))),a.myValidate=function(e,t,a,s,n,r,c){if(""===e)return this.setState({phoneNumberErrorMessage:"*"}),this.setState({isEnable:!1}),v()("#"+s).html("OK"),!1;e.match(a)?(this.setState({phoneNumberErrorMessage:"correct "+r+" phone"}),this.setState({isEnable:!1}),v()("#"+s).html("OK")):(this.setState({phoneNumberErrorMessage:n}),this.setState({isEnable:!0}),v()("#"+s).html("Disabled"))}.bind(Object(f.a)(Object(f.a)(a))),a.AutocompleteFunction=function(){x()("Phone numbers autocomplete is ON","---","warning");var e=this;v()("#cellNumberInput").autocomplete({minLength:1,source:[{label:"+420",value:"Czech"},{label:"+45",value:"Denmark"},{label:"+49",value:"Germany"},{label:"+972",value:"Israel"},{label:"+48",value:"Poland"},{label:"+46",value:"Sweden"},{label:"+38",value:"Ukraine"},{label:"+44",value:"United Kingdom"}],select:function(t,a){!function(e,t,a){a.setState({phoneNumberChild:t.item.label}),a.handlePhoneNumberKeyPress(e),e.preventDefault()}(t,a,e)}}).autocomplete("instance")._renderItem=function(e,t){return v()("<li>").append("<div>"+t.label+" => "+t.value+"</div>").appendTo(e)}}.bind(Object(f.a)(Object(f.a)(a))),a.ifCyrillicSmsCheck=a.ifCyrillicSmsCheck.bind(Object(f.a)(Object(f.a)(a))),a.handleTextAreaPaste=a.handleTextAreaPaste.bind(Object(f.a)(Object(f.a)(a))),a.sendSmsMessage=function(){v()("#sendButton").prop("disabled",!0),this.setState({ifUserClickedCheckDelivery:!1}),v()(".child-div-sms").css("opacity","1");var e={serverPhone:this.state.phoneNumberChild,serverSms:this.state.smsTextChild,serverIfTestStatus:this.props.ifTestModeData};v()(".ajax-loader").show();var t="";t=window.location.href.match(/localhost/)?"http://localhost/Sms_React_FIX/sms_Textbelt_Api_React_JS-OLD/Server_Side/ajax_script/sendSms.php":"../Server_Side/ajax_script/sendSms.php",v.a.ajax({url:t,type:"POST",dataType:"JSON",crossDomain:!0,data:e,success:function(e){console.log(e),this.props.liftTechAlertsInfoHandler("OK -> Variant_2\nVariant_2 "+e.cellar+"\n"+JSON.stringify(e)),e.textBeltResponse?(this.props.liftTechAlertsInfoHandler("textBeltResponse "+e.textBeltResponse.success),!0===e.textBeltResponse.success?this.setState(function(t){return{answerFromTextbelt:Object(b.a)({},t.answerFromTextbelt,{success:e.textBeltResponse.success,textId:e.textBeltResponse.textId,quotaRemaining:e.textBeltResponse.quotaRemaining,clientMessage:"Sms sent successfully",errorFromApi:e.textBeltResponse.errorX})}}):this.setState(function(t){return{answerFromTextbelt:Object(b.a)({},t.answerFromTextbelt,{success:e.textBeltResponse.success,textId:"",quotaRemaining:"",clientMessage:"Sms  not sent successfully",errorFromApi:e.textBeltResponse.error})}})):this.setState(function(t){return{answerFromTextbelt:Object(b.a)({},t.answerFromTextbelt,{success:!1,textId:"",quotaRemaining:"",clientMessage:"Sms message was not send",errorFromApi:e.errorX})}}),S(this)}.bind(this),error:function(e){alert("Variant_2 failed"),this.props.liftTechAlertsInfoHandler("Variant_2 failed"),v()(".ajax-loader").fadeOut(5e3),this.setState(function(e){return{answerFromTextbelt:Object(b.a)({},e.answerFromTextbelt,{success:!1,textId:"",quotaRemaining:"",clientMessage:"Sms message crashed"})}}),S(this)}.bind(this)})}.bind(Object(f.a)(Object(f.a)(a))),a.scrollResults=T.a.bind(Object(f.a)(Object(f.a)(a))),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.AutocompleteFunction()}},{key:"componentWillMount",value:function(){}},{key:"handleToUpdateIfDeliverClicked",value:function(e){this.setState({ifUserClickedCheckDelivery:e})}},{key:"run_This_Component_Functions_In_Queue",value:function(){v()("#sendButton").is(":disabled")&&x()("Stop!","Button disabled, incorrect phone number"),!1===this.getFormValue()?(setTimeout(function(){v()("html, body").animate({scrollTop:0},"slow"),v()(".App").addClass("blur"),v()(".error-parent").fadeIn(1500)},2e3),setTimeout(function(){v()(".App").removeClass("blur"),v()(".error-parent").fadeOut(1e3)},3e3)):!0===this.getFormValue()&&this.sendSmsMessage()}},{key:"getFormValue",value:function(){if(""===v()("#smsTextInput").val().trim())return x()("Stop!","No sms text!","error"),!1;if(""===v()("#cellNumberInput").val().trim())return x()("Stop!","No cell number!","error"),!1;if(v()("#cellNumberInput").val().match(/^\+380/))var e=this.RegExp_Phone_UA;else e=this.RegExp_Phone;return!!v()("#cellNumberInput").val().match(e)||(x()("Stop!","Phone number incorrect","warning"),!1)}},{key:"handlePhoneNumberKeyPress",value:function(e){var t=this,a=e.target.value;if(a.match(/^\+3/))var s=this.RegExp_Phone_UA,n=" incomplete UA number",r="UA";else s=this.RegExp_Phone,n=" incomplete EU number",r="EU";this.myValidate(a,this.id,s,"sendButton",n,r,e),this.setState({phoneNumberChild:e.target.value},function(){t.props.liftPhoneNumberHandler(t.state.phoneNumberChild)})}},{key:"handleTextAreaKeyPress",value:function(e){var t,a=this;this.ifCyrillicSmsCheck()?this.setState({limitForSmstext:this.limitCyrill}):this.setState({limitForSmstext:this.limitLatin}),e.target.value.length>=this.state.limitForSmstext?(v()(".flash-message").clearQueue().fadeIn(100).fadeOut(900),t=e.target.value.substring(0,this.state.limitForSmstext)):t=e.target.value,this.setState({smsTextChild:t},function(){a.props.liftSmsTextHandler(a.state.smsTextChild)})}},{key:"handleTextAreaPaste",value:function(e){var t,a=this,s=e.clipboardData.getData("Text");e.preventDefault(),this.ifCyrillicSmsCheck()||s.match(/[\u0430-\u044f\u0410-\u042f\u0401\u0451]/)?this.setState({limitForSmstext:this.limitCyrill}):this.setState({limitForSmstext:this.limitLatin}),s.length>=this.state.limitForSmstext?(v()(".flash-message").clearQueue().fadeIn(100).fadeOut(700),t=s.substring(0,this.state.limitForSmstext)):t=s,this.setState({smsTextChild:t},function(){a.props.liftSmsTextHandler(a.state.smsTextChild)})}},{key:"resetFields",value:function(){this.setState({phoneNumberChild:""}),this.setState({smsTextChild:""}),this.setState({phoneNumberErrorMessage:""}),this.setState({ifUserClickedSendSms:!1}),this.setState(function(e){return{answerFromTextbelt:Object(b.a)({},e.answerFromTextbelt,{success:!1,textId:"",quotaRemaining:"",clientMessage:"",errorFromApi:""})}})}},{key:"ifCyrillicSmsCheck",value:function(){return!!v()("#smsTextInput").val().match(/[\u0430-\u044f\u0410-\u042f\u0401\u0451]/)}},{key:"render",value:function(){var e=this.handleToUpdateIfDeliverClicked;return n.a.createElement("div",null,n.a.createElement("form",{className:"textarea-my"},n.a.createElement("div",{className:"form-group"},n.a.createElement(w,{status:this.state.isEnable,phoneNumberErrorMessageX:this.state.phoneNumberErrorMessage})," ","  ",n.a.createElement("input",{type:"text",id:"cellNumberInput",placeholder:"Cell number",className:"form-control shadow-xx shadow-text",value:this.state.phoneNumberChild,onChange:this.handlePhoneNumberKeyPress})),n.a.createElement("div",{className:"form-group"},n.a.createElement("textarea",{id:"smsTextInput",rows:"8",cols:"80",placeholder:"Your sms...",className:"form-control shadow-xx shadow-text",value:this.state.smsTextChild,onChange:this.handleTextAreaKeyPress,onPaste:this.handleTextAreaPaste})),n.a.createElement(_,{smsText:this.state.limitForSmstext-this.state.smsTextChild.length})," ",n.a.createElement("div",{className:"form-group buttonsX"},n.a.createElement("input",{type:"button",className:"btn btn-success btn-md el",value:"Send",id:"sendButton",onClick:this.run_This_Component_Functions_In_Queue})," ",n.a.createElement("input",{type:"button",className:"btn btn-primary btn-md el",value:"Reset",id:"",onClick:this.resetFields}))),n.a.createElement(P,{answer:this.state.answerFromTextbelt,ifTestModeData2:this.props.ifTestModeData,showHideDivData:this.state.ifUserClickedSendSms,ifUserClickedCheckDeliveryData:this.state.ifUserClickedCheckDelivery,handleToUpdateIfDeliverClicked:e.bind(this)}),n.a.createElement(O,null),n.a.createElement(j,null),"  ")}}]),t}(s.Component),M=a(33),I=a.n(M),q=(a(71),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("p",{className:"error-parent"},n.a.createElement("span",{id:"error_loading"},n.a.createElement("img",{src:I.a,className:"error-img",alt:"logo"}),"  "))}}]),t}(s.Component)),D=(a(73),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.passedtechInfoValue.map(function(e,t){return n.a.createElement("li",{key:t},e)});return n.a.createElement("div",{className:"lifted-to"},n.a.createElement("h5",null,n.a.createElement("p",{className:"underline"},"Displays parent App.js states, which are updated/uplifted from TextArea.js and TopSectionButtons.js  =>"),n.a.createElement("p",{className:"underline"},"Phone number and sms are uplifted from TextArea to App.js just for test control, as when sending a sms, this app uses state values from Textarea, while TestMode Status is used from App.js (and passed from App.js to TextArea.js as props)"),n.a.createElement("p",{className:"underline"},"Passed States (passed from parent App.js) are:"),n.a.createElement("p",null,this.props.passedPhoneNumberValue," "),n.a.createElement("p",null,this.props.passedSmsValue," "),n.a.createElement("p",null,n.a.createElement("b",null,"Test:")," ",this.props.passedIfTestModeValue.toString()," "),n.a.createElement("p",null,n.a.createElement("b",null,"TechInfo:")," ",e," ")))}}]),t}(s.Component)),G=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"col-sm-12 col-xs-12"},n.a.createElement("div",{className:"dropdown"},n.a.createElement("input",{type:"button",className:"btn btn-primary border-x","data-toggle":"collapse",href:"#collapseExample",role:"button","aria-expanded":"false","aria-controls":"collapseExample",value:"Technical Info"}),n.a.createElement("div",{className:"collapse col-sm-12 col-xs-12 text-left",id:"collapseExample"},n.a.createElement("p",{className:"underline"}," Alerts Replacer (TechnicalInfo/> -- uses LiftUpComponent/ LiftedTo_Component/>): ")," "," ",n.a.createElement(D,{passedSmsValue:this.props.smsTextData,passedPhoneNumberValue:this.props.phoneNumberData,passedIfTestModeValue:this.props.ifTestModeData,passedtechInfoValue:this.props.techInfoDate}),"               ","         ","   ")))}}]),t}(s.Component);a(75);var F=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={wallPapperCount:0,ifTestMode:!0,testButtonText:"Test mode"},a.runChangeThemeFunct=a.runChangeThemeFunct.bind(Object(f.a)(Object(f.a)(a))),a.changeThemeInjected=function(){var e=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQsQf2-zwuStKf6u2V2HE_nCy9rRvk5M8ag043FAenQbOrCXY3tA","https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Color_icon_purple.svg/2000px-Color_icon_purple.svg.png","http://paperlief.com/images/blue-purple-gradient-wallpaper-2.jpg","http://marcialmiller.com/wordpress/wp-content/uploads/2011/01/AllPatternBlockDesignbyBen-300x266.jpg","http://marcialmiller.com/wordpress/wp-content/uploads/2011/01/Rowof5Hexagons-300x137.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDhtR1BhDwTew8S7AJcbI94v0UFv2pjXwt2kdsqBSxfcgi8uObLg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv-cxQe9A6rZsR8JUE_zJwX5S94nVXyaIy1H6NyhTNw1S_sv-P","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvhyI_kI_Xaw_-a-MRTYeFpVWGlS9-zrP-mdDl_XTPh71wGuV6Mw","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK3pJbHeAoIHUlC3DUS38TW-hYjPrEgid6HSrg-nNnT0JFz-eqyA","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ZKIBvxb64CAuTASJHnrBzqyX_v_QwmJORswtVHC9vU-gvi9JlA","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmRq-OXCzPXuuxEGABGb3yK1qUeSxPMIBKtzimgUMGKUipjQZztw","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIkwu2oXo3ZV5VpHJs0BP32y78wQyuts-GBuLcs4PgEqa03SJ0uw","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIgoIVKj2tvvrwKirnEvLIVp7XEE2VpyEB4HVpAopp6p-Jvppe","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQdfBdh9TMh6MZfwbE3gkcyum_qeAv4t0QQ6zRGqGbJAJlWo_P","https://img00.deviantart.net/6ad0/i/2008/122/9/8/colorful_gradients_by_scientiaofborg.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqyBNgb1If2M5s5u4Eqie-8BnC3D4q3ZgEirc8fXwBtUKiy96E-w","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSka_Yl4YtYQWSz2T5l64Z9LeVJwdH_LoctsnU_lXZ_BbmDVBka","http://notgoaway.com/wp-content/uploads/2017/08/Orange-Wallpaper-158-Go.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWvD8MhkqMhnTziRDDqKmVWvwP2YrZ3Qk55TPs7oxP_DTwYYNrBg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTekHPENYuvbwRmIXKoff5JHA1z3vC_XoAwbVXGgyCRE8uX6f26","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQiLABN0zBTJV8kVyBdef307WbrYkANbnLa03aWcjZ9Dj2l8cL","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTjMtl9M8g5BwuOBIWTWCcAVJFLeiGWifLEYl8i2JakRBXXZto","https://st2.depositphotos.com/4724153/11516/v/950/depositphotos_115160878-stock-illustration-vector-hand-drawn-pattern-for.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQvp8gXVXK0Vb7ctlANuwugGW13OTnAWqriztJUGoBRXd0CXK8","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfDxrC1c4GaaJmBlciFeUZ8bsHheWefJXbGiUOFYOnXR5oGrVhAg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScJTFmh8ur7hPYFn543z7OnYh1Kv3d51AQWWFiPDjJH8Bm7O3K","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFcDV5NdKfWnGR_cnEIO-iT-3hX_HtEpgPv5OFIhG3-Kgt_4Z0","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZi0cgMZX4iIJRbOXYZhmzPvKVXdWM8gMSFII6VKtKJlaHEBBs8Q","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS4eUvBUEqNvtTWJqe2n0j-LrZZHpXMCLRII8gBdj66J8yyg_h","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6mN6UajC1pXOOJ11DW1OKLL-X8tZ_0LzIuw3axNFgt2veGffesw","https://thumbs.dreamstime.com/z/sunny-seamless-pattern-yellow-orange-sun-shapes-blue-background-34440134.jpg","https://rfclipart.com/image/preview/34-00-e9/seamless-color-hand-drawn-sunny-pattern-Download-Royalty-free-Vector-File-EPS-153192.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn0QY9pg43mzXhjbmW_N6p7ztO1R8ztK6cU8bx3Np6e-Pn8IJwRA","http://www.proactivedental.com.au/wp-content/uploads/2015/10/girl-248x300.png","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzEPWGOzxTXCXYCBi4WajukuQQ7Q7PlOA-FGzQsKV_cxjT2fPvxw","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPIBUy2Ru9gOD3vJUrRnWqCojmEftftOM0K_WvmW6fi70MDAl8","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYsQ04RfZT4vWwxrfTCXuBAmeG6YSpzJZtT-bPhVbxj9u0CfyZ","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz_GlZLlJCAW4mXLKNOqvVEs8NdUOalVbzGdl9Sdwnf-wpapp7Jg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXycguf1VLYxNuHJ_Vp0ynyEYCrn0tI76jl4fRCrnfGpod3UzWzQ","http://www.wallpaper-box.com/smartphone/wp-content/uploads/2014/09/Colorful-abstract-wallpaper-433x191.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbzFbadouFp0oi4agez0lv9En7GPsGyQE1G_bXQX085b7X_pfkFg","http://getdrawings.com/image/space-drawing-56.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsI5s1TRhYvyua-35eDL5XbPiU3VLH9Kp15hVZECaZRheH2bVH","https://d298hcpblme28l.cloudfront.net/product-lg/0ef1de67e9bf4a860e954aa3b1e2bad1.jpg","https://png.pngtree.com/element_origin_min_pic/17/08/19/0dffc570d4ae2954f3b949e5868fd774.jpg","https://banner2.kisspng.com/20180226/vzw/kisspng-coffee-green-tea-cafe-matcha-green-coffee-shop-pattern-5a94b3d232f101.3641932715196948022087.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3FtYsBBt6wS_Lx7mx3BeEtIKgIn30fyJXHCPkBXzUHKrrDvastQ","https://repperpatterns.com/www/wp-content/uploads/2010/11/MWM_pattern_tile_6-558x558.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRECg7KSDri3xJSW01qbtMzRWZNt_TQzrL1d-sZ3TT5rIl8wCnW","http://lenapechamberensemble.org/wp-content/uploads/2017/08/blue-pattern-background-photos-free-landscape-1920x1080.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6SdcsdwHeRnkC6tFXIQ-2RxvVA5EAXL0oOKvZzDzFFOU-OrdXeQ","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2pPLLyGTTLw4NmySGqEmxLqJH2SnR7VKVbO0JSP-ECA7HfNRc","https://image.freepik.com/free-vector/green-flowers-pattern-background_1217-148.jpg","https://naldzgraphics.net/wp-content/uploads/2014/09/Free-Fractal-Patterns.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZSNkPSqE-hmJdM_MZV0Sa-QWXnC3uvYwbdTG1q0vrTxU3OApM","https://pre00.deviantart.net/ec44/th/pre/f/2015/071/c/2/fractal_pattern_3_by_nic022-d8ldvzx.jpg","http://www.fractalsciencekit.com/fractals/small/Fractal-Julia-Pattern-Map-69.jpg","http://www.fractalsciencekit.com/fractals/small/Fractal-Julia-Pattern-Map-73.jpg","http://www.fractalsciencekit.com/fractals/small/Fractal-Julia-Pattern-Map-63.jpg","http://www.fractalsciencekit.com/fractals/small/Fractal-Julia-Pattern-Map-61.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCbxKesoUoiNgk2TAODQmVJoefy_lxkZ6ZjmOjmysO86GCLqwJ","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBhwXqhpym9ERAW4TFayPTk1Gdd3bct7NnATfxgGIKxPrkU-oB","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt0q4G1wnP3MazNn7u8lY8gVU3C4A8FwQSiOHkvC1RJB5ZQqRb4Q","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW417ozC4rmNrHPYnf5yT6ubKJGX0VERWJIK-oMthcozvQ2l3C","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScgKP-lul4CuoNj78r4dH7UVS_Zx2uSQnStT5osSCSph7f9B1aaQ","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHUaNW2Q5e45JnD0ynSXD88RBnPWqPn9Z5vuxHGQtRAsKPuQGtMA","http://notgoaway.com/wp-content/uploads/2017/08/Orange-Wallpaper-158-Go.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXHZrLrBJz2DPTgn82fq_c6_pFN9vj-0ABd7uzO8-aQ83HW-26","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQsQf2-zwuStKf6u2V2HE_nCy9rRvk5M8ag043FAenQbOrCXY3tA","https://www.welovesolo.com/wp-content/uploads/vector/46/Pattern-word-cloud-creative-vector-07.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHbhzuoJFsUlWKBKqGRtReqUAcWg6TbphM3BPEzeQDJa-sqfl6",""];this.state.wallPapperCount+1===e.length?this.setState({wallPapperCount:0}):this.setState(function(e){return{wallPapperCount:e.wallPapperCount+1}});for(var t=document.getElementsByClassName("change-head-style"),a=0;a<t.length;a++)try{t[a].style.backgroundImage="url("+e[this.state.wallPapperCount]+")"}catch(s){alert(s.message)}}.bind(Object(f.a)(Object(f.a)(a))),a.runChangeTestModeFunct=a.runChangeTestModeFunct.bind(Object(f.a)(Object(f.a)(a))),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"runChangeThemeFunct",value:function(){this.changeThemeInjected()}},{key:"runChangeTestModeFunct",value:function(){var e=this;this.setState(function(e){return{ifTestMode:!e.ifTestMode}},function(){e.props.liftTestModeStatustHandler(e.state.ifTestMode),!0===e.state.ifTestMode?e.setState({testButtonText:"Test Mode"}):e.setState({testButtonText:"Prod Mode"})})}},{key:"render",value:function(){return n.a.createElement("div",{className:"col-sm-12 col-xs-12 top-buttons"},n.a.createElement("button",{className:"btn btn-sm btn-my shadowX change-theme",onClick:this.runChangeThemeFunct},"Theme ",n.a.createElement("i",{className:"fa fa-repeat"})),n.a.createElement("button",{className:this.state.ifTestMode?"btn-test-mode btn btn-sm btn-my shadowX btn-next":"btn-dev-mode btn btn-sm btn-my shadowX btn-next",onClick:this.runChangeTestModeFunct}," ",this.state.testButtonText," ",n.a.createElement("i",{className:"fa fa-link"})))}}]),t}(s.Component),B=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={phoneNumber:"Phone number: I am set manually in state in parent <App/>",smsText:"Sms text:I am set manually in state in parent <App/>",ifTestMode:!0,techInfo:["some"]},a.baseState=[],a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"liftPhoneNumberHandler",value:function(e){this.setState({phoneNumber:e})}},{key:"liftSmsTextHandler",value:function(e){this.setState({smsText:e})}},{key:"liftTestModeStatustHandler",value:function(e){this.setState({ifTestMode:e})}},{key:"liftTechAlertsInfoHandler",value:function(e){this.setState(function(t){return{techInfo:Object(i.a)(t.techInfo).concat([e])}})}},{key:"render",value:function(){var e=this.liftPhoneNumberHandler,t=this.liftSmsTextHandler,a=this.liftTestModeStatustHandler,s=this.liftTechAlertsInfoHandler;return n.a.createElement("div",{className:"wrapper grey"},n.a.createElement("div",{className:"container"}," ",n.a.createElement("div",{className:"row row1"},n.a.createElement("div",{className:"col-sm-12 col-xs-12 divX App change-head-style"},n.a.createElement("h4",{className:"header-x shadow-xx"}," ",this.props.name," "," ",n.a.createElement("i",{className:"fa fa-envelope-o"}),n.a.createElement("img",{src:h.a,className:"react-logo-static",alt:"logo"})),n.a.createElement(R,{ifTestModeData:this.state.ifTestMode,liftPhoneNumberHandler:e.bind(this),liftSmsTextHandler:t.bind(this),liftTechAlertsInfoHandler:s.bind(this)})),n.a.createElement(G,{phoneNumberData:this.state.phoneNumber,smsTextData:this.state.smsText,ifTestModeData:this.state.ifTestMode,techInfoDate:this.state.techInfo})," ")),n.a.createElement(q,null)," ",n.a.createElement(F,{liftTestModeStatustHandler:a.bind(this)})," ")}}]),t}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(B,{name:"Sms Api React JS"}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[35,2,1]]]);
//# sourceMappingURL=main.f41da65c.chunk.js.map