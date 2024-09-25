import "@fortawesome/fontawesome-free/css/all.min.css";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/Signup";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "./contexts/AuthContext";

const App = () => {
  const {user}=useContext(userContext);
  console.log("API Key: ",import.meta.env.VITE_API_KEY);
  // To Protect the Route
  const Protect=({children}:{children:React.ReactNode})=>{
    if(user.id==""){
     return <Navigate to={"/signin"}/>
    }
    return children;
  }

  // Routing with React Router Dom
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Protect><Home/></Protect>,
    },
    {
      path:"/signin",
      element:<SignIn/>
    },
    {
      path:"/signup",
      element:<SignUp/>
    }
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
