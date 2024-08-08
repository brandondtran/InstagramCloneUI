import { UserManager, WebStorageStateStore, User } from "oidc-client-ts";
import configStore from "../stores/ConfigStore"

class AuthStore {
    private userManager: UserManager;

    constructor() {
        const authConfig = configStore.appConfig.auth;

        this.userManager = new UserManager({
            ...authConfig,
            userStore: new WebStorageStateStore({ store: window.localStorage }),
        });

        this.userManager.events.addUserLoaded((user: User) => {
            if (window.location.href.includes("callback")) {
                this.navigateToScreen();
            }
        });

        this.userManager.events.addUserUnloaded(() => {
            this.navigateToScreen();
        });
    }

    loadUser(): Promise<User | null> {
        return this.userManager.getUser();
    }

    login(): Promise<void> {
        return this.userManager.signinRedirect();
    }

    async loginWithPassword(username: string, password: string): Promise<void> {
        try {
            const params = {
                grant_type: "password",
                scope: "openid profile email", // Adjust scopes as needed
                username: username,
                password: password
            };

            const response = await this.userManager.signinSilent({ extraQueryParams: params });

            if (response) {
                console.log('login successful', response);
                this.navigateToScreen();
            } else {
                console.error("Login with password failed");
            }
        } catch (error) {
            console.error("Error during login with password", error);
        }
    }

    handleCallback(): Promise<User> {
        return this.userManager.signinRedirectCallback();
    }

    logout(): Promise<void> {
        return this.userManager.signoutRedirect();
    }

    navigateToScreen(): void {
        window.location.replace("/");
    }
}

const authStore = new AuthStore();
export default authStore;
