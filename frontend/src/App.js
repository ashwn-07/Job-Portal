import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import RegisterEmp from "./Components/RegisterEmp";
import Empview from "./Components/Empview";

function App() {
    return (
     
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path="/empsignup" element={<RegisterEmp/>}/>
                <Route path="/empview" element={<Empview/>}/>
            </Routes>
        
    );

}

export default App;
