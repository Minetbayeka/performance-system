import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { week: 'Week 1', score: 50 },
  { week: 'Week 2', score: 65 },
  { week: 'Week 3', score: 75 },
  { week: 'Week 4', score: 77 },
  { week: 'Week 5', score: 70 },
  { week: 'Week 6', score: 60 },
  { week: 'Week 7', score: 65 },
  { week: 'Week 8', score: 68 },
//   { week: 'Week 9', score: 80 },
//   { week: 'Week 10', score: 90 },
//   { week: 'Week 11', score: 70 },
//   { week: 'Week 12', score: 65 },
//   { week: 'Week 13', score: 70 },
];

export default function TrendAnalysisChart() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-2">Trend Analysis</h2>
      <p className="text-sm text-gray-500 mb-4">Average intern performance score trend over the past 14 weeks</p>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 10, right: 30, left: 20, bottom: 5 }}>
          {/* <CartesianGrid strokeDasharray="3 3" vertical={false} /> */}
          <XAxis dataKey="week" />
          <YAxis domain={[0, 100]} />
          <Tooltip />
          <Line type="monotone" dataKey="score" stroke="#000000" dot={{ fill: "#fff", stroke: "#000", r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
      {/* <p className="text-xs text-gray-500 mt-2">Showing last 13 weeks | Trend: +10-point improvement</p> */}
    </div>
  );
}





// import React from 'react'
// import { 
//     LineChart ,
//     CartesianGrid,
//     XAxis,
//     YAxis,
//     Tooltip,
//     Line,
//     Legend



// } from 'recharts'

// const TrendChart = () => {
//     const data = [
//   {
//     "name": "week 1",
//     "uv": 4000,
//     "pv": 2400,
//     "amt": 2400
//   },
//   {
//     "name": "week 2",
//     "uv": 3000,
//     "pv": 1398,
//     "amt": 2210
//   },
//   {
//     "name": "week 3",
//     "uv": 2000,
//     "pv": 9800,
//     "amt": 2290
//   },
//   {
//     "name": "week 4",
//     "uv": 2780,
//     "pv": 3908,
//     "amt": 2000
//   },
//   {
//     "name": "week 5",
//     "uv": 1890,
//     "pv": 4800,
//     "amt": 2181
//   },
//   {
//     "name": "week 6",
//     "uv": 2390,
//     "pv": 3800,
//     "amt": 2500
//   },
//   {
//     "name": "week 7",
//     "uv": 3490,
//     "pv": 4300,
//     "amt": 2100
//   }
// ]
//   return (
//     <div>
//  <LineChart width={730} height={250} data={data}
//   margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
//   <CartesianGrid strokeDasharray="3 3" />
//   <XAxis dataKey="name" />
//   <YAxis   type='number' domain={[0, 100]}  />
//   <Tooltip />
//   <Legend />
//   <Line type="monotone" dataKey="pv" stroke="#8884d8" />
//   <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
//   <Tooltip type="monotone" dataKey="uv" stroke="#82ca9d" />
// </LineChart> 
//     </div>
//   )
// }

// export default TrendChart





                            
