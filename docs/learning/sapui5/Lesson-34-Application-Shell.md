# Lesson 34 – Building the WorkSphere Application Shell

---

# What is an Application Shell?

An Application Shell is the main visual framework of an enterprise application.

It provides the common structure that remains visible while users move between different business modules.

The WorkSphere Application Shell contains:

- ToolPage
- ShellBar
- Side Navigation
- Main Content

---

# Why is an Application Shell Needed?

Without an Application Shell,

developers may create separate layouts for every page.

This would result in:

- Duplicate layout code
- Inconsistent user interface
- Difficult maintenance
- Poor navigation experience
- Limited scalability

An Application Shell provides one reusable structure for the complete application.

---

# Application Shell Layout

```text
+-------------------------------------------------------------+
|                        ShellBar                             |
|  ☰ WorkSphere                     Search  Bell  Profile     |
+-----------------+-------------------------------------------+
| Side Navigation |                Main Content               |
|                 |                                           |
| Dashboard       |                Dashboard                  |
| Employees       |                                           |
| Projects        |          Welcome to WorkSphere            |
| Assets          |                                           |
| Reports         |                                           |
| Settings        |                                           |
+-----------------+-------------------------------------------+
```

The ShellBar and Side Navigation remain available while only the Main Content changes.

---

# Main Controls Used

The WorkSphere Application Shell uses the following SAPUI5 controls:

```text
sap.tnt.ToolPage
sap.f.ShellBar
sap.tnt.SideNavigation
sap.tnt.NavigationList
sap.tnt.NavigationListItem
```

---

# Required XML Namespaces

```xml
xmlns:mvc="sap.ui.core.mvc"
xmlns="sap.m"
xmlns:tnt="sap.tnt"
xmlns:f="sap.f"
```

---

# Structure of the Application Shell

```text
ToolPage

↓

Header

↓

ShellBar

↓

Side Content

↓

SideNavigation

↓

Main Contents

↓

Business Page
```

---

# ToolPage as Root Layout

The `ToolPage` acts as the main layout control.

```xml
<tnt:ToolPage id="toolPage">
</tnt:ToolPage>
```

It contains three important aggregations:

- Header
- Side Content
- Main Contents

---

# Header Section

The Header contains the ShellBar.

```xml
<tnt:header>
    <f:ShellBar />
</tnt:header>
```

The ShellBar provides:

- Application Title
- Hamburger Menu
- Search
- Notifications
- Profile Avatar

---

# Side Content Section

The Side Content contains the SideNavigation.

```xml
<tnt:sideContent>
    <tnt:SideNavigation />
</tnt:sideContent>
```

It provides access to different WorkSphere modules.

---

# Main Contents Section

The Main Contents aggregation displays the selected business page.

```xml
<tnt:mainContents>
    <Page title="Dashboard">
        <content>
            <Text text="Welcome to WorkSphere!" />
        </content>
    </Page>
</tnt:mainContents>
```

Currently, the Dashboard page is displayed as temporary content.

Later, routing will load different views inside this area.

---

# WorkSphere Implementation

The initial WorkSphere Application Shell contains:

- WorkSphere application title
- Hamburger Menu
- Search button
- Notification button
- Profile Avatar
- Dashboard page
- Welcome message

The SideNavigation is added in the next lesson.

---

# Current Application Flow

```text
User Starts Application

↓

Component.js Loads

↓

App.view.xml Loads

↓

ToolPage Is Created

↓

ShellBar Is Displayed

↓

Dashboard Page Is Displayed

↓

Welcome Message Appears
```

---

# View and Controller Connection

The XML View defines the user interface.

The Controller handles user interactions.

Example:

```xml
searchButtonPressed=".onSearchPress"
```

This event calls the following controller method:

```javascript
onSearchPress() {
    MessageToast.show("Search button pressed");
}
```

---

# Event Binding Flow

```text
User Clicks a Button

↓

Control Event Is Triggered

↓

XML Event Binding Calls Controller

↓

Controller Method Executes

↓

Application Responds
```

---

# MessageToast

`MessageToast` displays a temporary message on the application screen.

Import:

```javascript
"sap/m/MessageToast"
```

Usage:

```javascript
MessageToast.show("Search button pressed");
```

It is useful for:

- Testing events
- Simple confirmations
- Temporary information messages

---

# Advantages

✔ Reusable Application Structure

✔ Consistent User Interface

✔ Separation of Layout and Business Pages

✔ SAP Fiori-Aligned Design

✔ Easier Maintenance

✔ Scalable for Future Modules

---

# Best Practices

- Use one main Application Shell.
- Keep the ShellBar and SideNavigation outside business views.
- Display business modules inside Main Contents.
- Keep UI logic inside the View.
- Keep event-handling logic inside the Controller.
- Use routing when multiple pages are introduced.

---

# Common Mistakes

❌ Placing every business control inside `App.view.xml`.

❌ Creating a separate ShellBar for every page.

❌ Mixing controller logic directly into XML.

❌ Using incorrect ShellBar event names.

❌ Building multiple application shells.

---

# Interview Questions

## What is an Application Shell?

An Application Shell is the reusable top-level layout of an application containing common elements such as the Header, Navigation, and Main Content.

---

## Which controls are used in the WorkSphere Application Shell?

- ToolPage
- ShellBar
- SideNavigation
- Page

---

## Why should the Application Shell remain fixed?

It provides a consistent user experience while only the selected business content changes.

---

## What is the role of `App.view.xml`?

`App.view.xml` defines the root user interface and the primary layout of the application.

---

## What is the role of `App.controller.js`?

`App.controller.js` handles events and interaction logic associated with `App.view.xml`.

---

## What is event binding?

Event binding connects a UI control event in the XML View with a method in the Controller.

---

## What is MessageToast?

MessageToast is a SAPUI5 control used to display a temporary informational message.

---

# Quick Revision

```text
Application Shell

↓

ToolPage

↓

Header

↓

ShellBar

↓

Side Content

↓

Main Contents

↓

Dashboard Page

↓

View

↓

Controller

↓

Event Binding

↓

Reusable Enterprise Layout
```

---

