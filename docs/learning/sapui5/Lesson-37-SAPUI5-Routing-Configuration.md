# 📚 Lesson 37 – SAPUI5 Routing Configuration

> **Topic:** Configuring Routing using `manifest.json`, `Component.js`, and `App.view.xml`

---

# 🎯 Learning Objective

After completing this lesson, you will understand:

- How Routing is configured in SAPUI5
- The role of `manifest.json`
- The purpose of `Component.js`
- Why `App.view.xml` is required
- `controlId`
- `controlAggregation`
- `viewPath`
- Routes
- Targets
- Router Initialization
- Complete Navigation Flow

---

# 📖 Introduction

In **Lesson 36**, we learned the theory of Routing.

In this lesson, we will configure Routing in a real SAPUI5 application.

For WorkSphere, our application should open directly to the Login page when it starts.

---

# 🏗 Routing Architecture

```text
Application Starts

↓

Component.js

↓

Router Initialize

↓

manifest.json

↓

Route

↓

Target

↓

App.view.xml

↓

Login.view.xml
```

This is the complete routing flow inside every SAPUI5 application.

---

# 📄 Files Required for Routing

Routing mainly depends on three files.

```text
webapp
│
├── manifest.json
├── Component.js
└── view
     └── App.view.xml
```

Each file has its own responsibility.

---

# 1️⃣ manifest.json

The **manifest.json** file is called the **heart of a SAPUI5 application**.

It contains:

- Routing
- Models
- Dependencies
- Root View
- Resources

Routing configuration is written inside:

```json
"sap.ui5": {
    "routing": {

    }
}
```

---

# 2️⃣ Component.js

Component.js is the application's entry point.

When the application starts,

SAPUI5 first loads

```text
Component.js
```

Its job is to

- Initialize the application
- Load Models
- Initialize Router

Example

```javascript
init: function () {

    UIComponent.prototype.init.apply(this, arguments);

    this.getRouter().initialize();

}
```

---

# Why initialize the Router?

Without

```javascript
this.getRouter().initialize();
```

SAPUI5 will never start routing.

No Route

↓

No Navigation

↓

No Login Page

---

# 3️⃣ App.view.xml

App.view.xml acts as a **container**.

It doesn't contain business content.

It only contains the App control.

Example

```xml
<mvc:View
    xmlns:mvc="sap.ui.core.mvc"
    xmlns="sap.m"
    displayBlock="true">

    <App id="app"/>

</mvc:View>
```

Think of it as an empty room.

The Router loads different Views inside this room.

---

# Root View

Inside manifest.json

```json
"rootView": {
    "viewName": "com.apurv.worksphere.view.App",
    "type": "XML",
    "id": "App",
    "async": true
}
```

Meaning

Application starts

↓

Load App.view.xml

---

# Routing Configuration

Inside

```json
"sap.ui5"
```

we configure

```json
"routing": {

}
```

Routing contains

- config
- routes
- targets

---

# Routing Config

Example

```json
"config": {
    "routerClass": "sap.m.routing.Router",
    "controlAggregation": "pages",
    "controlId": "app",
    "viewType": "XML",
    "path": "com.apurv.worksphere.view",
    "async": true
}
```

Let's understand every property.

---

# routerClass

```json
"routerClass": "sap.m.routing.Router"
```

Defines which Router SAPUI5 should use.

Usually

```text
sap.m.routing.Router
```

---

# controlId

```json
"controlId": "app"
```

This tells SAPUI5

"Load Views inside App control."

Remember

App.view.xml

```xml
<App id="app"/>
```

Both IDs must match.

Good

```text
App Control

id = app

↓

Routing

controlId = app
```

Bad

```text
App id = app

Routing controlId = App
```

Routing fails.

---

# controlAggregation

```json
"controlAggregation": "pages"
```

App control has an aggregation called

```text
pages
```

SAPUI5 inserts Views into this aggregation.

Think of it like:

```text
App

↓

Pages

↓

Login View

↓

Dashboard View

↓

Employee View
```

---

# viewType

```json
"viewType": "XML"
```

Our Views are XML Views.

Therefore,

SAPUI5 knows which parser to use.

---

# path

```json
"path": "com.apurv.worksphere.view"
```

This tells SAPUI5

where all XML Views are located.

Example

```text
webapp/view/Login.view.xml

↓

com.apurv.worksphere.view.Login
```

---

# async

```json
"async": true
```

Views load asynchronously.

Advantages

- Faster loading
- Better performance
- Non-blocking UI

Always keep

```text
async = true
```

---

# Routes

Routes define

"When should navigation happen?"

Example

```json
"routes": [
    {
        "name": "RouteLogin",
        "pattern": "",
        "target": [
            "TargetLogin"
        ]
    }
]
```

Meaning

If URL is empty

↓

Open Login View

---

# Route Properties

## name

Unique Route Name

Example

```json
"name": "RouteLogin"
```

---

## pattern

Defines URL.

Example

```json
"pattern": ""
```

means

```text
localhost:8080
```

Example

```json
"pattern": "employees"
```

means

```text
localhost:8080/#/employees
```

---

## target

Target tells Router

which View should open.

Example

```json
"target": [
    "TargetLogin"
]
```

---

# Targets

Example

```json
"targets": {

    "TargetLogin": {

        "id": "Login",

        "name": "Login"

    }

}
```

Meaning

Load

```text
Login.view.xml
```

---

# Complete Flow

When WorkSphere starts

```text
Application Starts

↓

Component.js

↓

Router Initialize

↓

manifest.json

↓

Pattern = ""

↓

RouteLogin

↓

TargetLogin

↓

Login.view.xml

↓

Displayed inside App
```

---

# WorkSphere Example

Our Login Page

```text
URL

↓

localhost:8080
```

Pattern

```text
""
```

↓

Route

```text
RouteLogin
```

↓

Target

```text
TargetLogin
```

↓

View

```text
Login.view.xml
```

Exactly the flow we implemented.

---

# Best Practices

✔ Keep all Routing inside manifest.json.

✔ Use meaningful Route names.

Good

```text
RouteLogin

RouteDashboard

RouteEmployees
```

---

✔ Keep one Target per View.

---

✔ Always initialize Router.

---

✔ Keep App.view.xml empty.

---

✔ Never write business logic inside App.view.xml.

---

# Common Mistakes

❌ Wrong controlId

```text
App id

↓

app

Routing

↓

App
```

IDs don't match.

Routing fails.

---

❌ Forgetting

```javascript
this.getRouter().initialize();
```

---

❌ Wrong path

```json
"path":"com.test"
```

instead of

```json
"path":"com.apurv.worksphere.view"
```

---

❌ Loading Views manually.

Always use Routing.

---

# Interview Questions

## Q1. Why is App.view.xml required?

**Answer**

It acts as the container where all routed Views are loaded.

---

## Q2. What is controlId?

**Answer**

It specifies the control into which SAPUI5 inserts routed Views.

---

## Q3. Why does controlId need to match App id?

**Answer**

Because the Router needs the exact control to display Views. If they don't match, navigation fails.

---

## Q4. Why is Component.js important?

**Answer**

It is the application's entry point and initializes the Router.

---

## Q5. What is the purpose of targets?

**Answer**

Targets specify which View should be displayed when a Route matches.

---

# 📝 Quick Revision

- `manifest.json` contains the routing configuration.
- `Component.js` initializes the Router.
- `App.view.xml` acts as the routing container.
- `controlId` must match the `App` control ID.
- `controlAggregation` specifies where Views are inserted.
- `path` defines the View package.
- `Route` maps a URL pattern.
- `Target` maps a Route to a View.

---

# 💻 Git Commands

```bash
# Check changes
git status

# Add the new lesson
git add docs/learning/Lesson-37-SAPUI5-Routing-Configuration.md

# Commit
git commit -m "docs(lesson-37): add SAPUI5 Routing Configuration notes"

# Push to GitHub
git push origin main
```

---

# 🎯 Lesson Summary

In this lesson, we configured SAPUI5 Routing using **manifest.json**, **Component.js**, and **App.view.xml**. We learned how the Router is initialized, how Routes map URL patterns to Targets, and how the `App` control acts as the container for all application Views. This configuration allows WorkSphere to launch directly on the Login page and provides the foundation for all future navigation.

---

# 🚀 Next Lesson

## **Lesson 38 – Building the WorkSphere Login Page**

Topics:

- Enterprise Login UI Design
- HBox & VBox Layout
- Labels
- Inputs
- Buttons
- CheckBox
- Link
- Responsive Design
- CSS Styling
- Login Screen Best Practices