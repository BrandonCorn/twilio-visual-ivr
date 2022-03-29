# Twilio Visual IVR

## Requirements

### An active Twilio Account 

Purchase two Twilio phone numbers for use of this project. One phone number you will connect to a studio flow via a webhook in the Twilio Console. The other phone number will be used for connecting your IVR to a conference for the Visual IVR. See the .env sample within the functions directory for an example. You can see how to purchase numbers here [Buying Twilio Phone Numbers](https://support.twilio.com/hc/en-us/articles/223135247-How-to-Search-for-and-Buy-a-Twilio-Phone-Number-from-Console).

## Installation

Navigate to the serverless-template & visual-ivr-ui directories respectively and perform an 

```bash
npm install
```

## Getting Started With Twilio Studio

In order to jump start the Twilio Visual IVR you need to import the visual-ivr-studio.json flow into your own Twilio account. You can see how this is done in the console [here](https://www.twilio.com/docs/studio/user-guide#importing-flow-data).

## Deploying Twilio Serverless Functions 

### Dependencies

Make sure to install the twilio cli and serverless cli plugin. 

```bash
brew install twilio
twilio plugins:install @twilio-labs/plugin-serverless
```

### Setup .env files

Setup environment files per environment

Take advantage of multiple environments (.env.stage, .env.prod, etc)

```bash
cp env.sample .env.stage
```

Populate sample environment file with accurate values for current twilio project

### Deploy serverless project

```bash
#Populate environment values (switch out .env for .env.stage, .env.prod, etc)
twilio serverless:deploy --env .env
```

## Best Practices

Visibility [here](https://www.twilio.com/docs/runtime/functions-assets-api/api/understanding-visibility-public-private-and-protected-functions-and-assets)

Keep library specific functionality within helpers

Keep reusable chunks within shared

Use logging to your advantage. Overly log on debug to be able to troubleshoot in production

Some additional logging best practices [here](https://blog.bitsrc.io/logging-best-practices-for-node-js-applications-8a0a5969b94c)

Lambda best practices [here](https://docs.aws.amazon.com/lambda/latest/dg/best-practices.html)

# Deploying Your Visual IVR With Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

```bash 
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

```bash 
npm test
```
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

```bash 
npm build
```
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

```bash 
npm eject
```
**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).




## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)