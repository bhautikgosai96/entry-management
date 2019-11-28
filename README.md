This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

to install node dependencies.

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

### `nodemon server.js`

This will run your server.

In \backend\model\entry.model.js, i have initialized mongoose and collectin schema.

In \backend\routes\entry.js, Form data will be added to mongodb collection. I have created 2 cron job for scheduling mail service for checkin time and check out time. It will be run on time given by user in form.
I have smtp.ethereal.email service to send email.

In \src\components\guest.js i have created guest information form in react.

In server side console you will get successful message when cron job will be executed.




