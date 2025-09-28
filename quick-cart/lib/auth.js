import axios from 'axios';
const API_URL = 'http://localhost:8000/api';
class AuthService {
  async register(data) {
    try {
      const response = await axios.post(`${API_URL}/auth/register/`, data);
      if (response.data.tokens) {
        localStorage.setItem('access_token', response.data.tokens.access);
        localStorage.setItem('user', JSON.stringify(response.data.user));
      }
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, error: error.response?.data };
    }
  }
  async login(email, password) {
    try {
      const response = await axios.post(`${API_URL}/auth/login/`, { email, password });
      if (response.data.tokens) {
        localStorage.setItem('access_token', response.data.tokens.access);
        localStorage.setItem('user', JSON.stringify(response.data.user));
      }
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, error: error.response?.data };
    }
  }
  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user');
  }
  isAuthenticated() {
    return !!localStorage.getItem('access_token');
  }
  getCurrentUser() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }
}
export default new AuthService();
