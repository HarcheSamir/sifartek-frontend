import React, { useState, useEffect } from 'react';
import HeroCarousel from '../../components/HeroCarousel';
import BookingButton from '../../components/BookingButton';
import useContentStore from '../../stores/contentStore';
import CustomizableText from '../../components/CustomizableText';
import ContentEditor from '../../components/ContentEditor';
import ImageEditor from '../../components/ImageEditor';
import content from '../../constants/content'
import useAdminStore from '../../stores/adminStore';
import CustomizableImage from '../../components/CustomizableImage';
const contentItems = content.filter(item => item.section === 'hero');
export default function Hero() {
    const { content, fetchContent, editContent } = useContentStore();
    const { user } = useAdminStore()
    const [isEditing, setIsEditing] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [isEditingImage, setIsEditingImage] = useState(false);
    const handleEditImageClick = (key) => {
        setSelectedItem({ key });
        setIsEditingImage(true);
    };
    const handleSaveImage = (key, newImageUrl) => {
        editContent('homeAmbience', key, newImageUrl).then(() => {
            fetchContent();
            setIsEditingImage(false);
        });
    };




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
                    className='mb-4 md:text-sm font-thin text-center text-sm '
                    html={getItemContent(`${item.key}Subtitle`)}
                    onClick={() => handleEditClick(`${item.key}Subtitle`)}
                />
                <CustomizableText
                    className='font-old text-3xl md:text-6xl text-center'
                    html={getItemContent(`${item.key}Title`)}
                    onClick={() => handleEditClick(`${item.key}Title`)}
                />
                {contentItems?.find(i => i.key === `${item.key}ButtonText`) && (
                    <CustomizableText
                        className='whitespace-nowrap hover:scale-110 duration-300 text-sm mt-12 py-4 px-6 border-[2px]'
                        html={getItemContent(`${item.key}ButtonText`)}
                        onClick={() => handleEditClick(`${item.key}ButtonText`)}
                    />
                )}
            </div>
            <img height={0} width={0} sizes='100vw' alt='' className='h-full w-full object-cover' src={item.src} />

        </div>
    );

    const items = [
        <div className='h-full w-full text-white relative' key='carousel1'>
            <div className='absolute h-full w-full z-20 bg-black opacity-60' />
            <div className='absolute top-1/3 z-20 -translate-y-1/2 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center'>
                <CustomizableText
                    className='mb-4 md:text-sm  font-thin text-center text-sm '
                    html={getItemContent('carousel1Subtitle')}
                    onClick={() => handleEditClick('carousel1Subtitle')}
                />
                <CustomizableText
                    className='font-old text-3xl md:text-6xl text-center'
                    html={getItemContent('carousel1Title')}
                    onClick={() => handleEditClick('carousel1Title')}
                />
                <CustomizableText
                    className='whitespace-nowrap hover:scale-110 duration-300 text-sm mt-12 py-4 px-6 border-[2px]'
                    html={getItemContent('carousel1ButtonText')}
                    onClick={() => handleEditClick('carousel1ButtonText')}
                />
                {user && <img className=' cursor-pointer hover:scale-125 duration-300 mt-4  w-16 bg-white rounded-full p-4' alt='' src='/assets/imageEdit.svg'
                    onClick={() => handleEditImageClick('image1')}
                />}
            </div>
            <CustomizableImage
                className='h-full w-full object-cover'
                src={getItemContent('image1')}
            />
        </div>
        ,
        <div className='h-full w-full text-white relative' key='carousel2'>
            <div className='absolute h-full z-20 w-full bg-black opacity-60' />
            <div className='absolute top-1/3 z-20 -translate-y-1/2 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center'>
                <CustomizableText
                    className='mb-4 md:text-sm font-thin text-center text-sm '
                    html={getItemContent('carousel2Subtitle')}
                    onClick={() => handleEditClick('carousel2Subtitle')}
                />
                <CustomizableText
                    className='font-old text-3xl md:text-6xl text-center'
                    html={getItemContent('carousel2Title')}
                    onClick={() => handleEditClick('carousel2Title')}
                />
                {user && <img className=' cursor-pointer hover:scale-125 duration-300 mt-4  w-16 bg-white rounded-full p-4' alt='' src='/assets/imageEdit.svg'
                    onClick={() => handleEditImageClick('image2')}
                />}

            </div>
            <CustomizableImage
                className='h-full w-full object-cover'
                src={getItemContent('image2')}
            />
        </div>
    ];


    return (
        <>
            <div className='h-[140vh] w-full relative'>
                <HeroCarousel items={items} />
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
