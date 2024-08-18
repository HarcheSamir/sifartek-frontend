// components/ContentEditor.js
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const ContentEditor = ({ item, content, label, onSave, onCancel }) => {
    const [editorContent, setEditorContent] = useState(content);

    const handleSaveClick = () => {
        onSave(item, editorContent);
    };

    return (
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
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Save
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
