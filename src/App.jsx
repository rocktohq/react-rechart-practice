import Header from "./components/Header/Header";
import AreaChart from "./components/Rechart/AreaChart/AreaChart";
import BarChart from "./components/Rechart/BarChart/BarChart";
import LineChart from "./components/Rechart/LineChart/LineChart";
import PieChart from "./components/Rechart/PieChart/PieChart";

export default function App() {

  const data = [
    { id: 1, name: 'Phone', price: 80000 },
    { id: 2, name: 'Laptop', price: 120000 },
    { id: 3, name: 'Desktop', price: 200000 },
    { id: 4, name: 'Bike', price: 250000 }
  ];


  return (
    <>
      <Header></Header>
      <main className="grid grid-cols-1 md:grid-cols-2 mx-auto max-w-screen-xl my-12 gap-10 px-2">
        <LineChart data={data}></LineChart>
        <BarChart data={data}></BarChart>
        <PieChart data={data}></PieChart>
        <AreaChart data={data}></AreaChart>
      </main>
    </>
  )
}
