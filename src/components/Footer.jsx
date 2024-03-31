import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='w-100 bs-black p-5 m-0 row gap-3'>
                <div className='w-[100%] md:w-[35%] !w-50'>
                    <img src="/images/pauldesign3-1-e1644009942413 1.png" alt="" />
                    <p className='text-[#8a8888] text-base mt-3'>Lorem ipsum is typically a corrupted </p>
                    <p className='text-[#8a8888] text-base'> version of 'De finibus bonorum et</p>
                    <p className='text-[#8a8888] text-base'> malorum', a 1st century BC</p>
                </div>
                <div className='col-md tx-white text-sm p-0'>
                    <li className='my-3'>Company</li>
                    <li>About us</li>
                    <li className='my-2'>Career</li>
                    <li>Blog</li>
                    <li className='my-2'>Rent Guides</li>
                    <li>Pricing</li>
                    <li className='my-2'>Demo</li>
                </div>
                <div className='col-md tx-white text-sm p-0'>
                    <li className=' my-3 !text-lg'>Support</li>
                    <li>Help Center</li>
                    <li className='my-2'>Contact us</li>
                    <li>Terms & Condition</li>
                    <li className='my-2'>Sitemap</li>
                    <li>Feedback</li>
                </div>
                <div className='col-md tx-white text-sm p-0'>
                    <li className=' my-3 !text-lg'>Media</li>
                    <li>Facebook</li>
                    <li className='my-2'>Twitter</li>
                    <li>YouTube</li>
                    <li className='my-2'>Sitemap</li>
                    <li>Instagram</li>
                </div>
                <div className='col-md tx-white p-0'>
                    <div className='row'>
                        <p className='col m-0 p-0 mt-2'>Subscribe Us</p>
                        <input type="text" className='bg-[#272728] mt-2 focus:outline-none py-3' placeholder='Your email here...' />
                        <button className='bs-white tx-black py-3 mt-2'>Subscribe</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Footer
