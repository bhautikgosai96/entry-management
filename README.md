## Available Scripts

In the project directory, you can run:

Step 1 - run command "npm install" in innovacer-tracker directory

step 2 - run command "npm install" in innovacer-tracker/backend directory
### `npm install`

to install node dependencies.

Step 3 - run command
### `export SENDGRID_API=<api-key>`

### `export ACCOUNT_ID='<account-id>'`

### `export AUTH_TOKEN='<auth-token>'`

### `export SENDER_PHONE='<sender-phone>'`

please use api key, account id, auth token and sender mobile number which is provided in document.

Step 4 - run command "nodemon server.js" to start server from innovacer-tracker/backend directory
### `nodemon server.js`

This will run your server.

Step 5 - run command "npm start" from innovacer-tracker directory
### `npm start`

Open [http://localhost:3000] to view it in the browser.

In \backend\model\entry.model.js, i have initialized mongoose and collectin schema.

In \backend\routes\entry.js, Form data will be added to mongodb collection. I have created 2 cron job for scheduling mail service for checkin time and check out time. It will be run on time given by user in form.

In \src\components\guest.js i have created guest information form in react.

In server side console you will get successful message and message id when cron job will be executed.




