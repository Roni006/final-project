import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import loginImage from '../assets/login.png';
import axios from 'axios';
import { Link, useNavigate } from 'react-router';
import { Bounce, toast } from 'react-toastify';
const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const login = async (data) => {
    console.log(errors);

    console.log(data);

    try {
      let res = await axios.post(`${import.meta.env.VITE_API}/auth/login`,
        data, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        }
      }
      );

      // todo: react toast success message 
      toast.success('Login successful!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      // todo: react toast success message



      navigate('/');
      console.log(res);
    } catch (error) {
      console.log(error);
      toast.error('Invalid Credentials', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  }
  return (
    <section className="px-6 md:px-0"> {/* Padding for mobile left/right */}
      <div className="container mx-auto">
        <div className="login-details flex flex-col lg:flex-row gap-10 lg:gap-[130px] items-center pt-10 md:pt-[100px] pb-20 md:pb-[220px]">

          {/* Image Side - Hidden or Resized on Mobile */}
          <div className="w-full lg:w-[662px]">
            <img
              src={loginImage}
              alt="login image"
              className="w-full h-auto object-cover rounded-md"
            />
          </div>

          {/* Form Side */}
          <div className="w-full max-w-[400px] lg:w-[371px]">
            <h1 className='font-medium text-2xl md:text-3xl text-center lg:text-left'>
              Login in to <span className='text-[#DB4444]'>FootPath</span>
            </h1>
            <p className="leading-6 text-base font-poppins text-[#000000] font-normal pt-4 pb-8 md:pb-12 text-center lg:text-left">
              Enter Your Details Below
            </p>

            <form onSubmit={handleSubmit(login)}>
              {/* Email Input */}
              <div className="mb-6">
                <input
                  {...register("email", { required: "Email is required" })}
                  className="w-full border-b-2 border-[rgba(0,0,0,0.46)] pb-2 outline-0 pe-2 font-poppins focus:border-[#DB4444] transition-colors"
                  type="email"
                  placeholder="Email or Phone Number"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
              </div>

              {/* Password Input */}
              <div className="mb-6">
                <input
                  {...register("password", { required: "Password is required" })}
                  className="w-full border-b-2 border-[rgba(0,0,0,0.46)] pb-2 outline-0 pe-2 pt-8 font-poppins focus:border-[#DB4444] transition-colors"
                  type="password"
                  placeholder="Password"
                />
                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
              </div>

              {/* Buttons Row */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
                <button
                  type="submit"
                  className="w-full sm:w-auto font-medium font-poppins text-base text-[#FAFAFA] py-4 px-12 bg-[#DB4444] rounded-[5px] cursor-pointer hover:bg-red-600 transition-all"
                >
                  Login
                </button>
                <button
                  type="button"
                  className="text-[#db4444] text-base font-poppins hover:underline"
                >
                  Forget Password?
                </button>
              </div>

              {/* Register Link */}
              <div className='mt-8 text-center lg:text-left'>
                <p className="text-gray-600">
                  Dont have an account?
                  <Link to='/register' className="ml-2 text-black font-bold hover:text-[#DB4444] transition-colors">
                    Register Now
                  </Link>
                </p>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Login;

