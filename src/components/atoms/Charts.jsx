import React from 'react';
import {

  PieChart, Pie,
  Cell,
  Tooltip,
  Legend
 
} from 'recharts';

const data = [
 
    {
        name:"Excellent",
        value:80,
        color:"#12B76A"
    },
    {
        name:"Perfect",
        value:40,
        color:"#F04438"
    },
    {
        name:"Fair",
        value:60,
        color:"#475467"
    },
       {
     name:"bad" ,
     value:60,
     color:"#E4E7EC"
       
    },

    {
        name:"Poor",
        value:60,
        color:"#E4E7EC"
    },
    {
        name:"Average",
        value:60,
        color:"#E4E7EC"
    },


]

const colors = data.map(entry=>entry.color)

const Charts = () =>{
    return(
        <div className='flex items-center justify-between gap-56'>
        <PieChart width={400} height={400}>
        <Pie
        data ={data}
        cx={200}
        cy={200}
        labelLine ={false}
        label={(entry)=>entry.name}
        outerRadius={80}
        fill='#8884d8'
        dataKey="value"
         startAngle={90}
         endAngle={-270} 
         paddingAngle={0} 
        >
        {data.map((entry, index)=>(
            <Cell key={`cell-${index}`} fill={colors[index]} />
        ))}
        </Pie>
        <Tooltip/>

        {/* <Legend verticalAlign='middle' layout="vertical" align='right' wrapperStyle={{ paddingLeft: 200 }} /> */}
        </PieChart>

        <div className="space-y-2">
            <h1 className='font-semibold'>Performance</h1>
        {data.map((entry, index) => (
          <div key={index} className="flex items-center mr-48">
            <div
              className="w-4 h-4 rounded"
              style={{ backgroundColor: entry.color }}
            />
            <span>{entry.name}</span>
          </div>
        ))}
      </div>
        </div>
    )
}
export default Charts
