// pages/HomeAmbience.js
import React, { useState } from 'react';
import CustomizableText from '../../components/CustomizableText';
import ContentEditor from '../../components/ContentEditor';
import ImageEditor from '../../components/ImageEditor';
import useAdminStore from '../../stores/adminStore';
import useContentStore from '../../stores/contentStore';
import CustomizableImage from '../../components/CustomizableImage';
import content from '../../constants/content';
const contentItems = content.filter(item => item.section === 'ambience');

export default function HomeAmbience() {
    const { user } = useAdminStore()
    const { content, fetchContent, editContent } = useContentStore();
    const [isEditingText, setIsEditingText] = useState(false);
    const [isEditingImage, setIsEditingImage] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const handleEditImageClick = (key) => {
        setSelectedItem({ key });
        setIsEditingImage(true);
    };
    const handleSaveImage = (key, newImageUrl) => {
        editContent('ambience', key, newImageUrl).then(() => {
            fetchContent();
            setIsEditingImage(false);
        });
    };
    const getItemContent = (key) => {
        const entry = Array.isArray(content) ? content.filter(item => item.section === 'ambience').find((entry) => entry.item === key) : null;
        return entry ? entry.content : contentItems.find((item) => item.key === key)?.defaultValue || '';
    };

    const handleEditTextClick = (key) => {
        const item = contentItems.find(item => item.key === key);
        setSelectedItem({
            key: item.key,
            content: getItemContent(item.key),
            label: item.label,
            type: item.type
        });
        setIsEditingText(true);
    };



    const handleSaveText = (key, newContent) => {
        editContent('ambience', key, newContent).then(() => {
            fetchContent();
            setIsEditingText(false);
        });
    };



    return (
        <>
            <div className="lg:h-screen w-full bg-primary relative md:mt-40 flex flex-col lg:flex-row">
               { user && <img className='absolute cursor-pointer hover:scale-125 duration-300 top-[40%] z-50 left-[25%] w-16 bg-white rounded-full p-4' alt='' src='/assets/imageEdit.svg'
                    onClick={() => handleEditImageClick('image')}
                />}
                <CustomizableImage
                    className="w-full shrink-0 lg:w-[60%] h-full object-cover"
                    src={getItemContent('image')}
                >
                    
                </CustomizableImage>
                <div className="grow py-20 flex flex-col justify-center pl-8 md:pl-20">
                    <CustomizableText
                        className="font-old text-xl md:text-5xl text-zinc-200"
                        html={getItemContent('title')}
                        onClick={() => handleEditTextClick('title')}
                    />
                    <CustomizableText
                        className="text-xs md:text-sm text-zinc-300 ml-2 mt-4 w-[90%] indent-2"
                        html={getItemContent('description')}
                        onClick={() => handleEditTextClick('description')}
                    />
                    <CustomizableText
                        className="bg-secondary text-xs w-min px-8 hover:bg-secondaryHovered py-4 whitespace-nowrap rounded mt-8"
                        html={getItemContent('buttonText')}
                        onClick={() => handleEditTextClick('buttonText')}
                    />
                </div>
            </div>

            {isEditingText && selectedItem && (
                <ContentEditor
                    item={selectedItem.key}
                    content={selectedItem.content}
                    onSave={handleSaveText}
                    onCancel={() => setIsEditingText(false)}
                />
            )}

            {isEditingImage && selectedItem && (
                <ImageEditor
                    item={selectedItem.key}
                    onSave={handleSaveImage}
                    onCancel={() => setIsEditingImage(false)}
                />
            )}
        </>
    );
}
