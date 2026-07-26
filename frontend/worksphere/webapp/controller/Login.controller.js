sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "../service/AuthenticationService",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageBox",
    "sap/m/MessageToast"
], function (
    Controller,
    AuthenticationService,
    JSONModel,
    MessageBox,
    MessageToast
) {
    "use strict";

    return Controller.extend(
        "com.apurv.worksphere.controller.Login",
        {
            /**
             * Initializes the login model and restores
             * an existing authenticated session.
             */
            onInit: function () {
                const oLoginModel = new JSONModel({
                    email: "",
                    password: "",
                    rememberMe: false,
                    busy: false
                });

                this.getView().setModel(
                    oLoginModel,
                    "login"
                );

                const oSession =
                    AuthenticationService.getSession();

                if (oSession) {
                    this._setCurrentUserModel(oSession);

                    this.getOwnerComponent()
                        .getRouter()
                        .navTo("RouteShell", {}, true);
                }
            },

            /**
             * Handles the login button press.
             */
            onSignIn: async function () {
                const oLoginModel =
                    this.getView().getModel("login");

                if (oLoginModel.getProperty("/busy")) {
                    return;
                }

                const oLoginData = oLoginModel.getData();

                const sEmail = String(
                    oLoginData.email || ""
                ).trim();

                const sPassword = String(
                    oLoginData.password || ""
                );

                const bRememberMe = Boolean(
                    oLoginData.rememberMe
                );

                this._clearValidationStates();

                if (
                    !this._validateLoginForm(
                        sEmail,
                        sPassword
                    )
                ) {
                    return;
                }

                oLoginModel.setProperty("/busy", true);

                try {
                    const oResult =
                        await AuthenticationService.authenticate(
                            sEmail,
                            sPassword,
                            bRememberMe
                        );

                    if (!oResult.success) {
                        MessageBox.error(
                            oResult.message ||
                            "Unable to sign in."
                        );

                        return;
                    }

                    this._setCurrentUserModel(
                        oResult.session
                    );

                    oLoginModel.setProperty(
                        "/password",
                        ""
                    );

                    MessageToast.show(
                        "Welcome, " +
                        oResult.user.firstName +
                        "!"
                    );

                    this.getOwnerComponent()
                        .getRouter()
                        .navTo("RouteShell", {}, true);
                } catch (oError) {
                    console.error(
                        "WorkSphere login failed:",
                        oError
                    );

                    MessageBox.error(
                        "Something went wrong while signing in."
                    );
                } finally {
                    oLoginModel.setProperty(
                        "/busy",
                        false
                    );
                }
            },

            /**
             * Handles Enter/Return from the password field.
             */
            onPasswordSubmit: function () {
                this.onSignIn();
            },

            /**
             * Clears email validation while typing.
             */
            onEmailLiveChange: function () {
                const oEmailInput =
                    this.byId("emailInput");

                oEmailInput.setValueState("None");
                oEmailInput.setValueStateText("");
            },

            /**
             * Clears password validation while typing.
             */
            onPasswordLiveChange: function () {
                const oPasswordInput =
                    this.byId("passwordInput");

                oPasswordInput.setValueState("None");
                oPasswordInput.setValueStateText("");
            },

            /**
             * Temporary forgot-password handler.
             */
            onForgotPassword: function () {
                MessageToast.show(
                    "Forgot-password functionality will be added soon."
                );
            },

            /**
             * Validates the email and password fields.
             *
             * @private
             * @param {string} sEmail Email address
             * @param {string} sPassword Password
             * @returns {boolean} Validation result
             */
            _validateLoginForm: function (
                sEmail,
                sPassword
            ) {
                let bIsValid = true;

                const oEmailInput =
                    this.byId("emailInput");

                const oPasswordInput =
                    this.byId("passwordInput");

                if (!sEmail) {
                    oEmailInput.setValueState("Error");
                    oEmailInput.setValueStateText(
                        "Work email is required."
                    );

                    bIsValid = false;
                } else if (!this._isValidEmail(sEmail)) {
                    oEmailInput.setValueState("Error");
                    oEmailInput.setValueStateText(
                        "Enter a valid email address."
                    );

                    bIsValid = false;
                }

                if (!sPassword) {
                    oPasswordInput.setValueState("Error");
                    oPasswordInput.setValueStateText(
                        "Password is required."
                    );

                    bIsValid = false;
                }

                return bIsValid;
            },

            /**
             * Validates an email-address format.
             *
             * @private
             * @param {string} sEmail Email address
             * @returns {boolean} Whether the email is valid
             */
            _isValidEmail: function (sEmail) {
                const oEmailPattern =
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                return oEmailPattern.test(sEmail);
            },

            /**
             * Clears all input validation states.
             *
             * @private
             */
            _clearValidationStates: function () {
                const oEmailInput =
                    this.byId("emailInput");

                const oPasswordInput =
                    this.byId("passwordInput");

                oEmailInput.setValueState("None");
                oEmailInput.setValueStateText("");

                oPasswordInput.setValueState("None");
                oPasswordInput.setValueStateText("");
            },

            /**
             * Creates or updates the global user model.
             *
             * @private
             * @param {object} oSession Authentication session
             */
            _setCurrentUserModel: function (oSession) {
                const oUserModel = new JSONModel({
                    isAuthenticated:
                        oSession.isAuthenticated,
                    token: oSession.token,
                    loginTime: oSession.loginTime,
                    currentUser: oSession.user
                });

                oUserModel.setDefaultBindingMode(
                    "OneWay"
                );

                this.getOwnerComponent().setModel(
                    oUserModel,
                    "user"
                );
            }
        }
    );
});