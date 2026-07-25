# 📚 Lesson 36 – SAPUI5 Routing Fundamentals

> **Topic:** Understanding Routing in SAPUI5

---

# 🎯 Learning Objective

After completing this lesson, you will understand:

- What Routing is
- Why Routing is important
- How Routing works internally
- Router
- Route
- Target
- Pattern
- Navigation Flow
- Routing Architecture
- Best Practices
- Common Mistakes
- Interview Questions

---

# 📖 What is Routing?

Routing is the mechanism that allows us to navigate from one page (View) to another within a SAPUI5 application **without reloading the browser**.

Instead of opening a new HTML page, SAPUI5 dynamically loads different XML Views into the application's container.

Think of routing as a GPS that decides **which screen should be displayed** based on the application's URL.

---

# ❓ Why Do We Need Routing?

Imagine building WorkSphere without routing.

Every time the user clicks on:

- Dashboard
- Employees
- Projects
- Reports

the entire application would reload.

This causes:

- Poor performance
- Loss of application state
- Slow navigation
- Bad user experience

Routing solves this problem by loading only the required View.

---

# 💡 Example

## Without Routing

```text
User Clicks Employees

↓

Browser Reloads

↓

Entire Application Loads Again

↓

Employees Page Opens
```

---

## With Routing

```text
User Clicks Employees

↓

Router Detects Route

↓

Employees View Loads

↓

Browser Never Reloads
```

---

# 🚀 Routing in WorkSphere

Our application's navigation flow will look like:

```text
Application Starts

↓

Login

↓

Dashboard

↓

Employees

↓

Projects

↓

Reports

↓

Settings
```

Every navigation inside WorkSphere will use Routing.

---

# 🏨 Real-Life Analogy

Imagine a hotel.

The receptionist decides which room a guest should enter.

The receptionist doesn't build a new room every time.

Instead, they simply open the correct room.

```text
Guest

↓

Receptionist

↓

Room Number

↓

Guest Enters Room
```

Similarly,

```text
User

↓

Router

↓

Target View

↓

View Opens
```

---

# 🏗 Routing Architecture

```text
Browser

↓

Component.js

↓

Router

↓

Route

↓

Target

↓

XML View

↓

Displayed to User
```

Every navigation request follows this architecture.

---

# 🔑 Important Routing Components

---

## 1️⃣ Router

The Router is responsible for navigation inside the application.

It listens for URL changes and loads the correct View.

### Example

```javascript
this.getRouter().navTo("employees");
```

Meaning:

Navigate to the Employees page.

---

## 2️⃣ Route

A Route defines **when navigation should happen**.

### Example

```json
{
    "name": "RouteLogin",
    "pattern": "",
    "target": "TargetLogin"
}
```

Meaning:

When the URL is empty,

↓

Open the Login View.

---

## 3️⃣ Pattern

Pattern represents the application's URL.

### Example 1

```text
""
```

Means

```text
http://localhost:8080
```

---

### Example 2

```text
employees
```

Means

```text
http://localhost:8080/#/employees
```

---

### Example 3

```text
projects
```

Means

```text
http://localhost:8080/#/projects
```

The Pattern acts as the application's address.

---

## 4️⃣ Target

Target tells SAPUI5 **which View should be opened**.

### Example

```json
"TargetLogin": {
    "name": "Login"
}
```

Meaning:

Target Login

↓

Load `Login.view.xml`

---

# 🔄 Complete Routing Flow

Suppose the user opens WorkSphere.

```text
http://localhost:8080
```

Internally SAPUI5 performs:

```text
Application Starts

↓

Component.js

↓

Router Initializes

↓

Pattern = ""

↓

RouteLogin Found

↓

TargetLogin

↓

Login.view.xml

↓

Login Page Displayed
```

---

# ⚙ How Routing Works Internally

```text
User Opens URL

↓

Router Checks Available Routes

↓

Pattern Matches

↓

Target Found

↓

View Loaded

↓

View Displayed
```

---

# 🧭 Navigation Types

## Forward Navigation

```text
Login

↓

Dashboard

↓

Employees
```

Code:

```javascript
this.getRouter().navTo("employees");
```

---

## Back Navigation

```text
Employees

↓

Dashboard

↓

Login
```

Usually handled through browser history or routing history.

---

# 🌍 Traditional Website vs SAPUI5 Routing

## Traditional Website

```text
Home.html

↓

Employees.html

↓

Projects.html

↓

Dashboard.html
```

Every click reloads the browser.

---

## SAPUI5

```text
App

↓

Employees View

↓

Projects View

↓

Dashboard View
```

Only the View changes.

The browser never reloads.

---

# ✅ Advantages of Routing

### Faster Navigation

Only the required View is loaded.

---

### Better Performance

No browser reload.

---

### Better User Experience

Smooth page transitions.

---

### Bookmark Support

Every page can have its own URL.

---

### Browser History

Back and Forward buttons work correctly.

---

# 💼 Best Practices

✔ Always use Routing instead of manually creating Views.

✔ Use meaningful Route names.

Good Example:

```text
dashboard
employees
projects
reports
```

Bad Example:

```text
page1
page2
page3
```

---

✔ Keep one Route per View.

---

✔ Configure Routing inside `manifest.json`.

---

✔ Use `navTo()` for navigation.

Example:

```javascript
this.getRouter().navTo("dashboard");
```

---

# ❌ Common Mistakes

### Creating Views manually

Bad Practice

```javascript
new XMLView(...)
```

Always use Routing.

---

### Reloading the application unnecessarily

Avoid refreshing the browser for navigation.

---

### Using confusing Route names

Avoid:

```text
page1
page2
abc
xyz
```

---

### Forgetting to initialize the Router

```javascript
this.getRouter().initialize();
```

Without this line,

Routing will never work.

---

# 🏢 WorkSphere Example

When WorkSphere starts:

```text
URL

↓

Pattern ""

↓

Login View
```

After Login:

```text
User Clicks Sign In

↓

Router

↓

Dashboard Route

↓

Dashboard View Opens
```

Later:

```text
Dashboard

↓

Employees

↓

Projects

↓

Reports

↓

Settings
```

Everything will use Routing.

---

# 🎤 Interview Questions

## Q1. What is Routing in SAPUI5?

**Answer:**

Routing is the navigation mechanism used to switch between Views inside a SAPUI5 application without reloading the browser.

---

## Q2. Why do we use Routing?

**Answer:**

To improve performance, provide smooth navigation, maintain browser history, and enable bookmarkable URLs.

---

## Q3. What are the main Routing components?

**Answer:**

- Router
- Route
- Pattern
- Target
- View

---

## Q4. Where is Routing configured?

**Answer:**

Routing is configured inside **manifest.json** under the **sap.ui5.routing** section.

---

## Q5. Which method is used for navigation?

```javascript
this.getRouter().navTo("RouteName");
```

---

# 📝 Quick Revision

- Routing enables navigation without page reload.
- Router manages application navigation.
- Route defines navigation rules.
- Pattern represents the URL.
- Target specifies which View to load.
- Routing is configured in `manifest.json`.
- Use `navTo()` for navigation.
- Initialize the Router in `Component.js`.

---

# 💻 Git Commands

```bash
git status

git add .

git commit -m "docs: add Lesson 36 SAPUI5 Routing Fundamentals notes"

git push origin main
```

---

# 🎯 Lesson Summary

In this lesson, we learned the **fundamentals of SAPUI5 Routing**, including the roles of the Router, Routes, Patterns, and Targets. We also explored how routing enables smooth navigation without reloading the browser and how it forms the foundation of navigation in the WorkSphere application.

---

# 🚀 Next Lesson

## **Lesson 37 – SAPUI5 Routing Configuration**

Topics:

- Routing Configuration in `manifest.json`
- `Component.js`
- `App.view.xml`
- `controlId`
- `controlAggregation`
- `viewPath`
- Routes
- Targets
- Router Initialization
- Navigation Flow
- Best Practices