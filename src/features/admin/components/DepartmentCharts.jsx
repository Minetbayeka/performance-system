import React from 'react'
import {

  Tooltip,
  Legend,
  CartesianGrid,
  BarChart,
  Bar,
  XAxis,
  YAxis,

 
} from 'recharts';

const DepartmentCharts = () => {

    const data = [
  {
    "name": "FrontEnd Dev",
    "Average score": 15,
    "Number of interns": 75
    
  },
  {
    "name": "BackEnd Dev",
     "Average score": 15,
     "Number of interns": 75
  },
  {
    "name": "Product Design",
     "Average score": 15,
    "Number of interns": 75
  },
  {
    "name": "Data Science",
     "Average score": 15,
    "Number of interns": 75
  },
  {
    "name": "Mobile Dev",
   "Average score": 15,
    "Number of interns": 75
  },

]
  return (
    <div>
  <BarChart width={630} height={250} data={data}>
  {/* <CartesianGrid strokeDasharray="3 3" /> */}
  <XAxis dataKey="name" />
  <YAxis type="number" domain={[0, 100]} allowDataOverflow />
  <Tooltip />
  <Legend verticalAlign='top' />
  <Bar dataKey="Number of interns" fill="#475467" />
  <Bar dataKey="Average score" fill="#E4E7EC" />
</BarChart>
    </div>
  )
}

export default DepartmentCharts








                            
