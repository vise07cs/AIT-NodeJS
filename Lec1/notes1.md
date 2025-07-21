
# LEC-1

-----> NodeJS / ExpressJS / MongoDB 

nodeJS -------> JS Runtime

ExpressJS -------> framework of NodeJS

MongoDB -----> DB 


By the end of the session we should be able to build server side application and manage DB 

* JavaScript knowledge is mandatory

------------------------------------------------------------------------------------------------------------------------------

🟩 1. Client (Front-end) – React
Built using React.js.

Runs in the user's browser.

Displays the UI, handles user interactions, and sends HTTP requests (usually via fetch() or axios) to the server.

Example: A user fills a registration form and submits it → React sends that data to the server.

🟩 2. Server (Back-end) – Express + Node
Built using Node.js and Express.js.

Runs on a server (remote or local).

Handles business logic, routing, and interacts with the database.

Receives requests from the client, processes them, and sends back responses (often JSON).

Example: React sends a POST request to /api/register → Express handles it, stores the data in MongoDB, and responds with success/failure.

🟩 3. Database – MongoDB
Stores application data in a flexible, JSON-like format.

Accessed by the server using Mongoose (ODM library).

Example: User data, posts, comments, etc.


