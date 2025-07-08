"use client"
import React, { ReactNode } from 'react';
import { Gift, CalendarHeart, Cake } from 'lucide-react';


// type definition
type Person = {
  name: string;
  birthday: Date;
  event: string;
  icon: ReactNode;
};


//dummy data
const dummyPeople: Person[] = [
  {
    name: "Susu Temi",
    birthday: new Date(2025, 6, 20),
    event: "Birthday",
    icon: <Cake className="text-pink-500" />,
  },
  {
    name: "Sucholas ",
    birthday: new Date(2025, 6, 19),
    event: "Anniversary",
    icon: <CalendarHeart className="text-red-500" />,
  },
  {
    name: "Emily Wilson",
    birthday: new Date(2025, 6, 27),
    event: "Graduation",
    icon: <Gift className="text-green-500" />,
  },
  {
    name: "Marvellous Matthew",
    birthday: new Date(2025, 6, 27),
    event: "Graduation",
    icon: <Gift className="text-green-500" />,
  },
  {
    name: "Cole Nk",
    birthday: new Date(2025, 6, 27),
    event: "Graduation",
    icon: <CalendarHeart className="text-red-500" />,
  },
  {
    name: "Lilly Mos",
    birthday: new Date(2025, 6, 27),
    event: "Graduation",
    icon: <Gift className="text-green-500" />,
  },
];

const Upcoming = () => {
  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold mb-4">Upcoming Events</h2>

      {/* Scrollable container */}
      <div className="flex space-x-4 overflow-x-auto pb-2">
        {dummyPeople.map((person, index) => (
          <div
            key={index}
            className="min-w-[420px] flex-shrink-0 p-10 bg-gray-100 rounded-md shadow-sm"
          >
            <div className="flex justify-between items-center mb-2">
              <p className="font-medium">{person.name}</p>
              {person.icon}
            </div>
            <p className="text-sm text-gray-600">
              {person.event} on {person.birthday.toDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Upcoming;