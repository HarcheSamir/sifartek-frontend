import React, { useEffect, useState } from 'react';
import useRoomStore from '../stores/roomStore';
import RoomForm from '../forms/RoomForm';
import { MdDeleteOutline } from 'react-icons/md';

export default function AdminRooms() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [page, setPage] = useState(1);
  const pageSize = 10; // Define the number of rooms per page

  const { rooms, isLoading, totalRooms, fetchRooms, deleteRoom } = useRoomStore((state) => ({
    rooms: state.rooms,
    isLoading: state.isLoading,
    totalRooms: state.totalRooms,
    fetchRooms: state.fetchRooms,
    deleteRoom: state.deleteRoom,
  }));

  useEffect(() => {
    fetchRooms(page, pageSize);
  }, [page, pageSize, fetchRooms]);

  const handleNextPage = () => {
    if (!isLastPage()) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => setPage((prevPage) => Math.max(prevPage - 1, 1));

  const isLastPage = () => {
    return page * pageSize >= totalRooms; // Check if current page is the last page
  };

  const handleDeleteRoom = async (id) => {
    try {
      await deleteRoom(id);
      fetchRooms(page, pageSize); // Optionally, refetch the rooms to ensure the UI is updated
    } catch (error) {
      console.error('Error deleting room:', error);
      // Optionally, show an error toast or message here
    }
  };

  return (
    <div className='w-full h-full overflow-auto pb-[20rem]'>
      <div className='w-full flex items-center py-4'>
        <p className='font-bold text-xl text-zinc-600 pl-8'>Rooms</p>
        <div
          className='px-4 py-3 ml-auto bg-secondary hover:bg-secondaryHovered mr-4 text-xs cursor-pointer'
          onClick={() => setModalOpen(true)}
        >
          Add Room
        </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-8 mt-4'>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          rooms.map((room) => (
            <div key={room.id} className='bg-white relative cursor-pointer p-4 shadow-lg rounded-lg border border-gray-200'>
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
                {/* Display price */}
                <p className='text-lg font-semibold text-gray-900'>${room.price}</p>
              </div>
              <MdDeleteOutline
                className='absolute -top-4 -right-4 z-50 h-8 w-8 text-red-500 hover:scale-110 duration-300 bg-white shadow-sm rounded-full cursor-pointer'
                onClick={() => handleDeleteRoom(room.id)}
              />
            </div>
          ))
        )}
      </div>

      <div className='flex justify-between items-center mt-4 px-8'>
        <button
          onClick={handlePreviousPage}
          disabled={page === 1}
          className='px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded disabled:bg-gray-200'
        >
          Previous
        </button>
        <span className='text-sm'>Page {page}</span>
        <button
          onClick={handleNextPage}
          disabled={isLastPage()} // Disable if it's the last page
          className='px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded disabled:bg-gray-200'
        >
          Next
        </button>
      </div>

      <RoomForm isModalOpen={isModalOpen} setModalOpen={setModalOpen} />
    </div>
  );
}
