# Football-tournament-organizer
Description
The Football Tournament Organizer is a dynamic web application designed to manage football tournaments, providing essential information about upcoming events, contact details, and stadium locations. Developed as part of the Web Technologies module (4BUIS011C) at Westminster International university in Tashkent, this project demonstrates proficiency in client-server architecture, route handling, CRUD functionality, and deployment using Express.js/Node.js.

How to Run Locally
To run this application locally, follow these steps:

Clone this repository to your local machine.

Navigate to the project directory in your terminal.

Run npm install to install dependencies.

Start the server by running npm start.

Open your web browser and go to http://localhost:3000 to view the application.

Dependencies
The following dependencies are used in this project:

Express.js
Pug template engine
Other dependencies specified in package.json
Features
Create: Organizers can create new football tournaments with details such as tournament name, date, time, teams, and match format.
Read: View upcoming and past tournaments along with additional information, contact details, and stadium locations.
Update: Modify tournament details, contact information, and stadium details as needed.
Delete: Remove outdated or canceled tournaments from the system.
Error Handling: Proper validation and error handling ensure data integrity and a user-friendly experience.
Project Structure
The project follows the recommended structure:

bash
Copy code
/football-tournament-organizer
  - app.js
  - package.json
  - .gitignore
  /public
    /javascripts
    /styles
      - style.css
  /routes
    - index.js
    /match
      - index.js
  /views
    /home
    - index.pug
    - add_edit.pug
  /controllers
    /api
        /home
        - index.js
    /web
        /home
  /services
    - index.js
    /match
      - index.js
About
This web application was created to showcase the functionality of a football tournament organizer. It is developed solely for educational purposes and does not represent any real football organization or event.