"use client";
import React from "react";
import { Calendar } from "lucide-react";
import { BsPerson } from "react-icons/bs";

// Define type for Gift
type Gift = {
  item: string;
  dateGiven: string;
  recipient: string;
  occasion: string;
};

// Props for the modal
type ViewDetailsModalProps = {
  isOpen: boolean;
  onClose: () => void;
  person: {
    name: string;
    notes: string;
    relationship: string;
    birthday: Date;
    giftCount: number;
    giftHistory: Gift[];
    event: string;
  } | null;
};

const ViewDetailsModal = ({ isOpen, onClose, person }: ViewDetailsModalProps) => {
  if (!isOpen || !person) return null;

  return (
    <div className="fixed inset-0 bg-[#0f0e0e74] flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">

        <div className="flex items-center">
        <p className="text-xl text-gray-600 mr-4 bg-purple-100 rounded-full p-3"><BsPerson /></p>
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold">{person.name}</h3>
          <p className="text-gray-500"> {person.relationship}</p>
        </div>
      </div>
        <div className="border-[0.1px] border-gray-200 my-4"></div>
        <div className="flex items-center mb-5">
         <Calendar className="w-4 h-4 mr-2" />
        <p className="text-sm text-purple-600 mr-2">{person.event}:</p>
        <p className="text-sm text-gray-600 font-medium flex items-center">
          {person.birthday.toDateString()}
        </p>
        </div>
        <p><strong>Preference & Notes:</strong></p>
        <p className="bg-gray-50 p-3 text-sm rounded-lg">{person.notes}</p>
       
        {/* <p className="text-sm text-gray-700 my-3"><strong>Gift ideas</strong> ({person.giftCount}) </p> */}

       {person.giftHistory && person.giftHistory.length > 0 && (
  <div className="my-4 space-y-2">
    <h4 className="font-semibold text-sm mb-2">Gift History</h4>
    {person.giftHistory.map((gift, i) => (
      <div key={i} className="text-sm text-gray-600 bg-green-50 border border-green-200 p-3 rounded-lg">
        <p className="font-semibold text-gray-800 text-sm"> {gift.item}</p> {gift.occasion} on {new Date(gift.dateGiven).toDateString()}
      </div>
    ))}
  </div>
)}
        <div className="flex items-center justify-between gap-5">
        <button onClick={onClose} className="px-4 py-2 cursor-pointer bg-gray-300 rounded w-full">
          Cancel
        </button>
        <button className="px-4 py-2 bg-purple-500 text-white cursor-pointer rounded w-full">
          Save
        </button>
        </div>
      </div>
    </div>
  );
};

export default ViewDetailsModal;