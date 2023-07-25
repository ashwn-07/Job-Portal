import { Route, Routes } from "react-router-dom";
import RegisterEmp from "./Components/RegisterEmp";
import Home from "./Components/Home";

import Empview from "./Components/Empview";
import Login from "./Components/Login";

import RegisterUser from "./Components/RegisterUser";
import Addposts from "./Components/Addposts";
import Alumniview from "./Components/Alumniview";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/empsignup" element={<RegisterEmp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/usersignup" element={<RegisterUser />} />
            <Route path="/empview" element={<Empview/>}/>
            <Route path="/addpost" element={<Addposts/>}/>
            <Route path="/alumniview" element={<Alumniview/>}/>
        </Routes>
    );
}

export default App;
