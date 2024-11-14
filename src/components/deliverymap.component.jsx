import React from 'react'
import user1 from '../assets/user (1).jpg'
import user2 from '../assets/user (2).jpg'


const people = [
  { name: 'John Kusnaidi', items: 4, address: 'Franklin Avenue St. London, ABC 12345', country: 'United Kingdom', img: user2 },
  { name: 'Margaretha', items: 4, address: 'Groove Street Families, DEF 244125', country: 'United Kingdom', img:user1 },
/*   { name: 'Richard Lee', items: 4, address: 'Bossman St. 21444 ABC', country: 'United Kingdom' },
  { name: 'Margaretha', items: 4, address: 'Groove Street Families, DEF 244125', country: 'United Kingdom' }, */
]

const MapMarker = () => (
  <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
    </svg>
  </div>
)

export default function DeliveryMap() {
  return (

      <div className="bg-white rounded-lg shadow-lg max-w-full">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">Delivery Maps</h1>
            <button className="text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </button>
          </div>
          <p className="text-gray-600 mb-6">Lorem ipsum dolor sit amet, consectetur</p>
          
          <div className="flex items-center mb-6">
            <div className="bg-indigo-100 p-2 rounded-lg mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold">Upcoming Shipping Schedule</h2>
          </div>

          <ul className="space-y-4">
            {people.map((person, index) => (
              <li key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src={person.img}
                    alt={person.name}
                    width={48}
                    height={48}
                    className="rounded-full mr-4 W-12 h-12 object-cover"
                  />
                  <div>
                    <p className="font-semibold">{person.name} <span className="text-indigo-600">({person.items} Items)</span></p>
                    <p className="text-sm text-gray-500">Will be shipping on 11 : 24 AM</p>
                  </div>
                </div>
                <div className="text-right flex items-center">
                  <div className="mr-4">
                    <p className="text-sm">{person.address}</p>
                    <p className="text-sm text-gray-500">{person.country}</p>
                  </div>
                  <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                    <MapMarker />
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex justify-center">
            <button className="text-indigo-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
   
  )
}