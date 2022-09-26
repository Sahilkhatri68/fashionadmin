import React from 'react'
import Dashboard_admin_header from './Dashboard_admin_header'
 import printer from "./images/printer.png"
 import download from "./images/download.png"
 import girl from "./images/girl.png"
function ReturnRequest() {
    return (
        <div>
            <div>
                <Dashboard_admin_header />
            </div>
            <div className='bg-[#F9F9F9] p-8 md:px-[50px] py-[25px]'>
                <div className='mt-4 '>
                    <div className='flex justify-end text-center  items-center'>
                        <div className=" mt-[20px] mr-[30px] ">
                            <button className='flex text-center bg-[#000000] text-white font-normal pt-[6px] pb-[6px] pr-[10px] pl-[10px] rounded-[6px] text-[14px]'>
                                <img src={printer} className="mr-[5px] " />  <p className='text-[13px] '> Invoice</p>
                            </button>
                        </div>
                        <div className="mt-[20px] mr-[30px]">
                            <button className='flex text-center bg-[#000000] text-white font-normal pt-[6px] pb-[6px] pr-[10px] pl-[10px] rounded-[6px] text-[14px]'><img src={download} className="mr-[5px]" />  <p className='text-[13px] '> Export</p>
                            </button>
                        </div>

                    </div>
                </div>
                <div className="lg:flex h-full my-4">
                    <div className="lg:w-full lg:mr-2 h-full bg-white shadow-md p-5 pb-[45px] ">
                        <p className="text-[#262626] font-bold mb-3">Order Details</p>
                        <hr className='w-full' />
                        <div className="flex justify-between">
                            <div className="mt-6">
                                <p className="text-[#262626]  mb-3">Park Ji sung </p>
                                <div >

                                    <p className='text-[#262626]'>769  Preah Monivong Blvd 8769, <br />
                                        Phnom Penh, Chamkar Mon, Phnom Penh, <br />
                                        Cambodia</p>
                                </div>

                            </div>
                            <div className="mt-6 mr-10">
                                <p className="text-[#000000] mb-[4px]">Order ID: <span className='text-[#008EFF] font-bold'>SL90123487</span>  </p>
                                <p className="text-[#000000] mb-[4px]">Order Date:  <span className='text-[#000000] font-bold'>18-02-2022 08:30 PM</span>  </p>
                                <p className="text-[#000000] mb-[4px]">Requested Date:   <span className='text-[#000000] font-bold'> 23-02-2022 04:34 PM</span>  </p>
                                <p className="text-[#000000] mb-[4px]">Status:    <span className='text-[#12CAD6] font-bold'> Return requested</span>  </p>


                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:flex h-full my-4">
                    <div className="lg:w-full lg:mr-2 h-full bg-white shadow-md p-5">
                        <p className="text-[#262626] font-normal mb-3">Items</p>

                        <div className="overflow-x-scroll">
                            <table className="w-full">
                                <thead className="w-full h-[50px]">
                                    <tr className="w-full text-left text-[#464A53]">
                                        <th className="px-4 py-2 border min-w-[80px] max-w-[80px] w-[80px]">#</th>
                                        <th className="px-4 py-2 border min-w-[150px] max-w-[150px] w-[185px]">Image</th>
                                        <th className="px-4 py-2 border min-w-[150px]">Brand</th>
                                        <th className="px-4 py-2 border min-w-[250px]">Name</th>
                                        <th className="px-4 py-2 border min-w-[150px] max-w-[150px] w-[150px]">Variant</th>
                                        <th className="px-4 py-2 border min-w-[130px] max-w-[200px] w-[200px]">Unit Price</th>
                                        <th className="px-4 py-2 border min-w-[130px] max-w-[100px] w-[100px]">Sale Price</th>
                                        <th className="px-4 py-2 border min-w-[130px] max-w-[100px] w-[100px]">Sale Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="text-left text-[#272727] text-[14px] h-[45px]">
                                        <td className="px-4 py-2 border ">1</td>
                                        <td className="px-4 py-2 border"><img src={girl} className='m-auto' /></td>
                                        <td className="px-4 py-2 border">Forever 21 Now</td>
                                        <td className="px-4 py-2 border">Men yellow Printed cotton tees pure style for men</td>
                                        <td className="px-4 py-2 border font-normal">
                                            Color: Red
                                            Size: L
                                            Fabric: Cotton
                                            Printed: Pattern
                                            Neck: Round</td>
                                        <td className="px-4 py-2 border">$3.99</td>
                                        <td className="px-4 py-2 border">
                                            $2.99

                                        </td>
                                        <td className="px-4 py-2 border">
                                            $2.99

                                        </td>

                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className='mt-8 mr-12'>
                            <div className='w-1/3 float-right'>
                                <div className='flex justify-between text-center mt-8 '>
                                    <p className='mr-8 mb-8'>Item Total (Included Tax)</p> <p className='mr-8  mb-8'>$ 3.29</p>
                                </div>
                                <div className='mb-8  h-[1px] border border-[#1A1D20]  border-dashed'></div>
                                <div className='flex justify-between text-center '> <p className='mr-8 mb-8'>Grand Total</p> <p className='mr-8 mb-8'>$ 3.29</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReturnRequest