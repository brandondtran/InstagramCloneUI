import { makeAutoObservable, runInAction } from 'mobx';
import { getUser, createUser, updateUser, deleteUser } from '../services/http/UserHttpService';

interface User {
  id: string;
  username: string;
  email: string;
  password?: string;
}

class UserStore {

  user: User = { id: '', username: '', email: '' };
  loading = false;
  error = '';

  constructor() {
    makeAutoObservable(this);
  }

  setUser(user: User) {
    this.user = user;
  }

  setLoading(loading: boolean) {
    this.loading = loading;
  }

  setError(error: string) {
    this.error = error;
  }

  async fetchUser(id: string) {
    this.setLoading(true);
    this.setError('');
    try {
      const user = await getUser(id);
      runInAction(() => {
        this.setUser(user);
      });
    } catch (error) {
      runInAction(() => {
        this.setError('Failed to fetch user');
      });
    } finally {
      runInAction(() => {
        this.setLoading(false);
      });
    }
  }

  async createUser(user: Omit<User, 'id'>) {
    this.setLoading(true);
    this.setError('');
    try {
      const newUser = await createUser(user);
      runInAction(() => {
        this.setUser(newUser);
      });
    } catch (error) {
      runInAction(() => {
        this.setError('Failed to create user');
      });
    } finally {
      runInAction(() => {
        this.setLoading(false);
      });
    }
  }

  async updateUser(user: User) {
    this.setLoading(true);
    this.setError('');
    try {
      const updatedUser = await updateUser(user);
      runInAction(() => {
        this.setUser(updatedUser);
      });
    } catch (error) {
      runInAction(() => {
        this.setError('Failed to update user');
      });
    } finally {
      runInAction(() => {
        this.setLoading(false);
      });
    }
  }

  async deleteUser(id: string) {
    this.setLoading(true);
    this.setError('');
    try {
      await deleteUser(id);
      runInAction(() => {
        this.setUser({ id: '', username: '', email: '' });
      });
    } catch (error) {
      runInAction(() => {
        this.setError('Failed to delete user');
      });
    } finally {
      runInAction(() => {
        this.setLoading(false);
      });
    }
  }
}

export const userStore = new UserStore();
