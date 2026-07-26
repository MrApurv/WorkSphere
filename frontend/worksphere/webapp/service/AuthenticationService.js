sap.ui.define([], function () {
    "use strict";

    const SESSION_KEY = "worksphereSession";

    const AuthenticationService = {

        /**
         * Authenticates a user using mock JSON data.
         *
         * @param {string} sEmail User email address
         * @param {string} sPassword User password
         * @param {boolean} bRememberMe Remember-login selection
         * @returns {Promise<object>} Authentication result
         */
        authenticate: async function (sEmail, sPassword, bRememberMe) {
            try {
                const [oUsersData, oRolesData, oTenantsData] =
                    await Promise.all([
                        this._loadJson(
                            "com/apurv/worksphere/mock/users.json"
                        ),
                        this._loadJson(
                            "com/apurv/worksphere/mock/roles.json"
                        ),
                        this._loadJson(
                            "com/apurv/worksphere/mock/tenants.json"
                        )
                    ]);

                const sNormalizedEmail = String(sEmail)
                    .trim()
                    .toLowerCase();

                const oUser = oUsersData.users.find(function (oCurrentUser) {
                    return (
                        oCurrentUser.email.toLowerCase() === sNormalizedEmail &&
                        oCurrentUser.password === sPassword
                    );
                });

                if (!oUser) {
                    return {
                        success: false,
                        message: "Invalid email or password."
                    };
                }

                if (oUser.status !== "ACTIVE") {
                    return {
                        success: false,
                        message:
                            "Your account is inactive. Please contact the administrator."
                    };
                }

                const oRole = oRolesData.roles.find(function (oCurrentRole) {
                    return oCurrentRole.id === oUser.roleId;
                });

                if (!oRole) {
                    return {
                        success: false,
                        message:
                            "No valid role is assigned to this account."
                    };
                }

                const oTenant = oTenantsData.tenants.find(
                    function (oCurrentTenant) {
                        return oCurrentTenant.id === oUser.tenantId;
                    }
                );

                if (!oTenant) {
                    return {
                        success: false,
                        message:
                            "The organization associated with this account was not found."
                    };
                }

                if (oTenant.status !== "ACTIVE") {
                    return {
                        success: false,
                        message:
                            "Your organization account is currently inactive."
                    };
                }

                const oAuthenticatedUser = {
                    id: oUser.id,
                    employeeId: oUser.employeeId,
                    firstName: oUser.firstName,
                    lastName: oUser.lastName,
                    displayName: oUser.displayName,
                    email: oUser.email,

                    roleId: oRole.id,
                    role: oRole.name,
                    permissions: oRole.permissions || [],

                    tenantId: oTenant.id,
                    tenantName: oTenant.name,
                    tenantCode: oTenant.code,
                    subscriptionPlan: oTenant.subscriptionPlan,
                    timezone: oTenant.timezone,

                    designation: oUser.designation,
                    department: oUser.department,
                    avatarInitials: oUser.avatarInitials
                };

                const oSession = {
                    isAuthenticated: true,
                    token: this._createMockToken(),
                    user: oAuthenticatedUser,
                    loginTime: new Date().toISOString()
                };

                this.saveSession(oSession, Boolean(bRememberMe));

                return {
                    success: true,
                    session: oSession,
                    user: oAuthenticatedUser
                };
            } catch (oError) {
                console.error(
                    "WorkSphere authentication error:",
                    oError
                );

                return {
                    success: false,
                    message:
                        "Unable to sign in. Please try again."
                };
            }
        },

        /**
         * Loads and parses a JSON file.
         *
         * @private
         * @param {string} sModulePath UI5 module-relative JSON path
         * @returns {Promise<object>} Parsed JSON data
         */
        _loadJson: async function (sModulePath) {
            const sUrl = sap.ui.require.toUrl(sModulePath);

            const oResponse = await fetch(sUrl, {
                method: "GET",
                cache: "no-store"
            });

            if (!oResponse.ok) {
                throw new Error(
                    "Unable to load authentication data: " +
                    sModulePath +
                    ". HTTP status: " +
                    oResponse.status
                );
            }

            return oResponse.json();
        },

        /**
         * Creates a temporary development token.
         *
         * @private
         * @returns {string} Mock authentication token
         */
        _createMockToken: function () {
            return (
                "mock-token-" +
                Date.now() +
                "-" +
                Math.random().toString(36).substring(2)
            );
        },

        /**
         * Saves the current authentication session.
         *
         * @param {object} oSession Authentication session
         * @param {boolean} bRememberMe Whether to use localStorage
         */
        saveSession: function (oSession, bRememberMe) {
            this.clearSession();

            const oStorage = bRememberMe
                ? window.localStorage
                : window.sessionStorage;

            oStorage.setItem(
                SESSION_KEY,
                JSON.stringify(oSession)
            );
        },

        /**
         * Returns the stored authentication session.
         *
         * @returns {object|null} Stored session or null
         */
        getSession: function () {
            const sSession =
                window.sessionStorage.getItem(SESSION_KEY) ||
                window.localStorage.getItem(SESSION_KEY);

            if (!sSession) {
                return null;
            }

            try {
                const oSession = JSON.parse(sSession);

                if (
                    !oSession ||
                    !oSession.isAuthenticated ||
                    !oSession.user
                ) {
                    this.clearSession();
                    return null;
                }

                return oSession;
            } catch (oError) {
                console.error(
                    "Unable to parse WorkSphere session:",
                    oError
                );

                this.clearSession();

                return null;
            }
        },

        /**
         * Checks whether an authenticated session exists.
         *
         * @returns {boolean} Authentication status
         */
        isAuthenticated: function () {
            return Boolean(this.getSession());
        },

        /**
         * Removes session data from browser storage.
         */
        clearSession: function () {
            window.sessionStorage.removeItem(SESSION_KEY);
            window.localStorage.removeItem(SESSION_KEY);
        },

        /**
         * Logs out the current user.
         */
        logout: function () {
            this.clearSession();
        }
    };

    return AuthenticationService;
});