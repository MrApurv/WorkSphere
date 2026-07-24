# Lesson 21 - Receiving Route Parameters

## Date

24-07-2026

---

# Objective

In this lesson, I learned how a destination page receives Route Parameters in SAPUI5. I understood the purpose of `attachPatternMatched()`, how Route events work, how to read parameters using the event object, and how these parameters are used to load business data in enterprise applications.

---

# Introduction

In the previous lesson, I learned how to send Route Parameters using the `navTo()` method.

Example:

```javascript
const oRouter = this.getOwnerComponent().getRouter();

oRouter.navTo("employeeDetails", {
    employeeId: "1001"
});
```

This updates the browser URL to:

```
#/employees/1001
```

The next step is to retrieve the value `1001` inside the destination page.

SAPUI5 provides Route Events to achieve this.

---

# Why Can't We Read Parameters Directly?

A common assumption is that the parameter will automatically become available inside the Controller.

For example:

```javascript
onInit() {

}
```

However, when `onInit()` executes, the Router may not have finished matching the Route.

Therefore, the Route Parameter may not yet be available.

SAPUI5 solves this problem using Route Events.

---

# What is attachPatternMatched()?

`attachPatternMatched()` is a Route Event.

It is triggered when a configured Route successfully matches the browser URL.

Only after the Route matches should the Controller read the Route Parameters.

Navigation Flow:

```
Browser URL

↓

Router

↓

Route Matched

↓

attachPatternMatched()

↓

Read Route Parameters

↓

Load Business Data
```

---

# Registering the Route Event

Inside the Controller:

```javascript
onInit() {

    this.getOwnerComponent()
        .getRouter()
        .getRoute("employeeDetails")
        .attachPatternMatched(this._onObjectMatched, this);

}
```

Explanation:

- `getOwnerComponent()` returns the application Component.
- `getRouter()` returns the Router instance.
- `getRoute()` selects a specific Route by its name.
- `attachPatternMatched()` registers a callback function that executes after the Route matches.

---

# Understanding getRoute()

Example:

```javascript
getRoute("employeeDetails")
```

The value passed to `getRoute()` must be the **Route name** defined in `manifest.json`.

Example:

```json
{
    "name": "employeeDetails",
    "pattern": "employees/{employeeId}"
}
```

Do not use:

- View Name
- Target Name

Always use the Route Name.

---

# Callback Function

The callback function is executed automatically after the Route matches.

Example:

```javascript
_onObjectMatched(oEvent) {

}
```

The function name is developer-defined.

Examples:

- `_onObjectMatched()`
- `_onRouteMatched()`
- `_onEmployeeMatched()`

The important part is that it receives the Route Event object.

---

# What is oEvent?

The callback receives an Event object.

Example:

```javascript
_onObjectMatched(oEvent) {

}
```

The Event contains information such as:

- Route Parameters
- Route Name
- URL Information
- Navigation Context

The Controller reads the required data from this Event object.

---

# Reading Route Parameters

The Route Parameters are stored inside the `arguments` object.

Example:

```javascript
_onObjectMatched(oEvent) {

    const oArguments = oEvent.getParameter("arguments");

}
```

To retrieve a specific parameter:

```javascript
const sEmployeeId = oArguments.employeeId;
```

If the browser URL is:

```
#/employees/1001
```

Then:

```javascript
sEmployeeId
```

contains:

```
1001
```

---

# Complete Example

```javascript
onInit() {

    this.getOwnerComponent()
        .getRouter()
        .getRoute("employeeDetails")
        .attachPatternMatched(this._onObjectMatched, this);

}

_onObjectMatched(oEvent) {

    const oArguments = oEvent.getParameter("arguments");

    const sEmployeeId = oArguments.employeeId;

    console.log(sEmployeeId);

}
```

Console Output:

```
1001
```

---

# Runtime Flow

```
Application Starts

↓

Controller Created

↓

onInit()

↓

Register Route Event

↓

User Opens

#/employees/1001

↓

Router Matches Route

↓

attachPatternMatched()

↓

Read employeeId

↓

Call Backend

↓

Display Employee Details
```

---

# WorkSphere Example

Employee List:

```
Rahul (1001)

↓

Click Employee

↓

navTo("employeeDetails", {

    employeeId: "1001"

})

↓

#/employees/1001
```

Employee Details Controller:

```
attachPatternMatched()

↓

Read employeeId

↓

1001

↓

Call OData Service

↓

Retrieve Rahul's Data

↓

Bind Data to View

↓

Display Employee Profile
```

---

# Why Use Route Events?

Route Events provide several benefits:

- Prevent timing issues
- Ensure Route Parameters are available
- Improve application reliability
- Follow SAPUI5 best practices
- Support browser navigation

---

# Best Practices

✅ Register Route Events inside `onInit()`.

✅ Use meaningful callback method names.

✅ Read Route Parameters from the Event object.

✅ Pass only identifiers (IDs).

✅ Use the received ID to retrieve business data.

---

# Common Mistakes

❌ Trying to read parameters before the Route matches.

❌ Forgetting to register `attachPatternMatched()`.

❌ Using the View name instead of the Route name.

❌ Assuming parameters become Controller variables automatically.

❌ Passing complete business objects instead of IDs.

---

# Interview Questions

## Beginner

### What is `attachPatternMatched()`?

`attachPatternMatched()` is a Route Event that is triggered when a configured Route successfully matches the browser URL.

---

## Intermediate

### How do you retrieve Route Parameters?

```javascript
const oArguments = oEvent.getParameter("arguments");

const sEmployeeId = oArguments.employeeId;
```

---

## Advanced

### Why is `attachPatternMatched()` preferred over reading parameters directly in `onInit()`?

Because `onInit()` executes before the Router necessarily finishes matching the Route. `attachPatternMatched()` guarantees that the Route has been matched and the parameters are available.

---

# Key Learnings

After completing this lesson, I understand:

- Why Route Parameters are not immediately available.
- The purpose of `attachPatternMatched()`.
- How to register Route Events.
- How to use `getRoute()`.
- How to retrieve Route Parameters.
- How enterprise applications load data based on Route Parameters.

---

# Notes

Receiving Route Parameters is an event-driven process in SAPUI5. The destination Controller registers a Route Event using `attachPatternMatched()`. Once the Router matches the browser URL, the callback function receives an Event object containing the Route Parameters. These parameters are then used to retrieve and display the required business data.

---

# My Understanding

Route Parameters are received through Route Events rather than directly inside the Controller. By registering `attachPatternMatched()`, the Controller waits until the Router has successfully matched the URL. It then retrieves the parameter values from the Event object and uses them to fetch the appropriate business data. This approach ensures reliable and maintainable navigation in enterprise SAPUI5 applications.