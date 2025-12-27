import loginImage from "../assets/login.png"
import google from "../assets/goggle.png"
import { Link } from "react-router"
const Registration = () => {
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

                            <form className="space-y-6 md:space-y-0">
                                <input
                                    className="w-full border-b-2 border-[rgba(0,0,0,0.46)] pb-2 outline-0 pe-2 font-poppins focus:border-[#DB4444] transition-colors"
                                    type="text"
                                    placeholder="Name"
                                />

                                <input
                                    className="w-full border-b-2 border-[rgba(0,0,0,0.46)] pb-2 outline-0 pe-2 font-poppins md:pt-12"
                                    type="email"
                                    placeholder="Email or Phone Number"
                                />

                                <input
                                    className="w-full border-b-2 border-[rgba(0,0,0,0.46)] pb-2 outline-0 pe-2 font-poppins md:pt-12"
                                    type="password"
                                    placeholder="Password"
                                />

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