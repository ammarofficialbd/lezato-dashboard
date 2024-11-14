
import { useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { MenuIcon, SearchIcon, BellIcon, MessageCircleIcon as MessageIcon, UserIcon, CogIcon, DropletIcon } from 'lucide-react'
import Sidebar from '../../common/Sidebar'
import Navbar from '../../common/Navbar'
import Card from '../../components/card.component'
import CustomerList from '../../components/customers.component'
import DeliveryMap from '../../components/deliverymap.component'
import CustomerChart from '../../components/customermap.component'
import TrendingKeywords from '../../components/trending.component'
import TotalRevenue from '../../components/totalrevenue.component'
import MenuItem from '../../components/menu.component'

const revenueData = [
  { time: '08:00', value: 20 },
  { time: '09:00', value: 30 },
  { time: '10:00', value: 25 },
  { time: '11:00', value: 35 },
  { time: '12:00', value: 30 },
  { time: '13:00', value: 32 },
  { time: '14:00', value: 28 },
]



export default function Dashboard() {

  const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}

      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}

        <Navbar setSidebarOpen={setSidebarOpen} />
        {/* Dashboard Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
          <div className="mb-6 flex items-center justify-between">
            <h1 className="text-3xl font-semibold">Dashboard</h1>
            <div className="text-sm breadcrumbs">
              <span className="text-purple-500">Dashboard</span> / Dashboard
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">

            <Card title={'Total Menus'} icon={<svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
            </svg>} amount={'459'} />
            <Card title={'Total Revenue'} icon={<svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>} amount={'$87,561'} />
            <Card title={'Total Orders'} icon={<svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>} amount={'247'} />
            <Card title={'Total Customers'} icon={<svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>} amount={'872'} />

          </div>

          
      

          {/* Trending Menus and Customer Map */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-6">
            {/* Revenue Chart */}
            <TotalRevenue/>

            <MenuItem/>
            <div className='md:col-span-2 lg:col-span-2 xl:col-span-1'>
            <CustomerChart />
            </div>
          </div>

          {/* customers and Delivery Map */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            <TrendingKeywords />
            <CustomerList />
            <div className='md:col-span-2 lg:col-span-2 xl:col-span-1'>
              <DeliveryMap />
            </div>

          </div>
        </main>
      </div>
    </div>
  )
}