const Helpers = require(Runtime.getFunctions()['helpers/index'].path); 
const {v4: uuidv4} = require('uuid');

exports.handler = (context, event, callback) => {
    const helpers = new Helpers(context, event);
    try{
        const uuid = uuidv4();
        const response = helpers.twilio.okResponse({conference: uuid});
        return callback(null, response); 
    }
    catch(err){
        helpers.logger.error(err);
        return callback(err);
    }
}