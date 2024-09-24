import { useState } from "react";

const SignUp = () => {
  const [userData,setUserData]=useState({name:'',password:'',email:''})
  const handleSingup=async(e:any)=>{
    e.preventDefault();
    const response=await axios.post('http://localhost:8000/api/auth/signup',userData);
    console.log(response.data);
    // redirecting to dashboard page
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
          <h2 className="text-3xl font-bold mb-6">Sign UP</h2>
          <p className="mb-4">Sign in to your account</p>

          {/* Sign in with Google and Apple buttons */}
          <div className="flex space-x-4 mb-6">
            <button className="flex-1 flex gap-5 bg-gray-200 py-2 px-4 rounded hover:bg-gray-300">
              <img className='' src="./Google_logo.svg" alt="" /> Sign in with Google
            </button>
            <button className="flex-1 bg-gray-200 py-2 px-4 rounded hover:bg-gray-300">
              <i className="fab fa-apple mr-2"></i> Sign in with Apple
            </button>
          </div>

          {/* Name, Email and Password  */}
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              onChange={(e)=>setUserData({...userData, name: e.target.value})}
              type="text"
              placeholder="johndoe"
              className="w-full px-4 py-2 mt-1 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
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
              onChange={(e)=>setUserData({...userData, password: e.target.value})}
              type="password"
              placeholder="********"
              className="w-full px-4 py-2 mt-1 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          

          <button onClick={handleSingup} className="w-full bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600">
            Sign UP
          </button>

          <p className="mt-4 text-center">
            Do you have an account?{' '}
            <a href="#" className="text-indigo-500 hover:underline">
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
