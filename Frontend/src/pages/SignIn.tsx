import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../contexts/AuthContext";
import { app } from "../firebase";
import { makeRequest } from "../axios";

const SignIn = () => {
  const navigate=useNavigate();
  const {setUser}=useContext(userContext);
  const [userData,setUserData]=useState({password:'',email:''})

  const handleSingin=async(e:any)=>{
    e.preventDefault();
    const {data}=await makeRequest.post<{success:boolean,message:string , data:any}>("/auth/signin",userData);
    // Redirect to dashboard page if successful.
    if(data?.success){
      setUser({id:data?.data?._id,name:data?.data.name,email:data?.data.email})
      navigate('/');
    }
  }
  // SignIn with Google functionality
  const siginInWithGoogle=()=>{
    console.log("google credentials")
    const auth=getAuth(app);
    auth.languageCode = 'it';
    const provider=new GoogleAuthProvider();
    signInWithPopup(auth,provider).then(async(result:any)=>{
     // make api request to server with the recived credentials
    const payload={
      name:result.user.displayName,
      email:result.user.email,
      profile:result.user.photoURL
    }
    
    const {data}=await makeRequest.post<{success:boolean,data:any}>("/auth/login/google",payload);
     if(data?.success){
      setUser({id:data?.data?._id,name:data?.data.name,email:data?.data.email})
      navigate('/')
     }
    }).catch((error:any)=>{
      console.log("error: ",error);
    })
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex max-w-5xl w-full bg-white shadow-lg">
        
        {/* Left section with tilted background from top wide to bottom right narrow */}
        <div className="relative w-1/2 overflow-hidden">
          <div className="absolute inset-0 bg-indigo-500 skew-x-[-10deg] transform origin-top-left">
            <div className="flex flex-col justify-center items-center h-full skew-x-[10deg] transform">
              <div className="text-4xl font-bold text-white">BASE</div>
            </div>
          </div>
          <div className="absolute bottom-4 left-1/4 flex justify-center space-x-6 ">
            {/* Social media icons */}
            <a href="#" className="text-white text-2xl">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" className="text-white text-2xl">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white text-2xl">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="text-white text-2xl">
              <i className="fab fa-discord"></i>
            </a>
          </div>
        </div>

        {/* Right section with sign-in form */}
        <div className="w-1/2 p-8">
          <h2 className="text-3xl font-bold mb-6">Sign In</h2>
          <p className="mb-4">Sign in to your account</p>

          {/* Sign in with Google and Apple buttons */}
          <div className="flex space-x-4 mb-6">
            <button onClick={siginInWithGoogle} className="flex-1 flex gap-5 bg-gray-200 py-2 px-4 rounded hover:bg-gray-300">
              <img className='' src="./Google_logo.svg" alt="" /> Sign in with Google
            </button>
            <button className="flex-1 bg-gray-200 py-2 px-4 rounded hover:bg-gray-300">
              <i className="fab fa-apple mr-2"></i> Sign in with Apple
            </button>
          </div>

          {/* Email and Password form */}
          <div className="mb-4">
            <label className="block text-gray-700">Email address</label>
            <input
              onChange={(e)=>setUserData({...userData, email: e.target.value})}
              type="email"
              placeholder="johndoe@gmail.com"
              className="w-full px-4 py-2 mt-1 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              onChange={(e)=>setUserData({...userData,password: e.target.value})}
              type="password"
              placeholder="********"
              className="w-full px-4 py-2 mt-1 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="flex justify-between items-center mb-6">
            <a href="#" className="text-indigo-500 hover:underline">
              Forgot password?
            </a>
          </div>

          <button onClick={handleSingin} className="w-full bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600">
            Sign In
          </button>

          <p className="mt-4 text-center">
            Don’t have an account?{' '}
            <a href="/signup" className="text-indigo-500 hover:underline">
              Register here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
