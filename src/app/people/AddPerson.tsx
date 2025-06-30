"use client";
import React, { useState } from "react";
import { Plus } from "lucide-react";
import AddPersonModal from "./AddPersonModal"; 

const AddPerson = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      {/* Header with Add Button */}
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-2xl font-semibold">Person Details</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex ml-auto bg-purple-400 px-3 py-2 rounded-lg text-sm items-center cursor-pointer"
        >
          Add Person <Plus className="ml-2 h-5 w-5" />
        </button>
      </div>

      {/* Modal */}
      <AddPersonModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default AddPerson;