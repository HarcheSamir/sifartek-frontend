import React from 'react';

const CustomizableText = ({ className, html, onClick }) => {
    return (
        <p
            className={className+' cursor-pointer'}
            onClick={onClick}
            dangerouslySetInnerHTML={{ __html: html }}
        />
    );
};

export default CustomizableText;
