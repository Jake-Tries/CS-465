CS 465 Final Reflection Journal

Architecture

Throughout this project, I worked with several different approaches to frontend development. The customer-facing side of the application used Express with HTML, JavaScript, and Handlebars templates, which relied on server-side rendering to dynamically display trip data. Later in the course, I built the administrator side using Angular as a single-page application (SPA). Unlike the Express application, Angular allowed components to update dynamically without requiring a full page refresh. While Express was simpler for rendering customer-facing pages, Angular provided a more interactive and scalable solution for administrative functions such as adding, editing, and deleting trip information.

The backend used MongoDB as a NoSQL database because of its flexibility and ability to store data in JSON-like documents. Since the application needed to manage trip information and user authentication data, MongoDB worked well with JavaScript and integrated smoothly with Mongoose, making it easier to organize and manage data throughout development.

Functionality

JSON played an important role in connecting the frontend and backend of the application. While JavaScript is a programming language used to build both frontend and backend logic, JSON is simply a lightweight format used to structure and transfer data between different parts of the application. In this project, trip data was stored in MongoDB, sent through the Express API as JSON, and then consumed by the Angular frontend to display and update information.

Throughout development, I refactored code multiple times to improve organization and efficiency. One major example was moving from static HTML pages to reusable Angular components such as trip cards, trip listing pages, and edit forms. I also created services to centralize API communication instead of repeating request logic throughout the application. Reusable UI components improved maintainability, reduced duplicate code, and made future updates significantly easier.

Testing

Testing became increasingly important as more functionality was added to the application. API endpoints were tested using Postman to verify GET, POST, PUT, and DELETE requests were correctly interacting with MongoDB. Understanding endpoints helped reinforce how the frontend communicates with the backend through structured HTTP requests. Once authentication was added, testing became more complex because login credentials had to be validated before secure administrative functions could be accessed.

Adding security through JSON Web Tokens (JWT) helped me better understand how modern applications restrict unauthorized access. Protected routes, login authentication, and secure API communication demonstrated how security becomes an important part of full stack development beyond simply making an application function correctly.

Reflection

This course helped me better understand how all parts of a full stack application work together, from frontend design to backend logic, database management, API communication, and security implementation. Before this course, I had worked on programming projects in other classes, but this was my first experience building a full application that connected multiple technologies together into a working product.

The biggest skills I developed were working with MongoDB databases, building RESTful APIs with Express and Node.js, creating single-page applications with Angular, and implementing authentication using JWT security. I also gained more experience troubleshooting code, debugging larger projects, and understanding how frontend and backend systems communicate. These are practical skills that directly improve my ability to work on real-world software projects and make me a stronger candidate as I continue working toward a career in software development.
