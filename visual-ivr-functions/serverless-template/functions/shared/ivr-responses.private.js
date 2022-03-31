const constants = {
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

const mainMenu = (helpers) => {
    let message = 'Select the topic your seeking help with';
    helpers.logger.info(`grabbed response for ${constants.MAIN_MENU}`);
    return message;
}

const selectDeviceType = (helpers) => {
    let message = 'Select the device type you need assistance with.';
    helpers.logger.info(`grabbed response for ${constants.SELECT_DEVICE_TYPE}`);
    return message;
}

const selectComputerHelp = (helpers) => {
    let message = 'Select the help you need with you computer.';
    helpers.logger.info(`grabbed response for ${constants.SELECT_COMPUTER_HELP}`);
    return message;
}

const signInProceedAsGuest = (helpers) => {
    let message = 'Please sign in, or proceed as a guest to continue.';
    helpers.logger.info(`grabbed response for ${constants.SIGN_IN_PROCEED_AS_GUEST}`);
    return message;
}

const selectComputerType = (helpers) => {
    let message = "Please select the type of computer you're calling about.";
    helpers.logger.info(`grabbed response for ${constants.SELECT_COMPUTER_TYPE}`);
    return message;
}

const enterPcInformation = (helpers) => {
    let message = "Please, fill out the form to tell us more about your personal computer.";
    helpers.logger.info(`grabbed response for ${constants.ENTER_PC_INFORMATION}`);
    return message;
}

const enterLoginInformation = (helpers) => {
    let message = 'Please sign in to continue.';
    helpers.logger.info(`grabbed response for ${constants.ENTER_LOGIN_INFORMATION}`);
    return message;
}

const selectComputerIssue = (helpers) => {
    let message = "Select what you're experiencing from these top computer symptoms.";
    helpers.logger.info(`grabbed response for ${constants.SELECT_COMPUTER_ISSUE}`);
    return message;
}

const askComputerRepair = (helpers) => {
    let message = "Would you like to schedule a repair for your computer? Click the button below.";
    helpers.logger.info(`grabbed response for ${constants.ASK_COMPUTER_REPAIR}`);
    return message;
}

const scheduleComputerRepair = (helpers) => {
    let message = 'Please select a date to schedule your repair. Then enter your email address so we can follow up with you about your appointment.';
    helpers.logger.info(`grabbed response for ${constants.SCHEDULE_COMPUTER_REPAIR}`);
    return message;
}

const completedScheduleComputerRepair = (helpers) => {
    let message = 'Thank you for scheduling your appointment. We look forward to seeing you soon.';
    helpers.logger.info(`grabbed response for ${constants.COMPLETED_SCHEDULE_COMPUTER_REPAIR}`);
    return message;
}

const responses = {
    [constants.MAIN_MENU]: mainMenu,
    [constants.SELECT_DEVICE_TYPE]: selectDeviceType,
    [constants.SELECT_COMPUTER_HELP]: selectComputerHelp,
    [constants.SIGN_IN_PROCEED_AS_GUEST]: signInProceedAsGuest,
    [constants.SELECT_COMPUTER_TYPE]: selectComputerType,
    [constants.ENTER_PC_INFORMATION]: enterPcInformation,
    [constants.ENTER_LOGIN_INFORMATION]: enterLoginInformation,
    [constants.SELECT_COMPUTER_ISSUE]: selectComputerIssue,
    [constants.ASK_COMPUTER_REPAIR]: askComputerRepair,
    [constants.SCHEDULE_COMPUTER_REPAIR]: scheduleComputerRepair,
    [constants.COMPLETED_SCHEDULE_COMPUTER_REPAIR]: completedScheduleComputerRepair,
}


const respond = (helpers, state) => {
    
    helpers.logger.info(`grabbing response with state ${state}`);
    let twiml = new Twilio.twiml.VoiceResponse(); 
    try{
        const getMessageFormat = responses[state];
        let message = getMessageFormat(helpers);
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