# SAPUI5 Bootcamp – Lesson 06

# SAPUI5 Architecture & Application Lifecycle

**Date:** 23-07-2026

**Difficulty:** ⭐⭐⭐☆☆

**Project:** WorkSphere

---

# Objective

The objective of this lesson is to understand the overall architecture of a SAPUI5 application and learn what happens internally from the moment a user opens the application until the user interface is displayed.

After completing this lesson, I should be able to:

- Explain what SAPUI5 is.
- Explain what SAP Fiori is.
- Differentiate between SAPUI5 and SAP Fiori.
- Understand the MVC architecture.
- Explain the SAPUI5 application lifecycle.
- Describe the responsibility of each application component.

---

# What is SAPUI5?

SAPUI5 is a JavaScript framework developed by SAP for building responsive, enterprise-grade web applications.

It provides a rich collection of reusable UI controls and follows modern web development principles such as MVC architecture, data binding, routing, internationalization, and responsive design.

SAPUI5 applications can run on desktops, tablets, and mobile devices without requiring separate applications for each platform.

---

# Why SAPUI5?

Without SAPUI5, developers would have to manually create:

- Buttons
- Tables
- Forms
- Dialogs
- Navigation
- Responsive layouts
- Validation
- Themes
- Accessibility features

SAPUI5 already provides all of these as reusable controls, allowing developers to focus on solving business problems instead of building common UI components from scratch.

---

# Key Features of SAPUI5

- Enterprise-grade framework
- Responsive design
- MVC Architecture
- Routing
- Data Binding
- OData Integration
- Internationalization (i18n)
- Theme Support
- Large collection of reusable controls
- Security support
- Accessibility support

---

# SAPUI5 vs SAP Fiori

Many beginners assume SAPUI5 and SAP Fiori are the same, but they serve different purposes.

| SAPUI5 | SAP Fiori |
|---------|-----------|
| JavaScript Framework | Design System |
| Used for application development | Defines user experience and design guidelines |
| Provides controls, routing, models, data binding | Provides layouts, colors, UX principles |
| Technical implementation | User experience and visual design |

## Simple Analogy

Think of a car.

Engine = SAPUI5

Car Design = SAP Fiori

A beautiful design without an engine cannot move.

An engine without a design cannot become a usable product.

Both are required to build a complete enterprise application.

---

# MVC Architecture

SAPUI5 follows the MVC (Model-View-Controller) architectural pattern.

MVC separates an application into three independent layers.

```
User
   │
   ▼
 View
   │
   ▼
Controller
   │
   ▼
 Model
```

This separation makes applications easier to understand, maintain, test, and extend.

---

# Model

The Model is responsible for managing application data.

Examples:

- Employee data
- Product data
- Customer information
- Sales orders

The Model acts as the data source for the application.

---

# View

The View is responsible for displaying the user interface.

Typical UI elements include:

- Buttons
- Labels
- Inputs
- Tables
- Forms
- Dialogs
- Lists

The View should only contain presentation logic.

Typical file:

```
App.view.xml
```

---

# Controller

The Controller contains the application's business logic.

Examples:

- Save employee
- Delete record
- Validate input
- Navigate to another page
- Call backend services

Typical file:

```
App.controller.js
```

---

# Why MVC?

MVC offers several advantages.

- Better code organization
- Separation of responsibilities
- Easier debugging
- Better maintainability
- Improved scalability
- Easier testing
- Team members can work independently on different layers

---

# SAPUI5 Project Structure

The UI portion of a SAPUI5 application resides inside the **webapp** folder.

```
webapp
│
├── controller
├── css
├── i18n
├── model
├── test
├── view
├── Component.js
├── index.html
└── manifest.json
```

Each file and folder has a specific responsibility within the application.

---

# SAPUI5 Application Lifecycle

When a user opens a SAPUI5 application, the following sequence occurs.

```
User

↓

Browser

↓

index.html

↓

SAPUI5 Bootstrap

↓

Component.js

↓

manifest.json

↓

Libraries

↓

Models

↓

Routing

↓

View

↓

Controller

↓

Application Ready
```

This startup sequence is followed by almost every SAPUI5 application.

---

# Application Startup Flow

## Step 1

The user opens the application URL.

Example: 

```
http://localhost:8080
```

---

## Step 2

The browser loads

```
index.html
```

This file bootstraps the SAPUI5 framework.

---

## Step 3

The SAPUI5 framework initializes and loads

```
Component.js
```

This acts as the application's entry point.

---

## Step 4

Component.js loads

```
manifest.json
```

---

## Step 5

The manifest file reads the application configuration.

Examples:

- Libraries
- Models
- Routing
- Root View
- Dependencies

---

## Step 6

Routing determines which View should be displayed.

---

## Step 7

The View is created.

Example:

```
App.view.xml
```

---

## Step 8

The corresponding Controller is instantiated.

Example:

```
App.controller.js
```

---

## Step 9

The application is rendered and displayed to the user.

---

# Real WorkSphere Example

```
Employee

↓

Open WorkSphere

↓

Browser

↓

index.html

↓

SAPUI5 Bootstrap

↓

Component.js

↓

manifest.json

↓

Dashboard View

↓

Dashboard Controller

↓

Dashboard Displayed
```

This same lifecycle will occur every time a user opens the WorkSphere application.

---

# Important Files

| File | Responsibility |
|------|----------------|
| index.html | Starts the SAPUI5 application |
| Component.js | Initializes the application |
| manifest.json | Stores application configuration |
| App.view.xml | Defines the user interface |
| App.controller.js | Contains business logic |

---

# Interview Questions

## Q1. What is SAPUI5?

SAPUI5 is SAP's JavaScript framework for developing responsive enterprise web applications.

---

## Q2. What is SAP Fiori?

SAP Fiori is SAP's design system that provides user experience guidelines and design principles.

---

## Q3. Difference between SAPUI5 and SAP Fiori?

SAPUI5 is the development framework.

SAP Fiori is the design language.

---

## Q4. What does MVC stand for?

Model

View

Controller

---

## Q5. What is the responsibility of the Model?

It manages application data.

---

## Q6. What is the responsibility of the View?

It displays the user interface.

---

## Q7. What is the responsibility of the Controller?

It contains the application's business logic.

---

## Q8. Which file starts a SAPUI5 application?

```
index.html
```

---

## Q9. Which file initializes the application?

```
Component.js
```

---

## Q10. What is manifest.json?

It is the central configuration file of a SAPUI5 application.

---

# Key Takeaways

- SAPUI5 is a JavaScript framework.
- SAP Fiori is a design system.
- SAPUI5 follows MVC architecture.
- MVC separates UI, business logic, and data.
- Every SAPUI5 application starts from `index.html`.
- `Component.js` initializes the application.
- `manifest.json` contains application configuration.
- Understanding the application lifecycle is essential for SAPUI5 development and interviews.

---

# My Understanding

*(Write this section after completing the lesson.)*

Example:

> Today I learned how a SAPUI5 application starts internally. I now understand the difference between SAPUI5 and SAP Fiori, the purpose of MVC architecture, and the complete startup lifecycle from `index.html` to rendering the first View. This lesson provided the foundation for understanding the internal working of SAPUI5 applications.

---