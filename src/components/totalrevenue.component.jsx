import React from 'react'
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"
const data = [
    { time: "08:00", value: 20 },
    { time: "09:00", value: 28 },
    { time: "10:00", value: 22 },
    { time: "11:00", value: 29 },
    { time: "12:00", value: 21 },
    { time: "13:00", value: 30 },
    { time: "14:00", value: 25 },
]

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-2">
                <p className="text-sm font-medium text-gray-600">{`Time: ${label}`}</p>
                <p className="text-sm font-bold text-purple-500">{`Revenue: $${payload[0].value.toFixed(2)}`}</p>
            </div>
        )
    }
    return null
}
const TotalRevenue = () => {
    return (
        <>
            <div className="bg-white p-6 rounded-lg shadow mb-6 h-full">
                <div class="flex items-center justify-between mb-4">
                    <div>
                        <h3 class="text-lg font-semibold">Today's Revenue</h3>
                        <p class="text-gray-500 text-sm">Lorem ipsum dolor sit amet</p>
                        <p class="text-2xl font-bold mt-2">$240.45</p>
                        <span class="text-green-500 text-sm">0.5% than last day</span>
                    </div>
                </div>


                <p className="text-sm text-gray-500 mb-4">Lorem ipsum dolor sit amet, consectetur</p>
                <div class="h-48 bg-gray-50 rounded-lg">
                    <div className="h-[200px] mt-4">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart
                                data={data}
                                margin={{
                                    top: 5,
                                    right: 10,
                                    left: 10,
                                    bottom: 0,
                                }}
                            >
                                <XAxis
                                    dataKey="time"
                                    tickLine={false}
                                    axisLine={false}
                                    tick={{ fontSize: 12, fill: '#6B7280' }}
                                    tickMargin={8}
                                />
                                <YAxis
                                    tickLine={false}
                                    axisLine={false}
                                    tick={{ fontSize: 12, fill: '#6B7280' }}
                                    tickMargin={8}
                                    domain={[18, 33]}
                                    ticks={[18, 21, 24, 27, 30, 33]}
                                />
                                <Tooltip content={<CustomTooltip />} />
                                <Area
                                    type="monotone"
                                    dataKey="value"
                                    stroke="#A855F7"
                                    fill="#A855F7"
                                    fillOpacity={0.2}
                                    strokeWidth={2}
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TotalRevenue