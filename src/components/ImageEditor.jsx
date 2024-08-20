import React, { useState } from 'react';
import useImageStore from '../stores/imageStore';
import useContentStore from '../stores/contentStore';

const ImageEditor = ({ data, item, onSave, onCancel }) => {
    const { uploadImages, isLoading: imageIsLoading } = useImageStore(); // Updated function name here
    const { fetchContent, isLoading: contentIsLoading } = useContentStore();
    const [selectedFile, setSelectedFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const img = new Image();
            img.onload = () => {
                if (img.width !== data.requiredWidth || img.height !== data.requiredHeight) {
                    if (!window.confirm(`This image doesn't have the proper resolution (${img.width}x${img.height}). The required resolution is ${data.requiredWidth}x${data.requiredHeight}. Are you sure you want to continue?`)) {
                        return;
                    }
                }
                setSelectedFile(file);
                setImagePreview(URL.createObjectURL(file));
            };
            img.src = URL.createObjectURL(file);
        }
    };

    const handleSaveClick = async () => {
        if (selectedFile) {
            const uploadedImageUrl = await uploadImages([selectedFile]); // Updated function name here
            onSave(item.key, uploadedImageUrl);
            fetchContent();
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
            <div className="bg-white p-6 rounded-lg w-full max-w-lg">
                <h2 className="text-xl font-bold mb-4">Edit Image for {item.key}</h2>

                <p className="text-sm mb-2">Required Resolution: {data.requiredWidth}x{data.requiredHeight}px</p>

                <input type="file" accept="image/*" onChange={handleFileChange} />

                {imagePreview && (
                    <div className="mt-4 w-full flex justify-center">
                        <img src={imagePreview} alt="Preview" className="h-[200px] rounded" />
                    </div>
                )}

                <div className="flex justify-end gap-4 mt-4">
                    <button
                        onClick={handleSaveClick}
                        disabled={imageIsLoading || contentIsLoading}
                        className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ${(imageIsLoading || contentIsLoading) ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        {(imageIsLoading || contentIsLoading) ? 'Saving...' : 'Save'}
                    </button>
                    <button
                        onClick={onCancel}
                        className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ImageEditor;
