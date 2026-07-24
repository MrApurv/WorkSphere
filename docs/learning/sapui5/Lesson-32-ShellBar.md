# Lesson 32 – ShellBar

---

# What is ShellBar?

ShellBar is SAPUI5's standard enterprise application header.

It provides a consistent top navigation bar containing the application's branding, navigation controls, search, notifications, and user profile.

ShellBar is part of the **sap.f** library and follows the SAP Fiori design guidelines.

---

# Why is ShellBar Needed?

Without ShellBar,

developers would have to create a custom header for every application.

This would lead to:

- Inconsistent user experience
- More development effort
- Difficult maintenance
- Different navigation styles

ShellBar provides a reusable and standardized header for enterprise applications.

---

# ShellBar Layout

```
+--------------------------------------------------------------------------------------+
| ☰  🏢 WorkSphere                    🔍      🔔      ⚙️      👤 Apurv                 |
+--------------------------------------------------------------------------------------+
```

The ShellBar remains visible while the content below changes.

---

# SAPUI5 Library

ShellBar belongs to the following library:

```
sap.f
```

Class Name:

```
sap.f.ShellBar
```

XML Namespace:

```xml
xmlns:f="sap.f"
```

---

# Main Components of ShellBar

A ShellBar can contain:

- Navigation Button
- Application Logo
- Application Title
- Search Button
- Notifications
- Additional Actions
- User Avatar

---

# Important Properties

## title

Displays the application title.

Example:

```xml
title="WorkSphere"
```

---

## showNavButton

Displays the navigation (hamburger) button.

Example:

```xml
showNavButton="true"
```

---

## showSearch

Displays the search icon.

Example:

```xml
showSearch="true"
```

---

## showNotifications

Displays the notification bell.

Example:

```xml
showNotifications="true"
```

---

## showProductSwitcher

Displays the SAP product switcher.

Used mainly inside SAP Fiori Launchpad.

---

## homeIcon

Displays the application logo.

Example:

```xml
homeIcon="images/logo.png"
```

---

# Important Events

## navButtonPress

Triggered when the navigation button is clicked.

Used to open or collapse the Side Navigation.

---

## searchButtonPressed

Triggered when the search icon is clicked.

---

## notificationsPressed

Triggered when the notification icon is clicked.

---

## avatarPressed

Triggered when the user avatar is clicked.

Usually opens:

- Profile
- Settings
- Logout

---

# Application Flow

```
User Opens WorkSphere

↓

ShellBar Loaded

↓

Navigation Button Clicked

↓

Side Navigation Opens

↓

User Selects Module

↓

Main Content Changes
```

The ShellBar remains fixed throughout the application.

---

# WorkSphere Implementation

Our WorkSphere ShellBar will contain:

- WorkSphere Logo
- Application Title
- Navigation Button
- Search
- Notifications
- Settings
- User Profile

Later we will connect these controls with actual business functionality.

---

# Advantages

✔ Enterprise Standard

✔ SAP Fiori Compliant

✔ Responsive Design

✔ Better User Experience

✔ Consistent Navigation

✔ Easy Maintenance

---

# Best Practices

- Use only one ShellBar for the entire application.
- Keep the title short and meaningful.
- Show only commonly used actions.
- Use standard SAP icons.
- Keep business-specific controls out of the header.
- Follow SAP Fiori design guidelines.

---

# Common Mistakes

❌ Creating custom headers instead of using ShellBar.

❌ Adding too many action buttons.

❌ Changing the ShellBar on every page.

❌ Mixing navigation controls with business content.

---

# Interview Questions

## What is ShellBar?

ShellBar is SAPUI5's standard enterprise header control that provides navigation, branding, search, notifications, and user actions.

---

## Which library contains ShellBar?

sap.f

---

## Why should we use ShellBar?

It provides a consistent SAP Fiori-compliant header, improves user experience, and reduces development effort.

---

## What is the purpose of the navigation button?

It is used to open or collapse the Side Navigation.

---

## What is the purpose of the avatar?

It provides access to user-related actions such as Profile, Settings, and Logout.

---

## Can ShellBar be reused across the application?

Yes.

It is designed to be used once as the application's global header.

---

# Quick Revision

ShellBar

↓

Enterprise Header

↓

Application Title

↓

Navigation Button

↓

Search

↓

Notifications

↓

User Avatar

↓

SAP Fiori Standard

↓

sap.f.ShellBar