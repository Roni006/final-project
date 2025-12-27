import heroBg from "../assets/hero-bg.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Discovery = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: true,
    autoplaySpeed: 1000,
  };
  return (
    <>
      <div className="  ">

        {/* //   < !--? HERO - SECTION SECTION START-- > */}
        <Slider {...settings} className="overflow-hidden">

          <section className="hero-section relative">
            <div className="hero-content relative">
              {/* Responsive Height: 
         h-[60vh] on mobile (prevents too much scrolling) 
         md:h-screen on desktop 
      */}
              <img
                src={heroBg}
                alt="hero-background"
                className="w-full h-[60vh] md:h-screen object-cover"
              />

              {/* Content Overlay */}
              <div className="main-content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
                <div className="container max-w-[1135px] mx-auto px-4">
                  <div
                    className="middle-content text-center w-[95%] sm:w-[85%] md:w-[680px] mx-auto bg-[#ffffffa9] backdrop-blur-sm px-4 py-8 sm:px-10 md:px-[100px] md:pt-[70px] md:pb-20 rounded-md relative"
                  >
                    {/* Heading: Responsive text sizes */}
                    <h1 className="text-xl sm:text-2xl md:text-[40px] font-bold text-[#1D252C] leading-tight">
                      Footpath – Style That Fits Your Life
                    </h1>

                    {/* Paragraph: Controlled padding for mobile */}
                    <p className="text-xs sm:text-sm md:text-[16px] pt-2 pb-6 md:pb-[30px] leading-relaxed">
                      Discover modern, comfortable, and budget-friendly fashion essentials with Footpath. Smart, simple, and stylish shopping for everyone.
                    </p>

                    {/* Button: Smaller padding on mobile */}
                    <a
                      href="#"
                      className="inline-block bg-[#DB4444] text-sm md:text-lg font-medium text-white py-2 px-5 md:px-8 rounded-md border border-[#DB4444] hover:bg-transparent hover:text-[#DB4444] transition-all duration-300"
                    >
                      Discover Our Collection
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="hero-section relative">
            <div className="hero-content relative">
              {/* Responsive Height: 
         h-[60vh] on mobile (prevents too much scrolling) 
         md:h-screen on desktop 
      */}
              <img
                src={heroBg}
                alt="hero-background"
                className="w-full h-[60vh] md:h-screen object-cover"
              />

              {/* Content Overlay */}
              <div className="main-content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
                <div className="container max-w-[1135px] mx-auto px-4">
                  <div
                    className="middle-content text-center w-[95%] sm:w-[85%] md:w-[680px] mx-auto bg-[#ffffffa9] backdrop-blur-sm px-4 py-8 sm:px-10 md:px-[100px] md:pt-[70px] md:pb-20 rounded-md relative"
                  >
                    {/* Heading: Responsive text sizes */}
                    <h1 className="text-xl sm:text-2xl md:text-[40px] font-bold text-[#1D252C] leading-tight">
                      Footpath – Style That Fits Your Life
                    </h1>

                    {/* Paragraph: Controlled padding for mobile */}
                    <p className="text-xs sm:text-sm md:text-[16px] pt-2 pb-6 md:pb-[30px] leading-relaxed">
                      Discover modern, comfortable, and budget-friendly fashion essentials with Footpath. Smart, simple, and stylish shopping for everyone.
                    </p>

                    {/* Button: Smaller padding on mobile */}
                    <a
                      href="#"
                      className="inline-block bg-[#DB4444] text-sm md:text-lg font-medium text-white py-2 px-5 md:px-8 rounded-md border border-[#DB4444] hover:bg-transparent hover:text-[#DB4444] transition-all duration-300"
                    >
                      Discover Our Collection
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <section className="hero-section relative">
            <div className="hero-content relative">
              {/* Responsive Height: 
         h-[60vh] on mobile (prevents too much scrolling) 
         md:h-screen on desktop 
      */}
              <img
                src={heroBg}
                alt="hero-background"
                className="w-full h-[60vh] md:h-screen object-cover"
              />

              {/* Content Overlay */}
              <div className="main-content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
                <div className="container max-w-[1135px] mx-auto px-4">
                  <div
                    className="middle-content text-center w-[95%] sm:w-[85%] md:w-[680px] mx-auto bg-[#ffffffa9] backdrop-blur-sm px-4 py-8 sm:px-10 md:px-[100px] md:pt-[70px] md:pb-20 rounded-md relative"
                  >
                    {/* Heading: Responsive text sizes */}
                    <h1 className="text-xl sm:text-2xl md:text-[40px] font-bold text-[#1D252C] leading-tight">
                      Footpath – Style That Fits Your Life
                    </h1>

                    {/* Paragraph: Controlled padding for mobile */}
                    <p className="text-xs sm:text-sm md:text-[16px] pt-2 pb-6 md:pb-[30px] leading-relaxed">
                      Discover modern, comfortable, and budget-friendly fashion essentials with Footpath. Smart, simple, and stylish shopping for everyone.
                    </p>

                    {/* Button: Smaller padding on mobile */}
                    <a
                      href="#"
                      className="inline-block bg-[#DB4444] text-sm md:text-lg font-medium text-white py-2 px-5 md:px-8 rounded-md border border-[#DB4444] hover:bg-transparent hover:text-[#DB4444] transition-all duration-300"
                    >
                      Discover Our Collection
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Repeat for other sections... */}
        </Slider>
        {/* // <!--? HERO - SECTION SECTION START-- > */}
      </div>



    </>

  )
}

export default Discovery