"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

export default function CostAnalysisChart() {
  const data = [
    {
      name: "Foundation",
      traditional: 45000,
      recommended: 42000,
    },
    {
      name: "Structure",
      traditional: 120000,
      recommended: 105000,
    },
    {
      name: "Exterior",
      traditional: 85000,
      recommended: 72000,
    },
    {
      name: "Interior",
      traditional: 95000,
      recommended: 82000,
    },
    {
      name: "MEP",
      traditional: 75000,
      recommended: 68000,
    },
  ]

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="traditional" name="Traditional Materials" fill="#8884d8" />
        <Bar dataKey="recommended" name="AI Recommended" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  )
}
