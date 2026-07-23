# Lesson 08 - Manifest.json Deep Dive

## Date

23-07-2026

---

# Objective

In this lesson, I explored every major section of the `manifest.json` file in detail. Instead of understanding only what the file is, I learned how SAPUI5 interprets each configuration during application startup and how these configurations are used in the WorkSphere project.

---

# Introduction

The `manifest.json` file is the heart of every SAPUI5 application.

It contains all application-level configurations such as:

- Application Metadata
- UI Configuration
- Dependencies
- Models
- Routing
- Resources
- Root View

SAPUI5 reads this file during application initialization and configures the application accordingly.

---

# Complete Structure

The current WorkSphere `manifest.json` looks similar to:

```
manifest.json

├── _version
├── sap.app
├── sap.ui
├── sap.ui5
│
├── dependencies
├── contentDensities
├── models
├── resources
├── routing
└── rootView
```

Each section has its own responsibility.

---

# 1. _version

Example

```json
"_version": "1.86.0"
```

## Purpose

This specifies the schema version of the manifest file.

It tells SAPUI5 which manifest specification is being used.

## Why is it required?

Different SAPUI5 versions support different manifest features.

The `_version` property ensures compatibility between the framework and the manifest structure.

## Best Practice

Never modify this value manually unless instructed by SAP documentation.

---

# 2. sap.app

Example

```json
"sap.app": {
    "id": "com.apurv.worksphere",
    "type": "application"
}
```

## Purpose

Contains the application's metadata.

### Common Properties

- id
- type
- title
- description
- applicationVersion
- i18n

## WorkSphere

Current ID

```
com.apurv.worksphere
```

This uniquely identifies the application.

## Best Practice

Application IDs should follow reverse domain naming.

Example

```
com.company.application
```

---

# 3. sap.ui

Example

```json
"sap.ui": {
    "technology": "UI5"
}
```

## Purpose

Contains UI-specific configurations.

Current configuration:

- Technology
- Icons
- Device Types

Supported Devices

```
Desktop

Tablet

Phone
```

This makes WorkSphere responsive across multiple devices.

---

# 4. sap.ui5

This is the most important section.

Almost every SAPUI5 project spends most of its configuration inside this section.

It contains

- Libraries
- Models
- Routing
- Resources
- Root View
- Content Densities

---

# Dependencies

Current configuration

```json
"dependencies": {
    "minUI5Version": "1.150.0",
    "libs": {
        "sap.m": {},
        "sap.ui.core": {}
    }
}
```

## Purpose

Defines

- Minimum SAPUI5 Version
- Required Libraries

### Current Libraries

```
sap.m

sap.ui.core
```

These libraries are automatically loaded before the application starts.

---

# Content Densities

Example

```json
"contentDensities": {
    "compact": true,
    "cozy": true
}
```

## Purpose

Controls spacing of SAPUI5 controls.

### Compact

Used mostly on Desktop.

Buttons and tables have smaller spacing.

### Cozy

Used mostly on Tablets and Mobile devices.

Controls become easier to touch.

---

# Models

Current Configuration

```
i18n
```

Purpose

Models store application data.

Current Model

```
ResourceModel

↓

i18n.properties
```

Future WorkSphere Models

```
JSONModel

↓

Temporary UI Data
```

```
ODataModel

↓

Backend Data
```

---

# Resources

Current Configuration

```json
"resources": {
    "css": [
        {
            "uri": "css/style.css"
        }
    ]
}
```

Purpose

Loads custom resources.

Current Resource

```
css/style.css
```

Later we can add

- Icons
- Fonts
- Theme Resources

---

# Routing

One of the most important sections.

Purpose

Controls navigation between application pages.

Current Flow

```
Application

↓

Route

↓

Target

↓

View

↓

Controller
```

Current Route

```
RouteApp
```

Future WorkSphere Routes

```
Dashboard

↓

Employees

↓

Assets

↓

Plant

↓

Reports

↓

Settings
```

---

# Root View

Current Configuration

```
App.view.xml
```

Purpose

Defines the first view loaded after the application starts.

Application Startup

```
index.html

↓

Component.js

↓

manifest.json

↓

App.view.xml
```

---

# Complete Startup Flow

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

Dependencies

↓

Models

↓

Router

↓

Root View

↓

Controller

↓

Application Ready
```

---

# WorkSphere Configuration Summary

Application ID

```
com.apurv.worksphere
```

Technology

```
UI5
```

Libraries

```
sap.m

sap.ui.core
```

Current Model

```
i18n
```

Current View

```
App.view.xml
```

Current Controller

```
App.controller.js
```

---

# Best Practices

✅ Keep application configuration inside `manifest.json`

✅ Keep routing centralized

✅ Register models in one place

✅ Use meaningful namespaces

✅ Load only required libraries

✅ Organize routes properly

---

# Common Mistakes

❌ Changing application ID after deployment

❌ Incorrect namespace

❌ Wrong routing paths

❌ Duplicate models

❌ Missing required libraries

❌ Hardcoding configurations inside JavaScript

---

# Real Project Example

WorkSphere currently uses:

```
Browser

↓

index.html

↓

Component.js

↓

manifest.json

↓

App.view.xml

↓

App.controller.js
```

Later, the same configuration will support:

```
Dashboard

↓

Employees

↓

Assets

↓

Maintenance

↓

Reports

↓

Settings
```

without changing the application's startup process.

---

# Key Learnings

After completing this lesson, I understand:

- Every important section inside `manifest.json`
- Why SAPUI5 introduced this file
- How SAPUI5 reads it
- How application startup depends on it
- How WorkSphere currently uses it
- Which configurations will grow as the project evolves

---

# My Understanding

The `manifest.json` file is the central configuration file of a SAPUI5 application. It defines the application's identity, required libraries, models, routing configuration, resources, and startup view. During application initialization, `Component.js` reads this file and uses it to configure the application before displaying the first screen. As WorkSphere grows, most application-level configurations will continue to be maintained inside `manifest.json`.