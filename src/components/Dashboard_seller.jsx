
import React from 'react';
import { Link } from "react-router-dom";
import "./header.css";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import search from "./images/search.png";
import stats from "./images/stats.png";
import cubical_box from "./images/cubical_box.png";
import truck from "./images/truck.png";
import cubical_box_delivered from "./images/cubical_box_delivered.png";
import cubical_box_cancelled from "./images/cubical_box_cancelled.png";
import americanflag from "./images/american_flag.png";
import return1 from "./images/return1.png";
import cycle from "./images/cycle.png";
import dollar from "./images/dollar.png";
import user from "./images/user.png";
import shop from "./images/shop.png";
import shop_disabled from "./images/shop_disabled.png";
import shop_rejected from "./images/shop_rejected.png";
import grid from "./images/grid.png";
import tshirt_back from "./images/tshirt_back.png";
import unique_logo from "./images/unique_logo.png";
import u1 from "./images/u1.png";
import Dashboard_admin_header from "./Dashboard_admin_header";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import downIcon from "./images/down.png"


const users = [
    {
        id: 1,
        name: "John Doe",
        email: "info@dauuqu.com",
        phone: "1234567890",
    },
    {
        id: 2,
        name: "John Doe2",
        email: "info@dauuqu.com2",
        phone: "12345678902",
    },
    {
        id: 3,
        name: "John Doe3",
        email: "info@dauuqu.com3",
        phone: "12345678903",
    },
    {
        id: 4,
        name: "John Doe4",
        email: "info@dauuqu.com4",
        phone: "12345678904",
    },
    {
        id: 5,
        name: "John Doe5",
        email: "info@dauuqu.com5",
        phone: "12345678905",
    },
    {
        id: 6,
        name: "John Doe6",
        email: "info@dauuqu.com6",
        phone: "12345678906",
    },
    {
        id: 7,
        name: "John Doe7",
        email: "info@dauuqu.com7",
        phone: "12345678907",
    },
    {
        id: 8,
        name: "John Doe8",
        email: "info@dauuqu.com8",
        phone: "12345678908",
    },
    {
        id: 9,
        name: "John Doe9",
        email: "info@dauuqu.com9",
        phone: "12345678909",
    },
    {
        id: 10,
        name: "John Doe10",
        email: "info@dauuqu.com10",
        phone: "123456789010",
    },
    {
        id: 11,
        name: "John Doe11",
        email: "info@dauuqu.com11",
        phone: "123456789011",
    },
    {
        id: 12,
        name: "John Doe12",
        email: "info@dauuqu.com12",
        phone: "123456789012",
    },
    {
        id: 13,
        name: "John Doe13",
        email: "info@dauuqu.com13",
        phone: "123456789013",
    },
    {
        id: 14,
        name: "John Doe14",
        email: "info@dauuqu.com14",
        phone: "123456789014",
    },
];
const most_selling_items = [
    {
        id: 1,
        image: tshirt_back,
        name: "Jack & Jones",
        description: "Cool fresh shirt with pure cotton",
        total_sale: "3454 sales",
        company: "Nike Group CO., ltd",
    },
    {
        id: 2,
        image: tshirt_back,
        name: "Jack & Jones",
        description: "Cool fresh shirt with pure cotton",
        total_sale: "3454 sales",
        company: "Nike Group CO., ltd",
    },
    {
        id: 3,
        image: tshirt_back,
        name: "Jack & Jones",
        description: "Cool fresh shirt with pure cotton",
        total_sale: "3454 sales",
        company: "Nike Group CO., ltd",
    },
    {
        id: 4,
        image: tshirt_back,
        name: "Jack & Jones",
        description: "Cool fresh shirt with pure cotton",
        total_sale: "3454 sales",
        company: "Nike Group CO., ltd",
    },
    {
        id: 5,
        image: tshirt_back,
        name: "Jack & Jones",
        description: "Cool fresh shirt with pure cotton",
        total_sale: "3454 sales",
        company: "Nike Group CO., ltd",
    },
    {
        id: 6,
        image: tshirt_back,
        name: "Jack & Jones",
        description: "Cool fresh shirt with pure cotton",
        total_sale: "3454 sales",
        company: "Nike Group CO., ltd",
    },
    {
        id: 7,
        image: tshirt_back,
        name: "Jack & Jones",
        description: "Cool fresh shirt with pure cotton",
        total_sale: "3454 sales",
        company: "Nike Group CO., ltd",
    },
    {
        id: 8,
        image: tshirt_back,
        name: "Jack & Jones",
        description: "Cool fresh shirt with pure cotton",
        total_sale: "3454 sales",
        company: "Nike Group CO., ltd",
    },
    {
        id: 9,
        image: tshirt_back,
        name: "Jack & Jones",
        description: "Cool fresh shirt with pure cotton",
        total_sale: "3454 sales",
        company: "Nike Group CO., ltd",
    },
    {
        id: 10,
        image: tshirt_back,
        name: "Jack & Jones",
        description: "Cool fresh shirt with pure cotton",
        total_sale: "3454 sales",
        company: "Nike Group CO., ltd",
    },

];

export default function Dashboard_seller() {

    
        const [currentPage, setCurrentPage] = React.useState(1);
        const [usersPerPage] = React.useState(5);

        //Get total page number
        const indexOfLastUser = currentPage * usersPerPage;
        const indexOfFirstUser = indexOfLastUser - usersPerPage;
        const currentUsers = most_selling_items.slice(indexOfFirstUser, indexOfLastUser);

        //Change page
        const paginate = (pageNumber) => setCurrentPage(pageNumber);
        return (
            <>
                <div>
                    <Dashboard_admin_header />
                </div>
                <div className='bg-[#F9F9F9] p-8 md:px-[50px] py-[25px] '>

                    <div className='p-8'>
                        <div className="p-8 bg-white shadow-md my-4">
                            <div className="sm:flex justify-between">
                                <div className="flex">
                                    <img src={stats} className="w-[30px] h-[30px]" />
                                    <p className="text-[#262626] ml-2 text-[20px] font-bold">Order Statistics</p>
                                </div>
                                <select className='border sm:w-[160px] text-[#262626] font-medium h-[36px] rounded-sm outline-none px-3 mt-4 sm:mt-0 w-full'>
                                    <option value="Clothing">Today's</option>
                                    <option value="Accessories">Accessories</option>
                                    <option value="Bags">Bags</option>
                                    <option value="Sports Outfit">Sports Outfit</option>
                                    <option value="Shoes">Shoes</option>
                                </select>
                            </div>
                            <div className="mt-5 flex  flex-wrap">
                                <div className="pt-6 pb-4 px-4 border border-[#dbdbdb] rounded-sm w-[200px] shadow-sm flex m-3 ">
                                    <div className="w-[40px] h-[40px] border border-[#dbdbdb]">
                                        <img src={cubical_box} className="w-[38px] h-[38px]" />
                                    </div>
                                    <div className="mx-3">
                                        <p className="text-[18px] font-bold text-[#262626] leading-[23px]">25</p>
                                        <p className="text-[13px] text-[#262626] p-0">Orders</p>
                                    </div>
                                </div>
                                <div className="pt-6 pb-4 px-4 border border-[#dbdbdb] rounded-sm w-[200px] shadow-sm flex m-3">
                                    <div className="w-[40px] h-[40px] border border-[#dbdbdb]">
                                        <img src={dollar} className="w-[38px] h-[38px]" />
                                    </div>
                                    <div className="mx-3">
                                        <p className="text-[18px] font-bold text-[#262626] leading-[23px]">250</p>
                                        <p className="text-[13px] text-[#262626] p-0">Sales</p>
                                    </div>
                                </div>
                                <div className="pt-6 pb-4 px-4 border border-[#dbdbdb] rounded-sm w-[200px] shadow-sm flex m-3">
                                    <div className="w-[40px] h-[40px] border border-[#dbdbdb]">
                                        <img src={cubical_box} className="w-[38px] h-[38px]" />
                                    </div>
                                    <div className="mx-3">
                                        <p className="text-[18px] font-bold text-[#262626] leading-[23px]">20</p>
                                        <p className="text-[13px] text-[#262626] p-0"> Order</p>
                                    </div>
                                </div>

                                <div className="pt-6 pb-4 px-4 border border-[#dbdbdb] rounded-sm w-[200px] shadow-sm flex m-3">
                                    <div className="w-[40px] h-[40px] border border-[#dbdbdb]">
                                        <img src={truck} className="w-[38px] h-[38px]" />
                                    </div>
                                    <div className="mx-3">
                                        <p className="text-[18px] font-bold text-[#262626] leading-[23px]">26</p>
                                        <p className="text-[13px] text-[#262626] p-0">Shipped</p>
                                    </div>
                                </div>
                                <div className="pt-6 pb-4 px-4 border border-[#dbdbdb] rounded-sm w-[200px] shadow-sm flex m-3">
                                    <div className="w-[40px] h-[40px] border border-[#dbdbdb]">
                                        <img src={cubical_box_cancelled} className="w-[38px] h-[38px]" />
                                    </div>
                                    <div className="mx-3">
                                        <p className="text-[18px] font-bold text-[#262626] leading-[23px]">1</p>
                                        <p className="text-[13px] text-[#262626] p-0">Cancelled</p>
                                    </div>
                                </div>
                                <div className="pt-6 pb-4 px-4 border border-[#dbdbdb] rounded-sm w-[200px] shadow-sm flex m-3">
                                    <div className="w-[40px] h-[40px] border border-[#dbdbdb]">
                                        <img src={return1} className="w-[38px] h-[38px]" />
                                    </div>
                                    <div className="mx-3">
                                        <p className="text-[18px] font-bold text-[#262626] leading-[23px]">34</p>
                                        <p className="text-[13px] text-[#262626] p-0">Return Order</p>
                                    </div>
                                </div>
                                <div className="pt-6 pb-4 px-4 border border-[#dbdbdb] rounded-sm w-[200px] shadow-sm flex m-3">
                                    <div className="w-[40px] h-[40px] border border-[#dbdbdb]">
                                        <img src={cycle} className="w-[38px] h-[38px]" />
                                    </div>
                                    <div className="mx-3">
                                        <p className="text-[18px] font-bold text-[#262626] leading-[23px]">48</p>
                                        <p className="text-[13px] text-[#262626] p-0">Items Sold</p>
                                    </div>
                                </div>

                                <div className="pt-6 pb-4 px-4 border border-[#dbdbdb] rounded-sm w-[200px] shadow-sm flex m-3">
                                    <div className="w-[40px] h-[40px] border border-[#dbdbdb]">
                                        <img src={cubical_box_delivered} className="w-[38px] h-[38px]" />
                                    </div>
                                    <div className="mx-3">
                                        <p className="text-[18px] font-bold text-[#262626] leading-[23px]">615</p>
                                        <p className="text-[13px] text-[#262626] p-0">Delivered</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="lg:flex h-full my-4">
                            <div className="lg:w-1/2 lg:mr-2 h-full bg-white shadow-md p-5">
                                <p className="text-[#262626] font-bold mb-3">Revenue</p>
                                <div className="h-[325px]">
                                    <div className="">

                                        <p>Graph will display here</p>  {/*in  this we will display  graphs  */}


                                    </div>
                                </div>

                            </div>
                            <div className="lg:w-1/2 lg:ml-2 mt-4 lg:mt-0 h-full bg-white shadow-md p-5">
                                <div className='flex justify-between  '><p className="text-[#262626] font-bold mb-3">Total Revenue</p>
                                    <div><MoreHorizIcon style={{ color: "#858A9C" }} /></div></div>
                                <div className="">
                                    <div className="">
                                        <div className="flex justify-between items-center">
                                            <div></div>
                                        </div>

                                        <div className="flex justify-between items-center h-[200px]">
                                            <p>Graph will display here</p>     {/*in  this we will display  graphs  */}
                                        </div>
                                        <div className="md:flex justify-around items-center bg-[black] pt-[17px] pl-[0px] pb-[17px] pr-[0px]">
                                            <div className="text-[white]    md:mr-12 
                                         md:text-left  text-center  ">
                                                <div className="text-[16px] font-bold">This Month Revenue</div>
                                                <div className="mt-2 text-[18px] font-normal">$6,288.00</div>
                                                <div className="mt-2 text-[16px] font-normal text-[#ADB4C8]"><span className="text-[#FD517D]"> -8 %</span> from last month</div>
                                            </div>
                                            <div className='w-[1px] bg-white color-white min-h-[76px]'></div>
                                            <div className="text-[white]  md:text-left   text-center ">
                                                <div className="text-[16px] font-bold">This Month Revenue</div>
                                                <div className="mt-2 text-[18px] font-normal">$6,288.00</div>
                                                <div className="mt-2 text-[16px] font-normal text-[#ADB4C8]"><span className="text-[#0DE073]"> +10 %</span> from last month</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/*Top selling categories start from here ----------------------- */}
                        <div className="lg:flex h-full my-4 w-full">
                            <div className='lg:w-1/2'>
                                <div className=" lg:mr-2  h-1/2 bg-white shadow-md p-5">
                                    <div className='flex justify-between  '><p className="text-[#262626] font-bold mb-3">Top Selling Category</p>
                                        <select className='border sm:w-[160px] text-[#262626] font-medium h-[36px] rounded-sm outline-none px-3 mt-4 sm:mt-0 w-full'>
                                            <option value="Clothing">Today's</option>
                                            <option value="Accessories">Accessories</option>
                                            <option value="Bags">Bags</option>
                                            <option value="Sports Outfit">Sports Outfit</option>
                                            <option value="Shoes">Shoes</option>
                                        </select></div>
                                </div>

                                <div className=" lg:mr-2 h-1/2 mt-4 bg-white shadow-md p-5">
                                    <div className='flex justify-between  '><p className="text-[#262626] font-bold mb-3">Top Selling Category</p>
                                        <select className='border sm:w-[160px] text-[#262626] font-medium h-[36px] rounded-sm outline-none px-3 mt-4 sm:mt-0 w-full'>
                                            <option value="Clothing">Today's</option>
                                            <option value="Accessories">Accessories</option>
                                            <option value="Bags">Bags</option>
                                            <option value="Sports Outfit">Sports Outfit</option>
                                            <option value="Shoes">Shoes</option>
                                        </select></div>
                                </div>

                            </div>
                            <div className='lg:w-1/2'>
                                <div className="lg:full lg:mr-2 h-full bg-white shadow-md p-5">
                                    <p className="text-[#262626] font-bold mb-3">Most Selling Items</p>
                                    <div className="overflow-x-scroll">
                                        <div className="min-w-[500px]">

                                            {currentUsers.map((most_selling_items) => (
                                                <div className="flex justify-between items-center" key={most_selling_items.id}>
                                                    <div className="flex">
                                                        <div className="w-[100px] grow-0 shrink-0 my-2"><img src={most_selling_items.image} className="w-full" /></div>
                                                        <div className="pl-3 py-[6px] flex flex-col justify-between w-[160px] text-[#262626]">
                                                            <p className="text-[18px] font-medium">{most_selling_items.name}</p>
                                                            <p className="text-[14px]">{most_selling_items.description}</p>
                                                        </div>
                                                    </div>
                                                    <div className="pl-3 py-[6px] flex flex-col justify-between w-[160px] text-[#262626]">
                                                        <p className="text-[16px]">{most_selling_items.total_sale}</p>
                                                        <p className="text-[12px]">{most_selling_items.company}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    {/* Pagination */}
                                    <nav aria-label="Page navigation example">
                                        <ul className="flex justify-end mt-4">
                                            <li className="page-item cursor-pointer">
                                                <a className="page-link" href="#" aria-label="Previous">
                                                    <span aria-hidden="true"><p className='mx-1 text-[14px] text-[#272727] font-bold cursor-pointer'>Prev</p></span>
                                                    <span className="sr-only">Previous</span>
                                                </a>
                                            </li>
                                            {/* All pages */}
                                            {most_selling_items.map((most_selling_items, index) => (
                                                //Hight light current page
                                                <li key={index} className={`mx-1 text-[14px] text-[#ABAFB3] hover:text-[#272727] font-bold cursor-pointer ${currentPage === index + 1 ? "bg-black text-white px-1 hover:text-[#abafb3]" : ""}`}>
                                                    <a onClick={() => paginate(index + 1)} className="page-link" href="#">{index + 1}</a>
                                                </li>
                                            ))}
                                            <li className="page-item cursor-pointer">
                                                <a className="page-link" href="#" aria-label="Next">
                                                    <span aria-hidden="true"><p className='mx-1 text-[14px] text-[#272727] font-bold cursor-pointer'>Next</p></span>
                                                    <span className="sr-only">Next</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </>
        )
    }