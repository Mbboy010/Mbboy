"use client";

import type { RootState } from '../../../components/redux/store';
import { useSelector } from 'react-redux';

const clients = [
  { id: 1, src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=761&auto=format&fit=crop&ixlib=rb-4.1.0", alt: "Client 1" },
  { id: 2, src: "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0", alt: "Client 2" },
  { id: 3, src: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0", alt: "Client 3" },
  { id: 4, src: "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0", alt: "Client 4" },
];

export default function RecentClients() {
  const isColor = useSelector((state: RootState) => state.color.value);

  return (
    <div className="w-full  flex items-center justify-center">
      <div
        className={`flex items-center justify-between w-[95%] p-5 rounded-lg shadow-lg ${
          isColor ? "bg-[#d7d7d719]" : "bg-[#72727236]"
        }`}
      >
        {/* Avatars */}
        <div className="flex -space-x-4">
          {clients.map((client) => (
            <div
              key={client.id}
              className="w-14 h-14 rounded-full overflow-hidden border-2 border-gray-600"
            >
              <img
                src={client.src}
                alt={client.alt}
                width={56}
                height={56}
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Text */}
        <div className="text-right">
          <p className="font-bold text-xl text-customPurple">44+</p>
          <p className="text-sm text-customWhite -mt-1">Recent clients</p>
        </div>
      </div>
    </div>
  );
}