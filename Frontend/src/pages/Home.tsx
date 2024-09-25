import { Bar, Doughnut } from "react-chartjs-2";
import { AiOutlineSearch, AiOutlineBell } from "react-icons/ai";
import AddIcon from '@mui/icons-material/Add';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  ArcElement,
} from "chart.js";
import Card from "../components/Card";
import { cardData } from "../data";
import Sidebar from "../components/Sidebar";
import User from "../components/User";


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, ArcElement);

const Home = () => {
  const barData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "User",
        data: [400, 300, 200, 400],
        backgroundColor: "#9CD9A0",
      },
      {
        label: "Guest",
        data: [300, 400, 100, 300],
        backgroundColor: "#F28888",
      },
    ],
  };

  const pieData = {
    labels: ["Basic Tees", "Custom Short Pants", "Super Hoodies"],
    datasets: [
      {
        data: [55, 31, 14],
        backgroundColor: ["#9CD9A0", "#F2D479", "#F28888"],
      },
    ],
  };

  return (
    <div className="min-h-screen flex gap-10 p-5">
      <Sidebar />

      {/* Main content */}
      <div className=" flex-[80%] flex flex-col gap-4">
        {/* Top section  */}
        <div className="flex item-center justify-between">
          <h1 className="font-bold text-2xl">Dashboard</h1>
          <div className="flex items-center gap-5">
            <div className="flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="outline-none flex-1 "
            />
            <AiOutlineSearch/>
            </div>
            <AiOutlineBell  />
            <User/>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="flex justify-between gap-1  ">
          {cardData.map((data) => {
            return <Card data={data} key={data.title}/>;
          })}
        </div>
        {/* Charts */}
        <div className=" shadow-lg border border-slate-300 p-3 rounded-lg space-y-3">
          <div className="flex justify-between">
            <div>
              <h1 className="font-bold">Activites</h1>
              <p>May-June 2024</p>
            </div>
            <div className="flex gap-6">
              <span className="flex gap-3 items-center">
                <span className="w-3 h-3 bg-[#F28888] rounded-full"></span>
                <p>Guest</p>
              </span>
              <span className="flex items-center gap-3">
                <span className="w-3 h-3 bg-[#9CD9A0] rounded-full"></span>
                <p>User</p>
              </span>
            </div>
          </div>
          <Bar data={barData} width={800} />
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col shadow-lg justify-center gap-4shadow border border-slate-300 w-[400px] p-3 rounded-2xl">
            {/* first */}
            <div className="flex items-center justify-between">
              <h1 className="font-extrabold text-[19px]">Top Products</h1>
              <p className="text-gray-500">May-june 2024</p>
            </div>
            {/* second */}
            <div className="flex items-center gap-10">
              <div className="max-h-[150px]">
                <Doughnut data={pieData} />
              </div>
              <div className="flex flex-col  gap-3">
                <div className="flex items-baseline gap-3">
                  <span className="w-3 h-3 rounded-full bg-[#9CD9A0]"></span>
                  <span className="flex flex-col ">
                    <h3 className="font-bold text-[15px]">Basic Tees</h3>
                    <p>55%</p>
                  </span>
                </div>

                <div className="flex items-baseline gap-3">
                  <span className="w-3 h-3 rounded-full bg-[#F2D479]"></span>
                  <span className="flex flex-col ">
                    <h3 className="font-bold text-[15px]">
                      Custom Short Pants
                    </h3>
                    <p>31%</p>
                  </span>
                </div>

                <div className="flex items-baseline gap-3">
                  <span className="w-3 h-3 rounded-full bg-[#F28888]"></span>
                  <span className="flex flex-col ">
                    <h3 className="font-bold text-[15px]">Super Hoodies</h3>
                    <p>14%</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col shadow-lg justify-center items-center gap-4shadow border border-slate-300 w-[400px] p-3 rounded-2xl">
           <div className="flex flex-col items-center justify-center gap-5">
             <div className="w-10  h-10 rounded-full flex items-center justify-center bg-gray-300">
            <AddIcon className=""/>

             </div>
             <p>Add Profile</p>
           </div>
              
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
