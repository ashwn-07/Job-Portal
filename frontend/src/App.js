import logo from './logo.svg';
import './App.css';
import{BrowserRouter, Route, Routes,  } from 'react-router-dom'
import RegisterEmp from './Components/RegisterEmp';


function App() {

  return (
    <div className="App">
   <BrowserRouter>
   <Routes>
    <Route path="/empsignup" element={<RegisterEmp/>}/>
   </Routes>
   
   </BrowserRouter>
    </div>
  );
}

export default App;
