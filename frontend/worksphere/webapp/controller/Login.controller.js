sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/m/MessageBox"
], (Controller, MessageToast, MessageBox) => {
    "use strict";

    return Controller.extend("com.apurv.worksphere.controller.Login", {
        onInit() {
        },

        /**
         * Removes the username error while the user is typing.
         *
         * @param {sap.ui.base.Event} oEvent Input live-change event
         */
        onUsernameLiveChange: function (oEvent) {
            const oInput = oEvent.getSource();

            if (oInput.getValue.trim()) {
                oInput.setValueState("None");
                oInput.setValueStateText("");
            }
        },

        /**
        * Validates the login form.
        *
        * Real authentication and routing will be added later.
        */
        onSignIn: function () {
            const oUsernameInput = this.byId("usernameInput");
            const oPasswordInput = this.byId("passwordInput");

            const sUsername = oUsernameInput.getValue().trim();
            const sPassword = oPasswordInput.getValue();

            const bUsernameValid = this._validateUsername(oUsernameInput, sUsername);
            const bPasswordValid = this._validatePassword(oPasswordInput, sPassword);

            if (!bUsernameValid || !bPasswordValid) {
                MessageBox.error("Please enter valid credentials.");
                return;
            }

            MessageToast.show(`Login validation successful. Welcome, ${sUsername}!`);

            /*
            * Routing will be added in the next lesson:
            *
            * this.getOwnerComponent()
            *     .getRouter()
            *     .navTo("dashboard");
            */
        },

        /**
         * Handles the Forgot Password link.
         */
        onForgotPassword: function () {
            messageBox.information("Password recovery will be available in a future version of WorkSphere.");
        },

        /**
         * Validates the username or email field.
         *
         * @param {sap.m.Input} oInput Username input
         * @param {string} sUsername Entered username
         * @returns {boolean} Validation result
         * @private
         */
        _validateUsername: function (oInput, sUsername) {
            if (!sUsername) {
                oInput.setValueState("Error");
                oInput.setValueStateText("Username is required.");
                return false;
            }

            oInput.setValueState("None");
            oInput.setValueStateText("");
            return true;
        },

        /**
         * Validates the password field.
         *
         * @param {sap.m.Input} oInput Password input
         * @param {string} sPassword Entered password
         * @returns {boolean} Validation result
         * @private
         */
        _validatePassword: function (oInput, sPassword) {
            if (!sPassword) {
                oInput.setValueState("Error");
                oInput.setValueStateText("Password is required.");
                return false;
            }

            if (sPassword.length < 6) {
                oInput.setValueState("Error");
                oInput.setValueStateText("Password must be at least 6 characters long.");
                return false;
            }

            oInput.setValueState("None");
            oInput.setValueStateText("");
            return true;
        }

    });
});
