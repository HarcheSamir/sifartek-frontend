import React, { useState, useEffect } from 'react';
import HeroCarousel from '../../components/HeroCarousel';
import BookingButton from '../../components/BookingButton';
import useContentStore from '../../stores/contentStore';
import CustomizableText from '../../components/CustomizableText';
import ContentEditor from '../../components/ContentEditor'; // Import the new component
import content from '../../constants/content'
const contentItems = content.filter(item => item.section === 'hero');
export default function Hero() {
    const { content, fetchContent, editContent } = useContentStore();
    const [isEditing, setIsEditing] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const items = [
        { key: 'carousel1', src: 'https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { key: 'carousel2', src: 'https://images.unsplash.com/photo-1621293954908-907159247fc8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
    ];




    const getItemContent = (key) => {
        const entry = Array.isArray(content) ? content.find((entry) => entry.item === key) : null;
        return entry ? entry.content : contentItems?.find((item) => item.key === key)?.defaultValue || '';
    };
  

    const handleEditClick = (key) => {
        const item = contentItems?.find(item => item.key === key)
        setSelectedItem({
            key: item.key,
            content: getItemContent(item.key),
            label: item.label,
            type: item.type
        });
        setIsEditing(true);
    };

    const handleSave = (key, newContent) => {
        editContent('hero', key, newContent).then(() => {
            fetchContent();  // Re-fetch content after saving
            setIsEditing(false);
        });
    };

    const renderCarouselItem = (item) => (
        <div className='h-full w-full text-white relative' key={item.key}>
            <div className='absolute h-full w-full bg-black opacity-60' />
            <div className='absolute top-1/3 -translate-y-1/2 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center'>
                <CustomizableText
                    className='mb-4 md:text-xl font-thin text-center '
                    html={getItemContent(`${item.key}Subtitle`) }
                    onClick={() => handleEditClick(`${item.key}Subtitle`)}
                />
                <CustomizableText
                    className='font-old text-5xl md:text-8xl text-center'
                    html={getItemContent(`${item.key}Title`)}
                    onClick={() => handleEditClick(`${item.key}Title`)}
                />
                {contentItems?.find(i => i.key === `${item.key}ButtonText`) && (
                    <CustomizableText
                        className='whitespace-nowrap hover:scale-110 duration-300 text-lg mt-12 py-4 px-6 border-[2px]'
                        html={getItemContent(`${item.key}ButtonText`)}
                        onClick={() => handleEditClick(`${item.key}ButtonText`)}
                    />
                )}
            </div>
            <img height={0} width={0} sizes='100vw' alt='' className='h-full w-full object-cover' src={item.src} /> 
        </div>
    );

    return (
        <>
            <div className='h-[140vh] w-full relative'>
                <HeroCarousel items={items.map(renderCarouselItem)} />
                <BookingButton />
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
