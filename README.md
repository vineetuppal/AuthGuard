# AuthGuard

**AuthGuard** is a secure Node.js application for user authentication and role-based access control (RBAC) using JSON Web Tokens (JWT) and MongoDB. This project provides a robust foundation for managing user roles (Admin, Student, Visitor) and protecting API routes based on permissions.

---

## Features

- **User Authentication**: Signup and login functionality with hashed passwords using bcrypt.
- **Role-Based Access Control**: Protects routes based on user roles (Admin, Student, Visitor).
- **JWT Token Management**: Secure token generation and verification for session management.
- **Middleware Protection**: Middleware to authenticate users and enforce role-specific access.
- **Environment Configuration**: Secrets and database URLs managed via `.env` file.

---

## API Endpoints

### **Authentication Routes**

1. **Signup**
   - **URL**: `/api/v1/signup`
   - **Method**: `POST`
   - **Request Body**:
     ```json
     {
       "name": "John Doe",
       "email": "john.doe@example.com",
       "password": "your_password",
       "role": "Student"
     }
     ```
   - **Response**:
     ```json
     {
       "success": true,
       "message": "User Created Successfully"
     }
     ```

2. **Login**
   - **URL**: `/api/v1/login`
   - **Method**: `POST`
   - **Request Body**:
     ```json
     {
       "email": "john.doe@example.com",
       "password": "your_password"
     }
     ```
   - **Response**:
     ```json
     {
       "success": true,
       "token": "your_jwt_token",
       "user": {
         "name": "John Doe",
         "email": "john.doe@example.com",
         "role": "Student"
       }
     }
     ```

### **Protected Routes**

1. **Test Route** (Authenticated Users)
   - **URL**: `/api/v1/test`
   - **Method**: `GET`
   - **Headers**:
     ```json
     {
       "Authorization": "Bearer your_jwt_token"
     }
     ```
   - **Response**:
     ```json
     {
       "success": true,
       "message": "Welcome to the protected route for Test."
     }
     ```

2. **Student Route** (Students Only)
   - **URL**: `/api/v1/student`
   - **Method**: `GET`
   - **Headers**:
     ```json
     {
       "Authorization": "Bearer your_jwt_token"
     }
     ```
   - **Response**:
     ```json
     {
       "success": true,
       "message": "Welcome to the protected route for Students."
     }
     ```

3. **Admin Route** (Admins Only)
   - **URL**: `/api/v1/admin`
   - **Method**: `GET`
   - **Headers**:
     ```json
     {
       "Authorization": "Bearer your_jwt_token"
     }
     ```
   - **Response**:
     ```json
     {
       "success": true,
       "message": "Welcome to the protected route for Admins."
     }
     ```

---

## Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose)
- **Authentication**: JSON Web Tokens (JWT), bcrypt
- **Environment Management**: dotenv

---

## Folder Structure

```
AuthGuard
├── config
│   └── database.js        # MongoDB connection setup
├── controllers
│   └── auth.js            # Authentication logic
├── middlewares
│   └── auth.js            # Middleware for authentication and role-based access
├── models
│   └── user.js            # Mongoose schema for user
├── routes
│   └── user.js            # API routes
├── .env                   # Environment variables
├── .gitignore             # Ignored files
├── package.json           # Project metadata and dependencies
└── server.js              # Entry point of the application
```
