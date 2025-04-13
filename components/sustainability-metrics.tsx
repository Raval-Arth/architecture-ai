"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"

export default function SustainabilityMetrics() {
  const data = [
    { name: "Renewable Materials", value: 65 },
    { name: "Recycled Content", value: 15 },
    { name: "Virgin Materials", value: 20 },
  ]

  const COLORS = ["#4ade80", "#60a5fa", "#f87171"]

  const energyData = [
    { name: "Energy Efficient", value: 75 },
    { name: "Standard Efficiency", value: 25 },
  ]

  const ENERGY_COLORS = ["#22c55e", "#ef4444"]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <h3 className="text-sm font-medium mb-2 text-center">Material Composition</h3>
        <ResponsiveContainer width="100%" height={180}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={80}
              paddingAngle={2}
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              labelLine={false}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2 text-center">Energy Efficiency</h3>
        <ResponsiveContainer width="100%" height={180}>
          <PieChart>
            <Pie
              data={energyData}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={80}
              paddingAngle={2}
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              labelLine={false}
            >
              {energyData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={ENERGY_COLORS[index % ENERGY_COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
