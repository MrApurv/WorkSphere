# Lesson 20 - Route Parameters and navTo()

## Date

24-07-2026

---

# Objective

In this lesson, I learned how to pass data between pages in a SAPUI5 application using Route Parameters. I understood how the `navTo()` method sends parameters, how these parameters become part of the browser URL, and why Route Parameters are the preferred approach for navigation in enterprise applications.

---

# Introduction

In the previous lesson, I learned how to navigate between pages using the Router.

Example:

```javascript
const oRouter = this.getOwnerComponent().getRouter();

oRouter.navTo("employees");
```

This successfully navigates to another page.

However, in real-world applications, we often need to open a specific record, such as a particular employee, project, or asset. Route Parameters make this possible.

---

# Why Route Parameters?

Consider an Employee List page.

| Employee | Employee ID |
|-----------|-------------|
| Rahul     | 1001        |
| Amit      | 1002        |
| Priya     | 1003        |

When a user clicks **Rahul**, the application must know **which employee** should be displayed.

Calling:

```javascript
oRouter.navTo("employeeDetails");
```

is not enough because the Router knows only the destination page, not the selected employee.

Route Parameters solve this problem by passing additional information during navigation.

---

# What are Route Parameters?

Route Parameters are values passed to another Route during navigation.

Instead of navigating only to:

```
#/employees
```

we navigate to:

```
#/employees/1001
```

The additional value (`1001`) identifies the selected employee.

---

# Route Pattern

Parameters are defined in the Route pattern using curly braces.

Example:

```json
{
    "name": "employeeDetails",
    "pattern": "employees/{employeeId}",
    "target": "employeeDetails"
}
```

Here:

- `employees` is the fixed part of the URL.
- `{employeeId}` is a placeholder.
- SAPUI5 replaces this placeholder with the actual value during navigation.

---

# Passing Parameters Using navTo()

Syntax:

```javascript
oRouter.navTo("routeName", {
    parameterName: value
});
```

Example:

```javascript
const oRouter = this.getOwnerComponent().getRouter();

oRouter.navTo("employeeDetails", {
    employeeId: "1001"
});
```

The Router automatically generates the following URL:

```
#/employees/1001
```

---

# Browser URL Transformation

Route Pattern:

```
employees/{employeeId}
```

Parameter:

```
employeeId = 1001
```

Generated URL:

```
#/employees/1001
```

SAPUI5 replaces the placeholder with the provided value.

---

# Navigation Flow

```
User Clicks Employee

↓

Controller

↓

Router.navTo()

↓

Route Parameter Passed

↓

Browser URL Updated

↓

Route Matched

↓

Target Loaded

↓

Employee Details View Displayed
```

---

# Passing Multiple Parameters

A Route can receive more than one parameter.

Example:

Route Pattern:

```
projects/{projectId}/tasks/{taskId}
```

Navigation:

```javascript
oRouter.navTo("taskDetails", {

    projectId: "P101",

    taskId: "T55"

});
```

Generated URL:

```
#/projects/P101/tasks/T55
```

This allows SAPUI5 to identify both the selected Project and Task.

---

# Why Pass Only IDs?

A common mistake is passing an entire object.

Incorrect:

```javascript
oRouter.navTo("employeeDetails", {

    employee: {
        id: "1001",
        name: "Rahul",
        department: "IT"
    }

});
```

Correct:

```javascript
oRouter.navTo("employeeDetails", {

    employeeId: "1001"

});
```

The destination page should retrieve the latest data using the ID instead of receiving the complete object.

Benefits:

- Smaller URLs
- Better performance
- Fresh data from the backend
- Easier maintenance

---

# Why Use Route Parameters?

Compared to global variables or browser storage, Route Parameters provide several advantages:

- Meaningful URLs
- Bookmark support
- Browser history integration
- Easy sharing of application links
- Better maintainability
- Enterprise standard navigation

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

↓

Employee Details Page
```

The same approach can be used for:

- Project Details
- Asset Details
- Leave Details
- Timesheet Details
- Task Details

---

# Best Practices

✅ Pass only identifiers such as Employee ID or Project ID.

✅ Keep parameter names meaningful.

✅ Define parameters in the Route pattern.

✅ Let the destination page fetch the required business data.

---

# Common Mistakes

❌ Passing complete objects.

❌ Hardcoding parameter values.

❌ Forgetting to define parameters in the Route pattern.

❌ Using global variables instead of Route Parameters.

❌ Mismatching parameter names between `navTo()` and the Route pattern.

---

# Interview Questions

## Beginner

### What are Route Parameters?

Route Parameters are values passed during navigation that identify which data should be displayed on the destination page.

---

## Intermediate

### How do you pass Route Parameters using `navTo()`?

```javascript
oRouter.navTo("employeeDetails", {
    employeeId: "1001"
});
```

---

## Advanced

### Why should Route Parameters be preferred over global variables?

Route Parameters create meaningful URLs, support bookmarking, integrate with browser history, and allow the destination page to load fresh data based on the passed identifier.

---

# Key Learnings

After completing this lesson, I understand:

- What Route Parameters are.
- Why they are required.
- How Route patterns define parameters.
- How `navTo()` passes parameter values.
- How SAPUI5 generates browser URLs.
- Why passing IDs is considered a best practice.

---

# Notes

Route Parameters allow SAPUI5 applications to navigate dynamically by passing identifiers such as Employee ID or Project ID. The Router replaces placeholders in the Route pattern with actual values, updates the browser URL, and enables the destination page to retrieve the appropriate business data.

---

# My Understanding

Route Parameters make SAPUI5 navigation dynamic and scalable. Instead of opening a generic page, I can pass identifiers using `navTo()`. The Router inserts these values into the URL, matches the configured Route, and allows the destination page to load the correct information. This is the standard navigation approach used in enterprise SAPUI5 applications.