TextBelt Api React Js (React 16.13.1)


IMPORTANT: WHEN DEPLOYING ON REAL HOSTING, DO NOT FORGET TO CHECK IF {Classes/SendSms.php} and {Classes/ CheckSmsDeliveryStat.php} Line 18 is commented,
 ie.artificial json response is disabled.

1. General info
2. Testing on localhost vs real hosting. If project crashes after new install/moving to new folder

3.1 How it works
3.2 How sms is sent.
3.3 Getting response/answer from TextBelt Api
3.4 Check delivery status




------------------------------------------------------

1. General info

# This project is an ancestor/predecessor/less-developed-copy of { CLEANSED_GIT_HUB/Sms_Textbelt_Api_React_JS }. 
  Main difference is that{CLEANSED_GIT_HUB/Sms_Textbelt_Api_React_JS} contains some fixes (like JQ input was switched to pure React) + getting Directory URL dynamically (for ajax) via .env (REACT_APP_APPLICATION_DIRECTORY) (e.g in src/MyComponents/TextArea/functions_injected/sendSmsMessage.js and  /child_components/ResultFromTextbeltApi.js) + cleaner code (less commented code). In this project you have to hardcode ajax URL for localhost.

#NB: {CLEANSED_GIT_HUB/Sms_Textbelt_Api_React_JS} is a better version (and fully working as per 24.08.2021) than this {sms_Textbelt_Api_React_JS} as: more fully comply with React concept + more easy set-up for ajax URL (due to  via .env (REACT_APP_APPLICATION_DIRECTORY)
  
# Structure of this project => see https://github.com/account931/sms_Textbelt_Api_React_JS/blob/master/README_MY_React_Com_Commands.txt
#This a react version of TextBelt Api client.
# Index.js is a JS entry point, it contains <App/> Component, 
which contains all the rest component { <TextArea/>, <TopSectionButtons/> etc}
# All core logic is in <TextArea/> Component.
# <TextArea/> - core component


#Main component is <TextArea/> which comprises/uses folder with outlined child components used in <TextArea/> and injected_functions (some functions used in <TextArea/> but outlined in separate files for more incapsulation.



=====================================================

2. Testing on localhost vs real hosting. If project crashes after new install/moving to new folder

#Server side php uses cURL, and as long as localhost does not support cURL, you can not test it on localhost normally. 
The fix it to test on localhost (when u using live localhost://3000, not build folder) is: 
  a.)uncomment Line 18  in Classes/SendSms.php (this will create artificial json response) 
  b) do the same uncommenting in Classes/ CheckSmsDeliveryStat.php

c)Now there is No need to make changes in Cleansed (but there is in non-Cleansed version)
 in ajax url (in /TextArea/functions_injected/sendSmsMessage.js. Previously we had to switch between localhost/Server ajax url  {../ServerSide/ajax/sendsms.php}/And/  'http://localhost/sms_Textbelt_Api_React_JS/sms-api-react/Server_Side/ajax_script/sendSms.php.
 (For working Sms send function)
+ had to do the same switch in ajax url (in TextArea/child_components/ResultFromTextbeltApi.js
(For working checkDelivery function)

Now relevant ajax Url is  selected automatically, bases on current window url 
=> if(window.location.href.match(/localhost/)


d.) if ajax crashes, check  var localhostURL + var realServerProdURL in  TextArea/functions_injected/sendSmsMessage.js  and TextArea/child_components/ResultFromTextbeltApi.js 



=======================================================
3.1 How it works:

1.When u click "Send sms" button in TextArea/TextArea.js,  function run_This_Component_Functions_In_Queue() is called. This function calls function getFormValue() and checks if it returns TRUE. getFormValue() checks if sms/number not empty, checks number against UA or EU regExp.If getFormValue() returns TRUE, function sendSmsMessage() is called. This function for better code usability is extracted in TextArea/functions_injected/sendSmsMessage.js.(while still called in TextArea/TextArea.js).

3.2 How sms is sent.
TextArea/functions_injected/sendSmsMessage.js.(while still called in TextArea/TextArea.js) makes an ajax request to my middleware php script { /Server_Side/ajax_script/sendSms.php}

# While making an ajax to TextBelt Api (to send a sms) <TextArea/> sends 3 values: phone Number, smsText and boolean isTestMode. PhoneNumber and smsText are <TextArea/>' states  (is set and modified inside <TextArea/>), while isTestMode is a state of <App/>. isTestMode is flag to decide if we should use test Api key or real key (on server). By default isTestMode==True, i.e it it Test Mode. It is set and changed in <TopButton/> when u click button "TestMode", then state uplifted to parent <App/> and from <App/>  is passed as props to <TextArea/>.






==============================================
3.3 Getting response/answer from TextBelt Api
Api response display (i.e if sms sent/not sent) is implemented in TextArea/child_components/ResultFromTextbeltApi.js. Check delivery status is implemented here too. 
The visibility of Div with response depends  on {this.state.ifUserClickedSendSms}(set and updated in <Textarea.js> using TextArea/functions_injected/sendSmsMessage.js), and that is passed to <ResultFromTextbeltApi.js> as { this.props.showHideDivData }






=============================================
3.4 Check delivery status
Check delivery function is in TextArea/child_components/ <ResultFromTextbeltApi.js/>
Visibility of "Check delivery" button depends on this.state.answerFromTextbelt{success:true/false} (state of <TextArea/>)
       <div className={'col-sm-12 col-xs-12 btn-scroll' + (this.props.answer.success? ' show-delivery-button': ' hide-delivery-button')}>



=============================================

