import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Supervisor Grade', current: 9.5, max: 10 },
  { name: 'Concentration', current: 8, max: 10 },
  { name: 'Monday meetings', current: 7, max: 10 },
  { name: 'Saturday sessions', current: 6, max: 10 },
  { name: 'Log book submission', current: 6, max: 10 },
  { name: 'T-shirt compliance', current: 5, max: 10 },
  { name: 'Cleaning schedule', current: 4, max: 10 },
  { name: 'Dress code', current: 3, max: 10 },
];

export default function WeeklyChart() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Weekly Performance Summary</h2>
       <div className="mt-4 text-end text-lg">
        <strong>Overall Performance: </strong>25% <span className="text-red-500">Bad</span>
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart 
          data={data}
          layout="vertical"
          margin={{ top: 20, right: 30, left: 100, bottom: 20 }}
        >
          <XAxis type="number" domain={[0, 10]} />
          <YAxis dataKey="name" type="category" />
          <Tooltip />
          <Legend verticalAlign='top'  />
          <Bar dataKey="max" fill="#e0e0e0" name="Maximum possible impact" />
          <Bar dataKey="current" fill="#475467" name="Current Impact" />
        </BarChart>
      </ResponsiveContainer>
     
    </div>
  );
}

