import React, { useState, useEffect } from 'react';
import { FaCheck } from "react-icons/fa";
import CustomizableText from '../../components/CustomizableText';
import useContentStore from '../../stores/contentStore';
import ContentEditor from '../../components/ContentEditor';
import content from '../../constants/content'
const contentItems = content.filter(item => item.section === 'best');
export default function Best() {
    const { content, fetchContent, editContent } = useContentStore();
    const [isEditing, setIsEditing] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);


    const getItemContent = (key) => {
        const entry = Array.isArray(content) ? content.find((entry) => entry.item === key) : null;
        return entry ? entry.content : contentItems.find((item) => item.key === key)?.defaultValue || '';
    };

    const handleEditClick = (key) => {
        const item = contentItems.find(item => item.key === key)
        setSelectedItem({
            key: item.key,
            content: getItemContent(item.key),
            label: item.label,
            type: item.type,
        });
        setIsEditing(true);
    };

    const handleSave = (key, newContent) => {
        editContent('best', key, newContent).then(() => {
            fetchContent();  // Re-fetch content after saving
            setIsEditing(false);
        });
    };

    return (
        <>
            <div className='min-h-screen w-full py-8 sm:py-40 flex flex-col items-center'>
                <CustomizableText
                    className='mt-40 text-zinc-600 mb-4 text-sm sm:text-lg'
                    html={getItemContent('whatsUp')}
                    onClick={()=>handleEditClick('whatsUp')}
                />
                <CustomizableText
                    className='font-old text-center text-3xl sm:text-5xl text-zinc-800 mb-20'
                    html={getItemContent('bestValues')}
                    onClick={()=>handleEditClick('bestValues')}
                />
                <div className='grid  grid-cols-1 md:grid-cols-3 w-[90%] gap-8'>
                    {/* First Card */}
                    <div className='w-full scale-75 aspect-[4/5] rounded border-zinc-300 border-[2px] grid grid-cols-8 grid-rows-8'>
                        <div className='col-span-8 flex border-zinc-300 items-center justify-center font-bold text-xl row-span-1 border-b'>
                            <CustomizableText
                                className='text-xl font-bold'
                                html={getItemContent('smallRoomTitle1')}
                                onClick={()=>handleEditClick('smallRoomTitle1')}
                            />
                        </div>
                        <div className='col-span-8 border-zinc-300 row-span-2 border-b text-7xl font-semibold flex items-center justify-center h-full'>
                            <div className='h-min border-zinc-300 flex w-min items-end'>
                                <p className='text-lg font-semibold text-zinc-500 self-start'>$</p>
                                <CustomizableText
                                    className='text-7xl font-semibold'
                                    html={getItemContent('smallRoomPrice1')}
                                    onClick={()=>handleEditClick('smallRoomPrice1')}
                                />
                                <p className='text-lg h-full align-baseline text-zinc-500 '>day</p>

                            </div>
                        </div>
                        <div className='col-span-1 border-zinc-300 row-span-1 border-b border-r flex items-center justify-center'>
                            <FaCheck className='self-center justify-self-center text-secondary' />
                        </div>
                        <div className='col-span-7 border-zinc-300 row-span-1 border-b flex items-center pl-4 text-xl font-semibold'>
                            <CustomizableText
                                className='text-xl font-semibold'
                                html={getItemContent('freeWifi1')}
                                onClick={()=>handleEditClick('freeWifi1')}
                            />
                        </div>
                        <div className='col-span-1 border-zinc-300 row-span-1 border-b border-r flex items-center justify-center'>
                            <FaCheck className='self-center justify-self-center text-secondary' />
                        </div>
                        <div className='col-span-7 border-zinc-300 row-span-1 border-b flex items-center pl-4 text-xl font-semibold'>
                            <CustomizableText
                                className='text-xl font-semibold'
                                html={getItemContent('greatSeaView1')}
                                onClick={()=>handleEditClick('greatSeaView1')}
                            />
                        </div>
                        <div className='col-span-1 border-zinc-300 row-span-1 border-b border-r flex items-center justify-center'>
                            <FaCheck className='self-center justify-self-center text-secondary' />
                        </div>
                        <div className='col-span-7 border-zinc-300 row-span-1 border-b flex items-center pl-4 text-xl font-semibold'>
                            <CustomizableText
                                className='text-xl font-semibold'
                                html={getItemContent('homeMadeFood1')}
                                onClick={()=>handleEditClick('homeMadeFood1')}
                            />
                        </div>
                        <div className='col-span-1 border-zinc-300 row-span-1 border-b border-r flex items-center justify-center'>
                            <FaCheck className='self-center justify-self-center text-secondary' />
                        </div>
                        <div className='col-span-7 border-zinc-300 row-span-1 border-b flex items-center pl-4 text-xl font-semibold'>
                            <CustomizableText
                                className='text-xl font-semibold'
                                html={getItemContent('roomShare1')}
                                onClick={()=>handleEditClick('roomShare1')}
                            />
                        </div>
                        <div className='col-span-1 border-zinc-300 row-span-1 border-b border-r flex items-center justify-center'>
                            <FaCheck className='self-center justify-self-center text-secondary' />
                        </div>
                        <div className='col-span-7 border-zinc-300 row-span-1 border-b flex items-center pl-4 text-xl font-semibold'>
                            <CustomizableText
                                className='text-xl font-semibold'
                                html={getItemContent('acBathtub1')}
                                onClick={()=>handleEditClick('acBathtub1')}
                            />
                        </div>
                    </div>

                    {/* Second Card */}
                    <div className='w-full scale-90 aspect-[4/5] rounded border-zinc-300 border-[2px] grid grid-cols-8 grid-rows-8'>
                        <div className='col-span-8 flex border-zinc-300 items-center justify-center font-bold text-xl row-span-1 border-b'>
                            <CustomizableText
                                className='text-xl font-bold'
                                html={getItemContent('smallRoomTitle2')}
                                onClick={()=>handleEditClick('smallRoomTitle2')}
                            />
                        </div>
                        <div className='col-span-8 border-zinc-300 row-span-2 border-b text-7xl font-semibold flex items-center justify-center h-full'>
                            <div className='h-min border-zinc-300 flex w-min items-end'>
                                <p className='text-lg font-semibold text-zinc-500 self-start'>$</p>
                                <CustomizableText
                                    className='text-7xl font-semibold'
                                    html={getItemContent('smallRoomPrice2')}
                                    onClick={()=>handleEditClick('smallRoomPrice2')}
                                />
                                <p className='text-lg h-full align-baseline text-zinc-500 '>day</p>

                            </div>
                        </div>
                        <div className='col-span-1 border-zinc-300 row-span-1 border-b border-r flex items-center justify-center'>
                            <FaCheck className='self-center justify-self-center text-secondary' />
                        </div>
                        <div className='col-span-7 border-zinc-300 row-span-1 border-b flex items-center pl-4 text-xl font-semibold'>
                            <CustomizableText
                                className='text-xl font-semibold'
                                html={getItemContent('freeWifi2')}
                                onClick={()=>handleEditClick('freeWifi2')}
                            />
                        </div>
                        <div className='col-span-1 border-zinc-300 row-span-1 border-b border-r flex items-center justify-center'>
                            <FaCheck className='self-center justify-self-center text-secondary' />
                        </div>
                        <div className='col-span-7 border-zinc-300 row-span-1 border-b flex items-center pl-4 text-xl font-semibold'>
                            <CustomizableText
                                className='text-xl font-semibold'
                                html={getItemContent('greatSeaView2')}
                                onClick={()=>handleEditClick('greatSeaView2')}
                            />
                        </div>
                        <div className='col-span-1 border-zinc-300 row-span-1 border-b border-r flex items-center justify-center'>
                            <FaCheck className='self-center justify-self-center text-secondary' />
                        </div>
                        <div className='col-span-7 border-zinc-300 row-span-1 border-b flex items-center pl-4 text-xl font-semibold'>
                            <CustomizableText
                                className='text-xl font-semibold'
                                html={getItemContent('homeMadeFood2')}
                                onClick={()=>handleEditClick('homeMadeFood2')}
                            />
                        </div>
                        <div className='col-span-1 border-zinc-300 row-span-1 border-b border-r flex items-center justify-center'>
                            <FaCheck className='self-center justify-self-center text-secondary' />
                        </div>
                        <div className='col-span-7 border-zinc-300 row-span-1 border-b flex items-center pl-4 text-xl font-semibold'>
                            <CustomizableText
                                className='text-xl font-semibold'
                                html={getItemContent('roomShare2')}
                                onClick={()=>handleEditClick('roomShare2')}
                            />
                        </div>
                        <div className='col-span-1 border-zinc-300 row-span-1 border-b border-r flex items-center justify-center'>
                            <FaCheck className='self-center justify-self-center text-secondary' />
                        </div>
                        <div className='col-span-7 border-zinc-300 row-span-1 border-b flex items-center pl-4 text-xl font-semibold'>
                            <CustomizableText
                                className='text-xl font-semibold'
                                html={getItemContent('acBathtub2')}
                                onClick={()=>handleEditClick('acBathtub2')}
                            />
                        </div>
                    </div>

                    {/* Third Card */}
                    <div className='w-full scale-75 aspect-[4/5] rounded border-zinc-300 border-[2px] grid grid-cols-8 grid-rows-8'>
                        <div className='col-span-8 flex border-zinc-300 items-center justify-center font-bold text-xl row-span-1 border-b'>
                            <CustomizableText
                                className='text-xl font-bold'
                                html={getItemContent('roomTitle3')}
                                onClick={()=>handleEditClick('roomTitle3')}
                            />
                        </div>
                        <div className='col-span-8 border-zinc-300 row-span-2 border-b text-7xl font-semibold flex items-center justify-center h-full'>
                            <div className='h-min border-zinc-300 flex w-min items-end'>
                                <p className='text-lg font-semibold text-zinc-500 self-start'>$</p>
                                <CustomizableText
                                    className='text-7xl font-semibold'
                                    html={getItemContent('roomPrice3')}
                                    onClick={()=>handleEditClick('roomPrice3')}
                                />
                                <p className='text-lg h-full align-baseline text-zinc-500 '>day</p>

                            </div>
                        </div>
                        <div className='col-span-1 border-zinc-300 row-span-1 border-b border-r flex items-center justify-center'>
                            <FaCheck className='self-center justify-self-center text-secondary' />
                        </div>
                        <div className='col-span-7 border-zinc-300 row-span-1 border-b flex items-center pl-4 text-xl font-semibold'>
                            <CustomizableText
                                className='text-xl font-semibold'
                                html={getItemContent('freeWifi3')}
                                onClick={()=>handleEditClick('freeWifi3')}
                            />
                        </div>
                        <div className='col-span-1 border-zinc-300 row-span-1 border-b border-r flex items-center justify-center'>
                            <FaCheck className='self-center justify-self-center text-secondary' />
                        </div>
                        <div className='col-span-7 border-zinc-300 row-span-1 border-b flex items-center pl-4 text-xl font-semibold'>
                            <CustomizableText
                                className='text-xl font-semibold'
                                html={getItemContent('greatSeaView3')}
                                onClick={()=>handleEditClick('greatSeaView3')}
                            />
                        </div>
                        <div className='col-span-1 border-zinc-300 row-span-1 border-b border-r flex items-center justify-center'>
                            <FaCheck className='self-center justify-self-center text-secondary' />
                        </div>
                        <div className='col-span-7 border-zinc-300 row-span-1 border-b flex items-center pl-4 text-xl font-semibold'>
                            <CustomizableText
                                className='text-xl font-semibold'
                                html={getItemContent('homeMadeFood3')}
                                onClick={()=>handleEditClick('homeMadeFood3')}
                            />
                        </div>
                        <div className='col-span-1 border-zinc-300 row-span-1 border-b border-r flex items-center justify-center'>
                            <FaCheck className='self-center justify-self-center text-secondary' />
                        </div>
                        <div className='col-span-7 border-zinc-300 row-span-1 border-b flex items-center pl-4 text-xl font-semibold'>
                            <CustomizableText
                                className='text-xl font-semibold'
                                html={getItemContent('roomShare3')}
                                onClick={()=>handleEditClick('roomShare3')}
                            />
                        </div>
                        <div className='col-span-1 border-zinc-300 row-span-1 border-b border-r flex items-center justify-center'>
                            <FaCheck className='self-center justify-self-center text-secondary' />
                        </div>
                        <div className='col-span-7 border-zinc-300 row-span-1 border-b flex items-center pl-4 text-xl font-semibold'>
                            <CustomizableText
                                className='text-xl font-semibold'
                                html={getItemContent('acBathtub3')}
                                onClick={()=>handleEditClick('acBathtub3')}
                            />
                        </div>
                    </div>

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
