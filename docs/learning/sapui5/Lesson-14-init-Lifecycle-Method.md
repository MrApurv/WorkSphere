# Lesson 14 - init() Lifecycle Method

## Date

23-07-2026

---

# Objective

In this lesson, I learned about the `init()` lifecycle method in SAPUI5. I understood when it is executed, why it is important, how the parent `init()` method is called, how the Device Model is registered, and why routing is initialized inside this method.

---

# Current WorkSphere Code

```javascript
init() {
    // call the base component's init function
    UIComponent.prototype.init.apply(this, arguments);

    // set the device model
    this.setModel(models.createDeviceModel(), "device");

    // enable routing
    this.getRouter().initialize();
}
```

This method is executed automatically by the SAPUI5 framework when the application starts.

---

# What is a Lifecycle Method?

A lifecycle method is a method that SAPUI5 automatically executes during different stages of an application's life.

Examples include:

- init()
- destroy()
- onInit()
- onBeforeRendering()
- onAfterRendering()
- onExit()

These methods are called by the SAPUI5 framework; developers do not invoke them manually.

---

# What is init()?

`init()` is the initialization method of the application component.

It runs only once during application startup.

Its main responsibility is to initialize application-wide resources before the first screen is displayed.

Typical tasks performed in `init()` include:

- Register global models
- Initialize routing
- Load user preferences
- Initialize authentication
- Create OData models
- Configure global settings

---

# Application Startup Flow

```
User Opens Browser

↓

index.html

↓

SAPUI5 Bootstrap

↓

Component.js Loaded

↓

init()

↓

Device Model Created

↓

Router Initialized

↓

Root View Loaded

↓

Application Ready
```

---

# Understanding the Parent init()

```javascript
UIComponent.prototype.init.apply(this, arguments);
```

This line calls the original `init()` method of the parent class (`UIComponent`).

Since WorkSphere extends `UIComponent`, SAPUI5 first executes the framework initialization before running our custom initialization code.

---

# Why is the Parent init() Important?

The parent `init()` performs many framework tasks such as:

- Reading `manifest.json`
- Initializing framework services
- Preparing routing
- Creating internal objects
- Loading configured models
- Preparing resource bundles

Without this call, many SAPUI5 features will not work correctly.

---

# Understanding prototype

Every JavaScript class stores its methods in its prototype.

```
UIComponent

↓

prototype

↓

init()
```

Using:

```javascript
UIComponent.prototype.init
```

means:

"Execute the original initialization logic of the UIComponent class."

---

# Understanding apply(this, arguments)

The `apply()` method executes another function while preserving:

- The current object (`this`)
- All received arguments (`arguments`)

```
Current Component

↓

this

↓

Parent init()

↓

Runs Correctly
```

This ensures that the framework initialization runs in the correct application context.

---

# Registering the Device Model

```javascript
this.setModel(
    models.createDeviceModel(),
    "device"
);
```

This line creates and registers the Device Model globally.

The model is stored with the name:

```
device
```

Any controller or view can access it.

---

# What is the Device Model?

The Device Model contains information about the user's device.

Examples:

- Desktop
- Tablet
- Phone
- Touch Support
- Orientation
- Operating System

Example usage inside an XML View:

```xml
<Text visible="{= !${device>/system/phone} }"/>
```

This allows the UI to behave differently depending on the device.

---

# Initializing the Router

```javascript
this.getRouter().initialize();
```

This starts SAPUI5's routing mechanism.

The router reads the configuration from `manifest.json` and determines which view should be displayed.

Without this line:

- Navigation will not work
- URLs will not be processed
- Target views will not load automatically

---

# Complete Execution Sequence

```
Browser

↓

index.html

↓

SAPUI5 Bootstrap

↓

Component Created

↓

Parent init()

↓

Read manifest.json

↓

Create Device Model

↓

Register Device Model

↓

Initialize Router

↓

Load Root View

↓

Create Controller

↓

Application Ready
```

---

# Why is init() Executed Only Once?

The application component exists only once during the application's lifetime.

Therefore, `init()` is executed a single time when the component is created.

Controllers may be created and destroyed multiple times, but the component generally remains active until the application closes.

---

# Responsibilities of init()

Good use cases:

- Register global models
- Initialize routing
- Load application settings
- Initialize authentication
- Configure global services

Avoid:

- Screen-specific logic
- Button click handling
- Business calculations
- Heavy database requests during startup

---

# Best Practices

✅ Always call the parent `init()` first.

✅ Register only application-wide models.

✅ Keep startup logic lightweight.

✅ Initialize routing after framework initialization.

✅ Place screen-specific logic inside controllers.

---

# Common Mistakes

❌ Removing the parent `init()` call.

❌ Registering duplicate models.

❌ Performing expensive operations during startup.

❌ Writing controller logic inside `Component.js`.

---

# Interview Questions

## Beginner

### What is `init()`?

It is the lifecycle method that SAPUI5 automatically executes when the application component is initialized.

---

## Intermediate

### Why do we call `UIComponent.prototype.init.apply(this, arguments)`?

It executes the parent component's initialization logic before running the application's custom initialization.

---

## Advanced

### Why is routing initialized inside `init()`?

Routing depends on the framework and application configuration being fully initialized. Therefore, it is started only after the parent initialization has completed.

---

# Key Learnings

After completing this lesson, I understand:

- What a lifecycle method is
- When `init()` is executed
- Why the parent `init()` must always be called
- What `prototype` means
- How `apply(this, arguments)` works
- Why the Device Model is created here
- Why routing is initialized here
- The complete application startup sequence

---

# Notes

The `init()` method is the entry point for application-level initialization. It prepares the SAPUI5 framework, registers global models, starts routing, and ensures the application is ready before the first view is displayed.

---

# My Understanding

The `init()` lifecycle method is responsible for initializing the WorkSphere application. It first allows the SAPUI5 framework to perform its own initialization by calling the parent `init()` method. After that, it registers the Device Model and initializes the router so that the application can adapt to different devices and navigate correctly. Since `init()` runs only once during startup, it should contain only application-wide initialization logic.