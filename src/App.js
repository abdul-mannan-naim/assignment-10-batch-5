import './App.css';
import Heading from './Components/Heading/Heading';
import { Route, Routes } from 'react-router';
import Home from './Components/Pages/Home/Home';
import Footer from './Components/Footer/Footer';
import Features from './Components/Features/Features';
import Pricing from './Components/Pricing/Pricing';
import Login from './Components/Security/Login/Login';
import SignUp from './Components/Security/SignUp/SignUp';
import RequireAuth from './Components/Security/RequireAuth/RequireAuth';

function App() {
  return (
    <div >
      <Heading></Heading>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/features/:featuresId' element={<RequireAuth><Features></Features></RequireAuth>}></Route>
        <Route path='/pricing' element={<RequireAuth><Pricing></Pricing></RequireAuth>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
      <Footer></Footer>


    </div>
  );
}

export default App;
