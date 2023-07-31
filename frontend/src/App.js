import { Route, Routes } from "react-router-dom";
import RegisterEmp from "./Components/RegisterEmp";
import Home from "./Components/Home";
import Empview from "./Components/Empview";
import Login from "./Components/Login";
import RegisterUser from "./Components/RegisterUser";
import Addposts from "./Components/Addposts";
import Main from "./Components/Main";
import ResponseTable from "./Components/ResponseTable";
import Alumniview from "./Components/Alumniview";
import Aboutus from "./Components/Aboutus";


function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/empsignup" element={<RegisterEmp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/usersignup" element={<RegisterUser />} />
            <Route path="/empview" element={<Main child={<Empview/>}/>}/>
            <Route path="/adminview" element={<Main child={<Empview/>}/>}/>
            <Route path="/addpost" element={<Main child={<Addposts method="post" data={{companyname:"",jobtitle:"", jobdesc:"",jobrequirements:"",eligibility:"",experience:"",salary:"",location:"",ExpiresAt:""}}/>}/>}/>
            <Route path="/responsetab" element={<ResponseTable/>}/>
            <Route path="/Alumniview" element={<Alumniview/>}/>
            <Route path="/empresview" element={<ResponseTable/>}/>
            <Route path="/aboutus" element={<Aboutus/>}/>

        </Routes>
    );
}

export default App;
