import { Route,Routes } from 'react-router-dom';
import Login_seller from './components/Login_seller';
import Signup_seller from './components/Signup_seller';
import Login_admin from './components/Login_admin';
import Dashboard_admin_header from './components/Dashboard_admin_header';
import Evaluation from './components/Evaluation';
import Dashboard_seller from './components/Dashboard_seller';
import Dashboard from './components/Dashboard';
import OrderDetail_processing from './components/OrderDetail_processing';
import All_staff from './components/All_staff';
import ReturnRequest from './components/ReturnRequest';
import Return from './components/Return';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login_seller/>}></Route>
        <Route path='/signup_seller' element={<Signup_seller/>}></Route>
        <Route path='/login_admin' element={<Login_admin/>}></Route>
        <Route path='/dashboard_admin_header' element={<Dashboard_admin_header/>}></Route>
        <Route path='/evaluation' element={<Evaluation/>}></Route>
        <Route path='/dashboard_seller' element={<Dashboard_seller/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/OrderDetail_processing' element={<OrderDetail_processing/>}></Route>
        <Route path='/allstaff' element={<All_staff/>}></Route>
        <Route path='/returnrequest' element={<ReturnRequest/>}></Route>
        <Route path='/return' element={<Return/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
