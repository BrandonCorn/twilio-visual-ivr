const Helpers = require(Runtime.getFunctions()['helpers/index'].path)

exports.handler = (context, event, callback) => {
    const helpers = new Helpers(context, event); 
    try{
        const twiml = new Twilio.twiml.VoiceResponse();
        twiml.say('Thanks for choosing the Test Buy Visual IVR, navigate to the site for your options');

        return callback(null, twiml);
    }
    catch(err){
        helpers.logger.error(err);
        return callback(err);
    }
}