import { Route, Routes } from "react-router-dom";
import RegisterEmp from "./Components/RegisterEmp";
import Home from "./Components/Home";

function App() {
    return (
     
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path="/empsignup" element={<RegisterEmp/>}/>
            </Routes>
        
    );

}

export default App;
