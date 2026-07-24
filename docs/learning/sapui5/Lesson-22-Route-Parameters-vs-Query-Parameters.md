# Lesson 22 - Route Parameters vs Query Parameters

## Date

24-07-2026

---

# Objective

In this lesson, I learned the difference between Route Parameters and Query Parameters in SAPUI5. I understood when each should be used, how they appear in the browser URL, and how they help create flexible, maintainable, and enterprise-ready navigation.

---

# Introduction

In the previous lessons, I learned how to:

- Pass Route Parameters using `navTo()`
- Receive Route Parameters using `attachPatternMatched()`

However, not every piece of information belongs in the Route.

Sometimes we need to pass additional information such as:

- Edit Mode
- Active Tab
- Search Filter
- Sort Order
- Language

For these scenarios, SAPUI5 uses **Query Parameters**.

---

# What are Route Parameters?

Route Parameters identify the business object or resource that should be loaded.

Example:

```
#/employees/1001
```

Here:

- `employees` → Route
- `1001` → Route Parameter

The parameter tells SAPUI5 which employee should be displayed.

---

# What are Query Parameters?

Query Parameters provide additional information that changes the behavior of the page without changing the resource.

Example:

```
#/employees/1001?mode=edit
```

Here:

- Employee ID = `1001`
- Mode = `edit`

The employee remains the same, but the page opens in Edit Mode.

---

# Route Parameter vs Query Parameter

| Route Parameter | Query Parameter |
|-----------------|-----------------|
| Identifies the resource | Modifies page behavior |
| Mandatory for identifying business data | Usually optional |
| Part of the Route pattern | Appears after `?` |
| Changes the business object | Changes the page state |
| Example: Employee ID | Example: Edit Mode |

---

# URL Structure

Example:

```
#/employees/1001?mode=edit&tab=salary
```

Breakdown:

```
employees
```

↓

Route

```
1001
```

↓

Route Parameter

```
mode=edit
```

↓

Query Parameter

```
tab=salary
```

↓

Query Parameter

Everything after the `?` symbol is called the **Query String**.

---

# Multiple Query Parameters

Multiple Query Parameters are separated using the `&` character.

Example:

```
#/employees/1001?mode=edit&tab=salary&language=en
```

Query Parameters:

- mode = edit
- tab = salary
- language = en

---

# When to Use Route Parameters

Use Route Parameters when the value identifies the business object that should be loaded.

Examples:

- Employee ID
- Project ID
- Asset ID
- Leave Request ID
- Timesheet ID
- Invoice Number

Example:

```
#/employees/1001
```

Removing the parameter changes the business object.

---

# When to Use Query Parameters

Use Query Parameters when the value changes how the page behaves.

Examples:

- Edit Mode
- Active Tab
- Language
- Theme
- Search Text
- Sort Order
- Filter Values
- Pagination

Example:

```
#/employees/1001?mode=edit
```

Removing the parameter still opens the same employee.

---

# WorkSphere Example

Employee Details:

```
#/employees/1001
```

Open in Edit Mode:

```
#/employees/1001?mode=edit
```

Open Salary Tab:

```
#/employees/1001?mode=view&tab=salary
```

Employee remains the same.

Only the page behavior changes.

---

# Reports Example

Reports Page:

```
#/reports
```

Apply Filters:

```
#/reports?year=2026&department=IT&location=Pune
```

Here:

- Route = reports
- Query Parameters = year, department, location

The Route does not change.

Only the report filters change.

---

# Enterprise Examples

Employee Profile:

```
#/employee/9001?mode=edit
```

Sales Order:

```
#/salesOrder/45000123?tab=items
```

Project Details:

```
#/projects/P101?view=timeline
```

SAP Fiori applications frequently combine Route Parameters and Query Parameters in this way.

---

# Best Practices

✅ Use Route Parameters for business identifiers.

✅ Use Query Parameters for filters and page options.

✅ Keep Query Parameters optional whenever possible.

✅ Use meaningful parameter names.

✅ Design clean and readable URLs.

---

# Common Mistakes

❌ Using Query Parameters for primary IDs.

Incorrect:

```
#/employee?id=1001
```

Correct:

```
#/employee/1001
```

---

❌ Using Route Parameters for optional filters.

Incorrect:

```
#/reports/2026/IT/Pune
```

Correct:

```
#/reports?year=2026&department=IT&location=Pune
```

---

# Comparison Summary

| Feature | Route Parameter | Query Parameter |
|----------|-----------------|-----------------|
| Purpose | Identify resource | Modify behavior |
| Position | Route Path | After `?` |
| Required | Usually Yes | Usually No |
| Example | Employee ID | Mode, Tab, Filter |
| Enterprise Usage | Load business data | Configure page state |

---

# Interview Questions

## Beginner

### What is a Route Parameter?

A Route Parameter identifies the business object that should be loaded during navigation.

---

### What is a Query Parameter?

A Query Parameter provides optional information that changes the behavior or state of a page without changing the underlying business object.

---

## Intermediate

### Give examples of Route Parameters.

- Employee ID
- Project ID
- Asset ID
- Invoice Number

---

### Give examples of Query Parameters.

- Edit Mode
- Search Filter
- Sort Order
- Language
- Active Tab

---

## Advanced

### When should Route Parameters be preferred over Query Parameters?

Route Parameters should be used whenever the value identifies the resource to be loaded. Query Parameters should be used only for optional page configuration such as filters, sorting, tabs, or display modes.

---

# Key Learnings

After completing this lesson, I understand:

- The difference between Route Parameters and Query Parameters.
- The structure of browser URLs.
- How Query Strings work.
- When to use Route Parameters.
- When to use Query Parameters.
- Enterprise navigation best practices.

---

# Notes

Route Parameters identify the business object that should be displayed, while Query Parameters modify how that object is presented. Together they create flexible, bookmarkable, and maintainable URLs that follow SAPUI5 and SAP Fiori best practices.

---

# My Understanding

Route Parameters and Query Parameters serve different purposes. Route Parameters identify the business resource being accessed, whereas Query Parameters configure the page's behavior or state. By using both appropriately, SAPUI5 applications achieve clean URLs, better navigation, and a scalable architecture suitable for enterprise applications like WorkSphere.