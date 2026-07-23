# Lesson 07 - Understanding manifest.json

## Date
23-07-2026

---

# Objective

In this lesson, I learned what the **manifest.json** file is, why it is required in a SAPUI5 application, how SAPUI5 uses it during application startup, and how it is configured in the WorkSphere project.

---

# What is manifest.json?

`manifest.json` is the **central configuration file** of a SAPUI5 application.

Instead of writing configuration inside JavaScript files, SAPUI5 stores most application settings in this single file.

It defines:

- Application information
- UI libraries
- Models
- Routing
- Root View
- Resources
- Device support
- Application dependencies

Think of it as the **configuration blueprint** of the application.

---

# Why do we need manifest.json?

Without `manifest.json`, developers would need to configure everything manually inside `Component.js`.

SAP introduced this file to separate:

- Configuration
- Business Logic

This makes the application:

- Easier to maintain
- Easier to understand
- Easier to extend
- More standardized

---

# Where is manifest.json located?

```
frontend/
└── worksphere/
    └── webapp/
        └── manifest.json
```

---

# Application Startup Flow

When the user opens the application, SAPUI5 follows this sequence:

```
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

Models Initialized

↓

Router Initialized

↓

Root View Loaded

↓

Application Ready
```

**Important**

`manifest.json` is **not** the first file executed.

The execution order is:

```
index.html

↓

Component.js

↓

manifest.json
```

---

# Main Sections of manifest.json

The WorkSphere application currently contains the following major sections:

```
manifest.json

├── sap.app
├── sap.ui
├── sap.ui5
│
├── dependencies
├── models
├── resources
├── routing
└── rootView
```

Each section has a specific responsibility.

---

# sap.app

This section contains the basic information about the application.

Example:

```json
"sap.app": {
    "id": "com.apurv.worksphere",
    "type": "application"
}
```

### Purpose

Stores:

- Application ID
- Version
- Title
- Description
- Resource configuration

---

# sap.ui

This section contains UI-related configuration.

Example:

```json
"sap.ui": {
    "technology": "UI5"
}
```

It also defines supported devices.

Example:

- Desktop
- Tablet
- Mobile

---

# sap.ui5

This is the largest and most important section.

It contains the application configuration such as:

- Libraries
- Models
- Routing
- Root View
- Resources
- Content Densities

Most SAPUI5 development happens inside this section.

---

# dependencies

Defines which SAPUI5 libraries are required.

Current WorkSphere libraries:

- sap.m
- sap.ui.core

SAPUI5 loads these libraries before starting the application.

---

# models

Registers application models.

Current model:

```
i18n
```

Later, WorkSphere will also use:

- JSONModel
- ODataModel

---

# routing

Defines application navigation.

Currently the application contains a single route.

In future WorkSphere development, routing will manage navigation between:

- Dashboard
- Assets
- Employees
- Work Orders
- Reports
- Settings

---

# rootView

Defines the first screen that SAPUI5 loads.

Current root view:

```
App.view.xml
```

Whenever the application starts, this view is loaded first.

---

# Internal Working

```
index.html

↓

Component.js

↓

Read manifest.json

↓

Load Libraries

↓

Create Models

↓

Initialize Router

↓

Load Root View

↓

Display Application
```

---

# Why is manifest.json Important?

Without this file:

- No application metadata
- No routing
- No models
- No root view
- No library configuration

It acts as the application's central configuration file.

---

# WorkSphere Configuration

Current Application ID

```
com.apurv.worksphere
```

Current Root View

```
App.view.xml
```

Current Libraries

```
sap.m
sap.ui.core
```

Current Model

```
i18n
```

---

# Best Practices

- Keep configuration inside `manifest.json`.
- Avoid hardcoding configuration in `Component.js`.
- Use meaningful application IDs.
- Organize routing properly.
- Register models centrally whenever possible.
- Keep the file clean and well-structured.

---

# Common Mistakes

❌ Incorrect application namespace

❌ Wrong routing configuration

❌ Duplicate model definitions

❌ Missing required libraries

❌ Forgetting to update namespaces after renaming a project

---

# Key Learnings

After completing this lesson, I understand:

- What `manifest.json` is
- Why SAPUI5 uses it
- Where it is located
- How SAPUI5 loads it
- What each major section is responsible for
- Why it is one of the most important files in every SAPUI5 application

---

# Notes

This lesson provides an overview of `manifest.json`.

The next lesson will explain every section of the WorkSphere `manifest.json` line by line, including:

- sap.app
- sap.ui
- sap.ui5
- dependencies
- models
- routing
- rootView

using the actual project configuration.

---

# My Understanding

`manifest.json` is the central configuration file of a SAPUI5 application.

Instead of storing configuration in JavaScript, SAPUI5 stores application metadata, routing, models, libraries, and startup configuration inside this file. During application startup, `Component.js` reads the `manifest.json`, initializes the application, creates models, starts the router, and loads the root view.