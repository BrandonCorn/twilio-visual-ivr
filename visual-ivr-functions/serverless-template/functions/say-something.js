const Helpers = require(Runtime.getFunctions()['helpers/index'].path);
const ivrResponses = require(Runtime.getFunctions()['shared/ivr-responses'].path);

exports.handler = (context, event, callback) => {
    const helpers = new Helpers(context, event);
    try{
        const twiml = ivrResponses(helpers, event.state);
        return callback(null, twiml);
    }
    catch(err){
        return callback(err);
    }
}