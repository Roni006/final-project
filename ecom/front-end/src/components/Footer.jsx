import { Link } from "react-router"
import logo from "./../assets/logo.png"

const Footer = () => {
    return (

        // < !--! FOOTER SECTION START-- >
        <footer className="footer-section bg-black pt-[60px] pb-[80px] lg:pb-[115px]">
    {/* Removed fixed border class for a cleaner look, added responsive padding */}
    <div className="container max-w-[1135px] mx-auto px-4 border-t border-t-[#333]">
        <div className="footer-content pt-10 flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12 lg:gap-10">

            {/* */}
            <div className="footer-left text-center lg:text-left max-w-[300px]">
                <div className="logo">
                    <Link to="/">
                        <h1 className='font-medium text-3xl text-[#DB4444]'>FootPath</h1>
                    </Link>
                </div>
                <p className="text-[#E1E1E1] text-sm md:text-base leading-[22px] pt-4">
                    Your natural candle made for <br className="hidden md:block" /> your home and for your wellness.
                </p>
            </div>

            {/* */}
            <div className="footer-right w-full lg:w-auto">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center sm:text-left">

                    {/* */}
                    <div className="footer-item">
                        <h4 className="text-[#DB4444] text-[18px] font-semibold mb-5">Discovery</h4>
                        <ul className="space-y-3">
                            <li><Link to="#" className="text-[#E1E1E1] text-[15px] hover:text-[#DB4444] duration-200">New Season</Link></li>
                            <li><Link to="#" className="text-[#E1E1E1] text-[15px] hover:text-[#DB4444] duration-200">Most Searched</Link></li>
                            <li><Link to="#" className="text-[#E1E1E1] text-[15px] hover:text-[#DB4444] duration-200">Most Sold</Link></li>
                        </ul>
                    </div>

                    {/* */}
                    <div className="footer-item">
                        <h4 className="text-[#DB4444] text-[18px] font-semibold mb-5">About</h4>
                        <ul className="space-y-3">
                            <li><Link to="#" className="text-[#E1E1E1] text-[15px] hover:text-[#DB4444] duration-200">Help</Link></li>
                            <li><Link to="#" className="text-[#E1E1E1] text-[15px] hover:text-[#DB4444] duration-200">Shipping</Link></li>
                            <li><Link to="#" className="text-[#E1E1E1] text-[15px] hover:text-[#DB4444] duration-200">Affiliate</Link></li>
                        </ul>
                    </div>

                    {/* */}
                    <div className="footer-item">
                        <h4 className="text-[#DB4444] text-[18px] font-semibold mb-5">Info</h4>
                        <ul className="space-y-3">
                            <li><Link to="#" className="text-[#E1E1E1] text-[15px] hover:text-[#DB4444] duration-200">Contact us</Link></li>
                            <li><Link to="#" className="text-[#E1E1E1] text-[15px] hover:text-[#DB4444] duration-200">Privacy Policy</Link></li>
                            <li><Link to="#" className="text-[#E1E1E1] text-[15px] hover:text-[#DB4444] duration-200">Terms & Condition</Link></li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </div>
</footer>
        // {/* <!--! FOOTER SECTION START-- > */ }
    )
}

export default Footer