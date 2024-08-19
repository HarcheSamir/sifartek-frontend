import React, { useState, useEffect } from 'react';
import RoomsCarousel from '../../components/RoomsCarousel';
import CustomizableText from '../../components/CustomizableText';
import ContentEditor from '../../components/ContentEditor';
import useContentStore from '../../stores/contentStore';
import content from '../../constants/content'
const contentItems = content.filter(item => item.section === 'rooms');

export default function Rooms() {
    const { content, fetchContent, editContent } = useContentStore();
    const [isEditing, setIsEditing] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);





    const getItemContent = (key) => {
        const entry = content.find((entry) => entry.item === key);
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
            <img sizes="100vw" height={0} width={0} className="w-full h-1/3 sm:h-[70%]" src={image} alt="" />
            <div className="flex flex-col w-full h-2/3 sm:h-[30%] p-4">
                <CustomizableText
                    className="font-old text-xl lg:text-3xl text-zinc-800 "
                    html={getItemContent(titleKey)}
                    onClick={()=>handleEditClick(titleKey)}
                />
                <CustomizableText
                    className="text-zinc-600 font-thin text-sm lg:text-lg "
                    html={getItemContent(descriptionKey) }
                    onClick={()=>handleEditClick(descriptionKey)}
                />
            </div>
        </div>
    );

    const items = [
        {
            image: 'https://images.unsplash.com/photo-1657907157592-dd6cfb9d06cf?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            titleKey: 'penthouseSuiteTitle',
            descriptionKey: 'penthouseSuiteDescription',
        },
        {
            image: 'https://plus.unsplash.com/premium_photo-1661780295073-98db12600af0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            titleKey: 'janitorSuiteTitle',
            descriptionKey: 'janitorSuiteDescription',
        },
        {
            image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            titleKey: 'familyDoubleTitle',
            descriptionKey: 'familyDoubleDescription',
        },
        {
            image: 'https://images.unsplash.com/photo-1615874694520-474822394e73?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            titleKey: 'executiveRoomTitle',
            descriptionKey: 'executiveRoomDescription',
        },
        {
            image: 'https://images.unsplash.com/photo-1600494448850-6013c64ba722?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            titleKey: 'emptyTitleRoomTitle',
            descriptionKey: 'emptyTitleRoomDescription',
        },
    ];

    return (
        <>
            <div className="w-full px-2 sm:px-8 min-h-screen flex flex-col items-center">
                <CustomizableText
                    className="mt-40 text-zinc-600 mb-4 text-sm sm:text-lg "
                    html={getItemContent('roomsSubtitle')}
                    onClick={()=>handleEditClick('roomsSubtitle')}
                />
                <CustomizableText
                    className="font-old text-center text-3xl sm:text-5xl text-zinc-800 mb-20 "
                    html={getItemContent('roomsTitle')}
                    onClick={()=>handleEditClick('roomsTitle')}
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
        </>
    );
}
