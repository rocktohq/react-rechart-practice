import { Bar, BarChart, LineChart as LChart, Line, Tooltip, XAxis, YAxis } from 'recharts';
import PropTypes from 'prop-types';

const LineChart = ({ data }) => {

  return (
    <div className="border-2 p-5 rounded-md shadow-lg">
      <LChart width={300} height={300} data={data}>
        <Line type="monotone" dataKey="price" stroke="gray" />
        <Tooltip></Tooltip>
        <XAxis dataKey="name"></XAxis>
        <YAxis dataKey="price"></YAxis>
        <BarChart width={150} height={40} data={data}>
          <Bar dataKey="price" fill="#8884d8" />
        </BarChart>
      </LChart>
      <h2 className="text-center text-3xl font-bold">LineChart</h2>
    </div>
  )
}

export default LineChart;

LineChart.propTypes = {
  data: PropTypes.array
}