# Lesson 25 - Lazy Loading and View Lifecycle

## Date

24-07-2026

---

# Objective

In this lesson, I learned how SAPUI5 improves application performance using Lazy Loading. I understood how the Router creates Views only when required, how View Caching works, and the complete lifecycle of a SAPUI5 View from creation to destruction.

---

# Introduction

Enterprise SAPUI5 applications may contain dozens of pages such as:

- Dashboard
- Employees
- Projects
- Assets
- Leave Management
- Reports
- Settings

Loading every View during application startup would significantly increase loading time and memory usage.

To solve this problem, SAPUI5 uses **Lazy Loading**.

---

# What is Lazy Loading?

Lazy Loading is a performance optimization technique where resources are loaded only when they are actually needed.

Instead of loading every View at application startup, SAPUI5 loads only the initial View.

Additional Views are created when the user navigates to them.

---

# Why Lazy Loading is Important

Suppose WorkSphere contains ten different pages.

If every View requires approximately 300 milliseconds to load:

```
10 × 300 ms = 3000 ms
```

The application would spend approximately three seconds loading pages that the user may never open.

Lazy Loading avoids this unnecessary work.

---

# Lazy Loading Flow

Application Starts

↓

Dashboard View

↓

Only Dashboard is loaded

↓

User clicks Employees

↓

Employee View is created

↓

User clicks Projects

↓

Project View is created

Only the Views that are visited are loaded into memory.

---

# Role of the Router

The SAPUI5 Router controls View creation.

Navigation Flow:

```
User

↓

Router

↓

Route

↓

Target

↓

View
```

When a Route matches, the Router checks whether the corresponding View already exists.

If not, SAPUI5 creates it automatically.

---

# Example

Application starts:

```
#/dashboard
```

Dashboard View is created.

Later:

```
#/employees
```

Employee View is created.

Later:

```
#/projects
```

Project View is created.

Views are loaded on demand.

---

# What is View Caching?

Once a View has been created, SAPUI5 stores it in memory.

When the user revisits the same page, SAPUI5 reuses the existing View instead of creating it again.

Example:

```
Dashboard

↓

Employees

↓

Dashboard

↓

Employees
```

The Employee View is created only once.

Subsequent visits reuse the cached View.

---

# Benefits of View Caching

- Faster navigation
- Lower CPU usage
- Better user experience
- Reduced View creation overhead

---

# SAPUI5 View Lifecycle

Every View follows a lifecycle.

```
Create

↓

Initialize

↓

Render

↓

User Interaction

↓

Re-render

↓

Destroy
```

---

# 1. Create

The Router creates the View object.

Example:

```
Employee.view.xml
```

is instantiated.

---

# 2. Initialize

The Controller's `onInit()` method executes once.

Typical activities:

- Register Route Events
- Create Models
- Initialize variables
- Read startup parameters

---

# 3. Render

SAPUI5 converts the XML View into HTML.

The page becomes visible to the user.

---

# 4. User Interaction

Users interact with the application.

Examples:

- Clicking buttons
- Searching records
- Editing forms
- Saving data

---

# 5. Re-render

When data changes, SAPUI5 updates only the affected controls.

The entire View is not recreated.

This makes UI updates efficient.

---

# 6. Destroy

When the View is no longer required or the application exits, SAPUI5 destroys the View and releases memory.

---

# View Lifecycle Diagram

```
Router

↓

Create View

↓

onInit()

↓

Render

↓

User Interaction

↓

Re-render

↓

Destroy
```

---

# WorkSphere Example

Application Startup:

```
Dashboard
```

Only Dashboard View is loaded.

User navigates:

```
Employees
```

Employee View is created.

User navigates:

```
Projects
```

Project View is created.

User returns:

```
Employees
```

The existing Employee View is reused.

No new View is created.

---

# SAP Fiori Example

Manage Sales Orders App:

Application Startup:

```
Sales Order List
```

Only the List View is loaded.

User opens a Sales Order.

```
Sales Order Details
```

The Details View is created only when required.

This is Lazy Loading.

---

# Lazy Loading vs Eager Loading

| Lazy Loading | Eager Loading |
|--------------|---------------|
| Loads resources when needed | Loads everything at startup |
| Faster startup | Slower startup |
| Lower memory usage | Higher memory usage |
| Better scalability | Poor scalability |
| Preferred in SAPUI5 | Rarely used |

---

# Advantages

✅ Faster application startup

✅ Better memory utilization

✅ Improved application performance

✅ Reduced network traffic

✅ Better scalability

---

# Best Practices

✅ Keep `onInit()` lightweight.

✅ Load data only when required.

✅ Let the Router manage View creation.

✅ Use data binding instead of manually updating controls.

✅ Reuse Views through SAPUI5 View Caching.

---

# Common Mistakes

❌ Loading unnecessary data during startup.

❌ Assuming all Views are loaded at application startup.

❌ Recreating Views manually.

❌ Ignoring SAPUI5's built-in caching mechanism.

---

# Interview Questions

## Beginner

### What is Lazy Loading?

Lazy Loading is a technique where resources are loaded only when they are required instead of during application startup.

---

### Why does SAPUI5 use Lazy Loading?

To improve application startup time, reduce memory usage, and increase overall performance.

---

## Intermediate

### What is View Caching?

After a View is created for the first time, SAPUI5 stores it in memory and reuses it during future navigation instead of recreating it.

---

### Who creates Views in SAPUI5?

The SAPUI5 Router creates Views automatically when a Route matches.

---

## Advanced

### Explain the SAPUI5 View Lifecycle.

The lifecycle consists of:

- Create
- Initialize (`onInit()`)
- Render
- User Interaction
- Re-render
- Destroy

---

# Key Learnings

After completing this lesson, I understand:

- What Lazy Loading is.
- Why SAPUI5 uses Lazy Loading.
- How the Router creates Views.
- How View Caching improves performance.
- The complete SAPUI5 View Lifecycle.
- Performance best practices for enterprise applications.

---

# Notes

SAPUI5 uses Lazy Loading to create Views only when required. Once created, Views are cached and reused, improving application performance and reducing startup time. Understanding the View Lifecycle helps developers write efficient and maintainable SAPUI5 applications.

---

# My Understanding

Lazy Loading is one of the core performance features of SAPUI5. Instead of loading every View during application startup, the Router creates Views only when users navigate to them. These Views are cached for future use, reducing processing time and improving responsiveness. This architecture enables enterprise applications like WorkSphere to scale efficiently while maintaining excellent performance.