# Lesson 05 - SAPUI5 Project Structure

## Date : 15-07-2026

---

# package.json

## Purpose

The `package.json` file is the identity card of a Node.js project. It stores project metadata, project information, dependencies, and scripts required to build and run the SAPUI5 application.

## Key Sections

- name
- version
- description
- scripts
- devDependencies
- dependencies

## My Understanding

Whenever I run commands like `npm install` or `npm start`, Node.js first reads the `package.json` file. It tells Node.js what packages are required and which commands should be executed. Every Node.js project must have a `package.json` file.

---

# package-lock.json

## Purpose

The `package-lock.json` file locks the exact versions of all installed packages. It ensures that every developer working on the project installs the same package versions.

## My Understanding

If `package.json` says I need a package like `@ui5/cli`, the `package-lock.json` file records the exact version that was installed. This avoids version conflicts between different developers or systems.

---

# ui5.yaml

## Purpose

The `ui5.yaml` file is the main configuration file for the UI5 Tooling. It tells the UI5 server how to build, serve, and manage the SAPUI5 application.

## My Understanding

When I execute `npm start`, the UI5 Tooling reads the `ui5.yaml` file to understand how to start my application. It contains information such as the project type, metadata, server configuration, and build settings.

---

# ui5-local.yaml

## Purpose

The `ui5-local.yaml` file contains configuration used only during local development.

## My Understanding

This file helps run the application on my local machine. It may contain middleware or development-specific settings that are not required when the application is deployed to a server.

---

# README.md

## Purpose

The `README.md` file is the documentation of the project. It explains what the project is, how to install it, how to run it, and other useful information for developers.

## My Understanding

Whenever a new developer joins the project, the first file they should read is `README.md`. It provides an overview of the project and setup instructions. A well-written README makes a project easier to understand and maintain.

---

# .gitignore

## Purpose

The `.gitignore` file tells Git which files and folders should not be tracked or uploaded to the Git repository.

## My Understanding

Folders like `node_modules` contain downloaded packages and can be recreated using `npm install`. Uploading them would unnecessarily increase the repository size. Therefore, they are listed in `.gitignore` so Git ignores them.

---

# Key Points I Learned

- `package.json` is the identity card of the project.
- `package-lock.json` stores the exact package versions.
- `ui5.yaml` configures the UI5 Tooling.
- `ui5-local.yaml` is used for local development.
- `README.md` documents the project.
- `.gitignore` prevents unnecessary files from being tracked by Git.

---

# Interview Questions

### 1. What is the purpose of package.json?

It stores project metadata, dependencies, and scripts required to build and run the application.

---

### 2. What is the difference between package.json and package-lock.json?

`package.json` defines which packages are required, while `package-lock.json` records the exact versions of those packages to ensure consistency across different environments.

---

### 3. Why is ui5.yaml important?

It is the main configuration file for UI5 Tooling and is used to build and serve the SAPUI5 application.

---

### 4. Why shouldn't node_modules be committed to Git?

Because it contains downloaded dependencies that can be recreated by running `npm install`. Committing it would make the repository unnecessarily large.

---

### 5. What is the purpose of .gitignore?

It tells Git which files and folders should not be tracked or committed to the repository.