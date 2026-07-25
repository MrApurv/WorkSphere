# 📚 Lesson 39 – Login Validation & Controller Logic

> **Topic:** Implementing Login Validation, Event Handling, and Controller Logic in SAPUI5

---

# 🎯 Learning Objective

After completing this lesson, you will understand:

- MVC Controller
- Controller Lifecycle
- Event Handling
- Button Press Events
- Input Validation
- ValueState
- ValueStateText
- Private Methods
- MessageBox
- MessageToast
- Login Flow
- Best Practices
- Common Mistakes
- Interview Questions

---

# 📖 Introduction

A beautiful Login Page is only useful if it performs proper validation and responds correctly to user actions.

In SAPUI5, all business logic belongs inside the **Controller**.

The View is responsible for displaying the UI, while the Controller manages user interactions and application logic.

For WorkSphere, we implemented validation to ensure users enter valid credentials before proceeding to the Dashboard.

---

# 🏗 MVC Architecture

```text
User

↓

View (Login.view.xml)

↓

Controller (Login.controller.js)

↓

Validation

↓

Navigation

↓

Dashboard
```

The View captures user input, and the Controller processes it.

---

# 📄 Login Controller

Every SAPUI5 View has an associated Controller.

Example

```javascript
sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("com.apurv.worksphere.controller.Login", {

    });

});
```

The Controller contains all the logic for the Login page.

---

# Event Handling

An event is triggered when a user interacts with a control.

Examples:

- Button Press
- Input Change
- Checkbox Select
- Link Press

In WorkSphere, we mainly use the **Sign In** button press event.

---

# Button Press Event

View

```xml
<Button
    text="Sign In"
    press=".onSignIn"/>
```

Controller

```javascript
onSignIn: function () {

}
```

When the button is clicked, the `onSignIn()` function executes.

---

# Accessing Input Values

We retrieve values entered by the user.

Example

```javascript
const sUsername = this.byId("usernameInput").getValue();
const sPassword = this.byId("passwordInput").getValue();
```

`this.byId()` finds the control by its ID.

`getValue()` returns the user's input.

---

# Input Validation

Validation ensures required fields are not left empty.

Example

```javascript
if (!sUsername) {

}
```

Validation prevents invalid or incomplete data from being processed.

---

# Validation Flow

```text
User Clicks Sign In

↓

Read Username

↓

Read Password

↓

Validate Username

↓

Validate Password

↓

Success?

↓

Navigate to Dashboard
```

---

# Private Methods

To keep the code clean and reusable, validation logic is moved into private helper methods.

Example

```javascript
_validateUsername: function () {

}
```

```javascript
_validatePassword: function () {

}
```

Benefits:

- Better readability
- Reusable code
- Easier maintenance

---

# ValueState

SAPUI5 provides `ValueState` to visually indicate validation results.

Types:

- None
- Error
- Warning
- Success
- Information

Example

```javascript
oInput.setValueState("Error");
```

The input field is highlighted in red.

---

# ValueStateText

Provides a custom validation message.

Example

```javascript
oInput.setValueStateText("Username is required");
```

The message appears when the user focuses on the input.

---

# MessageToast

Used for short informational messages.

Example

```javascript
MessageToast.show("Login Successful");
```

Characteristics:

- Appears briefly
- Automatically disappears
- Non-blocking

Use for success notifications.

---

# MessageBox

Used for important messages requiring user attention.

Example

```javascript
MessageBox.error("Invalid Username or Password");
```

Common Types:

- error
- warning
- success
- information
- confirm

Use when user acknowledgement is required.

---

# Login Flow

```text
User Opens Login

↓

Enters Username

↓

Enters Password

↓

Clicks Sign In

↓

Validation

↓

Credentials Valid

↓

Navigate to Dashboard
```

---

# Navigation After Login

Once validation succeeds, the Router navigates to the Dashboard.

Example

```javascript
this.getOwnerComponent()
    .getRouter()
    .navTo("RouteDashboard");
```

The Router loads the Dashboard View without refreshing the browser.

---

# Separation of Responsibilities

```text
View

↓

Displays UI

--------------------

Controller

↓

Handles Logic

--------------------

Router

↓

Handles Navigation
```

Keeping these responsibilities separate improves maintainability.

---

# Error Handling

Typical validation checks include:

- Empty Username
- Empty Password
- Invalid Credentials
- Unexpected Errors

Proper error handling improves user experience and application reliability.

---

# Best Practices

✔ Keep business logic inside the Controller.

✔ Keep the View free from JavaScript logic.

✔ Use private helper methods for validation.

✔ Use meaningful function names.

✔ Display user-friendly error messages.

✔ Use `MessageToast` for success messages.

✔ Use `MessageBox` for important alerts.

✔ Validate inputs before navigation.

---

# Common Mistakes

❌ Writing business logic inside XML Views.

❌ Duplicating validation code.

❌ Navigating before validation.

❌ Ignoring empty input fields.

❌ Using generic error messages.

❌ Forgetting to reset `ValueState`.

---

# WorkSphere Login Process

```text
Application Starts

↓

Login View

↓

User Enters Username

↓

User Enters Password

↓

Sign In

↓

Validation

↓

Message (if required)

↓

Dashboard
```

---

# Interview Questions

## Q1. What is the responsibility of a Controller in SAPUI5?

**Answer**

The Controller handles user interactions, business logic, event processing, and communication between the View and the application.

---

## Q2. Why should validation be performed in the Controller?

**Answer**

Validation belongs to the business logic layer. Keeping it in the Controller maintains a clean separation between UI and logic.

---

## Q3. What is `ValueState`?

**Answer**

`ValueState` visually indicates the validation status of an input control, such as Error, Success, Warning, or Information.

---

## Q4. What is the difference between `MessageToast` and `MessageBox`?

**Answer**

`MessageToast` displays temporary, non-blocking notifications.

`MessageBox` displays modal dialogs that require user attention before continuing.

---

## Q5. Why are private helper methods useful?

**Answer**

They improve readability, reduce duplicate code, and make the Controller easier to maintain and test.

---

# 📝 Quick Revision

- Controller contains business logic.
- Events trigger Controller methods.
- `this.byId()` accesses UI controls.
- `getValue()` reads user input.
- `ValueState` indicates validation status.
- `MessageToast` shows temporary messages.
- `MessageBox` displays important alerts.
- Router handles navigation after successful validation.

---

# 🎯 Lesson Summary

In this lesson, we implemented the **Controller logic** for the WorkSphere Login Page. We learned how to handle button events, retrieve input values, validate user input, use `ValueState` for visual feedback, display messages with `MessageToast` and `MessageBox`, and navigate to the Dashboard using the SAPUI5 Router. Following the MVC pattern keeps the application organized, maintainable, and scalable.

---

# 🚀 Next Lesson

## **Lesson 40 – Building the WorkSphere Shell Layout**

Topics:

- ToolPage
- Header
- Side Navigation
- Main Content Area
- Responsive Navigation
- Shell Architecture
- Navigation Events
- Best Practices