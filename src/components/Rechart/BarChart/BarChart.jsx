import { BarChart as BChart, Bar, Tooltip, XAxis, YAxis } from "recharts";
import PropTypes from 'prop-types';


export default function BarChart({ data }) {

  return (
    <div className="border-2 p-5 rounded-md shadow-lg">
      <BChart width={300} height={300} data={data}>
        <Bar dataKey="price" fill="#8884d8" />
        <Tooltip></Tooltip>
        <XAxis dataKey="name"></XAxis>
        <YAxis dataKey="price"></YAxis>
      </BChart>
      <h2 className="text-center text-3xl font-bold">BarChart</h2>
    </div>
  )
}

BarChart.propTypes = {
  data: PropTypes.array
}