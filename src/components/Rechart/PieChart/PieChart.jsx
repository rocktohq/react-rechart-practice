import PropTypes from 'prop-types';
import { PieChart as PChart, Pie, Tooltip } from 'recharts';

export default function PieChart({ data }) {
  return (
    <div className="border-2 p-5 rounded-md shadow-lg">
      <div className="flex justify-center">
        <PChart width={300} height={300}>
          <Pie data={data} dataKey="price" cx="50%" cy="50%" outerRadius={50} fill="#8884d8"></Pie>
          <Pie data={data} dataKey="price" cx="50%" cy="50%" innerRadius={50} outerRadius={70} fill="#82ca9d" label></Pie>
          <Tooltip></Tooltip>
        </PChart>
      </div>
      <h2 className="text-center text-3xl font-bold">PieChart</h2>
    </div>
  )
}

PieChart.propTypes = {
  data: PropTypes.array
}