# Lesson 33 – ToolPage

---

# What is ToolPage?

ToolPage is a SAPUI5 layout control used to build enterprise applications.

It provides a standard application layout consisting of:

- Header
- Side Navigation
- Main Content

ToolPage belongs to the **sap.tnt** library and follows SAP Fiori design guidelines.

---

# Why is ToolPage Needed?

Without ToolPage,

developers would need to manually create the application layout for every page.

This would result in:

- Duplicate code
- Difficult maintenance
- Inconsistent layouts
- Poor scalability

ToolPage provides a reusable and standardized layout for enterprise applications.

---

# ToolPage Layout

```
+-------------------------------------------------------------+
|                       Header (ShellBar)                     |
+-------------------------------------------------------------+
| Side Navigation |            Main Content                   |
|                 |                                           |
| Dashboard       |                                           |
| Employees       |                                           |
| Assets          |                                           |
| Projects        |                                           |
| Reports         |                                           |
| Settings        |                                           |
+-----------------+-------------------------------------------+
```

The Header and Side Navigation remain fixed while only the Main Content changes.

---

# SAPUI5 Library

ToolPage belongs to the following library:

```
sap.tnt
```

Class Name:

```
sap.tnt.ToolPage
```

XML Namespace:

```xml
xmlns:tnt="sap.tnt"
```

---

# Main Sections of ToolPage

## Header

Contains the ShellBar.

Responsible for:

- Application Title
- Search
- Notifications
- User Profile

---

## Side Content

Contains the Side Navigation.

Responsible for:

- Dashboard
- Employees
- Assets
- Projects
- Reports
- Settings

---

## Main Content

Displays the currently selected page.

Only this section changes during navigation.

---

# Application Flow

```
User Opens WorkSphere

↓

Component.js

↓

App.view.xml

↓

ToolPage

↓

Header (ShellBar)

↓

Side Navigation

↓

Selected Page
```

The ToolPage remains loaded while only the Main Content updates.

---

# WorkSphere Implementation

Our WorkSphere application will use ToolPage as the main layout.

The ToolPage will contain:

- ShellBar
- Side Navigation
- Main Content Area

Every business module will be displayed inside the Main Content section.

---

# Advantages

✔ Enterprise Standard Layout

✔ SAP Fiori Compliant

✔ Responsive Design

✔ Easy Navigation

✔ Reusable Structure

✔ Scalable Architecture

---

# Best Practices

- Use a single ToolPage for the entire application.
- Place ShellBar inside the Header.
- Place Side Navigation inside the Side Content.
- Display business pages only inside the Main Content.
- Follow SAP Fiori layout guidelines.

---

# Common Mistakes

❌ Creating multiple ToolPages.

❌ Adding business controls inside the Header.

❌ Mixing navigation with business logic.

❌ Creating separate layouts for every page.

---

# Interview Questions

## What is ToolPage?

ToolPage is a SAPUI5 layout control that provides an enterprise application structure with a Header, Side Navigation, and Main Content.

---

## Which library contains ToolPage?

sap.tnt

---

## What are the three main sections of ToolPage?

- Header
- Side Content
- Main Content

---

## Why should we use ToolPage?

It provides a reusable, scalable, and SAP Fiori-compliant layout for enterprise applications.

---

## What changes during navigation in a ToolPage?

Only the Main Content changes.

The Header and Side Navigation remain fixed.

---

# Quick Revision

ToolPage

↓

Enterprise Layout

↓

Header

↓

ShellBar

↓

Side Navigation

↓

Main Content

↓

Reusable Layout

↓

SAP Fiori Standard

↓

sap.tnt.ToolPage