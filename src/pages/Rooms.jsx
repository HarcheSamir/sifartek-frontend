import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ParallaxBanner } from 'react-scroll-parallax';
import Navbar from '../layout/Navbar';
import useRoomStore from '../stores/roomStore'; // Import your store

export default function Rooms() {
    const navigate = useNavigate(); // Initialize useNavigate hook
    const { rooms, isLoading, error, fetchRooms } = useRoomStore((state) => ({
        rooms: state.rooms,
        isLoading: state.isLoading,
        error: state.error,
        fetchRooms: state.fetchRooms,
    }));

    useEffect(() => {
        fetchRooms(); // Fetch rooms when the component mounts
    }, [fetchRooms]);

    const handleRoomClick = (id) => {
        navigate(`/room/${id}`); // Navigate to the room detail page
    };

    return (
        <div className='w-full overflow-y-auto flex flex-col items-center'>
            <Navbar />

            <ParallaxBanner
                layers={[{
                    image: 'https://images.pexels.com/photos/12281853/pexels-photo-12281853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    speed: -50
                }]}
                className="h-[95vh] relative w-full object-scale-down"
            >
                <div className='h-full w-full bg-black opacity-50' />
                <div className='absolute w-full top-[60%] left-0 flex flex-col justify-center items-center text-white'>
                    <p className='font-thin text-lg'>Luxery City</p>
                    <p className='text-4xl text-center sm:text-7xl font-semibold font-lato mt-2'>AS YOUR HOST</p>
                </div>
            </ParallaxBanner>

            <div className='w-full max-w-[80rem] px-4 py-20 flex flex-col items-center'>
                <p className='font-lato text-zinc-800 text-6xl font-bold'>ROOMS</p>
                <img className='w-40 -mt-4' alt='' src='/assets/decor.svg' />
                <p className='text-lg mt-6 text-center w-[min(600px,80%)]'>
                    Our accessible suites offer this freedom through features that celebrate independence. Available in both studio and one-bedroom layouts, our accessible suites are equipped with all necessary.
                </p>

                <div className='w-[min(80rem,90%)] grid grid-cols-1 md:grid-cols-2 gap-6 mt-10'>
                    {isLoading ? (
                        <p>Loading...</p>
                    ) : error ? (
                        <p className='text-red-500'>{error}</p>
                    ) : (
                        rooms.map((room) => (
                            <div 
                                key={room.id} 
                                className='bg-white cursor-pointer shadow-lg rounded-lg border border-gray-200' 
                                onClick={() => handleRoomClick(room.id)} // Add onClick handler
                            >
                                {room.images && room.images.length > 0 ? (
                                    <img
                                        src={room.images[0].url}
                                        alt={`Room ${room.id}`}
                                        className='w-full h-48 object-cover rounded-t-lg'
                                    />
                                ) : (
                                    <div className='w-full h-48 bg-gray-200 rounded-t-lg flex items-center justify-center'>
                                        <p className='text-gray-500'>No image</p>
                                    </div>
                                )}

                                <div className='p-4'>
                                    <h3 className='font-bold text-lg mb-2'>{room.title}</h3>
                                    <p className='text-sm text-gray-600 mb-2'>{room.subtitle}</p>
                                    <p className='text-sm text-gray-700 mb-2 line-clamp-1'>{room.description}</p>
                                    <p className='text-lg font-semibold text-gray-900'>${room.price}</p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
