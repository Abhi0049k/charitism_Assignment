# Charitism_Assignment

### Endpoints

Following are the endpoints that are exposed for managing our node.js application: 


1. **User Registration:**
    - Endpoint: `https://todobackend-ak0c.onrender.com/user/register/`
    - Method: POST
    - Body: 
    ```json
    {
        "email": "email_id@email.com",
        "password": "password"
    }
    ```

2. **User Login:**
    - Endpoint: `https://todobackend-ak0c.onrender.com/user/login`
    - Method: POST
    - BODY:
    ```json
    {
        "email": "email_id@email.com",
        "password": "password"
    }
    ```

3. **Creating a New Todo:**
    - Endpoint: `https://todobackend-ak0c.onrender.com/todo/`
    - Method: POST
    - Body: 
    ```json
    {
        "title": "Task 1",
        "description": "description"
    }
    ```
    - Headers: Bearer Token

4. **Getting all the Todos**
    - Endpoint: `https://todobackend-ak0c.onrender.com/todo/`
    - Method: GET
    - Headers: Bearer Token

5. **Updating a Todo:**
    - Endpoint: `https://todobackend-ak0c.onrender.com/todo/:id`
    - Method: PATCH
    - Param: id

5. **Deleting a Todo:**
    - Endpoint: `https://todobackend-ak0c.onrender.com/todo/:id`
    - Method: PATCH
    - Param: id

##
Backend URL 
https://todobackend-ak0c.onrender.com/