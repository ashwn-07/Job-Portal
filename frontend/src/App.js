import { Route, Routes } from "react-router-dom";
import RegisterEmp from "./Components/RegisterEmp";
import Home from "./Components/Home";

import Empview from "./Components/Empview";
import Login from "./Components/Login";

import RegisterUser from "./Components/RegisterUser";
import Adminview from "./Components/Adminview";
import Addposts from "./Components/Addposts";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/empsignup" element={<RegisterEmp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/usersignup" element={<RegisterUser />} />
            <Route path="/empview" element={<Empview/>}/>
            <Route path="/adminview" element={<Adminview/>} />
            <Route path="/addpost" element={<Addposts/>}/>
        </Routes>
    );
}

export default App;
