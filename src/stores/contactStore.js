import { create } from 'zustand';
import axios from 'axios';
import { toast } from 'react-toastify';

const useContactStore = create((set) => ({
  contacts: [],
  isLoading: false,

  fetchContacts: async (page = 1) => {
    set({ isLoading: true });
    try {
      const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/contact`, {
        params: { page, limit: 5 },
      });
      set({ contacts: response.data.contacts });
      return response;
    } catch (error) {
      console.error('Error fetching contacts:', error.response?.data || error.message);
      toast.error('Failed to fetch contacts');
    } finally {
      set({ isLoading: false });
    }
  },

  addContact: async (data) => {
    set({ isLoading: true });
    try {
      const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/contact`, data);
      set((state) => ({ contacts: [...state.contacts, response.data] }));
      toast.success('Contact added successfully');
    } catch (error) {
      console.error('Error adding contact:', error.response?.data || error.message);
      toast.error('Failed to add contact');
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useContactStore;
