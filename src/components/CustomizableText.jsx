import React from 'react';
import useAdminStore from '../stores/adminStore';

const CustomizableText = ({ className, html, onClick }) => {
    const { user } = useAdminStore();
    const combinedClassName = `${className} ${user ? 'cursor-pointer' : ''}`;

    return (
        <p
            className={combinedClassName}
            onClick={onClick}
            dangerouslySetInnerHTML={{ __html: html }}
        />
    );
};

export default CustomizableText;
