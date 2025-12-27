import { Link } from 'react-router'

const Error = () => {
  return ( 

 <section className='pt-20 md:pt-[241px] pb-20 md:pb-[140px] px-6'> {/* px-6 provides the left side padding */}
    <div className="container mx-auto">
        <div className="content text-center">
            {/* Responsive Heading */}
            <h1 className='text-5xl sm:text-7xl lg:text-[110px] font-medium text-[#000000] leading-tight md:leading-[115px] tracking-[3%] font-inter pb-4 md:pb-10'>
                404 Not Found
            </h1>
            
            {/* Subtext */}
            <p className='text-sm md:text-base leading-6 text-[#000000] font-poppins font-normal'>
                Your visited page not found. You may go home page.
            </p>
            
            {/* Button Wrapper - Padding Top Removed/Reduced */}
            <div className='pt-8'> 
                <Link 
                    to='/' 
                    className='inline-block font-medium font-poppins text-base text-[#FAFAFA] leading-6 py-4 px-10 bg-[#DB4444] rounded-[5px] cursor-pointer hover:bg-red-600 transition-all'
                >
                    Back to home page
                </Link>
            </div>
        </div>
    </div>
</section>

  )
}

export default Error