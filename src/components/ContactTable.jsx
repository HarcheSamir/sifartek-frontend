import React, { useEffect, useState } from "react";
import { formatDistanceToNow } from "date-fns";
import useContactStore from "../stores/contactStore";
import { ChevronLeftIcon, ChevronRightIcon, XIcon } from '@heroicons/react/solid';

const ContactTable = () => {
  const { contacts, isLoading, fetchContacts } = useContactStore();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedContacts, setSelectedContacts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    const loadContacts = async () => {
      const response = await fetchContacts(currentPage);

      if (response && response.data) {
        setTotalPages(response.data.totalPages);
      }
    };

    loadContacts();
  }, [currentPage]);

  const handlePageChange = (direction) => {
    if (direction === 'next' && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else if (direction === 'prev' && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSelectAll = () => {
    if (selectedContacts.length === contacts.length) {
      setSelectedContacts([]);
    } else {
      setSelectedContacts(contacts.map(contact => contact.id));
    }
  };

  const handleSelectContact = (id) => {
    if (selectedContacts.includes(id)) {
      setSelectedContacts(selectedContacts.filter(contactId => contactId !== id));
    } else {
      setSelectedContacts([...selectedContacts, id]);
    }
  };

  const isSelected = (id) => selectedContacts.includes(id);

  const openModal = (contact) => {
    setSelectedContact(contact);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedContact(null);
    setShowModal(false);
  };

  return (
    <div className="flex font-semibold font-roboto flex-col w-full p-4">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="border rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="py-3 ps-4">
                    <div className="flex items-center h-5">
                      <input
                        id="hs-table-checkbox-all"
                        type="checkbox"
                        className="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out rounded-full cursor-pointer hover:bg-blue-100"
                        checked={selectedContacts.length === contacts.length && contacts.length > 0}
                        onChange={handleSelectAll}
                      />
                      <label htmlFor="hs-table-checkbox-all" className="sr-only">
                        Select all
                      </label>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Subject
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Message
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {isLoading ? (
                  <tr>
                    <td colSpan="7" className="text-center py-12">
                      <span className="text-blue-600 animate-pulse text-lg font-semibold">
                        Loading...
                      </span>
                    </td>
                  </tr>
                ) : (
                  contacts.map((contact) => (
                    <tr
                      key={contact.id}
                      className="hover:bg-gray-100 cursor-pointer"
                      onClick={() => openModal(contact)}
                    >
                      <td className="py-3 ps-4">
                        <div className="flex items-center h-5">
                          <input
                            id={`hs-table-checkbox-${contact.id}`}
                            type="checkbox"
                            className="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out rounded-full cursor-pointer hover:bg-blue-100"
                            checked={isSelected(contact.id)}
                            onChange={() => handleSelectContact(contact.id)}
                            onClick={(e) => e.stopPropagation()} // Prevent row click when selecting checkbox
                          />
                          <label
                            htmlFor={`hs-table-checkbox-${contact.id}`}
                            className="sr-only"
                          >
                            Select contact
                          </label>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-700">
                        {contact.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {contact.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-xs  font-medium text-gray-700">
                        {contact.subject}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-xs font-medium text-gray-700">
                        {contact.message}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-xs  text-gray-700">
                        {formatDistanceToNow(new Date(contact.createdAt), { addSuffix: true })}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          type="button"
                          className="inline-flex items-center gap-x-2 text-sm font-bold rounded-lg text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 cursor-pointer"
                          onClick={(e) => {e.stopPropagation(); /* handle delete */}}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-6">
        <button
          className={`flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-full shadow-sm hover:bg-gray-50 transition ease-in-out duration-200 ${
            currentPage === 1 ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
          }`}
          onClick={() => handlePageChange('prev')}
          disabled={currentPage === 1}
        >
          <ChevronLeftIcon className="h-5 w-5 mr-2" />
          Previous
        </button>
        <span className="text-sm text-gray-500">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className={`flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-full shadow-sm hover:bg-gray-50 transition ease-in-out duration-200 ${
            currentPage === totalPages ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
          }`}
          onClick={() => handlePageChange('next')}
          disabled={currentPage === totalPages}
        >
          Next
          <ChevronRightIcon className="h-5 w-5 ml-2" />
        </button>
      </div>

      {/* Modal */}
      {showModal && selectedContact && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Contact Details</h2>
              <button onClick={closeModal}>
                <XIcon className="h-6 w-6 text-gray-600 hover:text-gray-800" />
              </button>
            </div>
            <div className="mb-4">
              <h3 className="text-gray-700 font-medium">Name:</h3>
              <p className="text-gray-900">{selectedContact.name}</p>
            </div>
            <div className="mb-4">
              <h3 className="text-gray-700 font-medium">Email:</h3>
              <p className="text-gray-900">{selectedContact.email}</p>
            </div>
            <div className="mb-4">
              <h3 className="text-gray-700 font-medium">Subject:</h3>
              <p className="text-gray-900">{selectedContact.subject}</p>
            </div>
            <div className="mb-4">
              <h3 className="text-gray-700 font-medium">Message:</h3>
              <p className="text-gray-900">{selectedContact.message}</p>
            </div>
            <div className="mb-4">
              <p className="text-gray-900 text-xs text-right">  
                {new Date(selectedContact.createdAt).toLocaleString()}
              </p>
            </div>
            <div className="flex justify-end">
              <button
                onClick={closeModal}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-full shadow-sm hover:bg-blue-700 transition ease-in-out duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactTable;
