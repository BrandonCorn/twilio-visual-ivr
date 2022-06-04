const Helpers = require(Runtime.getFunctions()['helpers/index'].path); 

exports.handler = (context, event, callback) => {
    const helpers = new Helpers(context, event);
    const client = helpers.twilio.createClient(context);
    helpers.logger.info('entered /connect-to-conference');
    
    const { from, conference, customer } = event;
    helpers.logger.info(`Conference and participants ${helpers.stringify(event)}`);

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
        helpers.logger.info(`added ghost leg to conference ${helpers.stringify(conf)}`);
        dial.conference({
            startConferenceOnEnter: true,
            endConferenceOnExit: true,
        }, conference);
        helpers.logger.info(`added customer to conference`);
        return callback(null, twiml);
    })
    .catch(err => {
        helpers.logger.info(`error occurred ${err}`);
        return callback(err);
    })
}