# 🧮 NodeJS Basics: Understanding the Fundamentals

This project aims to help you learn the basics of NodeJS, a powerful runtime environment for executing JavaScript on the server-side. Through a series of tasks, you'll gain practical experience in working with Node.js and its core modules, allowing you to build server-side applications and handle various operations efficiently.

## 🧮Tasks to Complete

1. **Executing Basic JavaScript with Node.js**
   - This task introduces you to running JavaScript code using Node.js.
   - The provided file `0-console.js` contains a module that exports a function named `displayMessage`. This function simply prints the provided string argument to the console (STDOUT).

2. **Using Process stdin**
   - In this task, you'll learn how to interact with the command-line interface (CLI) using Node.js.
   - The `1-stdin.js` script prompts the user to enter their name, displays a welcome message with the provided name, and prints a closing message when the program ends.

3. **Reading a File Synchronously with Node.js**
   - This task focuses on reading files synchronously using Node.js.
   - The `2-read_file.js` module exports a `countStudents` function that takes a file path as an argument.
   - The function reads a CSV file (database.csv) containing student data and performs the following operations:
     - If the database file is not available, it throws an error with the message "Cannot load the database".
     - If the file is available, it logs the total number of students and the number of students in each field (e.g., "Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES").

4. **Reading a File Asynchronously with Node.js**
   - Building upon the previous task, this exercise demonstrates how to read files asynchronously using Node.js.
   - The `3-read_file_async.js` module exports a `countStudents` function that takes a file path as an argument.
   - The function reads the same CSV file (database.csv) asynchronously and returns a Promise.
   - If the database file is not available, it throws an error with the message "Cannot load the database".
   - If the file is available, it logs the same information as in the previous task, but using an asynchronous approach.

Throughout these tasks, you'll gain hands-on experience with Node.js and its core modules, such as the `fs` module for file operations and the `process` module for interacting with the CLI. You'll also learn how to handle synchronous and asynchronous operations, which is crucial in building efficient and responsive server-side applications.

By completing these tasks, you'll develop a solid understanding of Node.js fundamentals, setting the foundation for more advanced topics and real-world application development.
