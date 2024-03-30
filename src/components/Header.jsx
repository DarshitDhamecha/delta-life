import React from 'react'

const Header = () => {
    return (
        <>
            <div className='d-none d-lg-block d-xl-block d-2xl-block'>
                <div className='h-[100px] w-100 flex items-center justify-center'>
                    <img src="/images/logo.jpg" className='h-full w-fit py-2' alt="" />
                </div>
                <div className='w-100 bg-[#f9f9f9] py-[2px]'></div>
                <div className='flex h-[48px] items-center justify-around px-20 fs-6 font-medium'>
                    <a href='#'>News</a>
                    <a href='#'>About</a>
                    <a href='#'>Contact</a>
                    <a href='#'>Account</a>
                    <a href='#'>Wholesale</a>
                    <div className='flex items-center gap-1'>
                        <a href='#'>Vape</a>
                        <i className="fa-solid fa-chevron-down"></i>
                    </div>
                    <a href='#'>THC-O</a>
                    <a href='#'>HHC-O</a>
                    <a href='#'>HHC</a>
                    <a href='#'>Delta 8</a>
                    <a href='#'>Delta 9</a>
                    <a href='#'>Delta 10</a>
                    <button className='bs-green px-3 fs-6 py-1.5 tx-white hover:!bg-[#84b741]'>
                        All Products
                    </button>
                </div>
            </div>
            {/* <-------------this is for responsive-------------> */}
            <div className='d-flex d-lg-none d-xl-none d-2xl-none w-100 items-center justify-between py-3 px-4'>
                <img src="/images/logo.jpg" alt="" className='w-[130px]' />
                <button className="" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                    <i className="fa-solid fa-bars fs-1 tx-green"></i>
                </button>
            </div>
            {/* <---------------------- offcanvas for responsive design ----------------------> */}
            <div className="offcanvas offcanvas-end w-75" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">

                <div className="offcanvas-body ">
                    <button type="button" className="absolute border-black border-1 right-0 top-0 px-3 py-2" data-bs-dismiss="offcanvas" aria-label="Close">
                        <i class="fa-solid fa-x fs-4"></i>
                    </button>
                    <div className='mt-5'>
                        <li>News</li>
                        <hr className='my-2' />
                        <li>About</li>
                        <hr className='my-2' />
                        <li>Contact</li>
                        <hr className='my-2' />
                        <li>Account</li>
                        <hr className='my-2' />
                        <li>Wholesale</li>
                        <hr className='my-2' />
                        <div className='flex items-center gap-1'>
                            <li>Vape</li>
                            <i className="fa-solid fa-chevron-down"></i>
                        </div>
                        <hr className='my-2' />
                        <li>THC-O</li>
                        <hr className='my-2' />
                        <li>HHC-O</li>
                        <hr className='my-2' />
                        <li>HHC</li>
                        <hr className='my-2' />
                        <li>Delta 8</li>
                        <hr className='my-2' />
                        <li>Delta 9</li>
                        <hr className='my-2' />
                        <li>Delta 10</li>
                        <hr className='my-2' />
                    </div>
                    <button className='bs-green px-3 fs-6 py-1 tx-white hover:!bg-[#84b741] mt-2'>
                        All Products
                    </button>
                </div>
            </div>
        </>
    )
}

export default Header
