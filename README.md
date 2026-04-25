# Portfolio

A personal portfolio website built with HTML, CSS, and JavaScript, featuring a contact form integrated with a Node.js/Express backend and MongoDB Atlas for message storage.

## Features

- Responsive design showcasing skills, projects, and experience
- Animated skills section
- Modal popups for project details
- Contact form with backend integration (messages stored in MongoDB Atlas)
- Downloadable resume
- Social media links

## Project Structure

index.html
style.css
script.js
backend/
server.js
package.json
env
styling/
images/
README.md


## Getting Started

### 1. Backend Setup

1. Go to the `backend` directory:
   ```sh
   cd Portfoliooo/backend
Workspace
(rerun without)
Collecting workspace information

Here’s a suggested README for your project:

Portfoliooo/
index.html
style.css
script.js
backend/
server.js
package.json
env
styling/
images/
README.md

Install dependencies:
npm install

Set up your MongoDB Atlas connection string in the env file:
MONGO_URI=your_mongodb_atlas_connection_string

Start the backend server:
npm start
The server runs on http://localhost:5000.

2. Frontend Setup
Open index.html in your browser.
For best results, use a local server (e.g., VS Code Live Server extension).

Contact Form
Messages submitted via the contact form are sent to the backend and stored in MongoDB Atlas.

Customization
Update images in styling/images/
Edit skills, projects, and experience in index.html
Modify backend logic in backend/server.js

