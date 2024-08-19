import React from 'react';
import useContentStore from '../stores/contentStore';

const CustomizableImage = ({ className, src }) => {
    const [isLoadingg, setIsLoading] = React.useState(true);

    const { isLoading } = useContentStore();
    React.useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => setIsLoading(false);
    }, [src]);

    return (
        <div className={`relative ${className}`}>
            {(isLoading || isLoading) ? (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <svg className="animate-spin h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4zm8-4a8 8 0 018 8h-8V8z"></path>
                    </svg>
                </div>
            )
                :
                <img className={`w-full object-cover h-full ${isLoading ? 'opacity-50' : ''}`} src={src} alt="" />

            }
        </div>
    );
};

export default CustomizableImage;
