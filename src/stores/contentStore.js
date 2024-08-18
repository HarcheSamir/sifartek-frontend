import { create } from 'zustand';
import axios from 'axios';
import { toast } from 'react-toastify';

const useContentStore = create((set) => ({
    content: [],
    isLoading: false,

    fetchContent: async () => {
        set({ isLoading: true });
        try {
            const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/custom`);
            set({ content: response.data });
        } catch (error) {
            console.error('Error fetching content:', error);
            toast.error('Failed to load content');
        } finally {
            set({ isLoading: false });
        }
    },

    editContent: async (section, item, newContent) => {
        set({ isLoading: true });
        try {
            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/custom`, {
                section,
                item,
                content: newContent,
            });

            if (response.status === 201) {
                set((state) => ({
                    content: state.content.map((c) =>
                        c.section === section && c.item === item
                            ? { ...c, content: newContent }
                            : c
                    ),
                }));
                toast.success('Content updated successfully');
            }
        } catch (error) {
            console.error('Error editing content:', error);
            toast.error('Failed to edit content');
        } finally {
            set({ isLoading: false });
        }
    },
}));

export default useContentStore;
