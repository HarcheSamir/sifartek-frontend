import React, { useState } from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import { FaYoutube } from "react-icons/fa6";
import { PiAirplaneTiltThin } from "react-icons/pi";
import { IoFastFoodOutline } from "react-icons/io5";
import { PiCityThin } from "react-icons/pi";
import { TbBeach } from "react-icons/tb";
import CustomizableText from '../../components/CustomizableText';
import ContentEditor from '../../components/ContentEditor';
import useContentStore from '../../stores/contentStore';
import content from '../../constants/content'
const contentItems = content.filter(item => item.section === 'parallax');
export default function ParallaxOne() {
    const { content, fetchContent, editContent } = useContentStore();
    const [isEditing, setIsEditing] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);


    const getItemContent = (key) => {
        const entry = Array.isArray(content) ? content.find((entry) => entry.item === key) : null;
        return entry ? entry.content : contentItems.find((item) => item.key === key)?.defaultValue || '';
    };


    const handleEditClick = (key) => {
        const item = contentItems.find(item => item.key === key);
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
            <div className='grid grid-cols-2 lg:grid-cols-4 w-[90%] gap-4 mb-20'>
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
                        <PiAirplaneTiltThin className='h-20 mb-4 w-16 text-secondary' />
                        <CustomizableText
                            className='text-xl group-hover:text-white text-zinc-700'
                            html={getItemContent('grid1Title')}
                            onClick={() => handleEditClick('grid1Title')}
                        />
                        <CustomizableText
                            className='text-center w-[80%] text-zinc-400 text-sm mt-4'
                            html={getItemContent('grid1Description')}
                            onClick={() => handleEditClick('grid1Description')}
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
                        <IoFastFoodOutline className='h-20 mb-4 w-16 text-secondary' />
                        <CustomizableText
                            className='text-xl group-hover:text-white text-zinc-700'
                            html={getItemContent('grid2Title')}
                            onClick={() => handleEditClick('grid2Title')}
                        />
                        <CustomizableText
                            className='text-center text-xs w-[80%] text-zinc-400 text-sm mt-4'
                            html={getItemContent('grid2Description')}
                            onClick={() => handleEditClick('grid2Description')}
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
                        <PiCityThin className='h-20 mb-4 w-16 text-secondary' />
                        <CustomizableText
                            className='text-xl group-hover:text-white text-zinc-700'
                            html={getItemContent('grid3Title')}
                            onClick={() => handleEditClick('grid3Title')}
                        />
                        <CustomizableText
                            className='text-center text-xs w-[80%] text-zinc-400 text-sm mt-4'
                            html={getItemContent('grid3Description')}
                            onClick={() => handleEditClick('grid3Description')}
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
                        <TbBeach className='h-20 mb-4 w-16 text-secondary' />
                        <CustomizableText
                            className='text-xl group-hover:text-white text-zinc-700'
                            html={getItemContent('grid4Title')}
                            onClick={() => handleEditClick('grid4Title')}
                        />
                        <CustomizableText
                            className='text-center text-xs w-[80%] text-zinc-400 text-sm mt-4'
                            html={getItemContent('grid4Description')}
                            onClick={() => handleEditClick('grid4Description')}
                        />
                    </div>
                </div>
            </div>
        );
    };



    const Grid2 = () => {
        return (
            <div className='xl:grid flex flex-col items-center  xl:grid-cols-3 w-[90%] gap-4'>
                <div className='w-[min(100%,400px)] relative flex flex-col items-center border-zinc-300 border-2 rounded overflow-hidden'>
                    <img
                        className='rounded-full ring-2 h-20 w-20 mt-4'
                        sizes='100vw'
                        height={0}
                        width={0}
                        alt=''
                        src={'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                    />
                    <CustomizableText
                        className='text-xl mt-2 font-old'
                        html={getItemContent('review1Name')}
                        onClick={() => handleEditClick('review1Name')}
                    />
                    <CustomizableText
                        className='text-zinc-400 text-center w-[80%] text-lg mt-4'
                        html={getItemContent('review1Text')}
                        onClick={() => handleEditClick('review1Text')}
                    />
                    <img
                        className='py-4 w-20 h-auto  mt-auto'
                        sizes='100vw'
                        height={0}
                        width={0}
                        alt=''
                        src={'/assets/binance.png'}
                    />
                </div>
                <div className='w-[min(100%,400px)] h-full relative flex flex-col items-center border-zinc-300 border-2 rounded overflow-hidden'>
                    <img
                        className='rounded-full ring-2 h-20 w-20 mt-4'
                        sizes='100vw'
                        height={0}
                        width={0}
                        alt=''
                        src={'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                    />
                    <CustomizableText
                        className='text-xl mt-2 font-old'
                        html={getItemContent('review2Name')}
                        onClick={() => handleEditClick('review2Name')}
                    />
                    <CustomizableText
                        className='text-zinc-400 text-center w-[80%] text-lg mt-4'
                        html={getItemContent('review2Text')}
                        onClick={() => handleEditClick('review2Text')}
                    />
                    <img
                        className='py-4 w-20 h-auto  mt-auto  '
                        sizes='100vw'
                        height={0}
                        width={0}
                        alt=''
                        src={'/assets/airbnb.png'}
                    />
                </div>
                <div className='w-[min(100%,400px)] h-full relative flex flex-col items-center border-zinc-300 border-2 rounded overflow-hidden'>
                    <img
                        className='rounded-full ring-2 h-20 w-20 mt-4'
                        sizes='100vw'
                        height={0}
                        width={0}
                        alt=''
                        src={'https://images.unsplash.com/photo-1499155286265-79a9dc9c6380?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                    />
                    <CustomizableText
                        className='text-xl mt-2 font-old'
                        html={getItemContent('review3Name')}
                        onClick={() => handleEditClick('review3Name')}
                    />
                    <CustomizableText
                        className='text-zinc-400 text-center w-[80%] text-lg mt-4'
                        html={getItemContent('review3Text')}
                        onClick={() => handleEditClick('review3Text')}
                    />
                    <img
                        className='py-4 w-20 h-auto mt-auto'
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
                    className='mt-40 text-zinc-600 mb-4 text-sm sm:text-sm'
                    html={getItemContent('section1Subtitle')}
                    onClick={() => handleEditClick('section1Subtitle')}
                />
                <CustomizableText
                    className='font-old text-center text-xl sm:text-4xl text-zinc-800 mb-20'
                    html={getItemContent('section1Title')}
                    onClick={() => handleEditClick('section1Title')}
                />
                <Grid
                />
            </div>

            <ParallaxBanner
                layers={[{
                    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    speed: -50
                }]}
                className="h-[100vh] relative w-full object-scale-down"
            >
                <div className='h-full bg-black opacity-50' />
                <div className='absolute top-0 left-0 text-white h-full w-full flex flex-col justify-center items-center'>
                    <FaYoutube className='text-white h-20 w-16 mb-4' />
                    <CustomizableText
                        className='text-xl mb-4 text-center'
                        html={getItemContent('parallax1Subtitle')}
                        onClick={() => handleEditClick('parallax1Subtitle')}
                    />
                    <CustomizableText
                        className='text-3xl md:text-5xl font-old font-medium text-center'
                        html={getItemContent('parallax1Title')}
                        onClick={() => handleEditClick('parallax1Title')}
                    />
                </div>
            </ParallaxBanner>

            <div className='w-full py-40 px-2 sm:px-8 min-h-screen flex flex-col items-center'>
                <CustomizableText
                    className='text-zinc-600 mb-4 text-sm sm:text-lg'
                    html={getItemContent('section2Subtitle')}
                    onClick={() => handleEditClick('section2Subtitle')}
                />
                <CustomizableText
                    className='font-old text-center text-3xl sm:text-5xl text-zinc-800 mb-20'
                    html={getItemContent('section2Title')}
                    onClick={() => handleEditClick('section2Title')}
                />
                <Grid2

                />
            </div>

            <ParallaxBanner
                layers={[{
                    image: 'https://plus.unsplash.com/premium_photo-1661901734877-88919d011b24?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    speed: -50
                }]}
                className="h-[90vh] relative w-full object-scale-down"
            >
                <div className='h-full bg-black opacity-50' />
                <div className='absolute top-0 left-0 text-white h-full w-full flex flex-col justify-center items-center'>
                    <CustomizableText
                        className='text-xl mb-4 text-center'
                        html={getItemContent('parallax2Subtitle')}
                        onClick={() => handleEditClick('parallax2Subtitle')}
                    />
                    <CustomizableText
                        className='text-3xl md:text-5xl font-old font-medium text-center'
                        html={getItemContent('parallax2Title')}
                        onClick={() => handleEditClick('parallax2Title')}
                    />
                    <CustomizableText
                        className='bg-secondary text-xs w-min px-8 cursor-pointer hover:bg-secondaryHovered py-4 whitespace-nowrap rounded mt-8'
                        html={getItemContent('buttonText')}
                        onClick={() => handleEditClick('buttonText')}
                    />

                </div>
            </ParallaxBanner>

            {isEditing && selectedItem && (
                <ContentEditor
                    item={selectedItem.key}
                    content={selectedItem.content}
                    onSave={handleSave}
                    onCancel={() => setIsEditing(false)}
                />
            )}
        </div>
    );
}

