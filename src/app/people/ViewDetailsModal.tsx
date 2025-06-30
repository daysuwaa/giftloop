// ViewDetailsModal.tsx
"use client"
import React from 'react'
import { Calendar } from 'lucide-react'

type ViewDetailsModalProps = {
  isOpen: boolean,
  onClose: () => void,
  person: {
    name: string,
    relationship: string,
    birthday: Date,
    giftCount: number,
    event: string
  } | null;
};

const ViewDetailsModal = ({ isOpen, onClose, person }: ViewDetailsModalProps) => {
  if (!isOpen || !person) return null;

  return (
    <div className="fixed inset-0 bg-[#0f0e0e74] flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-2">{person.name}</h2>
        <p className="text-sm text-gray-600 mb-1">{person.relationship}</p>
        <p className="text-sm text-purple-600 mb-1">{person.event}</p>
        <p className="text-sm text-gray-600 flex items-center mb-3">
          <Calendar className="w-4 h-4 mr-2" />
          {person.birthday.toDateString()}
        </p>
        <p className="text-sm text-gray-700 mb-6">{person.giftCount} gift ideas</p>

        <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded w-full mb-2">
          Cancel
        </button>
        <button className="px-4 py-2 bg-purple-500 text-white rounded w-full">
          Save
        </button>
      </div>
    </div>
  );
};

export default ViewDetailsModal;