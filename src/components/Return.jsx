import React from 'react'
import Dashboard_admin_header from './Dashboard_admin_header'
import printer from "./images/printer.png"
import download from "./images/download.png"
import girl from "./images/girl.png"
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
function Return() {
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
                            <button className='flex text-center bg-[#000000] text-white  font-normal pt-[6px] pb-[6px] pr-[10px] pl-[10px] rounded-[6px] text-[14px]'><img src={download} className="mr-[5px]" />  <p className='text-[13px] '> Export</p>
                            </button>
                        </div>
                        {/* aproove and reject return button are added  */}
                        <div className="mt-[20px] mr-[30px]">
                            <button className='flex text-center bg-[#000000] text-white items-center font-normal pt-[6px] pb-[6px] pr-[10px] pl-[10px] rounded-[6px] text-[14px]'><AddCircleOutlineIcon />  <p className='text-[18px] ml-[10px] '> Approve Return</p>
                            </button>
                        </div>
                        <div className="mt-[20px] mr-[30px]">
                            <button className='flex text-center bg-[#000000] text-white items-center font-normal pt-[6px] pb-[6px] pr-[10px] pl-[10px] rounded-[6px] text-[14px]'><HighlightOffIcon />  <p className='text-[18px] ml-[10px] text-center'> Reject Return</p>
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
                                <p className="text-[#000000] mb-[4px]">Status:    <span className='text-[#413F42] font-bold'> RETURN PENDING    </span>  </p>


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

                <button className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="popup-modal">
                    Toggle modal
                </button>

                <div id="popup-modal" tabIndex="-1" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full justify-center items-center" aria-hidden="true">
                    <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="popup-modal">
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                            <div className="p-6 text-center">
                                <svg aria-hidden="true" className="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this product?</h3>
                                <button data-modal-toggle="popup-modal" type="button" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                                    Yes, I'm sure
                                </button>
                                <button data-modal-toggle="popup-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">No, cancel</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Return