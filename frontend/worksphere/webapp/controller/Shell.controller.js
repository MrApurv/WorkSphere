sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "../service/AuthenticationService",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast"
], function (
    Controller,
    AuthenticationService,
    JSONModel,
    MessageToast
) {
    "use strict";

    return Controller.extend(
        "com.apurv.worksphere.controller.Shell",
        {
            onInit: function () {
                this.getOwnerComponent()
                    .getRouter()
                    .getRoute("RouteShell")
                    .attachPatternMatched(
                        this._onShellRouteMatched,
                        this
                    );
            },

            /**
             * Runs whenever the Shell route is opened.
             *
             * @private
             */
            _onShellRouteMatched: function () {
                const oSession =
                    AuthenticationService.getSession();

                if (!oSession) {
                    this.getOwnerComponent()
                        .getRouter()
                        .navTo("RouteLogin", {}, true);

                    return;
                }

                this._restoreUserModel(oSession);
            },

            /**
             * Restores the global authenticated user model.
             *
             * @private
             * @param {object} oSession Authentication session
             */
            _restoreUserModel: function (oSession) {
                const oUserModel =
                    this.getOwnerComponent().getModel("user");

                if (oUserModel) {
                    oUserModel.setData({
                        isAuthenticated: true,
                        token: oSession.token,
                        loginTime: oSession.loginTime,
                        currentUser: oSession.user
                    });

                    return;
                }

                const oNewUserModel = new JSONModel({
                    isAuthenticated: true,
                    token: oSession.token,
                    loginTime: oSession.loginTime,
                    currentUser: oSession.user
                });

                oNewUserModel.setDefaultBindingMode("OneWay");

                this.getOwnerComponent().setModel(
                    oNewUserModel,
                    "user"
                );
            },

            /**
             * Expands or collapses the side navigation.
             */
            onToggleNavigation: function () {
                const oSideNavigation =
                    this.byId("sideNavigationContainer");

                const sCurrentWidth =
                    oSideNavigation.getWidth();

                const bExpanded =
                    sCurrentWidth !== "4.5rem";

                oSideNavigation.setWidth(
                    bExpanded ? "4.5rem" : "16rem"
                );

                oSideNavigation.toggleStyleClass(
                    "wsSideNavigationCollapsed",
                    bExpanded
                );
            },

            /**
             * Handles navigation-list selection.
             *
             * @param {sap.ui.base.Event} oEvent Selection event
             */
            onNavigationItemSelect: function (oEvent) {
                const oSelectedItem =
                    oEvent.getParameter("listItem");

                if (!oSelectedItem) {
                    return;
                }

                const sSelectedPage =
                    oSelectedItem.data("key");

                if (sSelectedPage === "dashboard") {
                    MessageToast.show(
                        "Dashboard selected"
                    );

                    return;
                }

                MessageToast.show(
                    oSelectedItem.getTitle() +
                    " module will be added next."
                );
            },

            /**
             * Logs out the authenticated user.
             */
            onLogout: function () {
                AuthenticationService.logout();

                const oUserModel =
                    this.getOwnerComponent().getModel("user");

                if (oUserModel) {
                    oUserModel.setData({
                        isAuthenticated: false,
                        token: "",
                        loginTime: "",
                        currentUser: null
                    });
                }

                this.getOwnerComponent()
                    .getRouter()
                    .navTo("RouteLogin", {}, true);

                MessageToast.show(
                    "You have been logged out."
                );
            }
        }
    );
});