import './App.css';
// import HomePage from './Components/Homepage';

  import SignUp from './Component/SignUp';
 import {Routes, Route, BrowserRouter} from 'react-router-dom';
// import Dashboard from './Components/Dashboard';
// import EcommerceDashboard from './Redux/EcommerceDashboard';
import AdminLogin from './Component/AdminLogin';
import SideBar from './Component/SideBar';
import CombinedCharts from './Component/CombinedCharts';
import ViewEmployee from './Component/ViewEmployee';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
   <Routes>
    <Route path='/' element={<AdminLogin/>}/>
    <Route path='/Adminlogin' element={<AdminLogin/>}/>
    <Route path='/SideBar' element={<SideBar/>}/>
    <Route path="/SignUp" element={<SignUp/>}/>
    <Route path="/overview" element={<CombinedCharts/>}/>
    <Route path="/viewemployee" element={<ViewEmployee/>}/>
    </Routes>
    </BrowserRouter>
    </div>  
    );
  }
  export default App;


