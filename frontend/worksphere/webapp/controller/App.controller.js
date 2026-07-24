sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("com.apurv.worksphere.controller.App", {
        onInit() {
        },

        onMenuButtonPress() {
            const oSideNav = this.byId("sideNavigation");
            const bExpanded = oSideNav.getExpanded();

            oSideNav.setExpanded(!bExpanded);
        },

        onSearchPress() {
            MessageToast.show("Search button pressed");
        },

        onNotificationPress() {
            MessageToast.show("Notification button pressed");
        }
    });
});