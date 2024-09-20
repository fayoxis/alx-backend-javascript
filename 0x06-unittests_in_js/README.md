# 🧮Unit Tests in JavaScript

This project focuses on learning how to create unit tests in Node.js using Mocha, a popular JavaScript testing framework. Unit tests are an essential part of software development, helping ensure code quality, maintainability, and robustness.

## 🧮Learning Objectives

- How to use Mocha to write a test suite.
- How to use different assertion libraries (Node.js or Chai).
- How to present and organize long test suites.
- When and how to use spies and stubs in testing.
- What hooks are and when to use them.
- Unit testing with asynchronous functions.
- How to write integration tests with a small Node.js server.

## Tasks

### 1. Basic Test with Mocha and Node Assertion Library

- **Install Mocha:** Use npm to install Mocha and set up a script in your `package.json` file to run Mocha tests quickly with `npm test`.
- **Create a `calculateNumber` Function:** In `0-calcul.js`, create a function named `calculateNumber` that takes two number arguments `a` and `b`. The function should round `a` and `b` and return their sum.
- **Write Test Cases:** In `0-calcul.test.js`, create test cases for the `calculateNumber` function. Assume `a` and `b` are always numbers, and focus your tests on the rounding behavior.
- **Requirements:** Use the `assert` library from Node.js. Run the test suite with `npm test 0-calcul.test.js`. All tests should pass without warnings.

### 🧮2. Combining Descriptions

- **Upgrade the `calculateNumber` Function:** In `1-calcul.js`, upgrade the `calculateNumber` function from the previous task. Add a new string argument `type` at the beginning of the function. `type` can be `"SUM"`, `"SUBTRACT"`, or `"DIVIDE"`.
  - When `type` is `"SUM"`, round `a` and `b`, and add them.
  - When `type` is `"SUBTRACT"`, round `a` and `b`, and subtract `b` from `a`.
  - When `type` is `"DIVIDE"`, round `a` and `b`, and divide `a` by `b`. If the rounded value of `b` is 0, return the string `"Error"`.
- **Write Test Cases:** In `1-calcul.test.js`, create test cases for the upgraded `calculateNumber` function. Organize your tests using `describe` blocks to group related cases.
- **Requirements:** Use the `assert` library from Node.js. Run the test suite with `npm test 1-calcul.test.js`. All tests should pass without warnings.

Throughout this project, you will learn various testing techniques, such as using assertion libraries, organizing test suites, testing asynchronous code, and writing integration tests. These skills are crucial for ensuring the quality and reliability of your JavaScript applications.
