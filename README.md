#### Project Overview
This project is a job listing website built using React 18, featuring various React features such as React Router to create a multi-page application, useState, useEffect, and fundamental concepts like states, props, Hooks, and data fetching. The project utilizes the JSON Server library to create a mock REST API, serving as the backend for job details.

#### Getting Started
To run the project, follow these steps:

1. **Start the React Application**
   - Open a terminal and navigate to the project directory.
   - Run `npm run dev` to start the React application. The server will start on `localhost:3000`.

2. **Start the JSON Server**
   - Run `npm i -D json-server`, to install the JSON server as a dev dependancy.
   - Run `npm run server` to start the JSON Server. The mock backend server will start on `localhost:8000`.

#### Project Structure
The project is structured into the following directories and files:

- **src**
  - **components**: Contains reusable UI components.
  - **assets**: Holds the images used.
  - **layouts**: This where we are defining different layouts for our pages.
  - **pages**: This folder contains the different pages with components we want to show in each page.
  - **main.jsx**: The main entry point for the React application.
  - **App.jsx**: The main application component.
  - **index.html**: The HTML file for the React application. <br><br>
- **package.json**: The project's dependencies and scripts.

#### Features
- **React Router**: Used for client-side routing, managing application state and creating a multi-page application.
- **useState**: Utilized for managing state in functional components.
- **useEffect**: Used for handling side effects in functional components.
- **JSON Server**: Provides a mock REST API for job details.

#### Key Concepts
- **States**: Used to manage application state and re-render components when state changes.
- **Props**: Used to pass data from parent components to child components.
- **Hooks**: Used to manage state and side effects in functional components.
- **Data Fetching**: Used to fetch data from the JSON Server API.

#### Development Environment
- **Node.js**: Required for running the project.
- **npm**: Used for managing project dependencies and running scripts.

#### Testing and Debugging
- **Console Logs**: Used for debugging and logging application state.
- **Browser DevTools**: Used for inspecting and debugging the application in the browser.

### Conclusion
This project demonstrates the use of various React features and fundamental concepts to build a job listing website. The JSON Server library provides a simple and quick way to set up a mock REST API for job details. The project is designed to be easily extensible and scalable, making it a great starting point for building more complex applications.