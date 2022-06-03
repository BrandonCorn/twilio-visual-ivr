//Side note: State references where in your visual component the customer is. If they're on the main-menu and need an announcement, there must
// exist a main-menu state like below


//names for the state of customers navigation in visual ui
const states = {
    MAIN_MENU: 'main-menu',
    SELECT_DEVICE_TYPE: 'select-device-type',
    SELECT_DEVICE_ISSUE: 'select-device-issue', 
    SELECT_COMPUTER_HELP: 'select-computer-help',
    SELECT_COMPUTER_ISSUE: 'select-computer-issue',       
    SIGN_IN_PROCEED_AS_GUEST: 'sign-in-proceed-as-guest',
    SELECT_COMPUTER_TYPE: 'select-computer-type',
    ENTER_PC_INFORMATION: 'enter-pc-information',
    ENTER_LOGIN_INFORMATION: 'enter-login-information',
    SELECT_PC_SYMPTOMS: 'select-pc-symptoms',
    ASK_COMPUTER_REPAIR: 'ask-computer-repair',
    SCHEDULE_COMPUTER_REPAIR: 'schedule-computer-repair',
    COMPLETED_SCHEDULE_COMPUTER_REPAIR: 'completed-schedule-computer-repair'
}

//message responses for customer based on state
const responses = {
    [states.MAIN_MENU]: 'Select the topic your seeking help with',
    [states.SELECT_DEVICE_TYPE]: 'Select the device type you need assistance with.',
    [states.SELECT_COMPUTER_HELP]: 'Select the help you need with you computer.',
    [states.SIGN_IN_PROCEED_AS_GUEST]: 'Select the help you need with you computer.',
    [states.SELECT_COMPUTER_TYPE]: 'Please sign in, or proceed as a guest to continue.',
    [states.ENTER_PC_INFORMATION]: "Please, fill out the form to tell us more about your personal computer.",
    [states.ENTER_LOGIN_INFORMATION]: 'Please sign in.',
    [states.SELECT_COMPUTER_ISSUE]: "Select what you're experiencing from these top computer symptoms.",
    [states.ASK_COMPUTER_REPAIR]: "Would you like to schedule a repair for your computer? Click the button below.",
    [states.SCHEDULE_COMPUTER_REPAIR]: 'Please select a date to schedule your repair. Then enter your email address so we can follow up with you about your appointment.',
    [states.COMPLETED_SCHEDULE_COMPUTER_REPAIR]: 'Thank you for scheduling your appointment. We look forward to seeing you soon.',
}


const respond = (helpers, state) => {
    
    helpers.logger.info(`grabbing response with state ${state}`);
    let twiml = new Twilio.twiml.VoiceResponse(); 
    try{
        let message = responses[state];
        twiml.say(message);
        helpers.logger.info(`selected message ${twiml}`);
        return twiml; 
    }
    catch(err){
        helpers.logger.error(err);
        return twiml;
    }
}

module.exports = respond;