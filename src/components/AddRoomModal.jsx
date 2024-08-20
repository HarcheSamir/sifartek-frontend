import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { toast } from 'react-toastify';
import useRoomStore from '../stores/roomStore';
import useImageStore from '../stores/imageStore';

const AddRoomModal = ({ isModalOpen, setModalOpen }) => {
  const [imagePreviews, setImagePreviews] = useState([]);
  const { addRoom, isLoading: isRoomLoading } = useRoomStore(); // Loading state from room store
  const { uploadImages, isLoading: isImageLoading } = useImageStore(); // Loading state from image store

  const isLoading = isRoomLoading || isImageLoading; // Combined loading state

  const handleSubmit = async (values, { resetForm }) => {
    if (values.images.length === 0) {
      toast.error('Please select at least one image.');
      return;
    }

    try {
      // Start loading state
      const uploadedImageUrls = await uploadImages(values.images, true);
      await addRoom({ ...values, images: uploadedImageUrls });
      resetForm();
      setModalOpen(false);
    } catch (error) {
      // Handle error here
      toast.error('Error adding room.');
    }
  };

  const handleFileChange = (event, setFieldValue) => {
    const files = Array.from(event.target.files);
    setFieldValue('images', files);

    // Generate image previews
    const previews = files.map(file => URL.createObjectURL(file));
    setImagePreviews(previews);
  };

  return (
    isModalOpen && (
      <div className='fixed inset-0 z-50 bg-gray-800 bg-opacity-50 flex justify-center items-center'>
        <div className='bg-white max-h-[90%] overflow-y-auto p-6 rounded-lg shadow-lg'>
          <h2 className='text-xl font-bold mb-4'>Add Room</h2>
          <Formik
            initialValues={{
              title: '',
              subtitle: '',
              description: '',
              images: []
            }}
            onSubmit={handleSubmit}
          >
            {({ setFieldValue, values }) => (
              <Form>
                <div className='mb-4'>
                  <label className='block text-sm font-medium mb-1'>Title</label>
                  <Field
                    type='text'
                    name='title'
                    className='w-full border border-gray-300 p-2 rounded'
                    required
                  />
                </div>
                <div className='mb-4'>
                  <label className='block text-sm font-medium mb-1'>Subtitle</label>
                  <Field
                    type='text'
                    name='subtitle'
                    className='w-full border border-gray-300 p-2 rounded'
                    required
                  />
                </div>
                <div className='mb-4'>
                  <label className='block text-sm font-medium mb-1'>Description</label>
                  <Field
                    as='textarea'
                    name='description'
                    className='w-full border border-gray-300 p-2 rounded'
                    rows='4'
                    required
                  />
                </div>
                <div className='mb-4'>
                  <label className='block text-sm font-medium mb-1'>Images</label>
                  <input
                    type='file'
                    multiple
                    onChange={(event) => handleFileChange(event, setFieldValue)}
                    className='w-full border border-gray-300 p-2 rounded'
                  />
                  {values.images.length > 0 && (
                    <div className='mt-2'>
                      <h3 className='text-sm font-medium'>Selected Images:</h3>
                      <div className='grid grid-cols-3 gap-2'>
                        {imagePreviews.map((preview, index) => (
                          <img
                            key={index}
                            src={preview}
                            alt={`Preview ${index}`}
                            className='w-20 h-20 object-cover border border-gray-300'
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <div className='flex justify-end gap-4'>
                  <button
                    type='submit'
                    className={`px-4 text-xs py-2 rounded ${isLoading ? 'bg-gray-500' : 'bg-primary'} text-white`}
                    disabled={isLoading} // Disable button when either store is loading
                  >
                    {isLoading ? (
                      <span className='flex items-center'>
                        <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" fill="#000" />
                        </svg>
                        Adding...
                      </span>
                    ) : 'Add Room'}
                  </button>

                  <button
                    type='button'
                    onClick={() => setModalOpen(false)}
                    className='mr-2 text-xs px-4 py-2 bg-red-400 text-white rounded'
                    disabled={isLoading} // Disable button when loading
                  >
                    Cancel
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    )
  );
};

export default AddRoomModal;
