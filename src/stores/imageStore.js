import { create } from 'zustand';
import { toast } from 'react-toastify';

const useImageStore = create((set) => ({
  isLoading: false,
  
  uploadImages: async (files, multiple = false) => {
    set({ isLoading: true });

    if (!files || files.length === 0) {
      toast.error('No files selected');
      set({ isLoading: false });
      return multiple ? [] : null; // Return empty array or null based on multiple flag
    }

    const imageUrls = [];

    try {
      // If multiple is false, just upload the first file
      const filesToUpload = multiple ? files : [files[0]];

      for (const file of filesToUpload) {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'test2test'); // Replace with your correct preset

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
          imageUrls.push(data.secure_url); // Collect each image URL
        } else {
          throw new Error('Failed to retrieve image URL');
        }
      }

      return multiple ? imageUrls : imageUrls[0]; // Return array or single URL based on multiple flag
    } catch (error) {
      console.error('Error uploading images:', error.message || error);
      toast.error(`Failed to upload images: ${error.message}`);
      return multiple ? [] : null; // Return empty array or null on error
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useImageStore;
