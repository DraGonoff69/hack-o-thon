# MobilEASE

<img src="./public/apple-touch-icon.png" alt="logo" width=200 height=200>


> A Web-Based  Complaint System used for paperless quick response system with fast approval of leave and fast action on the complaint done by student.
## Background / Problem Statement

In our college, there is currently no efficient and quick system for students and staff to register, track, and resolve complaints regarding various campus-related issues. This lack of a streamlined process leads to several challenges, including delays in issue resolution, inefficient allocation of resources, and difficulty in accountability.

## Features

- Two types of users - admin and students
- Progressive Web App (PWA)
- Only student data can be created using the webpage, official credentials are given by admin
- Ability to attach pdf of the application while reporting
- Ability to track reported complaints

## Screenshots

| <img src="./public/homepage.jpg"  width=400 height=400> Home Page   | <img src="./public/login.jpg" width=400 height=400> **Login Page**    |
| ------------------------------------------------------------------- | -------------------------------------------------------------- |
| <div ><img src="./public/reporting dashboard.jpg" alt="complaint" width=400 height=400 style="display:inline-block"> **Report Complaint Page**|<img src="./public/student dashboard.jpg" alt="dashboard" width=400 height=400 style="display:inline-block"> **Official Dashboard** |</div>

## Languages, Frameworks, Tools used


- Vite + ReactJS
- Firebase as database (Firestore)
- Tailwind CSS for styling
- Material UI (MUI) for some components (Dialog, DataGrid, etc.)

## Developing


- Create a firebase project and create a .env file at your local directory containing configuration of that project.
(Refer env.example for the variable names)

- after cloning or forking the repository use,
    $npm i on the terminal
  
  then

- Run the server
    ```shell
    $ npm run dev
    ```

    The application will be running at `http://localhost:5173`

## Contributing

This is the group project done for the prog-o-thon held in our institude IIIT UNA by Ayush Mishra, Anshul Katiyar and Ayush Bangari.

