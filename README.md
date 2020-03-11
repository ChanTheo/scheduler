# Interview Scheduler

Interview Scheduler is a single page application built with React, where users can create, edit, and delete an interview in the afternoon each weekday. Interview Scheduler makes API requests to load and persist data, when both servers run concurrently; requests are proxied from the Webpack development server to the API server.



## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Fork this repository https://github.com/ChanTheo/scheduler-api, then clone your fork into a seperate directory then your previous fork is saved in.
4. Install dependencies using the `npm install` command, in the directory the api is saved in.
5. Start the web server using the `npm start` command. The app will be served at <http://localhost:8000/>.
6. Start the database using the `npm start` command, in a new terminal window. 
7. Go to <http://localhost:8000/> in your browser.

## Technical Specifications
- React
- Webpack, Babel
- Axios
- Storybook, Webpack Dev Server 
- Jest, Testing Library
- PSQL, Database


## Example Screenshots:
!["Create an Appointment Form"](https://github.com/ChanTheo/scheduler/blob/master/docs/Empty_form.png?raw=true)
!["Monday Schedule"](https://github.com/ChanTheo/scheduler/blob/master/docs/Example_appointments.png?raw=true)
!["Apppointment Form filled in with student name"](https://github.com/ChanTheo/scheduler/blob/master/docs/appointment_form.png?raw=true)
!["Wednesday Schedule"](https://github.com/ChanTheo/scheduler/blob/master/docs/wednesday_example.png?raw=true)




