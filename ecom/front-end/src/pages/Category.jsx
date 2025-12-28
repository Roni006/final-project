import phone from "../assets/cateIcon/phone.svg"
import computer from "../assets/cateIcon/computer.svg"
import watch from "../assets/cateIcon/watch.svg"
import camera from "../assets/cateIcon/camera.svg"
import headphone from "../assets/cateIcon/headphone.svg"
import gaming from "../assets/cateIcon/gaming.svg"
const BrowseCategory = () => {
    return (
        <>
            <section className='pt-10 md:pt-20 pb-6 md:pb-10 px-4'>
                <div className="container border-b border-[rgba(0,0,0,0.5)]">

                    <div className="title pb-8 md:pb-[60px]">
                        <h1 className='text-[22px] md:text-[36px] leading-8 md:leading-[48px] text-[#000000] font-inter tracking-[4%] font-semibold text-center md:text-left'>
                            Browse By Category
                        </h1>
                    </div>

                    <div className="catagory 
                                    grid 
                                    grid-cols-2 
                                    sm:grid-cols-3 
                                    md:grid-cols-4 
                                    lg:grid-cols-6 
                                    items-center 
                                    gap-4 
                                    md:gap-[30px] 
                                    pb-10 
                                    md:pb-[130px]">

                        <div className="item">
                            <div className="border-2 border-[rgba(0,0,0,0.3)] rounded-sm py-[25px] px-[35px] text-center cursor-pointer">
                                <img className="mx-auto" src={phone} alt="" />
                                <p className="text-[14px] md:text-[16px] leading-6 text-[#000000] font-poppins font-normal pt-4">Phones</p>
                            </div>
                        </div>

                        <div className="item">
                            <div className="border-2 border-[rgba(0,0,0,0.3)] rounded-sm py-[25px] px-[35px] text-center cursor-pointer">
                                <img className="mx-auto" src={computer} alt="" />
                                <p className="text-[14px] md:text-[16px] leading-6 text-[#000000] font-poppins font-normal pt-4">Computers</p>
                            </div>
                        </div>

                        <div className="item">
                            <div className="border-2 border-[rgba(0,0,0,0.3)] rounded-sm py-[25px] px-[35px] text-center cursor-pointer">
                                <img className="mx-auto" src={watch} alt="" />
                                <p className="text-[14px] md:text-[16px] leading-6 text-[#000000] font-poppins font-normal pt-4">SmartWatch</p>
                            </div>
                        </div>

                        <div className="item">
                            <div className="border-2 border-[rgba(0,0,0,0.3)] rounded-sm py-[25px] px-[55px] text-center cursor-pointer">
                                <img className="mx-auto" src={camera} alt="" />
                                <p className="text-[14px] md:text-[16px] leading-6 text-[#000000] font-poppins font-normal pt-4">Camera</p>
                            </div>
                        </div>

                        <div className="item">
                            <div className="border-2 border-[rgba(0,0,0,0.3)] rounded-sm py-[25px] px-[35px] text-center cursor-pointer">
                                <img className="mx-auto" src={headphone} alt="" />
                                <p className="text-[14px] md:text-[16px] leading-6 text-[#000000] font-poppins font-normal pt-4">HeadPhones</p>
                            </div>
                        </div>

                        <div className="item">
                            <div className="border-2 border-[rgba(0,0,0,0.3)] rounded-sm py-[25px] px-[55px] text-center cursor-pointer">
                                <img className="mx-auto" src={gaming} alt="" />
                                <p className="text-[14px] md:text-[16px] leading-6 text-[#000000] font-poppins font-normal pt-4">Gaming</p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

        </>
    )
}

export default BrowseCategory