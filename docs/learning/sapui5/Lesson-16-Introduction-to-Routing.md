# Lesson 16 - Introduction to Routing

## Date

23-07-2026

---

# Objective

In this lesson, I learned what Routing is, why it is required in SAPUI5 applications, how it works internally, and how SAPUI5 navigates between different views using the Router. I also understood the relationship between Routes, Targets, Views, Controllers, and Browser URLs.

---

# What is Routing?

Routing is the navigation mechanism provided by SAPUI5.

It allows the application to move from one view to another automatically based on the browser URL.

Instead of manually loading views, SAPUI5 uses a Router that reads the URL, identifies the matching route, and loads the correct target view.

---

# Why Do We Need Routing?

Imagine WorkSphere without routing.

```
Dashboard

↓

Developer creates Employee View manually

↓

Destroy Current View

↓

Load Another View

↓

Repeat for every page
```

Problems:

- Difficult to maintain
- Duplicate code
- Poor scalability
- Hard to manage navigation

With Routing:

```
Dashboard

↓

Router

↓

Employee List

↓

Router

↓

Employee Details
```

Navigation becomes centralized and automatic.

---

# Real WorkSphere Navigation

Future WorkSphere application:

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

Assets

↓

Reports

↓

Settings
```

Every screen is a separate View.

Routing determines which View should be displayed.

---

# Real-Life Analogy

Imagine Google Maps.

```
Current Location

↓

Destination

↓

Google Maps

↓

Best Route
```

Similarly,

```
Current View

↓

Target View

↓

SAPUI5 Router

↓

Correct Navigation
```

The Router acts like a navigation system for the application.

---

# Components of Routing

SAPUI5 Routing consists of several components:

```
Browser URL

↓

Router

↓

Route

↓

Target

↓

View

↓

Controller
```

Each component has a specific responsibility.

---

# Browser URL

The Browser URL represents the current state of the application.

Example:

```
http://localhost:8080/index.html#/dashboard
```

Current Route:

```
dashboard
```

Another example:

```
http://localhost:8080/index.html#/employees
```

Current Route:

```
employees
```

Everything after `#` is called the **Hash**.

SAPUI5 monitors this hash to determine which page should be displayed.

---

# Router

The Router is the navigation engine of SAPUI5.

Responsibilities:

- Read URL Hash
- Match Routes
- Find Target
- Load View
- Create Controller
- Display Screen

The Router is initialized in `Component.js`.

```javascript
this.getRouter().initialize();
```

Without this line, navigation will not work.

---

# Route

A Route is a navigation rule.

It tells SAPUI5:

> "If the browser URL matches this pattern, load the corresponding target."

Example:

```
employees
```

This is only a pattern.

It does not specify which View to load.

---

# Target

A Target tells SAPUI5 which View should be displayed.

Example:

```
Employee.view.xml
```

The Router first finds the Route, then loads the Target.

---

# View

The View is responsible for:

- UI Controls
- Layout
- Data Binding

Example:

```
Dashboard.view.xml

Employee.view.xml

Project.view.xml
```

---

# Controller

Every View has a corresponding Controller.

Responsibilities:

- Handle user actions
- Business Logic
- Navigation
- Backend calls

Example:

```
Dashboard.controller.js

Employee.controller.js
```

---

# Complete Routing Flow

```
User Clicks Button

↓

Controller

↓

Router.navTo()

↓

Browser URL Updated

↓

Router Reads URL

↓

Route Matched

↓

Target Found

↓

View Loaded

↓

Controller Created

↓

Page Displayed
```

---

# Routing Configuration

Routing is configured inside:

```
manifest.json
```

Location:

```
sap.ui5

↓

routing
```

Example:

```json
"routing": {

}
```

The routing section defines:

- Config
- Routes
- Targets

These will be discussed in the next lesson.

---

# Why Enterprise Applications Need Routing

Enterprise applications may contain:

- 50+ Views
- 100+ Controllers
- Multiple Navigation Paths

Routing provides:

- Centralized Navigation
- URL Synchronization
- Browser Back Button Support
- Better User Experience
- Easier Maintenance

---

# Benefits of Routing

- Automatic View Loading
- Browser URL Synchronization
- Better Navigation
- Cleaner Architecture
- Easier Maintenance
- Reusable Navigation Logic

---

# Best Practices

✅ Configure routes only in `manifest.json`.

✅ Keep navigation logic inside controllers.

✅ Use meaningful route names.

✅ Let the Router manage navigation.

---

# Common Mistakes

❌ Loading Views manually.

❌ Hardcoding URLs.

❌ Duplicating navigation logic.

❌ Ignoring browser URL synchronization.

---

# Interview Questions

## Beginner

### What is Routing?

Routing is the mechanism that enables navigation between different Views based on browser URL patterns.

---

## Intermediate

### Why is Routing required?

Routing centralizes navigation, automatically loads Views, and keeps the browser URL synchronized with the application state.

---

## Advanced

### Which component is responsible for navigation?

The SAPUI5 Router reads the browser URL, matches a Route, loads the Target View, creates the Controller, and displays the page.

---

# Key Learnings

After completing this lesson, I understand:

- What Routing is
- Why Routing is required
- The purpose of the Router
- The difference between Route and Target
- How Views and Controllers participate in navigation
- The complete Routing Flow
- Why enterprise applications rely on Routing

---

# Notes

Routing is the navigation framework of SAPUI5. It connects browser URLs with application views, making navigation automatic and maintainable. The Router reads the URL, identifies the correct Route, loads the Target View, and displays it to the user.

---

# My Understanding

Routing is like a GPS system for a SAPUI5 application. Instead of manually loading pages, the Router reads the browser URL, matches it with a configured Route, loads the corresponding Target View, creates its Controller, and displays the page. This makes WorkSphere scalable, user-friendly, and easy to maintain as new pages are added.