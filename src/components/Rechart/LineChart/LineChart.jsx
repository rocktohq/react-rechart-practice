import { LineChart as LChart, Line, Tooltip, XAxis, YAxis } from 'recharts';
import PropTypes from 'prop-types';

const LineChart = ({ data }) => {

  return (
    <div className="border-2 p-5 rounded-md shadow-lg">
      <LChart width={300} height={300} data={data}>
        <Line type="monotone" dataKey="price" stroke="gray" />
        <Tooltip></Tooltip>
        <XAxis dataKey="name"></XAxis>
        <YAxis dataKey="price"></YAxis>
      </LChart>
      <h2 className="text-center text-3xl font-bold">LineChart</h2>
    </div>
  )
}

export default LineChart;

LineChart.propTypes = {
  data: PropTypes.array
}