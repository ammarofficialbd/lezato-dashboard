import React from 'react'
import { customerData } from '../common/data';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const CustomerChart = () => {
  return (
   
         <section className="bg-white p-6 rounded-lg shadow h-full">
              <h2 className="text-xl font-semibold mb-4">Customer Map</h2>
              <p className="text-sm text-gray-500 mb-4">Lorem ipsum dolor sit amet, consectetur</p>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={customerData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#A855F7" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </section>
    
  )
}

export default CustomerChart