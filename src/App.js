
import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/Aboutus'
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import CheckOut from './Pages/CheckOut/CheckOut';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';

function App() {
  return (
    <div >
    <Header></Header>
     <Routes>
       <Route path="/" element={<Home></Home>}></Route>
       <Route path="/home" element={<Home></Home>}></Route>
       <Route path="/service/:serviceId" element={<ServiceDetail></ServiceDetail>}></Route>
       <Route path="/about" element={<About></About>}></Route>
       <Route path="/about" element={<About></About>}></Route>
       <Route path="/checkout" element={
            <RequireAuth>
              <CheckOut></CheckOut>
            </RequireAuth>
          }></Route>
       <Route path="/login" element={<Login></Login>}></Route>
       <Route path="/register" element={<Register></Register>}></Route>
     </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
