# Lesson 19 - SAPUI5 Router and navTo()

## Date

24-07-2026

---

# Objective

In this lesson, I learned about the SAPUI5 Router, how it manages navigation within an application, how controllers access the Router, and how the `navTo()` method is used to navigate between different pages based on configured routes.

---

# Introduction

Navigation is one of the most important features of every SAPUI5 application.

Instead of manually creating and destroying Views, SAPUI5 uses a Router to manage page navigation.

The Router works together with the routing configuration defined in `manifest.json`.

---

# What is the Router?

The Router is the navigation engine of a SAPUI5 application.

Its responsibilities include:

- Reading the browser URL
- Matching URL patterns with Routes
- Loading the correct Target
- Creating the View
- Creating the Controller
- Displaying the requested page

Without the Router, navigation between pages would need to be handled manually.

---

# Router Lifecycle

When the application starts:

```
Component.js

↓

Router Created

↓

Router.initialize()

↓

Read Browser URL

↓

Match Route

↓

Find Target

↓

Load View

↓

Display Page
```

The Router continuously monitors the browser URL and reacts whenever the URL changes.

---

# Router Initialization

The Router is initialized inside `Component.js`.

```javascript
init() {

    UIComponent.prototype.init.apply(this, arguments);

    this.setModel(models.createDeviceModel(), "device");

    this.getRouter().initialize();

}
```

The following line starts the Router.

```javascript
this.getRouter().initialize();
```

Without this line, routing and navigation will not work.

---

# Accessing the Router

Controllers need access to the Router whenever they want to navigate.

Recommended approach:

```javascript
const oRouter = this.getOwnerComponent().getRouter();
```

Explanation:

- `this` → Current Controller
- `getOwnerComponent()` → Returns the application Component
- `getRouter()` → Returns the Router instance

This is the standard approach used in enterprise SAPUI5 applications.

---

# Alternative Method

Some SAPUI5 examples use:

```javascript
const oRouter = this.getRouter();
```

However, using:

```javascript
this.getOwnerComponent().getRouter();
```

is preferred because it always retrieves the Router from the owning Component.

---

# What is navTo()?

`navTo()` is the Router method used to navigate to another Route.

Syntax:

```javascript
oRouter.navTo("routeName");
```

Example:

```javascript
const oRouter = this.getOwnerComponent().getRouter();

oRouter.navTo("dashboard");
```

The Router searches for the Route named `dashboard` and performs the navigation.

---

# How navTo() Works

```
Button Click

↓

Controller

↓

Router.navTo()

↓

Browser URL Updated

↓

Route Matched

↓

Target Loaded

↓

View Created

↓

Controller Created

↓

Screen Displayed
```

The developer only calls `navTo()`.

SAPUI5 handles everything else.

---

# WorkSphere Example

Imagine WorkSphere contains the following pages:

```
Dashboard

Employees

Projects

Assets

Reports
```

User clicks the **Employees** button.

Controller:

```javascript
onEmployeesPress() {

    const oRouter = this.getOwnerComponent().getRouter();

    oRouter.navTo("employees");

}
```

Navigation Flow:

```
Dashboard

↓

Click Employees

↓

navTo("employees")

↓

#/employees

↓

EmployeeList View

↓

EmployeeList Controller
```

---

# Browser URL Update

Before navigation:

```
http://localhost:8080/index.html#/dashboard
```

After navigation:

```
http://localhost:8080/index.html#/employees
```

SAPUI5 automatically updates the browser URL.

---

# Why Use Route Names?

Notice:

```javascript
oRouter.navTo("employees");
```

We navigate using the **Route name**, not the View name.

Incorrect:

```javascript
oRouter.navTo("EmployeeList.view.xml");
```

Correct:

```javascript
oRouter.navTo("employees");
```

The Route determines which Target and View should be loaded.

---

# Passing Parameters (Introduction)

The Router also allows passing data while navigating.

Example:

```javascript
oRouter.navTo("employeeDetails", {

    employeeId: "1001"

});
```

Result:

```
#/employeeDetails/1001
```

This allows one View to display different data depending on the parameter.

Route parameters will be covered in detail in later lessons.

---

# Complete Navigation Flow

```
User Clicks Button

↓

Controller

↓

getOwnerComponent()

↓

getRouter()

↓

navTo()

↓

Browser URL Updated

↓

Route Matched

↓

Target Selected

↓

View Loaded

↓

Controller Created

↓

Page Displayed
```

---

# Real Enterprise Example

Employee Portal:

```
Login

↓

Dashboard

↓

Employees

↓

Employee Details

↓

Projects

↓

Reports
```

Every page transition is performed using the Router and `navTo()`.

---

# Best Practices

✅ Always use `this.getOwnerComponent().getRouter()`.

✅ Navigate using Route names.

✅ Keep navigation logic inside Controllers.

✅ Configure Routes in `manifest.json`.

✅ Avoid creating Views manually.

---

# Common Mistakes

❌ Creating Views manually.

❌ Navigating using View names instead of Route names.

❌ Hardcoding URLs.

❌ Forgetting to initialize the Router.

❌ Mixing navigation with business logic.

---

# Interview Questions

## Beginner

### What is the SAPUI5 Router?

The Router manages navigation by matching browser URLs with configured Routes and loading the appropriate Target Views.

---

## Intermediate

### How do you access the Router inside a Controller?

```javascript
const oRouter = this.getOwnerComponent().getRouter();
```

---

## Advanced

### What does `navTo()` do?

`navTo()` navigates to a configured Route, updates the browser URL, matches the Route, loads the corresponding Target View, creates its Controller, and displays the page.

---

# Key Learnings

After completing this lesson, I understand:

- What the Router is
- Why the Router is required
- How the Router is initialized
- How Controllers access the Router
- How `navTo()` performs navigation
- Why Route names are used
- The complete navigation lifecycle

---

# Notes

The SAPUI5 Router is the central navigation manager of the application. Controllers retrieve the Router from the owning Component and call `navTo()` to navigate to configured Routes. The Router automatically updates the browser URL, matches the Route, loads the Target View, creates its Controller, and displays the page.

---

# My Understanding

The Router is like the navigation manager of a SAPUI5 application. Instead of manually loading pages, Controllers simply request navigation using `navTo()`. The Router takes care of the complete process—updating the browser URL, matching the Route, loading the correct View, creating the Controller, and displaying the requested page. This makes navigation clean, reusable, and scalable for enterprise applications such as WorkSphere.