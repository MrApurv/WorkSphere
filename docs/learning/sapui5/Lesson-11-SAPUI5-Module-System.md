# Lesson 11 - SAPUI5 Module System (sap.ui.define)

## Date

23-07-2026

---

# Objective

In this lesson, I learned how SAPUI5 organizes JavaScript code using its module system. I understood why every SAPUI5 file starts with `sap.ui.define()`, how dependencies are loaded, and how SAPUI5 uses Dependency Injection to provide modules to the application.

---

# What is a Module?

A module is an independent JavaScript file that contains a specific piece of functionality.

Instead of writing the entire application in one large JavaScript file, SAPUI5 divides the application into multiple reusable modules.

Examples:

- Component.js
- models.js
- App.controller.js
- BaseController.js
- formatter.js

Each file performs one specific responsibility.

---

# Why Do We Need Modules?

Imagine the WorkSphere application without modules.

```
Application

↓

One JavaScript File

↓

20,000+ Lines

↓

Very Difficult to Maintain
```

Now with modules:

```
Component

↓

Models

↓

Controllers

↓

Views

↓

Utilities

↓

Formatters
```

Each module can be developed, tested, and maintained independently.

---

# What is sap.ui.define()?

`sap.ui.define()` is SAPUI5's module definition function.

It is responsible for:

- Defining a module
- Loading dependencies
- Waiting until all dependencies are available
- Executing the module
- Returning the module to SAPUI5

Every SAPUI5 JavaScript file usually begins with `sap.ui.define()`.

---

# Basic Syntax

```javascript
sap.ui.define(
    [
        "dependency1",
        "dependency2"
    ],
    function (dependency1, dependency2) {

        // Module code

    }
);
```

---

# WorkSphere Example

```javascript
sap.ui.define([
    "sap/ui/core/UIComponent",
    "com/apurv/worksphere/model/models"
], (UIComponent, models) => {

});
```

Here SAPUI5 loads:

```
UIComponent.js

↓

models.js

↓

Executes Component.js
```

The application starts only after all required modules have been loaded successfully.

---

# Understanding Dependencies

The first parameter of `sap.ui.define()` is an array of module paths.

Example:

```javascript
[
    "sap/ui/core/UIComponent",
    "com/apurv/worksphere/model/models"
]
```

These are the files that must be loaded before the current module executes.

---

# Dependency Injection

After loading the dependencies, SAPUI5 automatically passes them into the callback function.

Example:

```javascript
sap.ui.define([
    "sap/ui/core/UIComponent"
], (UIComponent) => {

});
```

Flow:

```
Dependency Path

↓

Load File

↓

Create Object

↓

Pass Object

↓

JavaScript Variable
```

Therefore:

```
sap/ui/core/UIComponent

↓

UIComponent
```

Similarly,

```
com/apurv/worksphere/model/models

↓

models
```

This process is known as **Dependency Injection**.

---

# Why Does SAPUI5 Use Dependency Injection?

Benefits:

- No global variables
- Better modularity
- Better testing
- Better maintainability
- Automatic dependency management

---

# Module Path Convention

SAPUI5 uses forward slashes (`/`) instead of dots (`.`).

Example:

```
sap/ui/core/UIComponent
```

represents:

```
sap
 └── ui
      └── core
           └── UIComponent.js
```

Similarly,

```
com/apurv/worksphere/model/models
```

represents:

```
webapp/
└── model/
    └── models.js
```

---

# Asynchronous Module Definition (AMD)

SAPUI5 follows the AMD (Asynchronous Module Definition) pattern.

Instead of loading modules one by one synchronously, SAPUI5 can load multiple modules asynchronously.

Benefits:

- Faster application startup
- Better performance
- Reduced loading time
- Improved scalability

---

# sap.ui.define() vs sap.ui.require()

## sap.ui.define()

- Creates a new module
- Used inside JavaScript files
- Executes only after dependencies are loaded
- Returns a reusable module

Example:

```javascript
sap.ui.define([
    "sap/m/Button"
], function(Button){

});
```

---

## sap.ui.require()

Used when an application needs to load an existing module dynamically.

Example:

```javascript
sap.ui.require([
    "sap/m/MessageToast"
], function(MessageToast){

    MessageToast.show("Hello");

});
```

Difference:

```
sap.ui.define()

↓

Defines Modules
```

```
sap.ui.require()

↓

Uses Existing Modules
```

---

# SAPUI5 vs ES6 Modules

Modern JavaScript

```javascript
import Button from "sap/m/Button";
```

SAPUI5

```javascript
sap.ui.define([
    "sap/m/Button"
], function(Button){

});
```

Both achieve the same goal:

Importing modules.

---

# SAPUI5 vs Node.js

Node.js

```javascript
const fs = require("fs");
```

SAPUI5

```javascript
sap.ui.define([
    "sap/ui/core/UIComponent"
], function(UIComponent){

});
```

Both systems organize code into reusable modules.

---

# Internal Working

```
Application Starts

↓

Component.js

↓

sap.ui.define()

↓

Read Dependency List

↓

Load Required Modules

↓

Dependency Injection

↓

Execute Module

↓

Return Module

↓

Continue Application Startup
```

---

# Real WorkSphere Example

Current Component.js

```
sap.ui.define()

↓

Load UIComponent

↓

Load models.js

↓

Create Component

↓

Read manifest.json

↓

Initialize Device Model

↓

Initialize Router
```

---

# Advantages of the SAPUI5 Module System

- Modular Architecture
- Code Reusability
- Easier Maintenance
- Better Testing
- Better Performance
- Dependency Management
- Reduced Global Variables

---

# Best Practices

✅ Load only required dependencies

✅ Keep modules focused on a single responsibility

✅ Match dependency order with callback parameters

✅ Remove unused imports

✅ Follow SAPUI5 namespace conventions

---

# Common Mistakes

❌ Incorrect module path

❌ Wrong dependency order

❌ Forgetting to include required modules

❌ Using global variables

❌ Importing unused modules

---

# Interview Questions

## Beginner

### What is `sap.ui.define()`?

It is SAPUI5's module definition function used to define JavaScript modules and load their dependencies.

---

## Intermediate

### What is Dependency Injection?

Dependency Injection is the process where SAPUI5 automatically provides loaded modules as parameters to the callback function.

---

## Advanced

### Why does SAPUI5 use AMD?

SAPUI5 uses Asynchronous Module Definition (AMD) to load JavaScript modules asynchronously, improving application performance and scalability.

---

# Key Learnings

After completing this lesson, I understand:

- What a module is
- Why modules are required
- How `sap.ui.define()` works
- How SAPUI5 loads dependencies
- What Dependency Injection is
- Why SAPUI5 uses AMD
- Difference between `sap.ui.define()` and `sap.ui.require()`
- Difference between SAPUI5 modules and ES6 modules
- Difference between SAPUI5 modules and Node.js modules

---

# Notes

Every SAPUI5 JavaScript file is organized as a module.

The framework first loads all required dependencies, injects them into the callback function, and then executes the module.

This modular approach makes SAPUI5 applications scalable, maintainable, and easier to develop.

---

# My Understanding

The SAPUI5 Module System allows applications to be divided into small reusable JavaScript modules. Using `sap.ui.define()`, SAPUI5 loads all required dependencies, injects them into the callback function, and executes the module only after everything is available. This approach avoids global variables, improves maintainability, and provides a structured architecture for enterprise applications like WorkSphere.