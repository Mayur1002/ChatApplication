import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col item-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shodow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3x1 font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-500 "> ChatApp</span>
        </h1>

        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text mr-2.5">Username: </span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10 bg-gray-800 text-white"
            />
          </div>
          <label className="label p-2">
            <span className="text-base label-text mr-2.5">Password : </span>
          </label>
          <input
            type="text"
            placeholder="Enter Password"
            className="w-full input input-bordered h-10 bg-gray-800 text-white"
          />
          <div></div>
          <a
            href="#"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            {"Don't"}have an account?
          </a>

          <div>
            <button className="btn btn-block btn-sm mt-2 bg-gray-900 text-white border border-transparent">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

// Starter Code for this file

// const Login = () => {
//     return (
//       <div className="flex flex-col item-center justify-center min-w-96 mx-auto">
//         <div className="w-full p-6 rounded-lg shodow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//           <h1 className="text-3x1 font-semibold text-center text-gray-300">
//             Login
//             <span className="text-blue-500 "> ChatApp</span>
//           </h1>

//           <form>
//               <div>
//                   <label className="label p-2">
//                       <span className="text-base label-text mr-2.5">Username: </span>
//                   </label>
//                       <input type="text" placeholder="Enter username" className="w-full input input-bordered h-10 bg-gray-800 text-white"/>
//               </div>
//               <label className="label p-2">
//                       <span className="text-base label-text mr-2.5">Password : </span>
//                   </label>
//                   <input type="text" placeholder="Enter Password" className="w-full input input-bordered h-10 bg-gray-800 text-white"/>
//               <div>
//               </div>
//               <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
//                   {"Don't"}have an account?
//               </a>

//               <div>
//                   <button className="btn btn-block btn-sm mt-2 bg-gray-900 text-white border border-transparent">Login</button>
//               </div>
//           </form>
//         </div>
//       </div>
//     );
//   };

//   export default Login;
