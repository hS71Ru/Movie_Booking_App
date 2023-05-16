import { Route, Routes } from "react-router-dom";

import Homepage from "./components/Homepage";
import Movies from "./components/Movies/Movies";
import Admin from "./components/Admin/Admin";
import Auth from "./components/Auth/Auth";
import Header from "./components/Header";
import { useSelector } from "react-redux";



function App() {
  const isAdminLoggedIn=useSelector((state)=>state.admin.isLoggedIn);
  const isUserLoggedIn=useSelector((state)=>state.user.isLoggedIn);

  console.log("isAdminLoggedIn", isAdminLoggedIn);
  console.log("isUserLoggedIn", isUserLoggedIn);
  return ( <div>
  <Header/>
  <section>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/auth" element={<Auth />} />

  
    </Routes>
  </section>
    
  </div>
  );
}

export default App;
