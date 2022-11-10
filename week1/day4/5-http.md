# HTTP
HyperText Transfer Protocol

HTTP is the language of the web

It occurs Layer 7 of the OSI (Application Layer)

Protocol for transfering data across the internet

# HTTP Request
Is made by the client and sent to a server
The request will carry information on it such as any data, the request method, and any additional meta data

# HTTP Response
When a web server receives an HTTP request it will process before sending back an HTTP response

A response is sent by the web server to pass back any data that user requested or any error that may have occured

# HTTP Methods
Methods are used to add semantic meaning to our HTTP requests

4 main ones 
GET - Retrieve a resource (R)
POST - Creating a resource (C)
PUT - Updating a resource (Putting in a new tire) (U)
DELETE - Deletes a resources (D)

(CRUD acronym - create, read, update and delete)

Others:
HEAD - Same as a GET request, but the request body is ignored (ping) 
PATCH - Updating a resource (Taking an existing tire and just patching one spot)
OPTIONS - Asks the server what options are allowed before moving forward

# HTTP Status Codes
Status codes are used to indicate what happened during our HTTP request

5 Categories
- 1xx Informational 
- 2xx Success
- 3xx Redirects 
- 4xx Client Side Error (You messed up)
- 5xx Server Side Error (They messed up) 

Specific Status Codes
- 100 Continue (Continue with your operations, sit tight, processing things everything fine so far)
- 200 OK (Successful operation) *** 
- 201 Created (Resource Created - Used with POST) * 
- 307 Temporary Redirect (Traffic Detour, Down temporaliy, will be back later) 
- 308 Permanent Redirect (We'll redirect you, but please use this place instead)

- 400 Bad Request (Syntax Error, Missing fields in request body) ** 
- 401 Unauthorized (You don't have the credentials) * 
- 403 Forbidden (Don't have access rights to the content) 
- 404 Not Found (Requested a resource that the server couldn't find or doesn't exist) *** 
- 405 Method Not Allowed (No CONNECT requests for example) 
- 418 I'm a teapot (April Fool's Joke) ********************
- 500 Internal Server Error (Something went wrong) *** 
- 502 Bad Gateway (Request got messed up) 
- 503 Service Unavailable - down for maintenance 
- 504 Request Timeout (Request hung)

# Idempotency
- The ability to perform/apply the same method multiple times in conjunction and have the same effect each time

- GET is idempotent because I can request the same resource many times without changing what I get back
  - Think of this as looking at a piece of cake. I can look as much as I want without altering things

- PUT is idempotent because if I update something many times, it's functionally the same effect
    - That's still a job well done

- DELETE is idempotent
  - Same reason. Deleting multiple times will still result in it being deleted so job well done
  
- POST is NOT idempotent
  - Creating a resource is not the same effect because it's brand new
  - Doing two POST requests should result in 2 new entities being created

  (patch is not idempotent. in most cases it is, but in 1 case you can do something and its not)