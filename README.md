# Chicago Citations Generator and Book Log

<div style="text-align:center">
  ![giphy](https://github.com/codedbycass/Citations-Auth/assets/122684139/01dc54ae-53de-416d-955a-a6f11bbc5d0a)
</div>

## What

This complete full-stack application serves as a Chicago Style Citations generator for books, allowing users to log their thoughts about each book. Users must be logged in to access the book log. After logging in, users can enter the book's details, provide their thoughts, and generate a citation. Upon form submission, users can add their thoughts to reflect on their reading experience!

## How It's Made

The Chicago Citations Generator and Book Log is built using the following technologies:

- **Node.js**: Employed for server-side development.
- **JavaScript (JS)**: Utilized for both client and server-side functionality.
- **EJS**: Dynamically renders HTML after pulling information from the database.
- **APIs**: Integrated to enhance the application's features.
- **MongoDB**: Used as the database to store book log data.

The core functionality is implemented on the server side using CRUD (Create, Read, Update, Delete) operations to handle user book log data. On the client side, event listeners are utilized, allowing users to initiate CRUD functions by interacting with buttons on the interface.

Key Packages Used:

- **mongoose**: Facilitates interaction with MongoDB.
- **passport**: Manages user authentication.
- **express**: Provides a framework for building the web application.

The dynamic nature of this website allows users, after submitting the form, to interact with the server for both read and update operations. The edit functionality is implemented by toggling another form in the EJS template with a class of "hidden," enabling users to add tags to the book.

## What I've Learned

Developing the Chicago Citations Generator and Book Log has provided valuable insights:

- **Comprehensive Testing**: It's crucial to check all moving pieces, including the server, client, and database using debugging tools. Directly inspecting the database ensures that update requests are being sent.
- **Data Type Consistency**: Ensuring consistency in data types between the server, client-side logic, and the database is essential for seamless operations.
- **Continuous Improvement**: Acknowledging that the application is a work in progress and identifying areas for enhancement, such as allowing tags to be clicked to reference all books with the same tag.

Future Plans:

- **Enhanced Tag Functionality**: Plan to enable users to click tags and reference all books with the same tag. This feature aims to facilitate exploration of related topics and resources.

The ongoing development of this application reflects a commitment to refining its features and providing users with an improved and more interconnected experience.
