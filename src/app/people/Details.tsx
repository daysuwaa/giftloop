// Details.tsx
"use client"
import React, { useState } from 'react';
import { Calendar, Edit, Trash } from 'lucide-react';
import { BsPerson } from 'react-icons/bs';
import ViewDetailsModal from './ViewDetailsModal';

type Person = {
  name: string;
  relationship: string;
  birthday: Date;
  giftCount: number;
  event: string;
};

type DetailsCardProps = Person & {
  onViewDetails: (person: Person) => void;
};

const DetailsCard = ({ name, relationship, birthday, giftCount, event, onViewDetails }: DetailsCardProps) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-7">
      <div className="flex items-center">
        <p className="text-xl text-gray-600 mr-4 bg-purple-100 rounded-full p-3"><BsPerson /></p>
        <div className='flex flex-col'>
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-gray-500"> {relationship}</p>
        </div>
        <div className='flex items-center mt-2 ml-auto justify-end'>
          <Edit className='text-blue-300 cursor-pointer hover:text-blue-500' />
          <Trash className='text-red-300 cursor-pointer hover:text-red-600 ml-3' />
        </div>
      </div>
      <div className='mt-3'>
        <p className='text-purple-800 cursor-pointer rounded-full py-1 text-xs px-3 w-fit bg-purple-300 mb-3'>{event}</p>
        <p className="text-gray-500 flex items-center"><Calendar className='mr-3 mb-2' /> {birthday.toDateString()}</p>
        <div className='flex items-center justify-between'>
          <p className="text-gray-500"> {giftCount} gift ideas</p>
          <button
            className='text-purple-500 cursor-pointer'
            onClick={() =>
              onViewDetails({ name, relationship, birthday, giftCount, event })
            }
          >
            View details
          </button>
        </div>
      </div>
    </div>
  );
};

const Details = () => {
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModalWithPerson = (person: Person) => {
    setSelectedPerson(person);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPerson(null);
    setIsModalOpen(false);
  };

  return (
    <div>
      <DetailsCard
        event="Birthday"
        name="Susu Temi"
        relationship="Friend"
        birthday={new Date(2025, 6, 20)}
        giftCount={2}
        onViewDetails={openModalWithPerson}
      />
      <DetailsCard
        event="Anniversary"
        name="Collins Ikotun"
        relationship="Brother"
        birthday={new Date(2025, 6, 19)}
        giftCount={1}
        onViewDetails={openModalWithPerson}
      />
      <DetailsCard
        event="Graduation"
        name="Jaden Smith"
        relationship="Boyfriend"
        birthday={new Date(2025, 6, 16)}
        giftCount={1}
        onViewDetails={openModalWithPerson}
      />
      <DetailsCard
        event="Birthday"
        name="Ella Mai"
        relationship="Bestfriend"
        birthday={new Date(2025, 5, 30)}
        giftCount={4}
        onViewDetails={openModalWithPerson}
      />

      {/* Modal that shows selected person */}
      <ViewDetailsModal isOpen={isModalOpen} onClose={closeModal} person={selectedPerson} />
    </div>
  );
};

export default Details;