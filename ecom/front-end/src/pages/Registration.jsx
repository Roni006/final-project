import loginImage from "../assets/login.png"
import google from "../assets/goggle.png"
import { Link, useNavigate, useSearchParams } from "react-router"
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie'
import axios from "axios";
import { toast } from "react-toastify";
import { Oval } from 'react-loader-spinner'

const Registration = () => {
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const token = Cookies.get('token');
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const registration = async (data) => {
        setLoading(true);
        try {
            let res = await axios.post(`${import.meta.env.VITE_API}/auth/register`,
                data, {
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json",
                }
            }
            );

            if (res.success) {
                setLoading(false);
                setSuccess(true);
            }

            if (!res.success) {
                setLoading(false);
                toast.error(res.data.message, {
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
            }

            if (loading) {
                return <div className="fixed top-0 left-0 h-screen w-full bg-white flex items-center justify-center">
                    <Oval
                        visible={true}
                        height="80"
                        width="80"
                        color="#4fa94d"
                        ariaLabel="oval-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                    />
                </div>
            }

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


            console.log(res);
        } catch (error) {
            setLoading(false);
            console.log(error);
            toast.error(error.response.data.message, {
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

    useEffect(() => {
        if (token) {
            navigate('/');
        }
    }, [token])


    if (success) {
        <>
            <main className="w-full py-10 h-screen items-center justify-center">
                <div className="bg-white border border-gray-200 shadow-md w-full max-w-sm rounded-lg overflow-hidden mx-auto mt-4">
                    <div className="p-6">
                        <div>
                            <h3 className="text-lg font-semibold">Heading</h3>
                            <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                                We have sent a verification email to your registered email address. Please open the email and follow the instructions to verify your account.
                            </p>
                        </div>
                        <div className="text-center">
                            <Link to="/"
                                type="button"
                                className="inline mt-6 px-5 py-2 rounded-md text-white text-sm font-medium tracking-wider border-none outline-none bg-[#DB4444] hover:bg-[#DB4444] duration-300 cursor-pointer"
                            >
                                Go back to Home
                            </Link >
                        </div>
                    </div>
                </div>

            </main>
        </>
    }
    return (
        <>
            <section className="py-10 md:py-20 px-4 sm:px-6 lg:px-0"> {/* Added responsive padding */}
                <div className="container mx-auto max-w-[1135px]">
                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-[130px] items-center">

                        {/* Image Side - Hidden or resized on mobile to save space */}
                        <div className="w-full lg:w-[662px] hidden md:block">
                            <img
                                src={loginImage}
                                alt="registration image"
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        {/* Form Side */}
                        <div className="w-full max-w-[400px] lg:w-[371px]">
                            <h2 className="text-2xl md:text-[36px] leading-tight tracking-[4%] font-inter font-medium text-[#000000] text-center lg:text-left">
                                Create an account
                            </h2>
                            <p className="leading-6 text-base font-poppins text-[#000000] font-normal pt-4 pb-8 md:pb-12 text-center lg:text-left">
                                Enter Your Details Below
                            </p>

                            <form onSubmit={handleSubmit(registration)} className="space-y-6 md:space-y-0">
                                <div className="name">
                                    <input
                                        {...register("name", { required: "Name is required" })}
                                        className="w-full border-b-2 border-[rgba(0,0,0,0.46)] pb-2 outline-0 pe-2 font-poppins focus:border-[#DB4444] transition-colors"
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Name"
                                    />
                                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                                </div>

                                <div className="email">
                                    <input
                                        {...register("email", { required: "Email is required" })}
                                        className="w-full border-b-2 border-[rgba(0,0,0,0.46)] pb-2 outline-0 pe-2 font-poppins md:pt-12"
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Email or Phone Number"
                                    />
                                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                                </div>

                                <div className="pass">
                                    <input
                                        {...register("password", { required: "Password is required" })}
                                        className="w-full border-b-2 border-[rgba(0,0,0,0.46)] pb-2 outline-0 pe-2 font-poppins md:pt-12"
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="Password"
                                    />
                                    {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
                                </div>

                                <div className="pt-4">
                                    <button
                                        type="submit"
                                        className="w-full font-medium font-poppins text-base text-[#FAFAFA] leading-6 py-4 bg-[#DB4444] rounded-[5px] cursor-pointer hover:bg-red-600 transition-all"
                                    >
                                        Create Account
                                    </button>
                                </div>

                                {/* Google Sign Up - Removed fixed padding px-[86px] for responsiveness */}
                                <div className="w-full py-4 border-2 border-[rgba(0,0,0,0.4)] rounded-md mt-4 hover:bg-gray-50 transition-colors">
                                    <Link className="text-[14px] text-[#000000] leading-6 font-poppins font-normal flex items-center justify-center gap-4">
                                        <img src={google} alt="google icon" className="w-5 h-5" />
                                        Sign Up With Google
                                    </Link>
                                </div>

                                <div className="flex items-center justify-center gap-4 mt-8">
                                    <span className="text-sm md:text-base text-gray-600 font-poppins font-normal">
                                        Already have account?
                                    </span>
                                    <Link to='/login' className="text-sm md:text-base text-black font-poppins font-bold hover:text-[#DB4444] underline-offset-4 hover:underline">
                                        Login
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Registration