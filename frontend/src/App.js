import { Route, Routes } from "react-router-dom";

import Homepage from "./components/Homepage";
import Movies from "./components/Movies/Movies";
import Admin from "./components/Admin/Admin";
import Auth from "./components/Auth/Auth";
import Header from "./components/Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { adminActions, userActions } from "./store";
import UserProfile from "./Profile/UserProfile";



function App() {
  const dispatch=useDispatch();
  const isAdminLoggedIn=useSelector((state)=>state.admin.isLoggedIn);
  const isUserLoggedIn=useSelector((state)=>state.user.isLoggedIn);

  console.log("isAdminLoggedIn", isAdminLoggedIn);
  console.log("isUserLoggedIn", isUserLoggedIn);

  useEffect(()=>{
      if(localStorage.getItem("userId")){
        dispatch(userActions.login());
      }else if(localStorage.getItem("adminId")){
        dispatch(adminActions.login());
      }
  },)
  return ( <div>
  <Header/>
  <section>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/user" element={<UserProfile />} />

  
    </Routes>
  </section>
    
  </div>
  );
}

export default App;
