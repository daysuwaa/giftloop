import React, { ReactNode } from 'react';
import { Gift, Bell, PersonStanding, Check } from 'lucide-react';

// type definition
type StatsCardProps = {
  icon: ReactNode;
  label: string;
  count: number;
  bgClass: string;
};

const StatsCard = ({ icon, label, count, bgClass }: StatsCardProps) => {
  return (
    <div className={`${bgClass} p-9 shadow-md flex items-center justify-between rounded-md`}>
      <div>
        <p className="text-sm text-gray-700">{label}</p>
        <p className="text-xl font-bold">{count}</p>
      </div>
      <div className="text-gray-600">{icon}</div>
    </div>
  );
};
const Stats = () => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 mt-5 gap-6">
        <StatsCard icon={<Gift />} label="Gifts Logged" count={25} bgClass="bg-red-300" />
      <StatsCard icon={<Bell />} label="Reminders" count={14} bgClass="bg-yellow-200" />
      <StatsCard icon={<PersonStanding />} label="People Added" count={9} bgClass="bg-green-200" />
      <StatsCard icon={<Check />} label="Completed" count={9} bgClass="bg-blue-200" />
    </div>
  )
}

export default Stats