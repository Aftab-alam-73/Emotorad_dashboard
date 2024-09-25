import { createContext, useState } from "react"

export const userContext=createContext<any>(null);

export const AuthProvider = ({children}:{children:React.ReactNode}) => {
    const [user,setUser]=useState({name:"",id:"",email:""})
  return (
    <userContext.Provider value={{user,setUser}}>
     {children}
    </userContext.Provider>
  )
}

