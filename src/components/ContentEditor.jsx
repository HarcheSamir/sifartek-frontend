// components/ContentEditor.js
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import useContentStore from '../stores/contentStore';
import useAdminStore from '../stores/adminStore';
const ContentEditor = ({ item, content, label, onSave, onCancel }) => {
    const {isLoading} = useContentStore()
    const{user} = useAdminStore()
    const [editorContent, setEditorContent] = useState(content);

    const handleSaveClick = () => {
        onSave(item, editorContent);
    };

    if(user) return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
            <div className="bg-white p-6 rounded-lg w-full max-w-lg">
                <h2 className="text-xl font-bold mb-4">Edit {label}</h2>

                <ReactQuill
                    value={editorContent}
                    onChange={setEditorContent}
                    theme="snow"
                    className="w-full bg-gray-100 p-4 rounded"
                />

                <div className="flex justify-end gap-4 mt-4">
                <button
                        onClick={handleSaveClick}
                        disabled={isLoading}
                        className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        {isLoading ? (
                            <span className="flex items-center">
                                <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4zm8-4a8 8 0 018 8h-8V8z"></path>
                                </svg>
                                Saving...
                            </span>
                        ) : (
                            'Save'
                        )}
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

export default ContentEditor;
