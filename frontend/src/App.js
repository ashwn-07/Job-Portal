import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Empview from "./Components/Empview";
import Login from "./Components/Login";
import Addposts from "./Components/Addposts";
import Main from "./Components/Main";
import ResponseTable from "./Components/ResponseTable";
import Alumniview from "./Components/Alumniview";
import Aboutus from "./Components/Aboutus";
import Footer from "./Components/Footer";
import SignUP from "./Components/SignUP";
import Pagenotfound404 from "./Components/Pagenotfound404";




function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<SignUP />} />
                <Route path="/login" element={<Login />} />
                <Route path="/empview" element={<Main child={<Empview />} />} />
                <Route path="/adminview" element={<Main child={<Empview />} />} />
                <Route
                    path="/addpost"
                    element={
                        <Main
                            child={
                                <Addposts
                                    method="post"
                                    data={{
                                        companyname: "",
                                        jobtitle: "",
                                        jobdesc: "",
                                        jobrequirements: "",
                                        eligibility: "",
                                        experience: "",
                                        salary: "",
                                        location: "",
                                        ExpiresAt: "",
                                    }}
                                />
                            }
                        />
                    }
                />
                <Route path="/responsetab" element={<ResponseTable />} />
                <Route path="/Alumniview" element={<Alumniview />} />
                <Route path="/empresview" element={<ResponseTable />} />
                <Route path="/about-us" element={<Aboutus/>} />
                <Route path="*" element={<Pagenotfound404/>} />
            </Routes>
            <Footer />
        </>


    );
}

export default App;
