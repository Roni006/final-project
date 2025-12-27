import { Link } from 'react-router'

const Error = () => {
  return (
    // <div className="w-full h-screen flex items-center justify-center px-4">
    //   <div className="bg-white max-w-md w-full text-center p-10 rounded-xl shadow-lg border">
    //     <h1 className="text-6xl font-bold text-red-600">404</h1>
    //     <p className="text-lg text-gray-600 mt-2">Page not found</p>

    //     <Link
    //       to="/"
    //       className="mt-6 inline-block px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
    //     >
    //       Go Home
    //     </Link>
    //   </div>
    // </div>

    <section className='pt-[241px] pb-[140px]'>
      <div className="container">
        <div className="content text-center">
          <h1 className='text-[110px] font-medium text-[#000000] leading-[115px] tracking-[3%] font-inter pb-10'>404 Not Found</h1>
          <span className='text-[16px] leading-6 text-[#000000] font-poppins font-normal  '>Your visited page not found. You may go home page.</span>
          <div className='pt-20'>
            <Link to='/' className='font-medium font-poppins text-[16px] text-[#FAFAFA] leading-6 py-4 px-12 bg-[#DB4444] rounded-[5px] cursor-pointer'>Back to home page</Link>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Error