sap.ui.define([
    "sap/ui/core/UIComponent",
    "com/apurv/worksphere/model/models",
    "com/apurv/worksphere/service/AuthenticationService",
    "sap/ui/model/json/JSONModel"
], function (
    UIComponent,
    models,
    AuthenticationService,
    JSONModel
) {
    "use strict";

    return UIComponent.extend(
        "com.apurv.worksphere.Component",
        {
            metadata: {
                manifest: "json",
                interfaces: [
                    "sap.ui.core.IAsyncContentCreation"
                ]
            },

            init: function () {
                UIComponent.prototype.init.apply(
                    this,
                    arguments
                );

                this.setModel(
                    models.createDeviceModel(),
                    "device"
                );

                this._initializeUserModel();

                this.getRouter().initialize();
            },

            /**
             * Creates the global user model.
             *
             * When a session already exists, the authenticated
             * user is restored into the application model.
             *
             * @private
             */
            _initializeUserModel: function () {
                const oSession =
                    AuthenticationService.getSession();

                const oUserModel = new JSONModel({
                    isAuthenticated: Boolean(oSession),
                    token: oSession ? oSession.token : "",
                    loginTime: oSession
                        ? oSession.loginTime
                        : "",
                    currentUser: oSession
                        ? oSession.user
                        : null
                });

                oUserModel.setDefaultBindingMode("OneWay");

                this.setModel(oUserModel, "user");
            }
        }
    );
});