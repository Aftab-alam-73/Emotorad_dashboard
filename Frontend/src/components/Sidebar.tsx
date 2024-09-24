import { sidebarData } from "../data";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  return <div className="flex-[20%] text-white bg-blue-400 flex rounded-xl flex-col justify-between pl-10 py-10">
    <div className="flex flex-col gap-10 item-center justify-center">
        <h1 className="font-extrabold text-3xl">Board.</h1>
        <div className="flex flex-col   gap-5">
        {
            sidebarData.map((data)=>{
                return <SidebarItem data={data} key={data.title}/>
            })
        }
        </div>
    </div>
    <div className="text-white  font-light">
        <p>Hello</p>
        <p>Contact us</p>
    </div>
    </div>;
};

export default Sidebar;
