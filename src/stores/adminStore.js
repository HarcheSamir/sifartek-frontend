import { create } from 'zustand';
import axios from 'axios';
import { toast } from "react-toastify";

const useAdminStore = create((set) => ({
  user: typeof window !== "undefined" ? JSON.parse(localStorage.getItem("admin")) : null,
  isLoading: false,

  login: async (data, setSubmitting) => {
    set({ isLoading: true });
    try {
      const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/login`, {email: data.email, password: data.password});
      const adminData = {
        email: data.email,
        password: data.password,
        token: response.data.token,
      };
      localStorage.setItem("admin", JSON.stringify(adminData));
      set({ user: adminData });
      toast.success('Logged In');
    } catch (error) {
      console.error(error.response?.data || error.message);
      toast.error('Login failed');
    }
    set({ isLoading: false });
    setSubmitting(false);
  },

  logout: () => {
    localStorage.removeItem('admin');
    set({ user: null });
    toast.success('Logged Out');
  }
}));

export default useAdminStore;
