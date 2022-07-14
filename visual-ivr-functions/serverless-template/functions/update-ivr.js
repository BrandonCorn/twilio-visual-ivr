const Helpers = require(Runtime.getFunctions()['helpers/index'].path);

exports.handler = (context, event, callback) => {
    const helpers = new Helpers(context, event);
    const client = helpers.twilio.createClient(context);
    const conferenceName = event.conference;
    const state = event.state;
    let response = helpers.twilio.defaultResponse();

    client.conferences.list({friendlyName: conferenceName})
    .then(conferences => {
        const conference = conferences[0];
        client.conferences(conference.sid)
        .update({announceUrl: `https://visual-ivr-functions-4076-dev.twil.io/say-something?state=${state}`})
        .then(updates => {
            response = helpers.twilio.okResponse();
            return callback(null, response);
        })
        .catch(err => {
            helpers.logger.error(err);
            return callback(err);
        })
    })
    .catch(err => {
        helpers.logger.error(err);
        return callback(err);
    })

}