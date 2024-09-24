import { Bar, Doughnut } from 'react-chartjs-2';
import { AiOutlineSearch, AiOutlineBell } from 'react-icons/ai';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, ArcElement } from 'chart.js';
import Card from '../components/Card';
import { cardData } from '../data';
import Sidebar from '../components/Sidebar';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, ArcElement);

const Home = () => {
  const barData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'User',
        data: [400, 300, 200, 400],
        backgroundColor: 'green',
      },
      {
        label: 'Guest',
        data: [300, 400, 100, 300],
        backgroundColor: 'red',
      },
    ],
  };

  const pieData = {
    labels: ['Basic Tees', 'Custom Short Pants', 'Super Hoodies'],
    datasets: [
      {
        data: [55, 31, 14],
        backgroundColor: ['green', 'yellow', 'red'],
      },
    ],
  };

  return (
    <div className='min-h-screen flex gap-10 p-5'>
     
     
      <Sidebar/>
     

      

      {/* Main content */}
      <div className=' flex-[80%] flex flex-col gap-4'>
        {/* Top section  */}
       <div className="flex item-center justify-between">
        <h1 className="font-bold text-2xl">Dashboard</h1>
        <div className="flex justify-center gap-5">
          <input type="text" placeholder="Search..."
          className="outline-none py-1 px-4 rounded-full"
          />
          <AiOutlineBell/>
        </div>
       </div>
      

        {/* Stats Cards */}
        <div className='flex justify-between gap-3  '>
         {cardData.map((data) => {
            return <Card data={data}/>
         })}
        </div>
        {/* Charts */}
        <div className="h-[400px] w-full">

                <Bar data={barData} style={{width:"100%", height:"150px"}} />
        </div>
             
          {/* <Grid item xs={4}>
            <Card>
              <CardContent>
                <Typography>Top Products</Typography>
                <Doughnut data={pieData} />
              </CardContent>
            </Card>
          </Grid> */}
       
       </div>
       {/* </div> */}
    </div>
  );
};

export default Home;
