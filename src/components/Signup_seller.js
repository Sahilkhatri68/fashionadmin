import React from 'react'
import { Link } from "react-router-dom";

function Signup_seller() {
  return (
    <div>
        <div className="flex items-center min-h-[80vh] py-12">
            <div className='w-full max-w-[700px] m-auto  p-5  border'>
                <div className='flex my-5'>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-left mr-5" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                </svg>
                <p className='text-[25px] font-bold text-[#232323]'>Sign Up</p>
                </div>

            <form className="w-full px-[50px] pb-[50px]" action="">
            <div>
              <label className="block text-[16px] font-normal text-[#232323]">Business Name</label>
              <input type="text" name="" className="border w-full h-[40px] outline-none px-3"/>
            </div>
            <div className="mt-5">
              <label className="block text-[16px] font-normal text-[#232323]">Business Address</label>
              <input type="text" name="" className="border w-full h-[40px] outline-none px-3"/>
            </div>
            <div className='md:flex w-full mt-5'>
            <div className="md:mr-3 md:w-1/2">
              <label className="block text-[16px] font-normal text-[#232323]">First Name</label>
              <input type="text" name="" className="border w-full h-[40px] outline-none px-3"/>
            </div>
            <div className="md:ml-3 mt-4 md:mt-0 md:w-1/2">
              <label className="block text-[16px] font-normal text-[#232323]">Last Name</label>
              <input type="text" name="" className="border w-full h-[40px] outline-none px-3"/>
            </div>
            </div>
            <div className='md:flex w-full mt-5'>
            <div className="md:mr-3 md:w-1/2">
              <label className="block text-[16px] font-normal text-[#232323]">Type of Business</label>
              <select className='border w-full h-[40px] outline-none px-3'>
                <option value="Clothing">Clothing</option>
                <option value="Accessories">Accessories</option>
                <option value="Bags">Bags</option>
                <option value="Sports Outfit">Sports Outfit</option>
                <option value="Shoes">Shoes</option>
              </select>
            </div>
            <div className="md:ml-3 md:w-1/2 mt-4 md:mt-0">
              <label className="block text-[16px] font-normal text-[#232323]">Brand Name</label>
              <input type="text" name="" className="border w-full h-[40px] outline-none px-3"/>
            </div>
            </div>
            <div className='md:flex w-full mt-5'>
            <div className="md:mr-3 md:w-1/2">
              <label className="block text-[16px] font-normal text-[#232323]">Contact No</label>
              <input type="text" name="" className="border w-full h-[40px] outline-none px-3"/>
            </div>
            <div className="md:ml-3 md:w-1/2 mt-4 md:mt-0">
              <label className="block text-[16px] font-normal text-[#232323]">City</label>
              <select className='border w-full h-[40px] outline-none px-3'>
                <option value="x">x</option>
                <option value="y">y</option>
                <option value="z">z</option>
              </select>
            </div>
            </div>
            <div className='md:flex w-full mt-5'>
            <div className="md:mr-3 md:w-1/2">
              <label className="block text-[16px] font-normal text-[#232323]">Country</label>
              <input type="text" name="" className="border w-full h-[40px] outline-none px-3"/>
            </div>
            <div className="md:ml-3 md:w-1/2 mt-4 md:mt-0">
              <label className="block text-[16px] font-normal text-[#232323]">Upload Each Brand Logo</label>
              <input type="text" name="" className="border w-full h-[40px] outline-none"/>
            </div>
            </div>
            <div className="mt-10 w-3/5 m-auto">
            <Link to="/evaluation" className="text-[#232323] font-bold">
              <input type="submit" value="Submit Form" className="h-[40px] bg-black text-white w-full"/>
            </Link>
              
            </div>
            
            </form>
            </div>
        </div>
    </div>
  )
}

export default Signup_seller