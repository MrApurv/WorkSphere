# Lesson 23 - Reading Query Parameters

## Date

24-07-2026

---

# Objective

In this lesson, I learned how to read Query Parameters in SAPUI5 after navigation. I understood how SAPUI5 stores Query Parameters separately from Route Parameters, how to access them using the Route Event object, and how to safely handle optional values.

---

# Introduction

In the previous lessons, I learned:

- How to send Route Parameters using `navTo()`
- How to receive Route Parameters using `attachPatternMatched()`
- The difference between Route Parameters and Query Parameters

In this lesson, I learned how to retrieve Query Parameters from the browser URL inside the destination Controller.

---

# Example URL

```
#/employees/1001?mode=edit&tab=salary
```

Breakdown:

| Part | Type |
|------|------|
| employees | Route |
| 1001 | Route Parameter |
| mode=edit | Query Parameter |
| tab=salary | Query Parameter |

---

# How SAPUI5 Stores Parameters

SAPUI5 stores Route Parameters and Query Parameters separately.

Conceptually, the Route Event arguments look like:

```javascript
{
    employeeId: "1001",

    "?query": {
        mode: "edit",
        tab: "salary"
    }
}
```

- `employeeId` is a Route Parameter.
- `?query` contains all Query Parameters.

---

# Reading Route Parameters

Retrieve the Route arguments first:

```javascript
const oArguments = oEvent.getParameter("arguments");
```

Read the Route Parameter:

```javascript
const sEmployeeId = oArguments.employeeId;
```

Result:

```
1001
```

---

# Reading Query Parameters

Retrieve the Query object:

```javascript
const oQuery = oArguments["?query"];
```

Read individual values:

```javascript
const sMode = oQuery.mode;

const sTab = oQuery.tab;
```

Results:

```
Mode = edit

Tab = salary
```

---

# Complete Example

```javascript
_onObjectMatched(oEvent) {

    const oArguments = oEvent.getParameter("arguments");

    const sEmployeeId = oArguments.employeeId;

    const oQuery = oArguments["?query"];

    const sMode = oQuery.mode;

    const sTab = oQuery.tab;

    console.log(sEmployeeId);

    console.log(sMode);

    console.log(sTab);

}
```

Console Output:

```
1001

edit

salary
```

---

# Handling Missing Query Parameters

Sometimes the URL contains no Query Parameters.

Example:

```
#/employees/1001
```

In this case:

```javascript
oArguments["?query"]
```

may return:

```javascript
undefined
```

Accessing properties directly would cause an error.

---

# Safe Approach

Always provide a default empty object.

```javascript
const oQuery = oArguments["?query"] || {};
```

Now:

```javascript
const sMode = oQuery.mode;
```

returns:

```
undefined
```

instead of throwing an exception.

---

# Runtime Flow

```
Browser URL

↓

#/employees/1001?mode=edit&tab=salary

↓

Router

↓

Route Matched

↓

attachPatternMatched()

↓

arguments

↓

employeeId

↓

?query

↓

mode

↓

tab

↓

Controller
```

---

# WorkSphere Example

Employee Details URL:

```
#/employees/1001?mode=edit
```

Controller:

```javascript
_onObjectMatched(oEvent) {

    const oArguments = oEvent.getParameter("arguments");

    const sEmployeeId = oArguments.employeeId;

    const oQuery = oArguments["?query"] || {};

    if (oQuery.mode === "edit") {

        // Enable editing controls

    }

}
```

The employee remains the same.

Only the page behavior changes.

---

# Reports Example

URL:

```
#/reports?year=2026&department=IT
```

Controller:

```javascript
const oArguments = oEvent.getParameter("arguments");

const oQuery = oArguments["?query"] || {};

const sYear = oQuery.year;

const sDepartment = oQuery.department;
```

These values can be sent to the backend as filter criteria.

---

# Route Parameters vs Query Parameters

| Route Parameters | Query Parameters |
|------------------|------------------|
| Identify the business object | Configure page behavior |
| Usually mandatory | Usually optional |
| Part of the Route pattern | Stored in `?query` |
| Example: Employee ID | Example: Mode, Tab, Filter |

---

# Best Practices

✅ Use Route Parameters for business identifiers.

✅ Use Query Parameters for optional behavior.

✅ Always check whether `?query` exists.

✅ Use meaningful parameter names.

✅ Keep URLs clean and readable.

---

# Common Mistakes

❌ Assuming Query Parameters are part of Route Parameters.

❌ Accessing `oArguments["?query"]` without checking for `undefined`.

❌ Using Query Parameters for business identifiers.

❌ Passing unnecessary data through the URL.

---

# Interview Questions

## Beginner

### What are Query Parameters?

Query Parameters are optional values passed in the URL that modify the behavior or state of a page without changing the business object.

---

### Where are Query Parameters stored?

They are stored inside the `"?query"` object of the Route Event arguments.

---

## Intermediate

### How do you read Query Parameters?

```javascript
const oArguments = oEvent.getParameter("arguments");

const oQuery = oArguments["?query"] || {};

const sMode = oQuery.mode;
```

---

## Advanced

### Why should `"?query"` always be checked before use?

Because Query Parameters are optional. If no Query String exists, `oArguments["?query"]` may be `undefined`, which can cause runtime errors when accessing its properties.

---

# Key Learnings

After completing this lesson, I understand:

- How SAPUI5 stores Query Parameters.
- How to retrieve the `"?query"` object.
- How to combine Route Parameters and Query Parameters.
- How to safely handle optional Query Parameters.
- Enterprise best practices for URL-based navigation.

---

# Notes

SAPUI5 stores Route Parameters and Query Parameters separately. Route Parameters identify the business object, while Query Parameters define optional page behavior. Controllers retrieve both through the Route Event object after the Route has been matched.

---

# My Understanding

Reading Query Parameters is an important part of SAPUI5 routing. By retrieving the `"?query"` object from the Route Event, I can configure the page dynamically based on optional values such as mode, tab, language, or filters while keeping the URL clean, meaningful, and enterprise-friendly.