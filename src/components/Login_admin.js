import { Link } from "react-router-dom";
import fashion_level from "./images/fashion_level.png";

import "./header.css";
function Login_admin() {
  return (
    <div>
      <div className="">
        <div className="max-w-[400px] md:max-w-[750px] m-auto h-[100vh] flex md:p-10">
        <div className="w-[350px] hidden  h-full bg-black md:flex items-center justify-center text-center">
          <div>
            <div className="max-w-[300px]">
                <img src={fashion_level} className="w-full"/>
            </div>
          <h1 className="text-white text-[40px] font-medium">Fashion Level</h1>
          </div>
        </div>
        <div className="w-[400px] h-full md:border flex items-center">
          <form className="p-[50px] w-full">
            <div>
              <label className="block text-[15px] font-normal text-[#232323]">User Name</label>
              <input type="text" name="" className="border w-full h-[40px] outline-none px-3"/>
            </div>
            <div className="mt-5">
              <label className="block text-[15px] font-normal text-[#232323]">Password</label>
              <input type="password" name="" className="border w-full h-[40px] outline-none px-3"/>
            </div>
            <div className="mt-10">
              <input type="submit" value="Login" className="h-[40px] bg-black text-white w-full"/>
            </div>
            <div className="text-center mt-10">
              <p className="text-[#656B72]">Don't have an account?  <Link to="/signup_admin" className="text-[#232323] font-bold">Sign up</Link></p>
            </div>
          </form>
        </div>
        </div>
      </div>
    </div>
  );
}
export default Login_admin;
