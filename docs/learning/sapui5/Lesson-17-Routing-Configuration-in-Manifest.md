# Lesson 17 - Routing Configuration in manifest.json

## Date

24-07-2026

---

# Objective

In this lesson, I learned how SAPUI5 configures application routing using the `routing` section in `manifest.json`. I understood the purpose of the `config`, `routes`, and `targets` sections, as well as the meaning of properties such as `routerClass`, `viewType`, `path`, `controlId`, `controlAggregation`, `transition`, and `async`.

---

# Where is Routing Configured?

Routing configuration is located inside:

```
webapp/

↓

manifest.json

↓

sap.ui5

↓

routing
```

Example:

```json
{
    "sap.ui5": {
        "routing": {

        }
    }
}
```

The SAPUI5 Router reads this configuration when the application starts.

---

# Routing Structure

The routing configuration consists of three main sections.

```
routing

├── config
├── routes
└── targets
```

Each section has a different responsibility.

---

# config

The `config` section contains the default routing settings that apply to every route unless overridden.

Example:

```json
"config": {
    "routerClass": "sap.m.routing.Router",
    "type": "View",
    "viewType": "XML",
    "path": "com.apurv.worksphere.view",
    "controlId": "app",
    "controlAggregation": "pages",
    "transition": "slide",
    "async": true
}
```

Instead of repeating these settings for every route, SAPUI5 reads them once from the `config` section.

---

# routerClass

```json
"routerClass": "sap.m.routing.Router"
```

This specifies which Router implementation SAPUI5 should use.

The standard router for responsive applications is:

```
sap.m.routing.Router
```

Responsibilities:

- Read browser URL
- Match routes
- Load target views
- Navigate between pages

---

# type

```json
"type": "View"
```

The `type` property tells SAPUI5 what kind of object the Router should load.

Common value:

```
View
```

In almost all SAPUI5 applications, routing targets are Views.

---

# viewType

```json
"viewType": "XML"
```

This specifies the technology used to create the View.

Supported view types include:

- XML
- JS
- HTML
- JSON

XML Views are the recommended and most widely used option for enterprise SAPUI5 development.

---

# path / viewPath

```json
"path": "com.apurv.worksphere.view"
```

Older SAPUI5 versions may use:

```json
"viewPath": "com.apurv.worksphere.view"
```

This property defines the namespace where SAPUI5 should search for Views.

Example:

```
webapp

↓

view

↓

App.view.xml

↓

Dashboard.view.xml

↓

Employee.view.xml
```

SAPUI5 automatically combines this base path with the target's `viewName`.

---

# controlId

```json
"controlId": "app"
```

The Router needs to know which UI control should display the loaded Views.

Usually this refers to an `sap.m.App` control inside `App.view.xml`.

Example:

```xml
<App id="app">

</App>
```

The Router inserts pages into this control.

---

# controlAggregation

```json
"controlAggregation": "pages"
```

A UI control may contain different aggregations.

For `sap.m.App`, the correct aggregation is:

```
pages
```

The Router places each loaded View into this aggregation.

---

# transition

```json
"transition": "slide"
```

Defines the animation used when navigating between pages.

Common transitions:

- slide
- fade
- flip
- show
- none

Animations improve the user experience.

---

# async

```json
"async": true
```

Enables asynchronous loading of Views.

Benefits:

- Faster startup
- Better performance
- Non-blocking UI
- Improved responsiveness

Modern SAPUI5 applications should keep this enabled.

---

# routes

The `routes` section defines URL patterns.

Example:

```json
"routes": [
    {
        "name": "dashboard",
        "pattern": "",
        "target": "dashboard"
    }
]
```

Meaning:

```
URL Pattern

↓

Route Name

↓

Target
```

The Route determines **when** navigation occurs.

---

# targets

The `targets` section defines which View should be displayed.

Example:

```json
"targets": {
    "dashboard": {
        "viewName": "Dashboard"
    }
}
```

Meaning:

```
Target

↓

Dashboard.view.xml
```

The Target determines **what** should be displayed.

---

# Relationship Between Routes and Targets

```
Browser URL

↓

Route

↓

Target

↓

View

↓

Controller

↓

User Interface
```

The Router first matches a Route and then loads the corresponding Target.

---

# Complete Routing Flow

```
User Opens URL

↓

Router Reads URL

↓

Route Matches

↓

Target Found

↓

View Loaded

↓

Controller Created

↓

Displayed in App Control
```

---

# Why Separate Config, Routes, and Targets?

SAPUI5 separates routing into different sections for better organization.

### config

Stores common settings.

### routes

Defines navigation rules.

### targets

Defines the Views that should be displayed.

This separation reduces duplication and improves maintainability.

---

# Best Practices

✅ Keep common settings inside `config`.

✅ Use meaningful route names.

✅ Keep target names aligned with view names.

✅ Enable asynchronous View loading.

✅ Configure routing only inside `manifest.json`.

---

# Common Mistakes

❌ Incorrect `controlId`.

❌ Wrong `path` or `viewPath`.

❌ Missing Target definition.

❌ Duplicate Route names.

❌ Incorrect URL patterns.

---

# Interview Questions

## Beginner

### What is the purpose of the `routing` section?

The `routing` section defines how SAPUI5 navigates between different Views based on browser URL patterns.

---

## Intermediate

### What is the difference between a Route and a Target?

A Route specifies **when** navigation occurs by matching a URL pattern, while a Target specifies **which View** should be displayed.

---

## Advanced

### Why is the `config` section used?

The `config` section stores common routing settings shared by all routes, reducing duplication and making routing easier to maintain.

---

# Key Learnings

After completing this lesson, I understand:

- Where routing is configured
- The structure of the routing section
- The purpose of `config`
- The role of `routerClass`
- The purpose of `viewType`
- How `path` or `viewPath` works
- Why `controlId` and `controlAggregation` are required
- The purpose of `transition`
- Why `async` is enabled
- The difference between `routes` and `targets`
- The complete SAPUI5 routing flow

---

# Notes

The `routing` section inside `manifest.json` is the central configuration for navigation in SAPUI5. It defines the Router's behavior, URL patterns, and the Views that should be loaded. By separating configuration into `config`, `routes`, and `targets`, SAPUI5 provides a clean and maintainable navigation architecture.

---

# My Understanding

The `routing` section acts as the navigation blueprint of a SAPUI5 application. The `config` section stores common routing settings, `routes` define when navigation should occur based on URL patterns, and `targets` define which View should be displayed. During navigation, the Router reads the URL, matches the Route, finds the corresponding Target, loads the View, creates its Controller, and displays the page inside the application.