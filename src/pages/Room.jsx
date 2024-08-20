import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ParallaxBanner } from 'react-scroll-parallax';
import Navbar from '../layout/Navbar';
import RoomsGallery from '../components/RoomsGallery';
import ReservingComponent from '../components/ReservingComponents';
import useRoomStore from '../stores/roomStore';
export default function Room() {
  const { id } = useParams();
  const { room, fetchRoom, isLoading, error } = useRoomStore((state) => ({
    room: state.room,
    fetchRoom: state.fetchRoom,
    isLoading: state.isLoading,
    error: state.error
  }));

  useEffect(() => {
    fetchRoom(id);
  }, [fetchRoom, id]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!room) return <p>No room found</p>;

  return (
    <div className='w-full overflow-y-auto flex flex-col items-center'>
      <Navbar />
      <ParallaxBanner
        layers={[{
          image: room.images[0]?.url, // Use the first image URL for the banner
          speed: -50
        }]}
        className="h-[95vh] relative w-full object-cover flex flex-col items-center"
      >
        <div className='h-full backdiv w-full absolute top-0 left-0' />
        <div className='absolute z-10 bottom-0 text-white px-4 max-w-[80rem] w-full flex justify-between pb-12'>
          <p className='font-old sm:text-5xl text-2xl flex flex-col'>
            {room.title}
            <span className='font-lato text-sm font-light pl-1'>{room.subtitle}</span>
          </p>
          <p className='font-old sm:text-6xl text-4xl flex flex-col'>
            <span className='font-lato text-sm font-light pl-1'>Price Per Night</span>
            ${room.price}
          </p>
        </div>
      </ParallaxBanner>
      <div className='w-full max-w-[80rem] px-4 py-20 flex flex-col'>
        <div className='w-full flex-col sm:flex-row flex gap-4'>
          <div className='sm:w-[60%] w-full flex flex-col shrink-0'>
            <p className='w-full py-4 border-zinc-300 border-[1px] pl-6'>
              Little description
            </p>
            <p className='w-full py-4 border-t-0 border-zinc-300 border-[1px] pl-6'>
              {room.description}
            </p>
            <RoomsGallery images={room.images.map(img => img.url)} title="Gallery of Elegance" />
          </div>
          <div className='grow flex justify-center'>
            <ReservingComponent />
          </div>
        </div>
      </div>
    </div>
  );
}
