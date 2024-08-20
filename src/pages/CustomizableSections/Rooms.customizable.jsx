import React, { useState, useEffect } from 'react';
import RoomsCarousel from '../../components/RoomsCarousel';
import CustomizableText from '../../components/CustomizableText';
import ContentEditor from '../../components/ContentEditor';
import useContentStore from '../../stores/contentStore';
import ImageEditor from '../../components/ImageEditor';
import useAdminStore from '../../stores/adminStore';
import CustomizableImage from '../../components/CustomizableImage';
import content from '../../constants/content'
const contentItems = content.filter(item => item.section === 'rooms');

export default function Rooms() {
    const { user } = useAdminStore()
    const { content, fetchContent, editContent } = useContentStore();
    const [isEditing, setIsEditing] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [isEditingImage, setIsEditingImage] = useState(false);
    const handleEditImageClick = (key) => {
        setSelectedItem({ key });
        setIsEditingImage(true);
    };
    const handleSaveImage = (key, newImageUrl) => {
        editContent('rooms', key, newImageUrl).then(() => {
            fetchContent();
            setIsEditingImage(false);
        });
    };




    const getItemContent = (key) => {
        const entry = Array.isArray(content) ? content.filter(item => item.section === 'rooms').find((entry) => entry.item === key) : null;
        return entry ? entry.content : contentItems.find((item) => item.key === key)?.defaultValue || '';
    };



    const handleEditClick = (key) => {
        const item = contentItems.find(item => item.key === key);
        setSelectedItem({
            key: item.key,
            content: getItemContent(item.key),
            label: item.label,
            type: item.type,
        });
        setIsEditing(true);
    };

    const handleSave = (key, newContent) => {
        editContent('rooms', key, newContent).then(() => {
            fetchContent();  // Re-fetch content after saving
            setIsEditing(false);
        });
    };

    const RoomComponent = ({ image, titleKey, descriptionKey }) => (
        <div className="w-full aspect-[1/2] sm:aspect-[2/3] md:aspect-square relative">
            <div className='w-full h-1/3 sm:h-[70%] relative'>
                <CustomizableImage sizes="100vw" height={0} width={0} className="w-full h-full "
                    src={getItemContent(image)}
                    alt="" />
                {user && <img className='absolute cursor-pointer hover:scale-125 duration-300  top-1/2 z-50 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 bg-white rounded-full p-4' alt='' src='/assets/imageEdit.svg'
                    onClick={() => handleEditImageClick(image)}
                />}
            </div>

            <div className="flex flex-col w-full h-2/3 sm:h-[30%] p-4">
                <CustomizableText
                    className="font-old text-lg lg:text-2xl text-zinc-800 "
                    html={getItemContent(titleKey)}
                    onClick={() => handleEditClick(titleKey)}
                />
                <CustomizableText
                    className="text-zinc-600 font-thin text-xs lg:text-sm "
                    html={getItemContent(descriptionKey)}
                    onClick={() => handleEditClick(descriptionKey)}
                />
            </div>
        </div>
    );

    const items = [
        {
            image: 'image1',
            titleKey: 'penthouseSuiteTitle',
            descriptionKey: 'penthouseSuiteDescription',
        },
        {
            image: 'image2',
            titleKey: 'janitorSuiteTitle',
            descriptionKey: 'janitorSuiteDescription',
        },
        {
            image: 'image3',
            titleKey: 'familyDoubleTitle',
            descriptionKey: 'familyDoubleDescription',
        },
        {
            image: 'image4',
            titleKey: 'executiveRoomTitle',
            descriptionKey: 'executiveRoomDescription',
        },
        {
            image: 'image5',
            titleKey: 'emptyTitleRoomTitle',
            descriptionKey: 'emptyTitleRoomDescription',
        },
    ];

    return (
        <>
            <div className="w-full px-2 sm:px-8 min-h-screen flex flex-col items-center">
                <CustomizableText
                    className="mt-40 text-zinc-600 mb-4 text-xs sm:text-sm "
                    html={getItemContent('roomsSubtitle')}
                    onClick={() => handleEditClick('roomsSubtitle')}
                />
                <CustomizableText
                    className="font-old text-center text-xl sm:text-4xl text-zinc-800 mb-20 "
                    html={getItemContent('roomsTitle')}
                    onClick={() => handleEditClick('roomsTitle')}
                />
                <RoomsCarousel
                    items={items.map(item => (
                        <RoomComponent
                            key={item.titleKey}
                            image={item.image}
                            titleKey={item.titleKey}
                            descriptionKey={item.descriptionKey}
                        />
                    ))}
                />
            </div>

            {isEditing && selectedItem && (
                <ContentEditor
                    item={selectedItem.key}
                    content={selectedItem.content}
                    onSave={handleSave}
                    onCancel={() => setIsEditing(false)}
                />
            )}
            {isEditingImage && selectedItem && (
                <ImageEditor
                    data={contentItems.find((item) => item.key === selectedItem.key)}
                    item={selectedItem}
                    onSave={handleSaveImage}
                    onCancel={() => setIsEditingImage(false)}
                />
            )}
        </>
    );
}
