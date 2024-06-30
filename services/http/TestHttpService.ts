import axios, {AxiosResponse} from 'axios';
import {defaultAppConfig} from "../../models/Config";

const api = axios.create({
    baseURL: defaultAppConfig.apiUrl,
    headers: {
        'Content-Type': 'application/json',
    },
});

const getAllTest = async (): Promise<AxiosResponse> => {
    return await api.get(`/Test`);;
};

export { getAllTest };
