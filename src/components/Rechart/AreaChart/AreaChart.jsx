import { AreaChart as AChart, Area, Tooltip, XAxis, YAxis } from "recharts";

export default function AreaChart() {

  const data = [
    { id: 1, name: 'Phone', price: -80000 },
    { id: 2, name: 'Laptop', price: 120000 },
    { id: 3, name: 'Desktop', price: -200000 },
    { id: 4, name: 'Bike', price: 250000 }
  ];

  const gradientOffset = () => {
    const dataMax = Math.max(...data.map((i) => i.price));
    const dataMin = Math.min(...data.map((i) => i.price));

    if (dataMax <= 0) return 0;
    if (dataMin >= 0) return 1;

    return dataMax / (dataMax - dataMin);
  };

  const off = gradientOffset();

  return (
    <div className="border-2 p-5 rounded-md shadow-lg">
      <AChart width={300} height={300} data={data}>
        <defs>
          <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
            <stop offset={off} stopColor="green" stopOpacity={1} />
            <stop offset={off} stopColor="red" stopOpacity={1} />
          </linearGradient>
        </defs>
        <Area dataKey="price" type="bump" stroke="gray" fill="url(#splitColor)"></Area>
        <XAxis dataKey="name"></XAxis>
        <YAxis dataKey="price"></YAxis>
        <Tooltip></Tooltip>
      </AChart>
      <h2 className="text-center text-3xl font-bold">AreaChart</h2>
    </div>
  )
}