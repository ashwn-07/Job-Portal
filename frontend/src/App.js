import { Route, Routes } from "react-router-dom";
import RegisterEmp from "./Components/RegisterEmp";
import Home from "./Components/Home";

import Empview from "./Components/Empview";
import Login from "./Components/Login";

import RegisterUser from "./Components/RegisterUser";
import Adminview from "./Components/Adminview";
import Addposts from "./Components/Addposts";
import Main from "./Components/Main";
import ResponseTable from "./Components/ResponseTable";
import AdminMain from "./Components/AdminMain";
import Alumniview from "./Components/Alumniview";
function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/empsignup" element={<RegisterEmp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/usersignup" element={<RegisterUser />} />
            <Route path="/empview" element={<Main child={<Empview/>}/>}/>
            <Route path="/adminview" element={<AdminMain child={<Adminview/>}/>} />
            <Route path="/addpost" element={<Main child={<Addposts method="post" data={{companyname:"",jobtitle:"", jobdesc:"",jobrequirements:"",eligibility:"",experience:"",salary:"",location:"",ExpiresAt:""}}/>}/>}/>
            <Route path="/responsetab" element={<ResponseTable/>}/>
            <Route path="/Alumniview" element={<Alumniview/>}/>
        </Routes>
    );
}

export default App;
