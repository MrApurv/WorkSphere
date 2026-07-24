# Lesson 24 - Browser History and Navigation (navBack)

## Date

24-07-2026

---

# Objective

In this lesson, I learned how SAPUI5 manages browser navigation history and how to implement a proper **Back** button using the `History` class. I understood why browser history should be used instead of hardcoded navigation and how to handle scenarios where no previous page exists.

---

# Introduction

In the previous lessons, I learned how to navigate between pages using the Router.

Example:

```javascript
this.getOwnerComponent()
    .getRouter()
    .navTo("employeeDetails", {
        employeeId: "1001"
    });
```

Navigation works correctly.

However, every enterprise application also requires a **Back** button that returns the user to the previous page.

SAPUI5 provides the `History` class for this purpose.

---

# What is Browser History?

Every browser keeps a history of visited pages.

Example navigation:

```
Dashboard

↓

Employee List

↓

Employee Details

↓

Salary Details
```

Internally, the browser stores these pages in a history stack.

When the user clicks **Back**, the browser returns to the previous entry.

---

# How SAPUI5 Uses Browser History

Every successful navigation updates the browser URL.

Example:

```
#/dashboard

↓

#/employees

↓

#/employees/1001

↓

#/employees/1001/salary
```

Each URL becomes part of the browser history.

SAPUI5 uses this history to support Back and Forward navigation.

---

# Why Not Use navTo() for Back Navigation?

A common mistake is writing:

```javascript
this.getOwnerComponent()
    .getRouter()
    .navTo("employees");
```

Although this navigates to the Employee List, it is **not** true Back navigation.

Consider the following navigation:

```
Dashboard

↓

Notifications

↓

Employee Details
```

The Back button should return to **Notifications**, not the Employee List.

Therefore, hardcoding destinations is not recommended.

---

# SAPUI5 History Class

SAPUI5 provides the following class:

```javascript
sap.ui.core.routing.History
```

The History class allows the application to inspect browser navigation history.

---

# Getting the History Instance

```javascript
const oHistory = sap.ui.core.routing.History.getInstance();
```

This returns the singleton History object used by SAPUI5.

---

# Reading the Previous Page

Retrieve the previous browser hash:

```javascript
const sPreviousHash = oHistory.getPreviousHash();
```

The value returned is the previous URL hash.

Example:

Current URL:

```
#/employees/1001
```

Previous URL:

```
#/employees
```

Result:

```javascript
sPreviousHash = "employees"
```

If there is no previous page, the value is:

```javascript
undefined
```

---

# Implementing Back Navigation

Complete example:

```javascript
onNavBack() {

    const oHistory = sap.ui.core.routing.History.getInstance();

    const sPreviousHash = oHistory.getPreviousHash();

    if (sPreviousHash !== undefined) {

        window.history.go(-1);

    } else {

        this.getOwnerComponent()
            .getRouter()
            .navTo("dashboard", {}, true);

    }

}
```

---

# Understanding the Logic

Step 1:

Retrieve the History object.

↓

Step 2:

Read the previous browser hash.

↓

Step 3:

If history exists:

```javascript
window.history.go(-1);
```

Go back one page.

↓

Step 4:

Otherwise:

Navigate to a default page.

Example:

```
Dashboard
```

---

# What is window.history.go(-1)?

`window.history.go(-1)` tells the browser to move back one entry in its history.

Example:

```
Dashboard

↓

Employee List

↓

Employee Details
```

Current page:

```
Employee Details
```

After:

```javascript
window.history.go(-1);
```

The browser returns to:

```
Employee List
```

---

# Why Use a Fallback Route?

Sometimes users open a page directly using a bookmarked URL.

Example:

```
http://localhost:8080/index.html#/employees/1001
```

Since no previous page exists:

```javascript
getPreviousHash()
```

returns:

```javascript
undefined
```

In this situation, the application should navigate to a safe default page such as the Dashboard.

---

# Understanding navTo(..., {}, true)

Example:

```javascript
this.getOwnerComponent()
    .getRouter()
    .navTo("dashboard", {}, true);
```

The third parameter:

```javascript
true
```

means **replace** the current browser history entry.

Instead of adding a new history record, the current entry is replaced.

This prevents unnecessary Back navigation loops.

---

# WorkSphere Example

Navigation:

```
Dashboard

↓

Employee List

↓

Employee Details
```

User clicks:

```
Back
```

History exists.

Application executes:

```javascript
window.history.go(-1);
```

Result:

```
Employee List
```

---

Direct URL Example:

```
#/employees/1001
```

No previous history exists.

Application executes:

```javascript
navTo("dashboard", {}, true);
```

Result:

```
Dashboard
```

---

# Enterprise Examples

Sales Order:

```
Sales Orders

↓

Sales Order Details

↓

Back

↓

Sales Orders
```

Employee Management:

```
Employee List

↓

Employee Details

↓

Back

↓

Employee List
```

Project Management:

```
Projects

↓

Project Details

↓

Back

↓

Projects
```

This navigation pattern is used across SAP Fiori applications.

---

# Best Practices

✅ Use `History.getInstance()` to inspect navigation history.

✅ Use `window.history.go(-1)` whenever possible.

✅ Always provide a fallback route.

✅ Use `replace = true` when redirecting to the fallback page.

✅ Avoid hardcoding Back navigation using `navTo()`.

---

# Common Mistakes

❌ Using `navTo()` as a Back button.

❌ Ignoring `getPreviousHash()`.

❌ Forgetting to handle direct URL access.

❌ Creating duplicate history entries.

---

# Interview Questions

## Beginner

### What is the purpose of the History class?

The History class allows SAPUI5 applications to inspect browser navigation history and implement proper Back navigation.

---

### What does `getPreviousHash()` return?

It returns the previous browser URL hash. If no previous page exists, it returns `undefined`.

---

## Intermediate

### How do you implement a Back button in SAPUI5?

```javascript
const oHistory = sap.ui.core.routing.History.getInstance();

const sPreviousHash = oHistory.getPreviousHash();

if (sPreviousHash !== undefined) {
    window.history.go(-1);
} else {
    this.getOwnerComponent()
        .getRouter()
        .navTo("dashboard", {}, true);
}
```

---

## Advanced

### Why should `window.history.go(-1)` be preferred over `navTo()` for Back navigation?

Because `window.history.go(-1)` returns the user to the actual previous page regardless of where they navigated from. Hardcoded `navTo()` always navigates to a fixed route and may produce incorrect navigation behavior.

---

# Key Learnings

After completing this lesson, I understand:

- How browser history works.
- How SAPUI5 uses browser history.
- The purpose of the `History` class.
- How to implement proper Back navigation.
- Why fallback navigation is necessary.
- How the `replace` parameter prevents history loops.

---

# Notes

SAPUI5 integrates with the browser's history mechanism through the `History` class. Applications should inspect the previous navigation entry before executing a Back action. If no previous page exists, a fallback route should be used to ensure a consistent user experience.

---

# My Understanding

Proper Back navigation is an essential part of enterprise SAPUI5 applications. Instead of hardcoding destinations, the application should inspect browser history using the `History` class. If a previous page exists, the browser should navigate back naturally. Otherwise, the application should redirect the user to a safe default page, such as the Dashboard.