# Lesson 29 - Data Binding Modes

## Date

24-07-2026

---

# Objective

In this lesson, I learned about the different Data Binding modes available in SAPUI5. I understood how data flows between the Model and the View using One-Way, Two-Way, and One-Time Binding, when each mode should be used, and their role in building efficient enterprise applications.

---

# Introduction

Data Binding connects the Model and the View.

However, not every application requires data to move in the same direction.

SAPUI5 provides different binding modes that define how data flows between the Model and the View.

Choosing the correct binding mode improves performance, reduces unnecessary updates, and keeps applications maintainable.

---

# What is a Binding Mode?

A Binding Mode defines how data is synchronized between the Model and the View.

SAPUI5 supports three primary binding modes:

- One-Way Binding
- Two-Way Binding
- One-Time Binding

Each binding mode is suitable for different scenarios.

---

# One-Way Binding

## Definition

One-Way Binding transfers data only from the Model to the View.

```
Model
   │
   ▼
 View
```

If the Model changes, the View updates automatically.

If the user changes the View, the Model remains unchanged.

---

## Example

### Model

```json
{
    "name": "Rahul Sharma"
}
```

### View

```xml
<Text text="{/name}" />
```

### Controller

```javascript
oModel.setProperty("/name", "Amit Verma");
```

Result:

```
Amit Verma
```

appears automatically in the View.

---

## Common Use Cases

- Labels
- Text Controls
- Dashboard KPIs
- Status Indicators
- Read-only Forms

---

## WorkSphere Example

Dashboard Employee Count

```xml
<ObjectNumber number="{dashboard>/employees}" />
```

Backend updates:

```javascript
dashboardModel.setProperty("/employees", 130);
```

Dashboard immediately displays:

```
130
```

---

# Two-Way Binding

## Definition

Two-Way Binding synchronizes data in both directions.

```
Model
 ▲   │
 │   ▼
 View
```

If the Model changes, the View updates.

If the user edits the View, the Model also updates automatically.

---

## Example

### Model

```json
{
    "name": "Rahul Sharma"
}
```

### View

```xml
<Input value="{/name}" />
```

User edits:

```
Rahul Sharma

↓

Amit Verma
```

The Model becomes:

```json
{
    "name": "Amit Verma"
}
```

No JavaScript is required to synchronize the data.

---

## Common Use Cases

- Input
- TextArea
- CheckBox
- Switch
- ComboBox
- DatePicker
- Select
- StepInput

---

## WorkSphere Example

Employee Edit Screen

```xml
<Input value="{employee>/salary}" />
```

User changes salary:

```
85000

↓

90000
```

The Employee Model automatically stores:

```json
{
    "salary": 90000
}
```

---

# One-Time Binding

## Definition

One-Time Binding transfers data only once during initialization.

```
Model

↓

View

(No further updates)
```

After the initial value is displayed, future Model changes are ignored.

---

## Example

### Model

```json
{
    "version": "1.0"
}
```

### View

```xml
<Text text="{:= ${/version}}" />
```

Controller:

```javascript
oModel.setProperty("/version", "2.0");
```

Result:

The View still displays:

```
1.0
```

because the binding is evaluated only once.

---

## Common Use Cases

- Application Version
- Company Name
- Copyright
- Build Information
- Static Configuration

---

# Binding Mode Comparison

| Feature | One-Way | Two-Way | One-Time |
|----------|---------|----------|-----------|
| Model → View | Yes | Yes | Yes (Once) |
| View → Model | No | Yes | No |
| Automatic Updates | Yes | Yes | No |
| Editable Controls | No | Yes | No |
| Best Used For | Read-only Data | User Input | Static Values |

---

# Visual Representation

## One-Way

```
Model

↓

View
```

---

## Two-Way

```
Model

▲  ▼

View
```

---

## One-Time

```
Model

↓

View

(No Updates)
```

---

# Default Binding Mode

For **JSONModel**, the default binding mode is generally **Two-Way Binding**.

This means editable controls such as `Input` automatically synchronize their values with the Model.

---

# WorkSphere Examples

## Employee Dashboard

Binding Mode:

One-Way

```xml
<ObjectStatus text="{dashboard>/employeeCount}" />
```

---

## Employee Edit Form

Binding Mode:

Two-Way

```xml
<Input value="{employee>/name}" />
```

---

## About Dialog

Binding Mode:

One-Time

```xml
<Text text="{:= ${app>/version}}" />
```

---

# Choosing the Correct Binding Mode

| Scenario | Recommended Binding Mode |
|----------|--------------------------|
| Employee Details | One-Way |
| Employee Edit Form | Two-Way |
| Login Form | Two-Way |
| Dashboard Tiles | One-Way |
| Company Name | One-Time |
| Application Version | One-Time |

---

# Advantages

## One-Way Binding

- Better performance
- Suitable for display-only data
- Prevents accidental updates

---

## Two-Way Binding

- Automatic synchronization
- Less Controller code
- Ideal for forms

---

## One-Time Binding

- Best performance
- No unnecessary updates
- Suitable for static values

---

# Common Mistakes

## Using Two-Way Binding for Read-only Data

This causes unnecessary synchronization.

---

## Using One-Time Binding for Dynamic Data

The View will never reflect future Model changes.

---

## Updating UI Controls Directly

Incorrect:

```javascript
this.byId("txtName").setText("Rahul");
```

Preferred:

```javascript
oModel.setProperty("/name", "Rahul");
```

---

# Best Practices

- Use One-Way Binding for display-only controls.
- Use Two-Way Binding for editable forms.
- Use One-Time Binding for static information.
- Keep Controllers focused on updating Models.
- Avoid unnecessary Two-Way Binding to improve performance.

---

# Interview Questions

## Beginner

### What are the three Data Binding modes in SAPUI5?

- One-Way
- Two-Way
- One-Time

---

### Which Binding Mode is used for Input controls?

Two-Way Binding.

---

### Which Binding Mode is used for dashboard information?

One-Way Binding.

---

## Intermediate

### What is the default binding mode of JSONModel?

Two-Way Binding.

---

### Can a Text control update the Model?

No.

A Text control is display-only.

---

## Advanced

### Explain the difference between One-Way and Two-Way Binding.

One-Way Binding updates the View when the Model changes.

Two-Way Binding updates both the View and the Model automatically.

---

### When should One-Time Binding be used?

One-Time Binding should be used for values that remain constant during the application's lifecycle, such as application version, company name, or build information.

---

# Key Learnings

After completing this lesson, I understand:

- The purpose of Binding Modes.
- One-Way Binding.
- Two-Way Binding.
- One-Time Binding.
- Enterprise use cases.
- Best practices.
- Common interview questions.

---

# Notes

Binding Modes determine how data moves between the Model and the View. Choosing the appropriate binding mode is essential for creating efficient, scalable, and maintainable SAPUI5 applications.

---

# My Understanding

Binding Modes control the synchronization of data between the Model and the View. One-Way Binding is ideal for displaying data, Two-Way Binding is used for editable forms, and One-Time Binding is best suited for static information. Selecting the correct binding mode improves performance, simplifies development, and supports enterprise application design.