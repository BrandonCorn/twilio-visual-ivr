const Helpers = require(Runtime.getFunctions()['helpers/index'].path); 

exports.handler = (context, event, callback) => {
    const helpers = new Helpers(context, event);
    const client = helpers.twilio.createClient(context);
    
    const { from, conference, customer } = event;

    const twiml = new Twilio.twiml.VoiceResponse();
    let dial = twiml.dial();

    client.conferences(conference)
    .participants
    .create({
        beep: 'onEnter',
        from,
        to: context.TWILIO_CONFERENCE_NUMBER,
    })
    .then(conf => {
        dial.conference({
            startConferenceOnEnter: true,
            endConferenceOnExit: true,
        }, conference);
        return callback(null, twiml);
    })
    .catch(err => {
        helpers.logger.error(`error occurred ${err}`);
        return callback(err);
    })
}