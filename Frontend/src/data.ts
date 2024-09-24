import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import DiscountIcon from '@mui/icons-material/Discount';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import PeopleIcon from '@mui/icons-material/People';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import { CardType, sidebarType } from "./types";


export const cardData: CardType[] = [
  {
    title: "Total Revenues",
    value: "$2,129,430",
    icon: LocalAtmIcon,
    percentage:"+2.5%",
    color:"#9CD9A0"
  },
  {
    title: "Total Transactions",
    value: "1,520",
    icon: DiscountIcon ,
    percentage:"+1.7%",
    color:"#FFC973"
  },
  {
    title: "Total Likes",
    value: "9,721",
    icon: ThumbUpOffAltIcon,
    percentage:"+1.4%",
    color:"#E5B4B4"
  },
  {
    title: "Total Users",
    value: "9,721",
    icon: PeopleIcon,
    percentage:"+4.2%",
    color:"#A8AEE6"
  },
];


export const sidebarData:sidebarType[]=[
  {
    title:"Dashboard",
    link: "/dashboard",
    icon:PanoramaFishEyeIcon 
  },
  {
    title:"Transactions",
    link: "/transactions",
    icon: DiscountIcon
  },
  {
    title:"Schedule",
    link: "/schedule",
    icon: PendingActionsIcon
  },
  {
    title:"Users",
    link: "/users",
    icon: AccountCircleIcon
  },
  {
    title:"Settings",
    link: "/settings",
    icon: SettingsIcon
  }
]