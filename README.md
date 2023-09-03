# rfv-challenge
This is a solution for rfv:

---

# Problem statement

This assignment involves creating a simple web application that consists of a frontend user
interface (UI) and a local backend server, both interconnected. The frontend is expected to be
built using React. As for the backend, you have the freedom to select any server framework you
prefer but for a compact implementation Express is recommended. The following are the
requirements for this web application:

1. Server-frontend interaction: The backend server will send the string 'RealFace' to the
frontend, establishing communication between the two components.
2. Frontend components: The frontend will comprise two distinct components:
- The string received from the server should be shown as text, making it visible to
the users.
- The UI should feature a button that sends the string ‘Value’ to the server when
clicked. After the click, the string shown on the frontend should change to
‘RealFaceValue

# Application structure
    .
    ├── client              # frontend app in react
    ├── dist                # ts compiled files
    ├── public              # public html and css files
    ├── src                 # server app in express
    ├── LICENSE             
    ├── package.json        
    ├── tsconfig.json       
    ├── webpack.config.js   
    └── README.md           
    
# Application Functionality

- React app contains two components 
1. Message - Is bound to API call `/api` which returns text message 
2. UpdateTextButton - Sends text 'Value' to `/api` to return updated message

- Express app contains:
1. Global variable which is treated as mutable value - `MESSAGE` = `MESSAGEPREFIX` + any message
1. Two APIs
    1. `/api` GET - returns the global variable `MESSAGE`
    2. `/api` PUT - updates message with new value and returns newly created `MESSAGE`

Reason for using extra global variables is that, it can be switched to any other source and the application can turn into a CRUD operation easily. 



