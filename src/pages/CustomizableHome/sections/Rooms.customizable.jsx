import React, { useState, useEffect } from 'react';
import RoomsCarousel from '../../../components/RoomsCarousel';
import CustomizableText from '../../../components/CustomizableText';
import ContentEditor from '../../../components/ContentEditor';
import useContentStore from '../../../stores/contentStore';

export default function Rooms() {
    const { content, fetchContent, editContent } = useContentStore();
    const [isEditing, setIsEditing] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const contentItems = [
        { key: 'roomsTitle', label: 'Rooms Title', type: 'text', defaultValue: 'Eco-Inspired Lodging' },
        { key: 'roomsSubtitle', label: 'Rooms Subtitle', type: 'text', defaultValue: 'ACCOMMODATION & COMFORT' },
        { key: 'penthouseSuiteTitle', label: 'Penthouse Suite Title', type: 'text', defaultValue: 'Penthouse Suite' },
        { key: 'penthouseSuiteDescription', label: 'Penthouse Suite Description', type: 'text', defaultValue: 'Luxurious suite with panoramic views.' },
        { key: 'janitorSuiteTitle', label: 'Janitor Suite Title', type: 'text', defaultValue: 'Janitor Suite' },
        { key: 'janitorSuiteDescription', label: 'Janitor Suite Description', type: 'text', defaultValue: 'Comfortable suite with a quaint charm.' },
        { key: 'familyDoubleTitle', label: 'Family Double Title', type: 'text', defaultValue: 'Family Double Room' },
        { key: 'familyDoubleDescription', label: 'Family Double Description', type: 'text', defaultValue: 'Spacious room ideal for families.' },
        { key: 'executiveRoomTitle', label: 'Executive Room Title', type: 'text', defaultValue: 'Executive Room' },
        { key: 'executiveRoomDescription', label: 'Executive Room Description', type: 'text', defaultValue: 'Elegantly designed room for business travelers.' },
        { key: 'emptyTitleRoomTitle', label: 'Empty Title Room Title', type: 'text', defaultValue: 'Empty Room' },
        { key: 'emptyTitleRoomDescription', label: 'Empty Title Room Description', type: 'text', defaultValue: 'A room that’s ready for your next stay.' },
    ];

    useEffect(() => {
        fetchContent();
    }, [fetchContent]);

    const getItemContent = (key) => {
        const entry = content.find((entry) => entry.item === key);
        return entry ? entry.content : contentItems.find((item) => item.key === key)?.defaultValue || '';
    };

    const handleEditClick = (item) => {
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
                    className="font-old text-xl lg:text-3xl text-zinc-800 cursor-pointer"
                    html={getItemContent(titleKey) || 'Default Room Title'}
                    onClick={() => handleEditClick({ key: titleKey, label: 'Room Title', type: 'text' })}
                />
                <CustomizableText
                    className="text-zinc-600 font-thin text-sm lg:text-lg cursor-pointer"
                    html={getItemContent(descriptionKey) || 'Default Room Description'}
                    onClick={() => handleEditClick({ key: descriptionKey, label: 'Room Description', type: 'text' })}
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
                    className="mt-40 text-zinc-600 mb-4 text-sm sm:text-lg cursor-pointer"
                    html={getItemContent('roomsSubtitle') || contentItems.find(i => i.key === 'roomsSubtitle')?.defaultValue}
                    onClick={() => handleEditClick(contentItems.find(i => i.key === 'roomsSubtitle'))}
                />
                <CustomizableText
                    className="font-old text-center text-3xl sm:text-5xl text-zinc-800 mb-20 cursor-pointer"
                    html={getItemContent('roomsTitle') || contentItems.find(i => i.key === 'roomsTitle')?.defaultValue}
                    onClick={() => handleEditClick(contentItems.find(i => i.key === 'roomsTitle'))}
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
                    label={selectedItem.label}
                    onSave={handleSave}
                    onCancel={() => setIsEditing(false)}
                />
            )}
        </>
    );
}
