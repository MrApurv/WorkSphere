# Lesson 18 - Routes vs Targets

## Date

24-07-2026

---

# Objective

In this lesson, I learned the difference between Routes and Targets in SAPUI5 Routing. I understood how the Router matches browser URLs with Routes, how Targets load Views, and how both work together to navigate between pages in an SAPUI5 application.

---

# Introduction

SAPUI5 Routing is divided into two important parts:

- Routes
- Targets

Although they work together, they have different responsibilities.

Understanding this separation is essential for building scalable SAPUI5 applications.

---

# What is a Route?

A Route defines **when** navigation should occur.

It listens to the browser URL (Hash) and checks whether the URL matches a configured pattern.

If the URL matches, SAPUI5 activates the corresponding Target.

Example:

```
Browser URL

↓

#/employees

↓

Route Matched
```

A Route does not know which View to display directly.

Its job is only to identify the correct navigation path.

---

# Route Example

```json
{
    "name": "employees",
    "pattern": "employees",
    "target": "employeeList"
}
```

Explanation:

- **name** → Internal identifier used in navigation
- **pattern** → Browser URL pattern
- **target** → Target that should be loaded

---

# What is a Target?

A Target defines **what** should be displayed.

After a Route matches the URL, SAPUI5 looks for the Target and loads the specified View.

Example:

```json
"targets": {
    "employeeList": {
        "viewName": "EmployeeList"
    }
}
```

Meaning:

```
employeeList Target

↓

EmployeeList.view.xml

↓

EmployeeList.controller.js
```

---

# Route vs Target

| Route | Target |
|--------|---------|
| Matches browser URL | Loads a View |
| Defines **when** navigation happens | Defines **what** is displayed |
| Uses `pattern` | Uses `viewName` |
| Connected to URL | Connected to View |

---

# Complete Routing Flow

```
User Opens URL

↓

Browser Hash

↓

Router

↓

Route Matched

↓

Target Selected

↓

View Loaded

↓

Controller Created

↓

Page Displayed
```

---

# WorkSphere Example

Imagine WorkSphere contains the following pages:

```
Login

Dashboard

Employees

Projects

Assets

Reports

Settings
```

Navigation to the Employee List:

```
Browser URL

↓

#/employees

↓

employees Route

↓

employeeList Target

↓

EmployeeList.view.xml

↓

EmployeeList.controller.js

↓

Screen Displayed
```

---

# Route Matching Process

Suppose the browser URL is:

```
#/employees
```

The Router checks each configured Route.

```
dashboard

❌

employees

✅ Match

projects

❌

settings

❌
```

The matching Route is selected.

---

# Target Resolution

After the Route matches:

```
employees Route

↓

employeeList Target

↓

EmployeeList View

↓

EmployeeList Controller

↓

Display Page
```

---

# URL Patterns

A Route contains a URL pattern.

Examples:

```
dashboard

employees

projects

reports
```

Advanced examples:

```
employee/{id}

project/{projectId}
```

These parameters will be discussed in later lessons.

---

# One Route → One Target

Most common configuration.

```
employees

↓

employeeList
```

One Route loads one Target.

---

# Multiple Routes → One Target

Example:

```
employees

↓

employeeList
```

and

```
employee-list

↓

employeeList
```

Different URL patterns display the same View.

Useful for aliases or backward compatibility.

---

# One Route → Multiple Targets

SAPUI5 also supports multiple Targets.

Example:

```
dashboard

↓

Header

↓

Dashboard

↓

Footer
```

This is commonly used with complex layouts such as:

- SplitApp
- FlexibleColumnLayout

---

# Nested Targets

Large enterprise applications may display multiple Views together.

Example:

```
Dashboard

↓

Employee List

↓

Employee Detail
```

Parent Target:

```
Dashboard
```

Child Target:

```
Employee Detail
```

Nested Targets help build Master-Detail applications.

---

# Runtime Navigation Flow

When the application starts:

```
Component.js

↓

Router.initialize()

↓

Read Browser URL

↓

Match Route

↓

Find Target

↓

Load View

↓

Create Controller

↓

Display Screen
```

---

# Real Enterprise Example

SuccessFactors:

```
#/home

↓

Home View
```

```
#/profile

↓

Profile View
```

```
#/learning

↓

Learning View
```

Every SAPUI5 application follows the same routing process.

---

# Why Separate Routes and Targets?

SAPUI5 separates responsibilities.

### Route

Determines **when** navigation occurs.

### Target

Determines **what** should be displayed.

This improves:

- Readability
- Reusability
- Maintainability

---

# Best Practices

✅ Keep Route names meaningful.

✅ Keep Target names aligned with View names.

✅ Use simple URL patterns.

✅ Configure all navigation in `manifest.json`.

✅ Avoid manually creating Views.

---

# Common Mistakes

❌ Confusing Route with Target.

❌ Duplicate Route names.

❌ Missing Target definitions.

❌ Incorrect URL patterns.

❌ Loading Views manually instead of using the Router.

---

# Interview Questions

## Beginner

### What is a Route?

A Route defines when navigation should occur by matching a browser URL pattern.

---

## Intermediate

### What is a Target?

A Target defines which View should be displayed after a Route matches.

---

## Advanced

### Can multiple Routes point to the same Target?

Yes.

Multiple Routes can reference the same Target, allowing different URL patterns to load the same View.

---

# Key Learnings

After completing this lesson, I understand:

- What a Route is
- What a Target is
- The difference between Routes and Targets
- How SAPUI5 matches URLs
- How Targets load Views
- The complete Routing flow
- Multiple Route and Target configurations

---

# Notes

Routes and Targets are two separate but connected concepts in SAPUI5 Routing. A Route listens for browser URL patterns and determines when navigation should occur. A Target specifies which View should be loaded after the Route matches. Together they provide a scalable, maintainable, and enterprise-ready navigation system.

---

# My Understanding

A Route acts like a navigation trigger, while a Target acts as the destination. During navigation, the Router checks the browser URL, finds the matching Route, resolves the corresponding Target, loads the appropriate View and Controller, and displays the page. This separation makes SAPUI5 applications easier to extend and maintain as they grow.