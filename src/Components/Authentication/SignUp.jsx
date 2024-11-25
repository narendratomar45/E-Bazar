// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FcGoogle } from "react-icons/fc";

// const SignUp = () => {
//   const [formData, setFormdata] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });
//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     setFormdata({ ...formData, [e.target.name]: e.target.value });
//     setErrors((prevErrors) => ({ ...prevErrors, [e.target.name]: "" }));
//   };

//   const validate = () => {
//     const newErrors = {};

//     // Username validation
//     if (!formData.username) {
//       newErrors.username = "Username is required";
//     }

//     // Email validation
//     if (!formData.email) {
//       newErrors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Email is invalid";
//     }

//     // Password validation
//     if (!formData.password) {
//       newErrors.password = "Password is required";
//     } else if (formData.password.length < 6) {
//       newErrors.password = "Password must be at least 6 characters long";
//     }

//     setErrors(newErrors);

//     // Return true if there are no errors
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validate()) {
//       // Submit form data (e.g., send to an API)
//       console.log("Form submitted:", formData);
//     } else {
//       console.log("Validation failed:", errors);
//     }
//   };

//   return (
//     <div className="w-[300px] bg-white rounded-xl shadow-lg mx-auto px-5 py-1 my-10">
//       <h1 className="font-semibold text-center text-lg my-4">Sign up</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="flex flex-col my-4">
//           <label htmlFor="username">Username</label>
//           <input
//             type="text"
//             name="username"
//             value={formData.username}
//             placeholder="Username"
//             className="border border-black outline-none px-2 rounded h-10"
//             onChange={handleChange}
//             autoComplete="username"
//           />
//           {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
//         </div>
//         <div className="flex flex-col my-4">
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             className="border border-black outline-none px-2 rounded h-10"
//             onChange={handleChange}
//             autoComplete="email"
//           />
//           {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
//         </div>
//         <div className="flex flex-col my-4">
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             className="border border-black outline-none px-2 rounded h-10"
//             onChange={handleChange}
//             autoComplete="current-password"
//           />
//           {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
//         </div>
//         <button
//           type="submit"
//           className="bg-blue-700 hover:bg-blue-800 py-2 px-10 rounded flex justify-center mx-auto"
//         >
//           Sign Up
//         </button>
//       </form>
//       <p className="my-4">
//         Already have an account?{" "}
//         <Link to={"/login"} className="text-blue-600 underline my-4">
//           Log in
//         </Link>
//       </p>
//       <div className="flex items-center gap-3 border-2 border-black rounded justify-center my-4 h-8">
//         <FcGoogle />
//         <p>Sign up with Google</p>
//       </div>
//     </div>
//   );
// };

// export default SignUp;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors((prevErrors) => ({ ...prevErrors, [e.target.name]: "" }));
  };

  const validate = () => {
    const newErrors = {};

    // Username validation
    if (!formData.username) {
      newErrors.username = "Username is required";
    }

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }

    setErrors(newErrors);

    // Return true if there are no errors
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", formData);
    } else {
      console.log("Validation failed:", errors);
    }
  };

  return (
    <div className="min-h-screen my-0 flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 ">
      <div className=" w-[500px] max-w-md bg-white p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 font-medium">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Create Your Account
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mb-5">
            <label
              htmlFor="username"
              className="mb-1 text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              placeholder="Enter your username"
              className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:ring-2 focus:ring-blue-400 outline-none"
              onChange={handleChange}
              autoComplete="username"
            />
            {errors.username && (
              <p className="text-red-500 text-xs mt-1">{errors.username}</p>
            )}
          </div>
          <div className="flex flex-col mb-5">
            <label
              htmlFor="email"
              className="mb-1 text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Enter your email"
              className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:ring-2 focus:ring-blue-400 outline-none"
              onChange={handleChange}
              autoComplete="email"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>
          <div className="flex flex-col mb-6">
            <label
              htmlFor="password"
              className="mb-1 text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              placeholder="Enter your password"
              className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:ring-2 focus:ring-blue-400 outline-none"
              onChange={handleChange}
              autoComplete="current-password"
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center mt-4 text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="w-24 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
          >
            Log in
          </Link>
        </p>
        <div className="flex items-center justify-center gap-3 mt-6 bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 hover:shadow-lg cursor-pointer transition-all duration-300">
          <FcGoogle size={20} />
          <p className="text-sm font-medium text-gray-700">
            Sign up with Google
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
