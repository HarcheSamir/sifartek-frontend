import React, { useState, useEffect } from 'react';
import CustomizableText from '../../components/CustomizableText';
import ContentEditor from '../../components/ContentEditor';
import useContentStore from '../../stores/contentStore';
import content from '../../constants/content'
const contentItems = content.filter(item => item.section === 'ambience');
export default function HomeAmbience() {
    const { content, fetchContent, editContent } = useContentStore();
    const [isEditing, setIsEditing] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);


    useEffect(() => {
        fetchContent();
    }, [fetchContent]);


    const getItemContent = (key) => {
        const entry = content.find((entry) => entry.item === key);
        return entry ? entry.content : contentItems.find((item) => item.key === key)?.defaultValue || '';
    };


    const handleEditClick = (key) => {
      const item =   contentItems.find(item => item.key === key)
        setSelectedItem({
            key: item.key,
            content: getItemContent(item.key),
            label: item.label,
            type: item.type
        });
        setIsEditing(true);
    };

    const handleSave = (key, newContent) => {
        editContent('homeAmbience', key, newContent).then(() => {
            fetchContent();
            setIsEditing(false);
        });
    };

    return (
        <>
            <div className="lg:h-screen w-full bg-primary md:mt-40 flex flex-col lg:flex-row">
                <img
                    sizes="100vw"
                    height={0}
                    width={0}
                    className="w-full lg:w-[60%] h-full object-cover"
                    alt=""
                    src="https://images.unsplash.com/photo-1602081115720-72e5b0a254b8?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <div className="w-full py-20 flex flex-col justify-center pl-8 md:pl-20">
                    <CustomizableText
                        className="font-old text-3xl md:text-6xl text-zinc-200 "
                        html={getItemContent('title')}
                        onClick={() => handleEditClick('title')}
                    />
                    <CustomizableText
                        className="text-sm md:text-lg text-zinc-300 ml-2 mt-4 indent-2"
                        html={getItemContent('description')}
                        onClick={() => handleEditClick('description')}
                    />
                    <CustomizableText
                        className="bg-secondary w-min px-8  hover:bg-secondaryHovered py-4 whitespace-nowrap rounded mt-8"
                        html={getItemContent('buttonText')}
                        onClick={() => handleEditClick('buttonText')}
                    />
                </div>
            </div>

            {isEditing && selectedItem && (
                <ContentEditor
                    item={selectedItem.key}
                    content={selectedItem.content}
                    onSave={handleSave}
                    onCancel={() => setIsEditing(false)}
                />
            )}
        </>
    );
}
