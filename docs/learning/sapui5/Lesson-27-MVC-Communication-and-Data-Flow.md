# Lesson 27 - MVC Communication and Data Flow

## Date

24-07-2026

---

# Objective

In this lesson, I learned the MVC (Model-View-Controller) architecture used in SAPUI5. I understood the responsibilities of each component, how they communicate with each other, and how data flows through a SAPUI5 application. This separation of concerns makes enterprise applications easier to develop, maintain, and scale.

---

# Introduction

SAPUI5 follows the **MVC (Model-View-Controller)** design pattern.

MVC separates an application into three independent layers:

- Model
- View
- Controller

Each layer has a specific responsibility and communicates with the others through well-defined interactions.

This separation improves code readability, maintainability, and scalability.

---

# What is MVC?

MVC stands for:

```
Model

↓

View

↓

Controller
```

Each component has a unique responsibility.

---

# Model

## Purpose

The Model stores the application's data.

It does not know anything about the user interface.

Typical data includes:

- Employee Details
- Product Information
- Project Records
- Backend Responses
- Application State

---

## Example

```json
{
    "employeeId": "1001",
    "name": "Rahul Sharma",
    "department": "IT",
    "salary": 85000
}
```

The Model contains only data.

It does not contain buttons, layouts, or business logic.

---

# View

## Purpose

The View is responsible for displaying information to the user.

It contains:

- XML Controls
- Buttons
- Tables
- Forms
- Layouts

The View does not store data itself.

Instead, it reads data from the Model through Data Binding.

---

## Example

```xml
<Text text="{/name}" />

<Text text="{/department}" />

<Text text="{/salary}" />
```

The View displays whatever value exists inside the Model.

---

# Controller

## Purpose

The Controller acts as the application's brain.

It handles:

- User Events
- Validation
- Navigation
- Business Logic
- Backend Communication
- Updating Models

---

## Example

```javascript
onSave() {

    // Validate Input

    // Save Data

    // Show Success Message

}
```

The Controller never contains UI layout.

---

# MVC Communication Flow

The communication sequence is:

```
User

↓

View

↓

Controller

↓

Model

↓

Controller

↓

View

↓

User
```

Every user interaction follows this flow.

---

# Example - Display Employee Details

Application starts.

↓

Controller loads employee data.

↓

Controller updates the Model.

↓

Model contains:

```
Rahul Sharma
```

↓

View automatically displays:

```
Rahul Sharma
```

The Controller never directly updates the Text control.

---

# Example - Save Employee

User clicks Save.

↓

View raises the event.

↓

Controller validates the data.

↓

Controller sends data to the backend.

↓

Backend returns success.

↓

Controller updates the Model.

↓

View refreshes automatically.

---

# Responsibilities of Each Layer

| Component | Responsibility |
|------------|----------------|
| Model | Store application data |
| View | Display user interface |
| Controller | Business logic and event handling |

---

# MVC Data Flow

```
Backend

↓

Model

↓

View

↓

User

↓

Controller

↓

Backend
```

The Controller connects the View and the Model.

The View never communicates directly with the backend.

---

# WorkSphere Example

Employee Details Page

```
Employee Details

↓

Controller

↓

Load Employee

↓

Model

↓

View

↓

Display Employee
```

User edits salary.

```
Salary Updated

↓

Controller

↓

Model Updated

↓

View Refreshes Automatically
```

---

# Why Use MVC?

Without MVC:

- UI and business logic become tightly coupled.
- Code becomes difficult to maintain.
- Testing becomes harder.
- Reusability decreases.

With MVC:

- Better separation of concerns.
- Easier debugging.
- Better scalability.
- Improved code reuse.

---

# Advantages of MVC

- Clear separation of responsibilities.
- Easier maintenance.
- Improved readability.
- Better scalability.
- Supports teamwork.
- Encourages reusable code.

---

# Common Mistakes

## Putting Business Logic Inside the View

Incorrect:

```xml
<Button text="Approve if Salary > 50000"/>
```

Business rules belong inside the Controller.

---

## Updating Controls Directly

Incorrect:

```javascript
this.byId("txtName").setText("Rahul");
```

Instead, update the Model and allow Data Binding to refresh the View.

---

## Storing UI Controls in the Model

The Model should only contain application data.

---

## Calling Backend from the View

Backend communication should always be handled by the Controller.

---

# Best Practices

- Keep Models focused on data.
- Keep Views focused on presentation.
- Keep Controllers focused on business logic.
- Use Data Binding instead of manually updating UI controls.
- Maintain a clear separation of responsibilities.

---

# Enterprise Example

SAP Fiori Leave Request

```
Employee

↓

View

↓

Controller

↓

Backend

↓

Model Updated

↓

View Refreshed

↓

Employee Sees Updated Leave Status
```

This architecture is followed across SAPUI5 and SAP Fiori applications.

---

# WorkSphere MVC Architecture

```
                  User
                    │
                    ▼
            XML View (UI)
                    │
                    ▼
              Controller
        (Events & Business Logic)
              │            │
              ▼            ▼
         JSON Model      Router
              │
              ▼
      Backend (Future:
      CAP / OData)
```

---

# Interview Questions

## Beginner

### What does MVC stand for?

MVC stands for Model-View-Controller.

---

### What is the purpose of the Model?

The Model stores application data.

---

### What is the purpose of the View?

The View displays data to the user.

---

### What is the purpose of the Controller?

The Controller handles events, business logic, validation, navigation, and communication between the View and the Model.

---

## Intermediate

### Does the View communicate directly with the backend?

No.

The Controller communicates with the backend and updates the Model.

---

### Why should Controllers update Models instead of UI controls?

Updating the Model allows Data Binding to automatically refresh the UI, resulting in cleaner and more maintainable code.

---

## Advanced

### Explain the data flow in SAPUI5 MVC.

The user interacts with the View. The View raises events to the Controller. The Controller processes the request, communicates with the backend if necessary, updates the Model, and the View automatically reflects the updated data through Data Binding.

---

# Key Learnings

After completing this lesson, I understand:

- The MVC architecture.
- Responsibilities of the Model, View, and Controller.
- Communication between MVC components.
- Enterprise data flow.
- Why MVC improves maintainability and scalability.

---

# Notes

SAPUI5 follows the MVC architecture to separate data, presentation, and business logic. The Model stores data, the View displays it, and the Controller manages interactions and application logic. This separation enables clean, maintainable, and scalable enterprise applications.

---

# My Understanding

MVC is the foundation of every SAPUI5 application. By assigning clear responsibilities to the Model, View, and Controller, SAPUI5 enables developers to build maintainable applications where data, presentation, and business logic remain independent. This architecture will be used throughout the WorkSphere project.