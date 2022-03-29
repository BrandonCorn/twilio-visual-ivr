const Helpers = require(Runtime.getFunctions()['helpers/index'].path);

exports.handler = (context, event, callback) => {
    const helpers = new Helpers(context, event);
    helpers.logger.info(`adding ghost to conference in /connect-ivr-to-conference ${helpers.stringify(event)}`);

    const body = {
        From: event.From,
        Conference: event.Conference,
    }
    helpers.logger.info(`heres the event info ${body}`)
    const client = helpers.twilio.createClient(context);
    client.conferences(body.Conference)
    .participants
    .create({
        beep: 'onEnter',
        statusCallbackEvent: ['ringing'],
        from: body.From,
        to: context.TWILIO_CONFERENCE_NUMBER,
    })
    .then(participant => {
        helpers.logger.info(`Added participant to conference ${participant}`); 
        const response = helpers.twilio.okResponse();
        return callback(null, response);
    })
    .catch(err => {
        helpers.logger.info(`Error adding participant to conference ${err}`);
        return callback(err);
    })
}