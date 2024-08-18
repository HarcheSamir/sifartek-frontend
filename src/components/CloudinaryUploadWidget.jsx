import React, { useEffect } from 'react';

const CloudinaryUploadWidget = () => {
  useEffect(() => {
    const cloudName = 'hzxyensd5'; // Replace with your Cloudinary cloud name
    const uploadPreset = 'aoh4fpwm'; // Replace with your upload preset

    // Load Cloudinary widget script
    const script = document.createElement('script');
    script.src = 'https://widget.cloudinary.com/v2.0/global/all.js';
    script.async = true;
    document.body.appendChild(script);

    // Initialize Cloudinary widget once the script is loaded
    script.onload = () => {
      const myWidget = window.cloudinary.createUploadWidget(
        {
          cloudName: cloudName,
          uploadPreset: uploadPreset,
          // Add additional configurations as needed
          cropping: true,
          // sources: [ "local", "url"],
          // multiple: false,
          // folder: "user_images",
          // clientAllowedFormats: ["images"],
          // maxImageFileSize: 2000000,
          // theme: "purple"
        },
        (error, result) => {
          if (!error && result && result.event === 'success') {
            console.log('Done! Here is the image info: ', result.info);
            document
              .getElementById('uploadedimage')
              .setAttribute('src', result.info.secure_url); // Display uploaded image
          }
        }
      );

      // Add event listener for the upload button
      document.getElementById('upload_widget').addEventListener(
        'click',
        function () {
          myWidget.open();
        },
        false
      );
    };

    // Cleanup the script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <h3>Upload Widget Example</h3>
      <button id="upload_widget" className="cloudinary-button">
        Upload files
      </button>

      <p>
        <a
          href="https://cloudinary.com/documentation/upload_widget"
          target="_blank" 
          rel="noopener noreferrer"
        >
          Upload Widget User Guide
        </a>
      </p>
      <p>
        <a
          href="https://cloudinary.com/documentation/upload_widget_reference"
          target="_blank" 
          rel="noopener noreferrer"
        >
          Upload Widget Reference
        </a>
      </p>

      {/* Placeholder for uploaded image */}
      <img id="uploadedimage" src="" alt="" />
    </div>
  );
};

export default CloudinaryUploadWidget;
