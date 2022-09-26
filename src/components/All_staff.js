import { Link } from "react-router-dom";
import "./header.css";
import Dashboard_admin_header from "./Dashboard_admin_header";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { AiOutlineDownload } from 'react-icons/ai';
import { FiDownload } from 'react-icons/fi';
import { BsChevronDown } from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi';
import { MdOutlineDeleteOutline } from 'react-icons/md';

function All_staff() {
  return (
    <div>
        <div>
        <Dashboard_admin_header/>
        </div>
        <div className="bg-[#f9f9f9] sm:px-12">
            <div className="p-4 sm:p-10">
                <div className="sm:flex items-center justify-between">
                    <p className="text-[#202020] font-bold text-[24px]">All Staff</p>
                    <button className="bg-black text-white border-none px-4 py-2 rounded-sm  flex mt-4 md:mt-0"><AddCircleOutlineIcon/><p className="ml-2">Add Staff</p></button>
                </div>
            </div>
            <div className=" my-4 bg-white shadow-md px-2 py-10">
              <div className="lg:flex items-center justify-between mb-5">
                <div className="flex items-center">
                  <p className="text-[#abafb3] text-[14px] font-medium">Show</p>
                  <input className="w-[48px] h-[24px] grow-0 shrink-0 border border-[#272727] rounded-sm mx-1 px-1" type="number" min="0" placeholder="10"/>
                  <p className="text-[#abafb3] text-[14px] font-medium">Entries</p>
                </div>
                <div className="md:flex items-center my-5 lg:my-0">
                  <input type="text" className="w-full md:w-[150px] text-[14px] border-b outline-none mr-3" placeholder="Search"/>
                  <div className="sm:flex items-center border px-2 rounded-sm mx-2 my-6 md:my-0 text-center">
                    <input type="date" classname="text-[#abafb3] text-[14px]"/>
                    <p className="text-[#abafb3] text-[14px] font-medium mx-2">--</p>
                    <input type="date" classname="text-[#abafb3] text-[14px]"/>
                  </div>
                  <div className="inline-flex md:flex items-center border px-2 py-1 rounded-lg bg-black text-white">
                    <FiDownload classname="text-[#abafb3] text-[14px]"/>
                    <p className="text-[#abafb3] text-[14px] font-medium px-1">Export</p>
                    <BsChevronDown classname="text-[#abafb3] text-[5px]"/>
                </div>
                </div>
              </div>
              <div className="overflow-x-scroll">
                <table className="w-full">
                  <thead className="w-full h-[50px]">
                    <tr className="w-full text-left text-[#464A53]">
                      <th className="px-4 py-2 border min-w-[80px] max-w-[80px] w-[80px]">ID</th>
                      <th className="px-4 py-2 border min-w-[185px] max-w-[185px] w-[185px]">Date</th>
                      <th className="px-4 py-2 border min-w-[150px]">Name</th>
                      <th className="px-4 py-2 border min-w-[250px]">Email</th>
                      <th className="px-4 py-2 border min-w-[150px] max-w-[150px] w-[150px]">Mobile</th>
                      <th className="px-4 py-2 border min-w-[200px] max-w-[200px] w-[200px]">Role</th>
                      <th className="px-4 py-2 border min-w-[100px] max-w-[100px] w-[100px]">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="text-left text-[#272727] text-[14px] h-[45px]">
                      <td className="px-4 py-2 border text-[#008eff]">001</td>
                      <td className="px-4 py-2 border">20/Mar/2022 03:33 PM</td>
                      <td className="px-4 py-2 border">Lionel Andreas Messi</td>
                      <td className="px-4 py-2 border">messisuperstar@yahoo.com</td>
                      <td className="px-4 py-2 border">+855 00000000</td>
                      <td className="px-4 py-2 border">Accountant</td>
                      <td className="px-4 py-2 border">
                        <div className="flex items-center">
                          <FiEdit className="text-[17px] mr-1"/>
                          <MdOutlineDeleteOutline className="text-[19px]"/>
                        </div>
                      </td>
                    </tr>
                    <tr className="text-left text-[#272727] text-[14px] h-[45px]">
                      <td className="px-4 py-2 border text-[#008eff]">001</td>
                      <td className="px-4 py-2 border">20/Mar/2022 03:33 PM</td>
                      <td className="px-4 py-2 border">Lionel Andreas Messi</td>
                      <td className="px-4 py-2 border">messisuperstar@yahoo.com</td>
                      <td className="px-4 py-2 border">+855 00000000</td>
                      <td className="px-4 py-2 border">Accountant</td>
                      <td className="px-4 py-2 border">
                        <div className="flex items-center">
                          <FiEdit className="text-[17px] mr-1"/>
                          <MdOutlineDeleteOutline className="text-[19px]"/>
                        </div>
                      </td>
                    </tr>
                    <tr className="text-left text-[#272727] text-[14px] h-[45px]">
                      <td className="px-4 py-2 border text-[#008eff]">001</td>
                      <td className="px-4 py-2 border">20/Mar/2022 03:33 PM</td>
                      <td className="px-4 py-2 border">Lionel Andreas Messi</td>
                      <td className="px-4 py-2 border">messisuperstar@yahoo.com</td>
                      <td className="px-4 py-2 border">+855 00000000</td>
                      <td className="px-4 py-2 border">Accountant</td>
                      <td className="px-4 py-2 border">
                        <div className="flex items-center">
                          <FiEdit className="text-[17px] mr-1"/>
                          <MdOutlineDeleteOutline className="text-[19px]"/>
                        </div>
                      </td>
                    </tr>
                    <tr className="text-left text-[#272727] text-[14px] h-[45px]">
                      <td className="px-4 py-2 border text-[#008eff]">001</td>
                      <td className="px-4 py-2 border">20/Mar/2022 03:33 PM</td>
                      <td className="px-4 py-2 border">Lionel Andreas Messi</td>
                      <td className="px-4 py-2 border">messisuperstar@yahoo.com</td>
                      <td className="px-4 py-2 border">+855 00000000</td>
                      <td className="px-4 py-2 border">Accountant</td>
                      <td className="px-4 py-2 border">
                        <div className="flex items-center">
                          <FiEdit className="text-[17px] mr-1"/>
                          <MdOutlineDeleteOutline className="text-[19px]"/>
                        </div>
                      </td>
                    </tr>
                    <tr className="text-left text-[#272727] text-[14px] h-[45px]">
                      <td className="px-4 py-2 border text-[#008eff]">001</td>
                      <td className="px-4 py-2 border">20/Mar/2022 03:33 PM</td>
                      <td className="px-4 py-2 border">Lionel Andreas Messi</td>
                      <td className="px-4 py-2 border">messisuperstar@yahoo.com</td>
                      <td className="px-4 py-2 border">+855 00000000</td>
                      <td className="px-4 py-2 border">Accountant</td>
                      <td className="px-4 py-2 border">
                        <div className="flex items-center">
                          <FiEdit className="text-[17px] mr-1"/>
                          <MdOutlineDeleteOutline className="text-[19px]"/>
                        </div>
                      </td>
                    </tr>
                    <tr className="text-left text-[#272727] text-[14px] h-[45px]">
                      <td className="px-4 py-2 border text-[#008eff]">001</td>
                      <td className="px-4 py-2 border">20/Mar/2022 03:33 PM</td>
                      <td className="px-4 py-2 border">Lionel Andreas Messi</td>
                      <td className="px-4 py-2 border">messisuperstar@yahoo.com</td>
                      <td className="px-4 py-2 border">+855 00000000</td>
                      <td className="px-4 py-2 border">Accountant</td>
                      <td className="px-4 py-2 border">
                        <div className="flex items-center">
                          <FiEdit className="text-[17px] mr-1"/>
                          <MdOutlineDeleteOutline className="text-[19px]"/>
                        </div>
                      </td>
                    </tr>
                    <tr className="text-left text-[#272727] text-[14px] h-[45px]">
                      <td className="px-4 py-2 border text-[#008eff]">001</td>
                      <td className="px-4 py-2 border">20/Mar/2022 03:33 PM</td>
                      <td className="px-4 py-2 border">Lionel Andreas Messi</td>
                      <td className="px-4 py-2 border">messisuperstar@yahoo.com</td>
                      <td className="px-4 py-2 border">+855 00000000</td>
                      <td className="px-4 py-2 border">Accountant</td>
                      <td className="px-4 py-2 border">
                        <div className="flex items-center">
                          <FiEdit className="text-[17px] mr-1"/>
                          <MdOutlineDeleteOutline className="text-[19px]"/>
                        </div>
                      </td>
                    </tr>
                    <tr className="text-left text-[#272727] text-[14px] h-[45px]">
                      <td className="px-4 py-2 border text-[#008eff]">001</td>
                      <td className="px-4 py-2 border">20/Mar/2022 03:33 PM</td>
                      <td className="px-4 py-2 border">Lionel Andreas Messi</td>
                      <td className="px-4 py-2 border">messisuperstar@yahoo.com</td>
                      <td className="px-4 py-2 border">+855 00000000</td>
                      <td className="px-4 py-2 border">Accountant</td>
                      <td className="px-4 py-2 border">
                        <div className="flex items-center">
                          <FiEdit className="text-[17px] mr-1"/>
                          <MdOutlineDeleteOutline className="text-[19px]"/>
                        </div>
                      </td>
                    </tr>
                    <tr className="text-left text-[#272727] text-[14px] h-[45px]">
                      <td className="px-4 py-2 border text-[#008eff]">001</td>
                      <td className="px-4 py-2 border">20/Mar/2022 03:33 PM</td>
                      <td className="px-4 py-2 border">Lionel Andreas Messi</td>
                      <td className="px-4 py-2 border">messisuperstar@yahoo.com</td>
                      <td className="px-4 py-2 border">+855 00000000</td>
                      <td className="px-4 py-2 border">Accountant</td>
                      <td className="px-4 py-2 border">
                        <div className="flex items-center">
                          <FiEdit className="text-[17px] mr-1"/>
                          <MdOutlineDeleteOutline className="text-[19px]"/>
                        </div>
                      </td>
                    </tr>
                    <tr className="text-left text-[#272727] text-[14px] h-[45px]">
                      <td className="px-4 py-2 border text-[#008eff]">001</td>
                      <td className="px-4 py-2 border">20/Mar/2022 03:33 PM</td>
                      <td className="px-4 py-2 border">Lionel Andreas Messi</td>
                      <td className="px-4 py-2 border">messisuperstar@yahoo.com</td>
                      <td className="px-4 py-2 border">+855 00000000</td>
                      <td className="px-4 py-2 border">Accountant</td>
                      <td className="px-4 py-2 border">
                        <div className="flex items-center">
                          <FiEdit className="text-[17px] mr-1"/>
                          <MdOutlineDeleteOutline className="text-[19px]"/>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="sm:flex items-center justify-between h-[40px] p-4">
                  <div className="flex text-[#464a53] text-[13px]">
                  <p className="text-[14px] font-medium px-1">Showing</p>
                  <p className="text-[14px] font-medium px-1">1</p>
                  <p className="text-[14px] font-medium px-1">to</p>
                  <p className="text-[14px] font-medium px-1">10</p>
                  <p className="text-[14px] font-medium px-1">of</p>
                  <p className="text-[14px] font-medium px-1">57</p>
                  <p className="text-[14px] font-medium px-1">Entries</p>
                  </div>
                  <div className="flex justify-end my-2">
              <ul className="flex">
                <li className="mx-1 text-[14px] text-[#272727] font-bold cursor-pointer">Prev</li>
                <li className="mx-1 text-[14px] text-[#ABAFB3] hover:text-[#272727] font-bold cursor-pointer">1</li>
                <li className="mx-1 text-[14px] text-[#ABAFB3] hover:text-[#272727] font-bold cursor-pointer">2</li>
                <li className="mx-1 text-[14px] text-[#ABAFB3] hover:text-[#272727] font-bold cursor-pointer">...</li>
                <li className="mx-1 text-[14px] text-[#ABAFB3] hover:text-[#272727] font-bold cursor-pointer">5</li>
                <li className="mx-1 text-[14px] text-[#272727] font-bold cursor-pointer">Next</li>
              </ul>
            </div>
              </div>
            </div>
        </div>  
    </div>
  );
}
export default All_staff;

