import React from 'react';

const NotFound = () => {
  return (
    <div className="flex bg-white items-center justify-center min-h-screen bg-gray-100 text-gray-800 w-screen z-50 absolute top-0 left-0">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold mb-4">404</h1>
        <p className="text-xl font-medium mb-2">Page Not Found</p>
        <p className="text-base text-gray-600">
          Sorry, the page you are looking for does not exist.
        </p>
        <a
          href="/"
          className="mt-6 inline-block px-6 py-3 text-sm font-medium text-white bg-secondary rounded-lg hover:bg-secondaryHovered transition duration-200"
        >
          Go to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
