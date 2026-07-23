# Lesson 15 - models.js and Device Model

## Date

23-07-2026

---

# Objective

In this lesson, I learned the purpose of `models.js`, how SAPUI5 creates application models, what the Device Model is, and why it is registered globally inside `Component.js`. I also understood the role of `JSONModel`, `sap/ui/Device`, and OneWay binding.

---

# Current WorkSphere models.js

```javascript
sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device"
], (JSONModel, Device) => {
    "use strict";

    return {
        createDeviceModel() {
            const oModel = new JSONModel(Device);
            oModel.setDefaultBindingMode("OneWay");
            return oModel;
        }
    };
});
```

This file is responsible for creating reusable models for the application.

---

# What is MVC?

SAPUI5 follows the MVC (Model-View-Controller) architecture.

```
Model

↓

View

↓

Controller
```

### Model

Stores application data.

### View

Displays the data.

### Controller

Handles user interaction and business logic.

---

# What is a Model?

A Model stores data that can be displayed and manipulated in the application.

Examples:

- Employee List
- Customer Data
- Product Details
- Device Information
- OData Responses

Instead of storing data inside controllers, SAPUI5 encourages using models.

---

# Why Do We Need Models?

Without Models:

```
Controller

↓

Variables

↓

UI
```

Problems:

- Difficult to maintain
- Difficult to reuse
- Tight coupling

With Models:

```
Backend

↓

Model

↓

View

↓

Automatic Data Binding
```

Benefits:

- Better separation of concerns
- Easier maintenance
- Reusable data
- Automatic UI updates

---

# What is models.js?

`models.js` is a helper file used to create application models.

Instead of writing model creation logic inside `Component.js`, SAPUI5 keeps it in a dedicated file.

Advantages:

- Cleaner architecture
- Reusable model creation
- Easy maintenance
- Better organization

---

# Application Flow

```
Component.js

↓

models.createDeviceModel()

↓

models.js

↓

Create Model

↓

Return Model

↓

setModel()

↓

Application
```

---

# Understanding sap.ui.define()

```javascript
sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device"
], (JSONModel, Device) => {

});
```

Dependencies:

### JSONModel

Used to store JSON data.

### Device

Provides information about the current device.

SAPUI5 loads both modules before executing the file.

---

# What is JSONModel?

`JSONModel` is one of the most commonly used SAPUI5 models.

It stores data in JSON format.

Example:

```json
{
    "employeeId": "1001",
    "employeeName": "Apurv",
    "department": "SAP"
}
```

Views and controllers can bind directly to this data.

---

# What is sap/ui/Device?

`Device` is a built-in SAPUI5 utility object.

It automatically detects device characteristics such as:

- Desktop
- Tablet
- Phone
- Browser
- Operating System
- Screen Size
- Orientation
- Touch Support

No manual detection logic is required.

---

# Creating the Device Model

```javascript
const oModel = new JSONModel(Device);
```

This wraps the `Device` object inside a JSONModel so it can participate in SAPUI5 data binding.

---

# Why Wrap Device Inside JSONModel?

The Device object itself cannot be directly used with SAPUI5 data binding.

By wrapping it inside a `JSONModel`, SAPUI5 views can access device information using binding syntax.

Example:

```xml
{device>/system/phone}
```

---

# Understanding OneWay Binding

```javascript
oModel.setDefaultBindingMode("OneWay");
```

OneWay Binding means:

```
Model

↓

View
```

Changes in the Model update the View.

Changes made in the View do not update the Model.

This is ideal for device information because users should not modify properties such as screen size or operating system.

---

# Returning the Model

```javascript
return oModel;
```

The created model is returned to `Component.js`.

---

# Registering the Model

Inside `Component.js`:

```javascript
this.setModel(
    models.createDeviceModel(),
    "device"
);
```

The model is registered globally with the name:

```
device
```

Now every View and Controller can access it.

---

# Accessing Device Model in XML View

Example:

```xml
<Button
    text="Mobile Only"
    visible="{device>/system/phone}" />
```

The button is displayed only when the application runs on a phone.

---

# Accessing Device Model in Controller

```javascript
const bPhone = this.getOwnerComponent()
    .getModel("device")
    .getProperty("/system/phone");

if (bPhone) {
    console.log("Running on Phone");
}
```

---

# Complete Execution Flow

```
Application Starts

↓

Component.js

↓

models.createDeviceModel()

↓

models.js

↓

JSONModel(Device)

↓

OneWay Binding

↓

Return Model

↓

setModel("device")

↓

Available Across Application
```

---

# Why is Device Model Global?

Every view may need device information.

Examples:

- Responsive Layout
- Mobile Navigation
- Tablet Layout
- Desktop Dashboard

Creating one global Device Model avoids duplication.

---

# Best Practices

✅ Keep model creation inside `models.js`

✅ Register global models in `Component.js`

✅ Use meaningful model names

✅ Use OneWay binding for read-only models

✅ Keep device information read-only

---

# Common Mistakes

❌ Creating the same model multiple times

❌ Forgetting to register the model

❌ Using TwoWay binding for Device Model

❌ Putting model creation inside controllers

---

# Interview Questions

## Beginner

### What is a Model?

A Model stores application data and provides it to Views using data binding.

---

## Intermediate

### Why is models.js used?

It centralizes model creation, improves maintainability, and keeps `Component.js` clean.

---

## Advanced

### Why is OneWay binding used for Device Model?

Device information is read-only and should flow only from the Model to the View. Users should not modify device properties.

---

# Key Learnings

After completing this lesson, I understand:

- What a Model is
- MVC architecture
- Purpose of `models.js`
- What JSONModel is
- What `sap/ui/Device` provides
- Why Device is wrapped inside JSONModel
- Why OneWay binding is used
- How the Device Model is registered globally
- How to access the Device Model in Views and Controllers

---

# Notes

The Device Model is one of the first global models created in a SAPUI5 application. It stores information about the user's device and allows responsive behavior using data binding. Keeping model creation inside `models.js` makes the application cleaner, reusable, and easier to maintain.

---

# My Understanding

`models.js` is responsible for creating reusable models used across the application. The Device Model wraps SAPUI5's built-in `Device` object inside a `JSONModel` and registers it globally with the name `device`. Using OneWay binding ensures that device information flows from the Model to the View without allowing the View to modify it. This helps WorkSphere provide a responsive user interface across desktop, tablet, and mobile devices.