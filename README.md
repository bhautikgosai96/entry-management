## Available Scripts

In the project directory, you can run:

Step 1 - run command "npm install" in innovacer-tracker directory

step 2 - run command "npm install" in innovacer-tracker/backend directory
### `npm install`

to install node dependencies.

Step 3 - 
### 'run command "export SENDGRID_API=<api-key>"'

plesase use api key.

run command "nodemon server.js" to start server from innovacer-tracker/backend directory
### `nodemon server.js`

This will run your server.

Step 4 - run command "npm start" from innovacer-tracker directory
### `npm start`

Open [http://localhost:3000] to view it in the browser.

In \backend\model\entry.model.js, i have initialized mongoose and collectin schema.

In \backend\routes\entry.js, Form data will be added to mongodb collection. I have created 2 cron job for scheduling mail service for checkin time and check out time. It will be run on time given by user in form.
I have smtp.ethereal.email service to send email.

In \src\components\guest.js i have created guest information form in react.

In server side console you will get successful message when cron job will be executed.




