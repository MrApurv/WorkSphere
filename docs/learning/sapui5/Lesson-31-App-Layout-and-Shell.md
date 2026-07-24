# Lesson 31 – Application Layout and Shell

---

# What is an Application Shell?

An Application Shell is the main layout or container of an application.

It provides a consistent structure by keeping common UI elements like the Header and Navigation fixed, while only the main content changes during navigation.

In enterprise SAPUI5 applications, the Application Shell serves as the foundation for all business modules.

---

# Why is an Application Shell Needed?

Without an Application Shell:

- Every View would require its own Header.
- Every View would require its own Navigation.
- The UI would become inconsistent.
- Code duplication would increase.
- Maintenance would become difficult.

The Application Shell solves these problems by defining a single reusable layout for the entire application.

---

# Application Shell Structure

A typical SAPUI5 enterprise application follows this layout:

```
+------------------------------------------------------+
| Header (ShellBar)                                    |
+--------------------+---------------------------------+
| Navigation         | Main Content                    |
| Dashboard          |                                 |
| Employees          |                                 |
| Assets             |                                 |
| Projects           |                                 |
| Reports            |                                 |
| Settings           |                                 |
+--------------------+---------------------------------+
```

The Header and Navigation remain fixed, while only the Main Content changes.

---

# How the Application Works

```
User Opens Application

↓

Component.js

↓

App.view.xml

↓

Application Shell

↓

Navigation

↓

Selected View
```

The shell is loaded only once. Navigation updates only the content area without reloading the application.

---

# WorkSphere Application Layout

Our WorkSphere application will use the following layout:

```
+-----------------------------------------------------------+
| 🏢 WorkSphere                     🔍 🔔 ⚙️ 👤             |
+-------------------+---------------------------------------+
| Dashboard         |                                       |
| Employees         |                                       |
| Assets            |           Main Content                |
| Projects          |                                       |
| Reports           |                                       |
| Settings          |                                       |
+-------------------+---------------------------------------+
```

This layout provides a professional enterprise user experience.

---

# SAPUI5 Controls Used

The Application Shell will be built using the following SAPUI5 controls:

| Control | Purpose |
|---------|---------|
| sap.tnt.ToolPage | Overall application layout |
| sap.f.ShellBar | Header section |
| sap.tnt.SideNavigation | Left-side navigation menu |
| sap.m.NavContainer | Displays different pages |
| sap.m.Page | Individual application pages |

These controls work together to create a scalable and responsive application.

---

# Navigation Flow

```
Dashboard

↓

Employees

↓

Assets

↓

Projects

↓

Reports

↓

Settings
```

The Application Shell remains fixed while the displayed page changes.

---

# Benefits of an Application Shell

✔ Consistent User Interface

✔ Better User Experience

✔ Reusable Layout

✔ Easier Maintenance

✔ Enterprise Standard Architecture

✔ Scalable Design

---

# Real-Time Example

In WorkSphere:

- The Header will display the application logo, notifications, search, and user profile.
- The Side Navigation will contain all business modules.
- The Main Content Area will display the selected page.
- The Header and Navigation will remain visible during navigation.

This is how modern SAP Fiori applications are designed.

---

# Best Practices

- Design the application layout before implementing business modules.
- Keep the Header fixed across the application.
- Use a single Navigation menu.
- Display only one page inside the Main Content area.
- Avoid duplicating layout code in multiple Views.
- Follow SAP Fiori design guidelines.

---

# Common Mistakes

❌ Creating separate Headers for every View.

❌ Duplicating Navigation menus across pages.

❌ Mixing navigation logic with business logic.

❌ Not planning the application layout before development.

---

# Interview Questions

## What is an Application Shell?

An Application Shell is the main layout container of an application that provides a consistent structure by keeping common UI elements like the Header and Navigation fixed while the content changes.

---

## Why is an Application Shell used?

It provides a reusable layout, improves user experience, reduces code duplication, and simplifies maintenance.

---

## Which SAPUI5 controls are commonly used to build an Application Shell?

- sap.tnt.ToolPage
- sap.f.ShellBar
- sap.tnt.SideNavigation
- sap.m.NavContainer
- sap.m.Page

---

## What is the purpose of ToolPage?

ToolPage provides the overall layout for enterprise SAPUI5 applications, including the Header, Navigation, and Main Content.

---

## Why should the Header remain fixed?

Keeping the Header fixed provides a consistent user experience and easy access to common actions such as search, notifications, and user profile.

---

## What changes during navigation?

Only the Main Content area changes. The Header and Navigation remain fixed.

---

# Quick Revision

Application Shell

↓

Reusable Application Layout

↓

Header

↓

Navigation

↓

Main Content

↓

Consistent User Experience

↓

Enterprise Architecture

↓

SAP Fiori Standard

↓

Built Using

ToolPage

↓

ShellBar

↓

SideNavigation

↓

NavContainer

↓

Page