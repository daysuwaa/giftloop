"use client";
import React from "react";

type AddPersonModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const AddPersonModal = ({ isOpen, onClose }: AddPersonModalProps) => {
  if (!isOpen) return null;

  return (
   <div className="fixed inset-0bg-[#0f0e0e74] flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-md shadow-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Add New Person</h2>

        <form>
        <label className="block text-sm font-medium pb-2 text-gray-700">Full Name</label>
          <input type="text" placeholder="Name" className="w-full mb-2 p-2 border rounded border-gray-400" />
            <label className="block text-sm font-medium pb-2 text-gray-700">Birthday</label>
          <input type="date" className="w-full mb-2 p-2 border rounded border-gray-400" />
            <label className="block text-sm font-medium pb-2 text-gray-700">Event</label>
          <input type="text" placeholder="Event" className="w-full mb-2 p-2 border rounded border-gray-400" />
          <label className="block text-sm font-medium pb-2 text-gray-700">Relationship</label>
           <input type="text" placeholder="e.g., Sister, Best Friend, Colleague" className="w-full mb-2 p-2 border rounded border-gray-400" />
           <label className="block text-sm font-medium pb-2 text-gray-700">Notes</label>
           <textarea
            placeholder="What do they like? Hobbies, interests, dislikes..."
            className="w-full mb-2 p-2 border rounded border-gray-400 h-24"
          ></textarea>
        </form>

        <div className="flex justify-end gap-4 mt-6">
          <button onClick={onClose} className="px-4 py-2 cursor-pointer bg-gray-300 rounded border-gray-400 w-full">
            Cancel
          </button>
          <button className="px-4 py-2 bg-purple-500 cursor-pointer text-white rounded w-full">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPersonModal;