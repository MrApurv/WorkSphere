sap.ui.define([], function () {
    "use strict";

    const AuthenticationService = {
        authenticate: function (sEmail, sPassword) {
            return {
                success: false,
                message: "Authentication not implemented."
            };
        }
    };
    return AuthenticationService;
});