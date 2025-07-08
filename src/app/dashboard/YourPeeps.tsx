import React  from 'react'
import { BiSolidRightArrowAlt } from 'react-icons/bi';


type Personcard = {
    name: string,
    birthday : Date,
    giftcount: number,

};

const dummyPeople: Personcard[] = [
   {
    name: "Adesuwa Wale",
    birthday: new Date(2025, 6, 20),
    giftcount: 2,
   
  },
   {
    name: " Jaden",
    birthday: new Date(2025, 6, 20),
    giftcount: 2,
   
  },
   {
    name: "Daniel Semilore",
    birthday: new Date(2025, 6, 20),
    giftcount: 0,
   
  },
   {
    name: "Angie Seyi",
    birthday: new Date(2025, 6, 20),
    giftcount: 1,
   
  },
   {
    name: "Loto Felix",
    birthday: new Date(2025, 6, 20),
    giftcount: 4,
   
  },
]
const YourPeeps = () => {
  return (
    <div className='mt-8 bg-yellow-50 border-2 border-yellow-200 rounded-xl p-5'>
        <div className="mt-6">
      <h2 className="text-lg font-semibold mb-4"> 🎉 Upcoming birthdays</h2>
      <div className="space-y-4">
        {dummyPeople.map((person, index) => (
          <div key={index} className="flex items-center justify-between p-4 bg-gray-100 rounded-md">
            <div>
              <p className="font-semibold text-sm border border-dashed rounded-full px-3">{person.name}</p>
             
              <p className="text-sm text-gray-600">{person.giftcount} gifts</p>
              <a href='/people' className='flex items-center cursor-pointer'>View   <BiSolidRightArrowAlt/></a>
           
            </div>
             <p className="text-sm text-gray-600"> {person.birthday.toDateString()}</p>
           
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default YourPeeps