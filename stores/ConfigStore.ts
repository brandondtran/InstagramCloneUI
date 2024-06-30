import {makeAutoObservable} from "mobx";
import {AppConfig, defaultAppConfig} from "../models/Config";

class ConfigStore {
    appConfig: AppConfig

    constructor() {
        // Initialize the observable properties
        this.appConfig = defaultAppConfig;

        // Make the properties observable and the methods actions
        makeAutoObservable(this);
    }
}

const configStore = new ConfigStore();
export default configStore;
