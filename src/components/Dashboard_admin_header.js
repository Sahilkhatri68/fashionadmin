import { Link } from "react-router-dom";
import "./header.css";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from '@mui/icons-material/Menu';
import search from "./images/search.png";
import americanflag from "./images/american_flag.png";

export default function Dashboard_admin_header() {
  
  

  
  return (
    <div>
      <div className="flex h-[60px] items-center bg-[#262626] px-5 text-white justify-between">
        <div className="flex">
          <p className="text-[25px]">Fashion Level</p>
          <div className="lg:flex bg-white h-[40px] items-center rounded-full ml-6 px-4 hidden">
            <img src={search} className="h-[17px] w-[17px]" />
            <input
              type="text"
              placeholder="Search here"
              className="rounded-full placeholder:text-[#aaaaaa] text-[14px] ml-3 outline-none h-[30px] w-full text-[#aaaaaa]"
            />
          </div>
        </div>
        <div className="flex items-center">
          <div className="hidden lg:block">
            <div className="h-[17px] w-[17px] rounded-full border-white border-2 text-white bg-black relative top-[7px] left-[10px] z-10 leading-[12px] text-[8px] text-center">12</div>
            <NotificationsIcon className="h-[17px] w-[17px] text-[#A5A5A5] relative top-[-6px]" />
          </div>
          <div className="lg:flex mx-4 items-center border h-[40px] w-[200px] px-3 rounded-full hidden">
            <div classname="h-[20px] min-w-[20px]">
              <img
                src={americanflag}
                className="min-w-[20px] h-[20px] rounded-full"
              />
            </div>
            <select className="border  h-[36px] outline-none border-none px-3 w-full  bg-[#262626] text-[13px]">
              <option value="Clothing">ENGLISH</option>
              <option value="Accessories">Accessories</option>
              <option value="Bags">Bags</option>
              <option value="Sports Outfit">Sports Outfit</option>
              <option value="Shoes">Shoes</option>
            </select>
          </div>
          <div className="w-[1px] h-[40px] bg-white/50 mx-1 hidden lg:block"></div>
          <div className="ml-5 lg:flex items-center hidden">
            <div className="w-[40px] h-[40px] bg-[#C4C4C4] rounded-[8px]"></div>
            <div className="mx-2">
              <p className="p-0 text-[14px] font-semibold">Gareth Bale</p>
              <p className="text-[12px] text-[#8f8f8f]">Super Admin</p>
            </div>
            <ArrowDropDownIcon className="text-[#c4c4c4]" />
          </div>
          <div className="lg:hidden">
          <MenuIcon className="hidden cursor-pointer menu_icon" onClick={ () => {
            if(document.getElementsByClassName("mobile_menu")[0].style.left == "-100%")
            {
              document.getElementsByClassName("mobile_menu")[0].style.left = "0px";
              document.getElementsByClassName("mobile_menu")[0].style.transition = "0.3s";
            }
            else{
              document.getElementsByClassName("mobile_menu")[0].style.left = "-100%";
           document.getElementsByClassName("mobile_menu")[0].style.transition = "0.3s";
            }
           
          }}/>
          </div>
          
        </div>
      </div>
      <div className="flex items-center p-4 bg-[#333333] text-white overflow-x-scroll">
        <ul className="flex overflow-visible">
          <li className="px-4 leading-[30px]">
            <div className="flex items-center cursor-pointer">
              <p className="text-[15px]">Dashboard</p>
              {/* <KeyboardArrowDownIcon className="text-[#c4c4c4]"/> */}
            </div>
          </li>
          <li className="px-4 leading-[30px]">
            <div className="flex items-center cursor-pointer">
              <p className="text-[15px]">Orders</p>
              {/* <KeyboardArrowDownIcon className="text-[#c4c4c4]"/> */}
            </div>
          </li>
          <li className="px-4 leading-[30px]">
            <div className="flex items-center cursor-pointer">
              <p className="text-[15px]">Products</p>
              <KeyboardArrowDownIcon className="text-[#c4c4c4]" />
            </div>
          </li>
          <li className="px-4 leading-[30px]">
            <div className="flex items-center cursor-pointer">
              <p className="text-[15px]">Store</p>
              {/* <KeyboardArrowDownIcon className="text-[#c4c4c4]"/> */}
            </div>
          </li>
          <li className="px-4 leading-[30px]">
            <div className="flex items-center cursor-pointer">
              <p className="text-[15px]">User</p>
              {/* <KeyboardArrowDownIcon className="text-[#c4c4c4]"/> */}
            </div>
          </li>
          <li className="px-4 leading-[30px]">
            <div className="flex items-center cursor-pointer">
              <p className="text-[15px]">Finance</p>
              <KeyboardArrowDownIcon className="text-[#c4c4c4]" />
            </div>
          </li>
          <li className="px-4 leading-[30px]">
            <div className="flex items-center cursor-pointer">
              <p className="text-[15px]">Marketing</p>
              <KeyboardArrowDownIcon className="text-[#c4c4c4]" />
            </div>
          </li>
          <li className="px-4 leading-[30px]">
            <div className="flex items-center cursor-pointer">
              <p className="text-[15px]">Settings</p>
              <KeyboardArrowDownIcon className="text-[#c4c4c4]" />
            </div>
          </li>
          <li className="px-4 leading-[30px]">
            <div className="flex items-center cursor-pointer">
              <p className="text-[15px]">Report</p>
              <KeyboardArrowDownIcon className="text-[#c4c4c4]" />
            </div>
          </li>
          <li className="px-4 leading-[30px]">
            <div className="flex items-center cursor-pointer">
              <p className="text-[15px]">Policy</p>
              <KeyboardArrowDownIcon className="text-[#c4c4c4]" />
            </div>
          </li>
          <li className="px-4 leading-[30px] overflow-visible">
            <div className="flex items-center cursor-pointer">
              <p className="text-[15px]">Staff</p>
              <KeyboardArrowDownIcon className="text-[#c4c4c4]" />
            </div>
            
          </li>
        </ul>
      </div>
      <div className="mobile_menu bg-[#272727] p-10 absolute w-full top-[61px] left-[-100%] lg:hidden">
          <div className="flex bg-white h-[40px] items-center rounded-full px-4 my-5">
            <img src={search} className="h-[17px] w-[17px]" />
            <input type="text" placeholder="Search here" className="rounded-full placeholder:text-[#aaaaaa] text-[14px] ml-3 outline-none h-[30px] w-full text-[#aaaaaa]"/>
          </div>
          <div className="">
          <div className="flex items-center border h-[40px] px-3 rounded-full my-5">
            <div classname="h-[20px] min-w-[20px]">
              <img
                src={americanflag}
                className="min-w-[20px] h-[20px] rounded-full"
              />
            </div>
            <select className="border  h-[36px] outline-none border-none px-3 w-full  bg-[#262626] text-white text-[13px]">
              <option value="Clothing">ENGLISH</option>
              <option value="Accessories">Accessories</option>
              <option value="Bags">Bags</option>
              <option value="Sports Outfit">Sports Outfit</option>
              <option value="Shoes">Shoes</option>
            </select>
          </div>
          
          <div className="flex my-5 mx-1">
          <div className="flex items-center w-full">
            <div className="min-w-[40px] min-h-[40px] bg-[#C4C4C4] rounded-[8px]"></div>
            <div className="mx-2 w-full">
              <p className="p-0 text-[14px] font-semibold text-white">Gareth Bale</p>
              <p className="text-[12px] text-white">Super Admin</p>
            </div>
            <ArrowDropDownIcon className="text-[#c4c4c4]" />
          </div>
          <div className="ml-4">
            <div className="h-[17px] w-[17px] rounded-full border-white border-2 text-white bg-black relative top-[7px] left-[10px] z-10 leading-[12px] text-[8px] text-center">12</div>
            <NotificationsIcon className="h-[17px] w-[17px] text-[#A5A5A5] relative top-[-6px]" />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
