# Baton Pass

![](/screen-shots/Baton_Pass-1.png)

![](/screen-shots/Baton_Pass-2.png)

## User Story

An application that allows the user to practice their drawing with the use of a timer.  This allows users to sharpen their drawing skills by sketching the images they want, rather than practicing on groupings of random stock photographs.  

## Organization

First, let's look at how things are organized.

```
.
├── client
└── server
```

At the top level, everything is divided into two folders. The `client` folder contains the React client, while the `server` folder contains the Express server.

In the root folder, you'll also notice `.gitignore` and `package.json`. The former ignores `node_modules` folders project-wide, while the latter contains scripts for development and deployment.

### client

The `client` folder is organized as follows:

```
client
├── public
└── src
    ├── components
    │   ├── App
    │   ├── AuthDropdown
    │   ├── LoginForm
    │   ├── Navigation
    │   └── PrivateRoute
    ├── contexts
    ├── lib
    └── pages
        ├── Home
        ├── Login
        ├── NotFound
        └── Secret
```

### Server

The `server` folder is organized as follows:

```
server
├── controllers
│   └── api
├── lib
└── models


