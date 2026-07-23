# Lesson 12 - UIComponent and Inheritance

## Date

23-07-2026

---

# Objective

In this lesson, I learned what `UIComponent` is, why every SAPUI5 application extends it, and how inheritance enables WorkSphere to reuse SAPUI5 framework functionality. I also understood how Object-Oriented Programming (OOP) concepts are applied in SAPUI5.

---

# What is UIComponent?

`UIComponent` is the **base application class** provided by the SAPUI5 framework.

Every SAPUI5 application extends this class to inherit the framework's built-in capabilities instead of implementing them manually.

It acts as the foundation of the application.

---

# Why Do We Extend UIComponent?

Instead of writing everything from scratch, SAPUI5 already provides many important features through `UIComponent`.

These include:

- Application Lifecycle
- Routing
- Model Management
- Manifest Loading
- Resource Management
- View Initialization

Our application only needs to add its own business logic.

---

# Real World Analogy

Imagine constructing a house.

Without UIComponent:

```
Build Foundation

↓

Build Walls

↓

Build Roof

↓

Build Plumbing

↓

Build Electricity
```

Everything must be built manually.

With UIComponent:

```
Ready Foundation

↓

Add Your Rooms

↓

Decorate

↓

Move In
```

SAPUI5 provides the foundation, while developers focus on business functionality.

---

# Object-Oriented Programming (OOP)

SAPUI5 follows Object-Oriented Programming principles.

The four pillars of OOP are:

- Encapsulation
- Inheritance
- Polymorphism
- Abstraction

In this lesson, we focus on **Inheritance**.

---

# What is Inheritance?

Inheritance allows one class to acquire the properties and methods of another class.

Example:

```
Animal

↓

Dog
```

Dog automatically inherits:

- eat()
- sleep()
- breathe()

Similarly,

```
UIComponent

↓

WorkSphere Component
```

WorkSphere inherits SAPUI5's application capabilities.

---

# WorkSphere Example

```javascript
return UIComponent.extend(
    "com.apurv.worksphere.Component",
    {

    }
);
```

This creates a new component class by extending `UIComponent`.

Our application becomes:

```
SAPUI5 Framework

↓

UIComponent

↓

WorkSphere Component

↓

Application Starts
```

---

# What Does extend() Do?

The `extend()` method creates a new class based on the parent class.

General Syntax

```javascript
ParentClass.extend("NewClass", {

});
```

In WorkSphere

```javascript
UIComponent.extend(
    "com.apurv.worksphere.Component",
    {

    }
);
```

The new component inherits all methods and properties from `UIComponent`.

---

# Methods Inherited from UIComponent

Some commonly used methods include:

## getRouter()

Returns the application's router.

Example:

```javascript
this.getRouter()
```

Used for navigation.

---

## setModel()

Registers a model.

Example:

```javascript
this.setModel(deviceModel, "device");
```

---

## getModel()

Retrieves a registered model.

Example:

```javascript
this.getModel("device");
```

---

## getManifest()

Returns the application's `manifest.json`.

---

## getManifestEntry()

Reads a specific section from `manifest.json`.

---

## destroy()

Destroys the component and releases resources.

---

# Why is Inheritance Important?

Without inheritance, developers would have to implement:

- Routing
- Model Management
- Resource Loading
- Manifest Reading
- Lifecycle Methods

for every application.

Inheritance eliminates duplicate code and promotes reusability.

---

# WorkSphere Initialization

```
Browser

↓

index.html

↓

SAPUI5 Bootstrap

↓

UIComponent

↓

WorkSphere Component

↓

manifest.json

↓

Models

↓

Router

↓

Root View

↓

Application Ready
```

---

# Relationship Between Component.js and UIComponent

```
UIComponent

↓

Provides Framework Features

↓

Component.js

↓

Adds Application Logic
```

Framework Responsibilities

- Routing
- Model Management
- Manifest Loading
- Lifecycle

Application Responsibilities

- Device Model
- Authentication
- Global Settings
- Business Logic

---

# Benefits of UIComponent

- Code Reusability
- Built-in SAPUI5 Features
- Easier Maintenance
- Standard Application Structure
- Better Performance
- Framework Integration

---

# Best Practices

✅ Always extend `UIComponent`

✅ Keep application-level logic inside `Component.js`

✅ Call the parent `init()` method

✅ Register only global models here

✅ Keep business logic inside controllers

---

# Common Mistakes

❌ Forgetting to call

```javascript
UIComponent.prototype.init.apply(this, arguments);
```

❌ Writing controller logic inside `Component.js`

❌ Creating duplicate models

❌ Ignoring inherited methods

---

# Real WorkSphere Example

Current Component

```
UIComponent

↓

Read manifest.json

↓

Create Device Model

↓

Initialize Router

↓

Load Root View
```

Future WorkSphere

```
UIComponent

↓

Authentication

↓

Theme Settings

↓

User Preferences

↓

OData Models

↓

Dashboard

↓

Employees

↓

Assets

↓

Reports
```

---

# Interview Questions

## Beginner

### What is UIComponent?

UIComponent is the base class of every SAPUI5 application that provides application lifecycle, routing, model management, and resource loading.

---

## Intermediate

### Why do we extend UIComponent?

To inherit SAPUI5 framework functionality instead of implementing it manually.

---

## Advanced

### Which methods are inherited from UIComponent?

Some commonly used inherited methods include:

- getRouter()
- setModel()
- getModel()
- getManifest()
- getManifestEntry()
- destroy()

---

# Key Learnings

After completing this lesson, I understand:

- What UIComponent is
- Why SAPUI5 applications extend it
- What inheritance means
- How SAPUI5 applies OOP
- What methods are inherited
- Why extending UIComponent reduces development effort
- How WorkSphere uses UIComponent

---

# Notes

`UIComponent` is the backbone of every SAPUI5 application. It provides the core functionality required for application startup, routing, model management, and lifecycle handling. By extending `UIComponent`, WorkSphere inherits these capabilities and only needs to implement application-specific functionality.

---

# My Understanding

`UIComponent` is the foundation of a SAPUI5 application. It already contains the framework features needed to run an application. By extending it, WorkSphere inherits routing, model management, lifecycle handling, and manifest loading. This allows developers to focus on business requirements instead of rebuilding framework functionality.