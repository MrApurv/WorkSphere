# Lesson 26 - Controller Lifecycle Methods

## Date

24-07-2026

---

# Objective

In this lesson, I learned the lifecycle of a SAPUI5 Controller. I understood when each lifecycle method is executed, what type of logic belongs in each method, and how these methods help build efficient, maintainable, and enterprise-grade SAPUI5 applications.

---

# Introduction

Every SAPUI5 Controller goes through a lifecycle from creation to destruction.

SAPUI5 automatically calls predefined lifecycle methods at different stages of the Controller's life.

These methods allow developers to execute code at the appropriate time during the application's execution.

The four primary lifecycle methods are:

- onInit()
- onBeforeRendering()
- onAfterRendering()
- onExit()

---

# Controller Lifecycle

The lifecycle of a SAPUI5 Controller is:

```

Controller Created

↓

onInit()

↓

onBeforeRendering()

↓

View Rendered

↓

onAfterRendering()

↓

User Interaction

↓

View Destroyed

↓

onExit()

```

SAPUI5 manages this sequence automatically.

---

# 1. onInit()

## Purpose

`onInit()` is executed immediately after the Controller is created.

It runs only once during the lifetime of the Controller.

---

## Typical Responsibilities

- Initialize variables
- Create JSON Models
- Register Routes
- Read startup parameters
- Initialize application state

---

## Example

```javascript
onInit() {

    this.getOwnerComponent()
        .getRouter()
        .getRoute("employeeDetails")
        .attachPatternMatched(this._onObjectMatched, this);

}
```

---

## WorkSphere Example

When the Employee Details page opens:

- Register the route
- Create local models
- Load default configuration
- Prepare the page for user interaction

---

# 2. onBeforeRendering()

## Purpose

`onBeforeRendering()` is called immediately before the View is rendered.

Unlike `onInit()`, this method may execute multiple times whenever SAPUI5 needs to re-render the View.

---

## Typical Responsibilities

- Refresh displayed data
- Update calculated values
- Prepare UI state
- Stop running timers before rendering

---

## Example

```javascript
onBeforeRendering() {

    // Refresh values before rendering

}
```

---

## WorkSphere Example

Before rendering the Employee page:

- Refresh employee status
- Update notification count
- Calculate summary values

---

# 3. onAfterRendering()

## Purpose

`onAfterRendering()` is executed after the View has been rendered and displayed in the browser.

At this stage, all HTML elements already exist in the DOM.

---

## Typical Responsibilities

- Focus input controls
- Initialize charts
- Initialize third-party JavaScript libraries
- Measure DOM elements
- Trigger animations

---

## Example

```javascript
onAfterRendering() {

    this.byId("searchField").focus();

}
```

---

## WorkSphere Example

After the Dashboard loads:

- Focus the global search field
- Initialize KPI charts
- Start dashboard animations

---

# 4. onExit()

## Purpose

`onExit()` is executed when the Controller is destroyed.

It is mainly used for cleanup.

---

## Typical Responsibilities

- Destroy dialogs
- Remove event listeners
- Clear intervals
- Stop timers
- Release memory
- Close WebSocket connections

---

## Example

```javascript
onExit() {

    if (this._oDialog) {
        this._oDialog.destroy();
    }

}
```

---

## WorkSphere Example

When the Employee page is closed:

- Destroy dialogs
- Remove listeners
- Stop background timers
- Release memory

---

# Lifecycle Timeline

```

Application Starts

↓

Controller Created

↓

onInit()

↓

onBeforeRendering()

↓

View Rendered

↓

onAfterRendering()

↓

User Interaction

↓

Data Changes

↓

onBeforeRendering()

↓

Re-render

↓

onAfterRendering()

↓

User Leaves Page

↓

onExit()

```

---

# Lifecycle Comparison

| Lifecycle Method | Called | Typical Usage |
|------------------|---------|---------------|
| onInit() | Once | Initialization |
| onBeforeRendering() | Before every rendering | Refresh UI state |
| onAfterRendering() | After every rendering | DOM-related operations |
| onExit() | Once before destruction | Cleanup resources |

---

# When Should Each Method Be Used?

| Task | Lifecycle Method |
|------|------------------|
| Create JSON Model | onInit() |
| Register Router | onInit() |
| Initialize Variables | onInit() |
| Refresh Data | onBeforeRendering() |
| Focus Input Field | onAfterRendering() |
| Initialize Chart Library | onAfterRendering() |
| Destroy Dialog | onExit() |
| Remove Timers | onExit() |

---

# Common Mistakes

## Calling Lifecycle Methods Manually

Incorrect:

```javascript
this.onInit();
```

Lifecycle methods are called automatically by SAPUI5.

---

## Accessing DOM Elements in onInit()

Incorrect:

```javascript
this.byId("searchField").focus();
```

The View has not yet been rendered.

Use `onAfterRendering()` instead.

---

## Registering Routes in onAfterRendering()

Incorrect:

```javascript
onAfterRendering() {

    this.getOwnerComponent()
        .getRouter()
        .getRoute("employeeDetails")
        .attachPatternMatched(...);

}
```

Routes should be registered once inside `onInit()`.

---

## Forgetting Cleanup

Dialogs, intervals, and event listeners should always be destroyed inside `onExit()` to avoid memory leaks.

---

# Best Practices

- Keep `onInit()` lightweight.
- Avoid heavy backend calls in `onBeforeRendering()`.
- Use `onAfterRendering()` only for DOM-related tasks.
- Always clean up resources in `onExit()`.
- Never call lifecycle methods manually.

---

# WorkSphere Lifecycle Example

```

Employee Details

↓

onInit()

↓

Register Route

↓

Create Model

↓

onBeforeRendering()

↓

Refresh Employee Data

↓

View Rendered

↓

onAfterRendering()

↓

Focus Employee Search Field

↓

User Interaction

↓

onExit()

↓

Destroy Dialogs

↓

Release Memory

```

---

# Enterprise Example

SAP Fiori Sales Order App:

```

Application Starts

↓

onInit()

↓

Register OData Model

↓

Register Routes

↓

onBeforeRendering()

↓

Refresh Header Information

↓

onAfterRendering()

↓

Focus Search Field

↓

User Leaves

↓

onExit()

↓

Destroy Resources

```

---

# Interview Questions

## Beginner

### What is the Controller Lifecycle in SAPUI5?

The Controller Lifecycle is the sequence of methods automatically executed by SAPUI5 during the creation, rendering, updating, and destruction of a Controller.

---

### Which lifecycle method runs only once?

`onInit()`

---

### Which lifecycle method is used for cleanup?

`onExit()`

---

## Intermediate

### What is the difference between `onInit()` and `onAfterRendering()`?

`onInit()` is used for initialization tasks and executes before the View is rendered.

`onAfterRendering()` executes after the View is rendered and is used for DOM-related operations.

---

### Why should Routes be registered in `onInit()`?

Because `onInit()` executes only once, preventing duplicate route registrations.

---

## Advanced

### Explain the execution order of SAPUI5 Controller lifecycle methods.

The execution order is:

1. Controller Creation
2. onInit()
3. onBeforeRendering()
4. View Rendering
5. onAfterRendering()
6. User Interaction
7. onBeforeRendering() (during re-render)
8. onAfterRendering()
9. onExit()

---

# Key Learnings

After completing this lesson, I understand:

- The complete SAPUI5 Controller Lifecycle.
- The purpose of each lifecycle method.
- When each lifecycle method executes.
- What logic belongs in each method.
- Enterprise best practices.
- Common mistakes and how to avoid them.

---

# Notes

SAPUI5 automatically manages the Controller lifecycle. Choosing the correct lifecycle method for initialization, rendering, DOM manipulation, and cleanup leads to cleaner code, better performance, and easier maintenance.

---

# My Understanding

Controller lifecycle methods define when specific logic should run during a Controller's lifetime. Initialization belongs in `onInit()`, UI preparation before rendering belongs in `onBeforeRendering()`, DOM interactions belong in `onAfterRendering()`, and cleanup belongs in `onExit()`. Proper use of these methods is essential for building scalable and enterprise-ready SAPUI5 applications like WorkSphere.