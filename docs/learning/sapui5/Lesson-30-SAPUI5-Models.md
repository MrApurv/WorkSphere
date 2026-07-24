# Lesson 30 - SAPUI5 Models (JSONModel, ResourceModel, ODataModel & DeviceModel)

## Date

24-07-2026

---

# Objective

In this lesson, I learned about the different types of Models available in SAPUI5. I understood the purpose of JSONModel, ResourceModel, ODataModel, and DeviceModel, their use cases, differences, and how they fit into enterprise SAPUI5 applications.

---

# Introduction

In the MVC architecture, the **Model** is responsible for storing and managing application data.

The View does not directly communicate with the backend. Instead, it retrieves data from the Model through Data Binding.

SAPUI5 provides multiple Model types to handle different scenarios.

---

# What is a Model?

A Model is an object that stores and manages application data.

It acts as the bridge between the application's data and the user interface.

```
Backend

↓

Model

↓

Data Binding

↓

View
```

The View displays data from the Model without knowing where the data originated.

---

# Types of Models in SAPUI5

The four most commonly used Models are:

- JSONModel
- ResourceModel
- ODataModel
- DeviceModel

Each Model serves a different purpose.

---

# JSONModel

## Purpose

JSONModel stores data in JSON format inside the application memory.

It is commonly used for:

- Local application data
- Temporary data
- Forms
- User input
- Small datasets

---

## Example

### Controller

```javascript
const oEmployeeModel = new JSONModel({
    employeeId: "1001",
    name: "Rahul Sharma",
    department: "IT",
    salary: 85000
});

this.getView().setModel(oEmployeeModel);
```

### View

```xml
<Text text="{/name}" />

<Text text="{/department}" />

<ObjectNumber number="{/salary}" />
```

---

## Advantages

- Easy to use
- Fast
- Lightweight
- Editable
- Excellent for client-side data

---

## WorkSphere Example

Employee Edit Screen

```
Employee Data

↓

JSONModel

↓

Input Controls
```

---

# ResourceModel

## Purpose

ResourceModel is used for **Internationalization (i18n)**.

Instead of hardcoding text in the View, labels are stored in a properties file.

---

## Example

### i18n.properties

```
employeeName=Employee Name
save=Save
cancel=Cancel
```

### View

```xml
<Text text="{i18n>employeeName}" />

<Button text="{i18n>save}" />
```

If the application language changes, only the properties file changes.

The View remains unchanged.

---

## Advantages

- Supports multiple languages
- Eliminates hardcoded text
- Simplifies maintenance

---

## WorkSphere Example

English

```
Save
```

German

```
Speichern
```

Same XML View.

Different Resource Bundle.

---

# ODataModel

## Purpose

ODataModel connects SAPUI5 applications to backend services.

It is the standard Model used in enterprise SAP applications.

---

## Architecture

```
SAP Backend

↓

OData Service

↓

ODataModel

↓

View
```

Instead of storing data locally, ODataModel retrieves and updates data from the backend.

---

## Example

```javascript
const oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/ZEMPLOYEE_SRV");
```

The application can then read or update employee data using OData requests.

---

## Advantages

- Real-time backend communication
- CRUD operations
- Enterprise-ready
- Standard SAP integration

---

## WorkSphere Future

During the initial development phase, WorkSphere will use JSONModel.

Later, it will integrate with a CAP backend using ODataModel.

---

# DeviceModel

## Purpose

DeviceModel provides information about the user's device.

It enables responsive applications by adapting the UI based on the device type.

---

## Example

```javascript
this.setModel(models.createDeviceModel(), "device");
```

### View

```xml
<Button
    visible="{= !${device>/system/phone} }" />
```

Desktop users see the button.

Phone users do not.

---

## Information Provided

- Phone
- Tablet
- Desktop
- Touch Support
- Screen Orientation
- Browser Features

---

## WorkSphere Example

Desktop

```
Side Navigation Visible
```

Phone

```
Hamburger Menu Visible
```

No additional JavaScript is required.

---

# Default Model vs Named Model

## Default Model

### Controller

```javascript
this.getView().setModel(oEmployeeModel);
```

### View

```xml
<Text text="{/name}" />
```

---

## Named Model

### Controller

```javascript
this.getView().setModel(oEmployeeModel, "employee");
```

### View

```xml
<Text text="{employee>/name}" />
```

Named Models improve readability and are recommended for larger applications.

---

# Model Hierarchy

Models can be assigned at different levels.

```
Core

↓

Component

↓

View

↓

Control
```

SAPUI5 searches for the nearest available Model.

---

# WorkSphere Architecture

```
Component

├── i18n Model

├── Device Model

├── Employee Model

├── Dashboard Model

├── Settings Model

└── Notification Model
```

Each Model has a dedicated responsibility.

---

# Model Comparison

| Model | Purpose | Typical Use Case |
|--------|---------|------------------|
| JSONModel | Local JSON Data | Forms, Temporary Data |
| ResourceModel | Internationalization | Labels, Buttons, Messages |
| ODataModel | Backend Communication | SAP Enterprise Data |
| DeviceModel | Device Information | Responsive Design |

---

# Choosing the Right Model

| Scenario | Recommended Model |
|----------|-------------------|
| Employee Form | JSONModel |
| Login Screen | JSONModel |
| Application Labels | ResourceModel |
| SAP Backend Data | ODataModel |
| Responsive Layout | DeviceModel |

---

# Common Mistakes

## Using JSONModel for Enterprise Backend Data

For enterprise applications, backend communication should use ODataModel.

---

## Hardcoding Labels

Incorrect:

```xml
<Button text="Save" />
```

Correct:

```xml
<Button text="{i18n>save}" />
```

---

## Creating Multiple DeviceModels

A single DeviceModel is generally sufficient for the entire application.

---

## Mixing Different Business Data

Instead of storing all data in one JSONModel, create separate named Models for different modules.

---

# Best Practices

- Use JSONModel for temporary or local data.
- Use ResourceModel for all user-facing text.
- Use ODataModel for backend communication.
- Use DeviceModel for responsive behavior.
- Prefer Named Models in enterprise applications.
- Organize Models based on business functionality.

---

# WorkSphere Example

```
Component

├── device

├── i18n

├── employee

├── dashboard

├── notification
```

The Employee View binds to multiple Models.

```xml
<Text text="{employee>/name}" />

<ObjectNumber number="{dashboard>/activeProjects}" />

<Button text="{i18n>save}" />

<SideNavigation visible="{= !${device>/system/phone} }" />
```

---

# Interview Questions

## Beginner

### What is a Model in SAPUI5?

A Model stores and manages application data and provides it to the View through Data Binding.

---

### What are the main Models in SAPUI5?

- JSONModel
- ResourceModel
- ODataModel
- DeviceModel

---

### Which Model is used for internationalization?

ResourceModel.

---

### Which Model is used for responsive design?

DeviceModel.

---

## Intermediate

### What is the difference between JSONModel and ODataModel?

JSONModel stores local JSON data inside the application.

ODataModel communicates with backend services using the OData protocol.

---

### What is the purpose of Named Models?

Named Models improve readability and allow multiple Models to coexist within the same application.

---

## Advanced

### Explain the Model hierarchy in SAPUI5.

Models can be assigned at the Core, Component, View, or Control level. SAPUI5 searches from the nearest scope outward until it finds the requested Model.

---

# Key Learnings

After completing this lesson, I understand:

- The purpose of Models.
- JSONModel.
- ResourceModel.
- ODataModel.
- DeviceModel.
- Default and Named Models.
- Model hierarchy.
- Enterprise best practices.

---

# Notes

Models are the data layer of SAPUI5 applications. Choosing the appropriate Model based on the application's requirements improves maintainability, scalability, and performance.

---

# My Understanding

SAPUI5 provides specialized Models for different purposes. JSONModel manages local data, ResourceModel supports multiple languages, ODataModel enables enterprise backend communication, and DeviceModel provides device-specific information for responsive applications. Understanding when and how to use each Model is essential for developing enterprise-grade SAPUI5 applications like WorkSphere.