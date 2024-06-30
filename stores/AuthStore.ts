// src/authService.ts
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

const authService = new AuthStore();
export default authService;
