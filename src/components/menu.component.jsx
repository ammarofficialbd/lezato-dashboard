import React from 'react'

import { items } from '../common/data';

const MenuItem = () => {
  return (
    
      <section className="bg-white p-6 rounded-lg shadow h-full">
        <h2 className="text-xl font-semibold mb-4">Daily Trending Menus</h2>
        <p className="text-sm text-gray-500 mb-4">Top popular items today</p>
        <ul className="space-y-4">
          {items.map((item) => (
            <li key={item.rank} className="flex items-center space-x-4">
              <span className="text-xl font-semibold text-gray-300">#{item.rank}</span>
              <div className="flex-1">
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-500">Order {item.orders}x</p>
              </div>
              <img src={item.imageUrl} alt={item.name} className="w-12 h-12 rounded-full object-cover" />
            </li>
          ))}
        </ul>
        <button className="mt-4 bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors"> View All </button>
         
      </section>
  
  );
};

export default MenuItem;
