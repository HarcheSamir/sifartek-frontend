import { create } from 'zustand';
import axios from 'axios';
import { toast } from 'react-toastify';

const useRoomStore = create((set) => ({
  rooms: [],
  room: null, // Add a new state for a single room
  isLoading: false,
  error: null,

  fetchRooms: async (page = 1, pageSize = 10) => {
    set({ isLoading: true, error: null });

    try {
      const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/rooms`, {
        params: { page, pageSize },
      });
      console.log(response.data.rooms);
      set({ rooms: response.data.rooms });
    } catch (error) {
      console.error('Error fetching rooms:', error);
      toast.error('Failed to fetch rooms');
      set({ error: error.message || 'Failed to fetch rooms' });
    } finally {
      set({ isLoading: false });
    }
  },

  fetchRoom: async (id) => {
    set({ isLoading: true, error: null });

    try {
      const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/rooms/${id}`);
      set({ room: response.data });
      console.log(response.data)
    } catch (error) {
      console.error('Error fetching room:', error);
      toast.error('Failed to fetch room');
      set({ error: error.message || 'Failed to fetch room' });
    } finally {
      set({ isLoading: false });
    }
  },

  addRoom: async (roomData) => {
    set({ isLoading: true, error: null });

    try {
      const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/rooms`, roomData);
      set((state) => ({
        rooms: [...state.rooms, response.data],
      }));
      toast.success('Room added successfully');
    } catch (error) {
      console.error('Error adding room:', error);
      toast.error('Failed to add room');
      set({ error: error.message || 'Failed to add room' });
    } finally {
      set({ isLoading: false });
    }
  },

  deleteRoom: async (id) => {
    set({ isLoading: true, error: null });

    try {
      await axios.delete(`${process.env.REACT_APP_SERVER_URL}/rooms/${id}`);
      set((state) => ({
        rooms: state.rooms.filter((room) => room.id !== id),
      }));
      toast.success('Room deleted successfully');
    } catch (error) {
      console.error('Error deleting room:', error);
      toast.error('Failed to delete room');
      set({ error: error.message || 'Failed to delete room' });
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useRoomStore;
