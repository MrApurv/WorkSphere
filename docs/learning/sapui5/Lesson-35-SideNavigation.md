# Lesson 35 – SideNavigation

---

# What is SideNavigation?

SideNavigation is a SAPUI5 control used to create the left-side navigation panel of an enterprise application.

It allows users to move between different business modules from a single navigation area.

SideNavigation belongs to the **sap.tnt** library and is commonly used together with `ToolPage`.

---

# Why is SideNavigation Needed?

Without SideNavigation,

users would not have a clear and structured way to move between different application modules.

This would result in:

- Poor navigation experience
- Inconsistent application flow
- Difficult access to business modules
- Poor scalability
- Confusing user interface

SideNavigation provides a reusable and organized navigation structure.

---

# SideNavigation Layout

```text
+---------------------------+
| 🏠 Dashboard              |
| 👥 Employees              |
| 💼 Projects               |
| 💻 Assets                 |
| 📊 Reports                |
| ⚙ Settings               |
+---------------------------+
```

The SideNavigation remains visible while the Main Content changes based on the selected item.

---

# SAPUI5 Library

SideNavigation belongs to the following library:

```text
sap.tnt
```

Class Name:

```text
sap.tnt.SideNavigation
```

XML Namespace:

```xml
xmlns:tnt="sap.tnt"
```

---

# Main Controls Used

The SideNavigation structure uses the following controls:

```text
sap.tnt.SideNavigation
sap.tnt.NavigationList
sap.tnt.NavigationListItem
```

---

# SideNavigation Structure

```text
SideNavigation

↓

NavigationList

↓

NavigationListItem

↓

Dashboard

↓

Employees

↓

Projects

↓

Assets

↓

Reports

↓

Settings
```

---

# SideNavigation Control

The `SideNavigation` control creates the complete left-side navigation panel.

```xml
<tnt:SideNavigation id="sideNavigation">
</tnt:SideNavigation>
```

It acts as the main container for the navigation list.

---

# NavigationList

`NavigationList` is a container that holds multiple navigation items.

```xml
<tnt:NavigationList>
</tnt:NavigationList>
```

It does not represent an individual menu option.

It only groups multiple `NavigationListItem` controls.

---

# NavigationListItem

`NavigationListItem` represents one navigation option.

Example:

```xml
<tnt:NavigationListItem
    text="Dashboard"
    icon="sap-icon://home" />
```

Each item can contain:

- Text
- Icon
- Key
- Child Items
- Selection State

---

# Important Properties

## text

The `text` property displays the name of the navigation item.

```xml
text="Dashboard"
```

---

## icon

The `icon` property displays an SAP icon beside the navigation text.

```xml
icon="sap-icon://home"
```

---

## key

The `key` property provides a unique identifier for the navigation item.

Example:

```xml
key="dashboard"
```

The key is useful for:

- Routing
- Item selection
- Controller logic
- Identifying the selected module

---

# WorkSphere Navigation Items

The WorkSphere SideNavigation currently contains:

```text
Dashboard
Employees
Projects
Assets
Reports
Settings
```

Each item represents a separate business module.

---

# WorkSphere Implementation

```xml
<tnt:sideContent>

    <tnt:SideNavigation
        id="sideNavigation"
        expanded="false">

        <tnt:NavigationList>

            <tnt:NavigationListItem
                text="Dashboard"
                icon="sap-icon://home" />

            <tnt:NavigationListItem
                text="Employees"
                icon="sap-icon://employee" />

            <tnt:NavigationListItem
                text="Projects"
                icon="sap-icon://project-definition-triangle-2" />

            <tnt:NavigationListItem
                text="Assets"
                icon="sap-icon://laptop" />

            <tnt:NavigationListItem
                text="Reports"
                icon="sap-icon://business-objects-experience" />

            <tnt:NavigationListItem
                text="Settings"
                icon="sap-icon://action-settings" />

        </tnt:NavigationList>

    </tnt:SideNavigation>

</tnt:sideContent>
```

---

# Common SAP Icons Used

## Dashboard

```text
sap-icon://home
```

---

## Employees

```text
sap-icon://employee
```

---

## Projects

```text
sap-icon://project-definition-triangle-2
```

---

## Assets

```text
sap-icon://laptop
```

---

## Reports

```text
sap-icon://business-objects-experience
```

---

## Settings

```text
sap-icon://action-settings
```

---

# Application Flow

```text
User Opens WorkSphere

↓

ToolPage Loads

↓

SideNavigation Loads

↓

NavigationList Is Displayed

↓

Navigation Items Are Displayed

↓

User Selects a Module

↓

Selected Page Loads in Main Content
```

Currently, the navigation items are only displayed.

In future lessons, routing will be added so that each item opens a separate page.

---

# Expand and Collapse Support

SideNavigation supports two display modes:

## Expanded Mode

```text
🏠 Dashboard
👥 Employees
💼 Projects
```

Both icon and text are visible.

---

## Collapsed Mode

```text
🏠
👥
💼
```

Only icons are visible.

This provides more space for the Main Content.

---

# Initial Navigation State

The navigation can be initially collapsed using:

```xml
expanded="false"
```

However, when SideNavigation is used inside ToolPage, the complete side-area state is controlled using:

```xml
sideExpanded="false"
```

inside the `ToolPage`.

---

# Advantages

✔ Clear Application Navigation

✔ Reusable Structure

✔ SAP Fiori-Aligned Design

✔ Supports Icons

✔ Expand and Collapse Support

✔ Easy to Maintain

✔ Scalable for Additional Modules

---

# Best Practices

- Use one SideNavigation for the complete application.
- Use simple and meaningful navigation names.
- Use consistent SAP icons.
- Assign a unique key to every navigation item.
- Connect navigation items with routing.
- Keep business logic outside SideNavigation.
- Do not add too many top-level navigation items.
- Use child items when related modules need grouping.

---

# Common Mistakes

❌ Creating multiple SideNavigation controls.

❌ Using unrelated icons.

❌ Adding business controls inside SideNavigation.

❌ Not assigning unique keys to navigation items.

❌ Changing business content directly without routing.

❌ Using SideNavigation without ToolPage in an enterprise layout.

---

# Interview Questions

## What is SideNavigation?

SideNavigation is a SAPUI5 control used to create a left-side navigation panel for enterprise applications.

---

## Which library contains SideNavigation?

```text
sap.tnt
```

---

## What is the class name of SideNavigation?

```text
sap.tnt.SideNavigation
```

---

## Which control stores navigation items?

```text
sap.tnt.NavigationList
```

---

## Which control represents one navigation option?

```text
sap.tnt.NavigationListItem
```

---

## What is the purpose of the key property?

The key property uniquely identifies a navigation item and is useful for routing and controller logic.

---

## Can SideNavigation be collapsed?

Yes.

It can display:

- Icons and text in expanded mode
- Icons only in collapsed mode

---

## Which control is commonly used with SideNavigation?

```text
sap.tnt.ToolPage
```

---

## What should happen when a user selects a navigation item?

The application should use routing to load the selected business page inside the Main Content area.

---

# Quick Revision

```text
SideNavigation

↓

sap.tnt

↓

NavigationList

↓

NavigationListItem

↓

Text

↓

Icon

↓

Key

↓

Dashboard

↓

Employees

↓

Projects

↓

Assets

↓

Reports

↓

Settings

↓

Expanded Mode

↓

Collapsed Mode

↓

Enterprise Navigation
```

---
