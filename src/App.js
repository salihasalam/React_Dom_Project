import {Routes,Route} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Blogs from "./pages/Blogs";
import Contacts from "./pages/Contacts";
import Gallery from "./pages/Gallery";
import Error from "./pages/Error";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Learn_more from "./pages/Learn_more";
import Get_start from "./pages/Get_start";

function App() {
  return (
    <div className="">
      <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/blogs" element={<Blogs/>}/>
      <Route path="/contacts" element={<Contacts/>}/>
      <Route path="/gallery" element={<Gallery/>}/>
      <Route path="*" element={<Error/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/learn_more" element={<Learn_more/>}/> 
      <Route path="/get_start" element={<Get_start/>}/> 
      </Routes>
    </div>

  );
}

export default App;
