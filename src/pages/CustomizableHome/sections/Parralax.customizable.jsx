import React, { useState } from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import { FaYoutube } from "react-icons/fa6";
import { PiAirplaneTiltThin } from "react-icons/pi";
import { IoFastFoodOutline } from "react-icons/io5";
import { PiCityThin } from "react-icons/pi";
import { TbBeach } from "react-icons/tb";
import CustomizableText from '../../../components/CustomizableText';
import ContentEditor from '../../../components/ContentEditor';
import useContentStore from '../../../stores/contentStore';

export default function ParallaxOne() {
    const { content, fetchContent, editContent } = useContentStore();
    const [isEditing, setIsEditing] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const items = [
        { key: 'section1Subtitle', label: 'Section 1 Subtitle', defaultValue: 'ACCOMMODATION & COMFORT' },
        { key: 'section1Title', label: 'Section 1 Title', defaultValue: 'Eco-Inspired Lodging' },
        { key: 'parallax1Subtitle', label: 'Parallax 1 Subtitle', defaultValue: 'Explore. Wander. Disappear.' },
        { key: 'parallax1Title', label: 'Parallax 1 Title', defaultValue: 'The Great Escape<br />You\'ll Remember.' },
        { key: 'section2Subtitle', label: 'Section 2 Subtitle', defaultValue: 'People Love Our Hotel' },
        { key: 'section2Title', label: 'Section 2 Title', defaultValue: 'What Others Say' },
        { key: 'parallax2Subtitle', label: 'Parallax 2 Subtitle', defaultValue: 'Enjoy with your partner.' },
        { key: 'parallax2Title', label: 'Parallax 2 Title', defaultValue: 'Honeymoon Package<br />50% Off' },
        { key: 'buttonText', label: 'Button Text', defaultValue: 'VIEW EXCLUSIVE ROOM' },
        // Grid items
        { key: 'grid1Title', label: 'Grid 1 Title', defaultValue: 'Airport Pickup' },
        { key: 'grid1Description', label: 'Grid 1 Description', defaultValue: 'We’ll pick up from airport while you comfy on your ride.' },
        { key: 'grid2Title', label: 'Grid 2 Title', defaultValue: 'Food Service' },
        { key: 'grid2Description', label: 'Grid 2 Description', defaultValue: 'We’ll ensure you’re well-fed with our room service options.' },
        { key: 'grid3Title', label: 'Grid 3 Title', defaultValue: 'City Tour' },
        { key: 'grid3Description', label: 'Grid 3 Description', defaultValue: 'Explore the city with our guided tours.' },
        { key: 'grid4Title', label: 'Grid 4 Title', defaultValue: 'Beach Access' },
        { key: 'grid4Description', label: 'Grid 4 Description', defaultValue: 'Enjoy the sun with our beach access.' },
        // Grid2 items
        { key: 'review1Name', label: 'Review 1 Name', defaultValue: 'Joanna Roberts' },
        { key: 'review1Text', label: 'Review 1 Text', defaultValue: '“This was the perfect hotel with the perfect location, perfect room; I couldn’t think of a more perfect trip! This was a great location as I was going to a conference at the Javitz center and it’s nearly a couple blocks walk.”' },
        { key: 'review2Name', label: 'Review 2 Name', defaultValue: 'Emily Davis' },
        { key: 'review2Text', label: 'Review 2 Text', defaultValue: '“Fantastic stay! The staff was incredibly friendly and the amenities were top-notch. Highly recommend!”' },
        { key: 'review3Name', label: 'Review 3 Name', defaultValue: 'Michael Brown' },
        { key: 'review3Text', label: 'Review 3 Text', defaultValue: '“An unforgettable experience! The location was ideal, and the service was exceptional. Will definitely return.”' }
    ];

    const getItemContent = (key) => {
        const entry = content.find((entry) => entry.item === key);
        return entry ? entry.content : items.find((item) => item.key === key)?.defaultValue || '';
    };

    const handleEditClick = (item) => {
        setSelectedItem({
            key: item.key,
            content: getItemContent(item.key),
            label: item.label
        });
        setIsEditing(true);
    };

    const handleSave = (key, newContent) => {
        editContent('parallaxOne', key, newContent).then(() => {
            fetchContent();  // Re-fetch content after saving
            setIsEditing(false);
        });
    };

    const Grid = () => {
        return (
            <div className='grid grid-cols-2 lg:grid-cols-4 w-[90%] gap-4'>
                <div className='w-full cursor-pointer relative group aspect-square rounded ring-2 ring-zinc-200 overflow-hidden'>
                    <img
                        height={0}
                        width={0}
                        sizes='100vw'
                        className='w-full h-full object-cover'
                        alt=''
                        src={'https://plus.unsplash.com/premium_photo-1661501562127-a8bb26defb35?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                    />
                    <div className='h-full w-full z-10 bg-white group-hover:bg-black group-hover:opacity-60 absolute top-0 left-0' />
                    <div className='h-full w-full z-10 absolute top-0 left-0 flex flex-col items-center justify-center'>
                        <PiAirplaneTiltThin className='h-20 mb-4 w-20 text-secondary' />
                        <CustomizableText
                            className='text-2xl group-hover:text-white text-zinc-700'
                            html={getItemContent('grid1Title')}
                            onClick={() => handleEditClick(items[9])}
                        />
                        <CustomizableText
                            className='text-center w-[80%] text-zinc-400'
                            html={getItemContent('grid1Description')}
                            onClick={() => handleEditClick(items[10])}
                        />
                    </div>
                </div>
                <div className='w-full cursor-pointer relative group aspect-square rounded ring-2 ring-zinc-200 overflow-hidden'>
                    <img
                        height={0}
                        width={0}
                        sizes='100vw'
                        className='w-full h-full object-cover'
                        alt=''
                        src={'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                    />
                    <div className='h-full w-full z-10 bg-white group-hover:bg-black group-hover:opacity-60 absolute top-0 left-0' />
                    <div className='h-full w-full z-10 absolute top-0 left-0 flex flex-col items-center justify-center'>
                        <IoFastFoodOutline className='h-20 mb-4 w-20 text-secondary' />
                        <CustomizableText
                            className='text-2xl group-hover:text-white text-zinc-700'
                            html={getItemContent('grid2Title')}
                            onClick={() => handleEditClick(items[11])}
                        />
                        <CustomizableText
                            className='text-center w-[80%] text-zinc-400'
                            html={getItemContent('grid2Description')}
                            onClick={() => handleEditClick(items[12])}
                        />
                    </div>
                </div>
                <div className='w-full cursor-pointer relative group aspect-square rounded ring-2 ring-zinc-200 overflow-hidden'>
                    <img
                        height={0}
                        width={0}
                        sizes='100vw'
                        className='w-full h-full object-cover'
                        alt=''
                        src={'https://plus.unsplash.com/premium_photo-1672116452571-896980a801c8?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                    />
                    <div className='h-full w-full z-10 bg-white group-hover:bg-black group-hover:opacity-60 absolute top-0 left-0' />
                    <div className='h-full w-full z-10 absolute top-0 left-0 flex flex-col items-center justify-center'>
                        <PiCityThin className='h-20 mb-4 w-20 text-secondary' />
                        <CustomizableText
                            className='text-2xl group-hover:text-white text-zinc-700'
                            html={getItemContent('grid3Title')}
                            onClick={() => handleEditClick(items[13])}
                        />
                        <CustomizableText
                            className='text-center w-[80%] text-zinc-400'
                            html={getItemContent('grid3Description')}
                            onClick={() => handleEditClick(items[14])}
                        />
                    </div>
                </div>
                <div className='w-full cursor-pointer relative group aspect-square rounded ring-2 ring-zinc-200 overflow-hidden'>
                    <img
                        height={0}
                        width={0}
                        sizes='100vw'
                        className='w-full h-full object-cover'
                        alt=''
                        src={'https://images.unsplash.com/photo-1521170813716-0b3f42fcfb65?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                    />
                    <div className='h-full w-full z-10 bg-white group-hover:bg-black group-hover:opacity-60 absolute top-0 left-0' />
                    <div className='h-full w-full z-10 absolute top-0 left-0 flex flex-col items-center justify-center'>
                        <TbBeach className='h-20 mb-4 w-20 text-secondary' />
                        <CustomizableText
                            className='text-2xl group-hover:text-white text-zinc-700'
                            html={getItemContent('grid4Title')}
                            onClick={() => handleEditClick(items[15])}
                        />
                        <CustomizableText
                            className='text-center w-[80%] text-zinc-400'
                            html={getItemContent('grid4Description')}
                            onClick={() => handleEditClick(items[16])}
                        />
                    </div>
                </div>
            </div>
        );
    };



    const Grid2 = () => {
        return (
            <div className='grid grid-cols-1 xl:grid-cols-3 w-[90%] gap-4'>
                <div className='w-full relative flex flex-col items-center border-zinc-300 border-2 rounded overflow-hidden'>
                    <img
                        className='rounded-full ring-2 h-24 w-24 mt-4'
                        sizes='100vw'
                        height={0}
                        width={0}
                        alt=''
                        src={'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                    />
                    <CustomizableText
                        className='text-2xl mt-2 font-old'
                        html={getItemContent('review1Name')}
                        onClick={() => handleEditClick(items[17])}
                    />
                    <CustomizableText
                        className='text-zinc-400 text-center w-[80%] text-xl mt-4'
                        html={getItemContent('review1Text')}
                        onClick={() => handleEditClick(items[18])}
                    />
                    <img
                        className='py-4 w-40 h-auto'
                        sizes='100vw'
                        height={0}
                        width={0}
                        alt=''
                        src={'/assets/binance.png'}
                    />
                </div>
                <div className='w-full relative flex flex-col items-center border-zinc-300 border-2 rounded overflow-hidden'>
                    <img
                        className='rounded-full ring-2 h-24 w-24 mt-4'
                        sizes='100vw'
                        height={0}
                        width={0}
                        alt=''
                        src={'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                    />
                    <CustomizableText
                        className='text-2xl mt-2 font-old'
                        html={getItemContent('review2Name')}
                        onClick={() => handleEditClick(items[19])}
                    />
                    <CustomizableText
                        className='text-zinc-400 text-center w-[80%] text-xl mt-4'
                        html={getItemContent('review2Text')}
                        onClick={() => handleEditClick(items[20])}
                    />
                    <img
                        className='py-4 w-40 h-auto'
                        sizes='100vw'
                        height={0}
                        width={0}
                        alt=''
                        src={'/assets/airbnb.png'}
                    />
                </div>
                <div className='w-full relative flex flex-col items-center border-zinc-300 border-2 rounded overflow-hidden'>
                    <img
                        className='rounded-full ring-2 h-24 w-24 mt-4'
                        sizes='100vw'
                        height={0}
                        width={0}
                        alt=''
                        src={'https://images.unsplash.com/photo-1499155286265-79a9dc9c6380?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                    />
                    <CustomizableText
                        className='text-2xl mt-2 font-old'
                        html={getItemContent('review3Name')}
                        onClick={() => handleEditClick(items[21])}
                    />
                    <CustomizableText
                        className='text-zinc-400 text-center w-[80%] text-xl mt-4'
                        html={getItemContent('review3Text')}
                        onClick={() => handleEditClick(items[22])}
                    />
                    <img
                        className='py-4 w-40 h-auto'
                        sizes='100vw'
                        height={0}
                        width={0}
                        alt=''
                        src={'/assets/coinbase.png'}
                    />
                </div>
            </div>
        );
    };




    return (
        <div>
            <div className='w-full py-4 px-2 sm:px-8 min-h-screen flex flex-col items-center'>
                <CustomizableText
                    className='mt-40 text-zinc-600 mb-4 text-sm sm:text-lg'
                    html={getItemContent('section1Subtitle')}
                    onClick={() => handleEditClick(items[0])}
                />
                <CustomizableText
                    className='font-old text-center text-3xl sm:text-5xl text-zinc-800 mb-20'
                    html={getItemContent('section1Title')}
                    onClick={() => handleEditClick(items[1])}
                />
                <Grid
                />
            </div>

            <ParallaxBanner
                layers={[{
                    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    speed: -60
                }]}
                className="h-[100vh] relative w-full object-scale-down"
            >
                <div className='h-full bg-black opacity-50' />
                <div className='absolute top-0 left-0 text-white h-full w-full flex flex-col justify-center items-center'>
                    <FaYoutube className='text-white h-20 w-20 mb-12' />
                    <CustomizableText
                        className='text-2xl mb-4 text-center'
                        html={getItemContent('parallax1Subtitle')}
                        onClick={() => handleEditClick(items[2])}
                    />
                    <CustomizableText
                        className='text-5xl md:text-7xl font-old font-medium text-center'
                        html={getItemContent('parallax1Title')}
                        onClick={() => handleEditClick(items[3])}
                    />
                </div>
            </ParallaxBanner>

            <div className='w-full lg:h-[120vh] py-4 px-2 sm:px-8 min-h-screen flex flex-col items-center'>
                <CustomizableText
                    className='mt-40 text-zinc-600 mb-4 text-sm sm:text-lg'
                    html={getItemContent('section2Subtitle')}
                    onClick={() => handleEditClick(items[4])}
                />
                <CustomizableText
                    className='font-old text-center text-3xl sm:text-5xl text-zinc-800 mb-20'
                    html={getItemContent('section2Title')}
                    onClick={() => handleEditClick(items[5])}
                />
                <Grid2

                />
            </div>

            <ParallaxBanner
                layers={[{
                    image: 'https://plus.unsplash.com/premium_photo-1661901734877-88919d011b24?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    speed: -60
                }]}
                className="h-[90vh] relative w-full object-scale-down"
            >
                <div className='h-full bg-black opacity-50' />
                <div className='absolute top-0 left-0 text-white h-full w-full flex flex-col justify-center items-center'>
                    <CustomizableText
                        className='text-2xl mb-4 text-center'
                        html={getItemContent('parallax2Subtitle')}
                        onClick={() => handleEditClick(items[6])}
                    />
                    <CustomizableText
                        className='text-5xl md:text-7xl font-old font-medium text-center'
                        html={getItemContent('parallax2Title')}
                        onClick={() => handleEditClick(items[7])}
                    />
                    <div
                        className='bg-secondary w-min px-8 cursor-pointer hover:bg-secondaryHovered py-4 whitespace-nowrap rounded mt-8'
                        onClick={() => handleEditClick(items[8])}
                    >
                        {getItemContent('buttonText')}
                    </div>
                </div>
            </ParallaxBanner>

            {isEditing && selectedItem && (
                <ContentEditor
                    item={selectedItem.key}
                    content={selectedItem.content}
                    label={selectedItem.label}
                    type="text"  // Assuming text type, adjust if needed
                    onSave={handleSave}
                    onCancel={() => setIsEditing(false)}
                />
            )}
        </div>
    );
}

