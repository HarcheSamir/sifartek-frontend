import React, { useState, useEffect } from 'react';
import { FaCheck } from "react-icons/fa";
import CustomizableText from '../../../components/CustomizableText';
import useContentStore from '../../../stores/contentStore';
import ContentEditor from '../../../components/ContentEditor';
export default function Best() {
    const { content, fetchContent, editContent } = useContentStore();
    const [isEditing, setIsEditing] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const contentItems = [
        { key: 'whatsUp', label: "What's Up", type: 'text', defaultValue: "What's Up" },
        { key: 'bestValues', label: 'Best Values', type: 'text', defaultValue: 'Best Values' },
        { key: 'smallRoomTitle1', label: 'Small Room Title 1', type: 'text', defaultValue: 'Small Room 1' },
        { key: 'smallRoomPrice1', label: 'Small Room Price 1', type: 'text', defaultValue: '10' },
        { key: 'freeWifi1', label: 'Free Wifi 1', type: 'text', defaultValue: 'Free Wifi' },
        { key: 'greatSeaView1', label: 'Great Sea View 1', type: 'text', defaultValue: 'Great Sea View' },
        { key: 'homeMadeFood1', label: 'Home-made Food 1', type: 'text', defaultValue: 'Home-made Food' },
        { key: 'roomShare1', label: 'Room Share 1', type: 'text', defaultValue: 'Room Share' },
        { key: 'acBathtub1', label: 'AC & Bathtub 1', type: 'text', defaultValue: 'AC & Bathtub' },
        { key: 'smallRoomTitle2', label: 'Small Room Title 2', type: 'text', defaultValue: 'Small Room 2' },
        { key: 'smallRoomPrice2', label: 'Small Room Price 2', type: 'text', defaultValue: '15' },
        { key: 'freeWifi2', label: 'Free Wifi 2', type: 'text', defaultValue: 'Free Wifi' },
        { key: 'greatSeaView2', label: 'Great Sea View 2', type: 'text', defaultValue: 'Great Sea View' },
        { key: 'homeMadeFood2', label: 'Home-made Food 2', type: 'text', defaultValue: 'Home-made Food' },
        { key: 'roomShare2', label: 'Room Share 2', type: 'text', defaultValue: 'Room Share' },
        { key: 'acBathtub2', label: 'AC & Bathtub 2', type: 'text', defaultValue: 'AC & Bathtub' },
        { key: "roomTitle3", "label": "Room Title 3", "type": "text", "defaultValue": "Room Title 3" },
        { key: "roomPrice3", "label": "Room Price 3", "type": "text", "defaultValue": "27" },
        { key: "freeWifi3", "label": "Free Wifi 3", "type": "text", "defaultValue": "Free Wifi" },
        { key: "greatSeaView3", "label": "Great Sea View 3", "type": "text", "defaultValue": "Great Sea View" },
        { key: "homeMadeFood3", "label": "Home-made Food 3", "type": "text", "defaultValue": "Home-made Food" },
        { key: "roomShare3", "label": "Room Share 3", "type": "text", "defaultValue": "Room Share" },
        { key: "acBathtub3", "label": "AC & Bathtub 3", "type": "text", "defaultValue": "AC & Bathtub" }
    ]
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
                    onClick={() => handleEditClick(contentItems.find(i => i.key === 'whatsUp'))}
                />
                <CustomizableText
                    className='font-old text-center text-3xl sm:text-5xl text-zinc-800 mb-20'
                    html={getItemContent('bestValues')}
                    onClick={() => handleEditClick(contentItems.find(i => i.key === 'bestValues'))}
                />
                <div className='grid grid-cols-1 md:grid-cols-3 w-[90%] gap-8'>
                    {/* First Card */}
                    <div className='w-full aspect-[4/5] rounded border-zinc-300 border-[2px] grid grid-cols-8 grid-rows-8'>
                        <div className='col-span-8 flex border-zinc-300 items-center justify-center font-bold text-xl row-span-1 border-b'>
                            <CustomizableText
                                className='text-xl font-bold'
                                html={getItemContent('smallRoomTitle1')}
                                onClick={() => handleEditClick(contentItems.find(i => i.key === 'smallRoomTitle1'))}
                            />
                        </div>
                        <div className='col-span-8 border-zinc-300 row-span-2 border-b text-7xl font-semibold flex items-center justify-center h-full'>
                            <div className='h-min border-zinc-300 flex w-min items-end'>
                                <p className='text-lg font-semibold text-zinc-500 self-start'>$</p>
                                <CustomizableText
                                    className='text-7xl font-semibold'
                                    html={getItemContent('smallRoomPrice1')}
                                    onClick={() => handleEditClick(contentItems.find(i => i.key === 'smallRoomPrice1'))}
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
                                onClick={() => handleEditClick(contentItems.find(i => i.key === 'freeWifi1'))}
                            />
                        </div>
                        <div className='col-span-1 border-zinc-300 row-span-1 border-b border-r flex items-center justify-center'>
                            <FaCheck className='self-center justify-self-center text-secondary' />
                        </div>
                        <div className='col-span-7 border-zinc-300 row-span-1 border-b flex items-center pl-4 text-xl font-semibold'>
                            <CustomizableText
                                className='text-xl font-semibold'
                                html={getItemContent('greatSeaView1')}
                                onClick={() => handleEditClick(contentItems.find(i => i.key === 'greatSeaView1'))}
                            />
                        </div>
                        <div className='col-span-1 border-zinc-300 row-span-1 border-b border-r flex items-center justify-center'>
                            <FaCheck className='self-center justify-self-center text-secondary' />
                        </div>
                        <div className='col-span-7 border-zinc-300 row-span-1 border-b flex items-center pl-4 text-xl font-semibold'>
                            <CustomizableText
                                className='text-xl font-semibold'
                                html={getItemContent('homeMadeFood1')}
                                onClick={() => handleEditClick(contentItems.find(i => i.key === 'homeMadeFood1'))}
                            />
                        </div>
                        <div className='col-span-1 border-zinc-300 row-span-1 border-b border-r flex items-center justify-center'>
                            <FaCheck className='self-center justify-self-center text-secondary' />
                        </div>
                        <div className='col-span-7 border-zinc-300 row-span-1 border-b flex items-center pl-4 text-xl font-semibold'>
                            <CustomizableText
                                className='text-xl font-semibold'
                                html={getItemContent('roomShare1')}
                                onClick={() => handleEditClick(contentItems.find(i => i.key === 'roomShare1'))}
                            />
                        </div>
                        <div className='col-span-1 border-zinc-300 row-span-1 border-b border-r flex items-center justify-center'>
                            <FaCheck className='self-center justify-self-center text-secondary' />
                        </div>
                        <div className='col-span-7 border-zinc-300 row-span-1 border-b flex items-center pl-4 text-xl font-semibold'>
                            <CustomizableText
                                className='text-xl font-semibold'
                                html={getItemContent('acBathtub1')}
                                onClick={() => handleEditClick(contentItems.find(i => i.key === 'acBathtub1'))}
                            />
                        </div>
                    </div>

                    {/* Second Card */}
                    <div className='w-full aspect-[4/5] rounded border-zinc-300 border-[2px] grid grid-cols-8 grid-rows-8'>
                        <div className='col-span-8 flex border-zinc-300 items-center justify-center font-bold text-xl row-span-1 border-b'>
                            <CustomizableText
                                className='text-xl font-bold'
                                html={getItemContent('smallRoomTitle2')}
                                onClick={() => handleEditClick(contentItems.find(i => i.key === 'smallRoomTitle2'))}
                            />
                        </div>
                        <div className='col-span-8 border-zinc-300 row-span-2 border-b text-7xl font-semibold flex items-center justify-center h-full'>
                            <div className='h-min border-zinc-300 flex w-min items-end'>
                                <p className='text-lg font-semibold text-zinc-500 self-start'>$</p>
                                <CustomizableText
                                    className='text-7xl font-semibold'
                                    html={getItemContent('smallRoomPrice2')}
                                    onClick={() => handleEditClick(contentItems.find(i => i.key === 'smallRoomPrice2'))}
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
                                onClick={() => handleEditClick(contentItems.find(i => i.key === 'freeWifi2'))}
                            />
                        </div>
                        <div className='col-span-1 border-zinc-300 row-span-1 border-b border-r flex items-center justify-center'>
                            <FaCheck className='self-center justify-self-center text-secondary' />
                        </div>
                        <div className='col-span-7 border-zinc-300 row-span-1 border-b flex items-center pl-4 text-xl font-semibold'>
                            <CustomizableText
                                className='text-xl font-semibold'
                                html={getItemContent('greatSeaView2')}
                                onClick={() => handleEditClick(contentItems.find(i => i.key === 'greatSeaView2'))}
                            />
                        </div>
                        <div className='col-span-1 border-zinc-300 row-span-1 border-b border-r flex items-center justify-center'>
                            <FaCheck className='self-center justify-self-center text-secondary' />
                        </div>
                        <div className='col-span-7 border-zinc-300 row-span-1 border-b flex items-center pl-4 text-xl font-semibold'>
                            <CustomizableText
                                className='text-xl font-semibold'
                                html={getItemContent('homeMadeFood2')}
                                onClick={() => handleEditClick(contentItems.find(i => i.key === 'homeMadeFood2'))}
                            />
                        </div>
                        <div className='col-span-1 border-zinc-300 row-span-1 border-b border-r flex items-center justify-center'>
                            <FaCheck className='self-center justify-self-center text-secondary' />
                        </div>
                        <div className='col-span-7 border-zinc-300 row-span-1 border-b flex items-center pl-4 text-xl font-semibold'>
                            <CustomizableText
                                className='text-xl font-semibold'
                                html={getItemContent('roomShare2')}
                                onClick={() => handleEditClick(contentItems.find(i => i.key === 'roomShare2'))}
                            />
                        </div>
                        <div className='col-span-1 border-zinc-300 row-span-1 border-b border-r flex items-center justify-center'>
                            <FaCheck className='self-center justify-self-center text-secondary' />
                        </div>
                        <div className='col-span-7 border-zinc-300 row-span-1 border-b flex items-center pl-4 text-xl font-semibold'>
                            <CustomizableText
                                className='text-xl font-semibold'
                                html={getItemContent('acBathtub2')}
                                onClick={() => handleEditClick(contentItems.find(i => i.key === 'acBathtub2'))}
                            />
                        </div>
                    </div>

                    {/* Third Card */}
                    <div className='w-full aspect-[4/5] rounded border-zinc-300 border-[2px] grid grid-cols-8 grid-rows-8'>
                        <div className='col-span-8 flex border-zinc-300 items-center justify-center font-bold text-xl row-span-1 border-b'>
                            <CustomizableText
                                className='text-xl font-bold'
                                html={getItemContent('roomTitle3')}
                                onClick={() => handleEditClick(contentItems.find(i => i.key === 'roomTitle3'))}
                            />
                        </div>
                        <div className='col-span-8 border-zinc-300 row-span-2 border-b text-7xl font-semibold flex items-center justify-center h-full'>
                            <div className='h-min border-zinc-300 flex w-min items-end'>
                                <p className='text-lg font-semibold text-zinc-500 self-start'>$</p>
                                <CustomizableText
                                    className='text-7xl font-semibold'
                                    html={getItemContent('roomPrice3')}
                                    onClick={() => handleEditClick(contentItems.find(i => i.key === 'roomPrice3'))}
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
                                onClick={() => handleEditClick(contentItems.find(i => i.key === 'freeWifi3'))}
                            />
                        </div>
                        <div className='col-span-1 border-zinc-300 row-span-1 border-b border-r flex items-center justify-center'>
                            <FaCheck className='self-center justify-self-center text-secondary' />
                        </div>
                        <div className='col-span-7 border-zinc-300 row-span-1 border-b flex items-center pl-4 text-xl font-semibold'>
                            <CustomizableText
                                className='text-xl font-semibold'
                                html={getItemContent('greatSeaView3')}
                                onClick={() => handleEditClick(contentItems.find(i => i.key === 'greatSeaView3'))}
                            />
                        </div>
                        <div className='col-span-1 border-zinc-300 row-span-1 border-b border-r flex items-center justify-center'>
                            <FaCheck className='self-center justify-self-center text-secondary' />
                        </div>
                        <div className='col-span-7 border-zinc-300 row-span-1 border-b flex items-center pl-4 text-xl font-semibold'>
                            <CustomizableText
                                className='text-xl font-semibold'
                                html={getItemContent('homeMadeFood3')}
                                onClick={() => handleEditClick(contentItems.find(i => i.key === 'homeMadeFood3'))}
                            />
                        </div>
                        <div className='col-span-1 border-zinc-300 row-span-1 border-b border-r flex items-center justify-center'>
                            <FaCheck className='self-center justify-self-center text-secondary' />
                        </div>
                        <div className='col-span-7 border-zinc-300 row-span-1 border-b flex items-center pl-4 text-xl font-semibold'>
                            <CustomizableText
                                className='text-xl font-semibold'
                                html={getItemContent('roomShare3')}
                                onClick={() => handleEditClick(contentItems.find(i => i.key === 'roomShare3'))}
                            />
                        </div>
                        <div className='col-span-1 border-zinc-300 row-span-1 border-b border-r flex items-center justify-center'>
                            <FaCheck className='self-center justify-self-center text-secondary' />
                        </div>
                        <div className='col-span-7 border-zinc-300 row-span-1 border-b flex items-center pl-4 text-xl font-semibold'>
                            <CustomizableText
                                className='text-xl font-semibold'
                                html={getItemContent('acBathtub3')}
                                onClick={() => handleEditClick(contentItems.find(i => i.key === 'acBathtub3'))}
                            />
                        </div>
                    </div>

                </div>
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
