import axios from 'axios';
import {defaultAppConfig} from "../../models/Config";

const api = axios.create({
  baseURL: defaultAppConfig.apiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

interface User {
  id: string;
  username: string;
  email: string;
}

const getUser = async (id: string): Promise<User> => {
  const response = await api.get<User>(`/users/${id}`);
  return response.data;
};

const createUser = async (user: Omit<User, 'id'>): Promise<User> => {
  const response = await api.post<User>('/users', user);
  return response.data;
};

const updateUser = async (user: User): Promise<User> => {
  const response = await api.put<User>(`/users/${user.id}`, user);
  return response.data;
};

const deleteUser = async (id: string): Promise<void> => {
  await api.delete(`/users/${id}`);
};

export { getUser, createUser, updateUser, deleteUser };
