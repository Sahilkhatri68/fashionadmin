import React from "react";
import clipboard from "./images/clipboard.png";
import { Link } from "react-router-dom";

function Evaluation() {
  return (
    <>
      <div>
        <div className="max-w-[600px] p-10 m-auto h-[100vh]">
          <div className="border p-10 h-full">
            <div className="w-[150px] m-auto">
              <img src={clipboard} className="w-full" />
            </div>
            <h1 className="text-[#262626] text-[20px] font-bold text-center mt-10">
              We’re evaluating your details
            </h1>
            <h1 className="text-[#000000] text-[20px] font-normal text-center mt-8">
              Thank you for submitting it. Once your details have been reviewed,
              we will contact you!
            </h1>
            <div className="max-w-[400px] h-[40px] bg-black text-white leading-[40px] text-center m-auto rounded-sm mt-9">
              <Link to="/" className="">
                <button>Back to home</button>
              </Link>
            </div>
          </div>
        </div>
      </div> 
    </>
  );
}
export default Evaluation;
