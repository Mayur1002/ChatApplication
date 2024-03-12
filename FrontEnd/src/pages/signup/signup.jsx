import React from "react";
import GenderCheckbox from "./GenderCheckbox";

const signup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow -md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-4x1 font-semibold text-center text-white ">
          Sign Up
          <span className="text-blue-500"> ChatApp</span>
        </h1>
        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text mr-2.5 text-gray-400">
                Full Name:{" "}
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              className="w-full input input-bordered h-10 bg-gray-800 text-white"
            />
          </div>

          <div>
          <label className="label p-2">
              <span className="text-base label-text mr-2.5 text-gray-400">
                Username:
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full input input-bordered h-10 bg-gray-800 text-white"
            />
          </div>

          <div>
          <label className="label p-2">
              <span className="text-base label-text mr-2.5 text-gray-400">
                Password: 
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter Password "
              className="w-full input input-bordered h-10 bg-gray-800 text-white"
            />
          </div>

          <div>
          <label className="label p-2">
              <span className="text-base label-text mr-2.5 text-gray-400">
                Confirm Password: 
              </span>
            </label>
            <input
              type="text"
              placeholder="Confirm Password "
              className="w-full input input-bordered h-10 bg-gray-800 text-white"
            />
          </div>

          <GenderCheckbox/>

          <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-gray-400" >
            Already have an account
          </a>

          <div>
            <button className="btn btn-block btn-sm mt-2 border-slate-700  bg-gray-900 text-white" >Sign Up</button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default signup;




// starter code for signup component



// 

// import React from "react";
// import GenderCheckbox from "./GenderCheckbox";

// const signup = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 rounded-lg shadow -md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//         <h1 className="text-4x1 font-semibold text-center text-white ">
//           Sign Up
//           <span className="text-blue-500"> ChatApp</span>
//         </h1>
//         <form>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text mr-2.5 text-gray-400">
//                 Full Name:{" "}
//               </span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter Name"
//               className="w-full input input-bordered h-10 bg-gray-800 text-white"
//             />
//           </div>

//           <div>
//           <label className="label p-2">
//               <span className="text-base label-text mr-2.5 text-gray-400">
//                 Username:
//               </span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter Username"
//               className="w-full input input-bordered h-10 bg-gray-800 text-white"
//             />
//           </div>

//           <div>
//           <label className="label p-2">
//               <span className="text-base label-text mr-2.5 text-gray-400">
//                 Password: 
//               </span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter Password "
//               className="w-full input input-bordered h-10 bg-gray-800 text-white"
//             />
//           </div>

//           <div>
//           <label className="label p-2">
//               <span className="text-base label-text mr-2.5 text-gray-400">
//                 Confirm Password: 
//               </span>
//             </label>
//             <input
//               type="text"
//               placeholder="Confirm Password "
//               className="w-full input input-bordered h-10 bg-gray-800 text-white"
//             />
//           </div>

//           <GenderCheckbox/>

//           <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-gray-400" >
//             Already have an account
//           </a>

//           <div>
//             <button className="btn btn-block btn-sm mt-2 border-slate-700  bg-gray-900 text-white" >Sign Up</button>
//           </div>

//         </form>
//       </div>
//     </div>
//   );
// };

// export default signup;
