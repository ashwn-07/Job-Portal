import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import RegisterEmp from "./Components/RegisterEmp";
import RegisterUser from "./Components/RegisterUser";

function App() {
    return (
     
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path="/empsignup" element={<RegisterEmp/>}/>
               <Route path="/login" element={<Login/>}/>
               <Route path="/usersignup" element={<RegisterUser/>}/>
            </Routes>
        
    );

}

export default App;
