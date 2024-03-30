import React from 'react';
import "../../src/assets/style/home.css"

const Home = () => {
    return (
        <>
            <div className='bg-[#f4f4f4] h-fit'>
                <div className='bs-green w-100 py-5 bs-height relative overflow-hidden'>
                    <div className='!z-20 tx-white w-100 lg:!w-[50%] lg:!text-start text-center px-3 lg:!ps-28'>
                        <p className='fs-1 font-semibold mt-5'>Hemp & Modern</p>
                        <p className='fs-1 font-semibold'> Lifestyle Products</p>
                        <p className='text-lg my-3'>Delta Life Hemp is a premier supplier to consumers of CBD and Hemp products in the US.  We offer a variety of the best brands and product lines to our incredible clients.</p>
                        <button className='py-2 px-3 fs-4 font-medium bs-white tx-black'>
                            Shop Now
                        </button>
                    </div>
                </div>
                <div className='mt-24 flex-wrap lg:!px-28 xl:!px-28 2xl:!px-28  flex jus-center  items-center'>
                    <p className='font-bold fs-2'>Featured Items</p>
                    <button className='bs-green px-4 fs-5 py-2 tx-white hover:!bg-[#84b741]'>See More Products</button>
                </div>
                <div className='flex items-center justify-between w-[60%] my-5 ps-28 fs-6 font-medium'>
                    <a href='#'>New Products</a>
                    <a href='#'>Flower</a>
                    <a href='#'>D8 Vape</a>
                    <a href='#'>D10 Vape</a>
                    <a href='#'>THC-O</a>
                    <a href='#'>Pets</a>
                </div>
                
            </div>
        </>
    )
}

export default Home
