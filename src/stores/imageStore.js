import create from 'zustand';
import axios from 'axios';
import { toast } from 'react-toastify';

const useImageStore = create((set) => ({
  contacts: [],
  isLoading: false,
  
  uploadImage: async (files) => {
    set({ isLoading: true });

    if (!files || files.length === 0) {
      toast.error('No files selected');
      set({ isLoading: false });
      return;
    }

    try {
      const formData = new FormData();
      formData.append('file', files[0]);
      formData.append('upload_preset', 'test2test'); // Ensure to replace with your correct preset

      const response = await fetch('https://api.cloudinary.com/v1_1/dw2d5lgfk/image/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to upload image');
      }

      const data = await response.json();

      if (data.secure_url) {
        console.log('Image uploaded: ', data.secure_url);
        toast.success(`Image uploaded: ${data.secure_url}`);
        
        // Assuming you want to store the image URL in Zustand state
        set((state) => ({
          contacts: [...state.contacts, { imageUrl: data.secure_url }],
        }));
      } else {
        throw new Error('Failed to retrieve image URL');
      }
    } catch (error) {
      console.error('Error uploading image:', error.message || error);
      toast.error(`Failed to upload image: ${error.message}`);
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useImageStore;
