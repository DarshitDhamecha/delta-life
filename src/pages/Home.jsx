import React from 'react';
import "../../src/assets/style/home.css"
import Footer from '../components/Footer';

const Home = () => {


    // map for first three products
    const firstProducts = [
        { id: 1, title: "PETS", description: "CBD Pet Treats Jerky Sticks", mg: "200 mg", offerPrice: "$29.99", realPrice: "$59.99" },
        { id: 2, title: "PETS", description: "CBD Pet Treats Jerky Sticks", mg: "200 mg", saleStatus: "SALE", offerPrice: "$29.99", realPrice: "$59.99" },
        { id: 3, title: "PETS", description: "CBD Pet Treats Jerky Sticks", mg: "200 mg", offerPrice: "$29.99", realPrice: "$59.99" }
    ]

    // map for second three products
    const secProducts = [
        { id: 1, title: "PETS", description: "CBD Pet Treats Jerky Sticks", mg: "200 mg", offerPrice: "$29.99", realPrice: "$59.99" },
        { id: 2, title: "PETS", description: "CBD Pet Treats Jerky Sticks", mg: "200 mg", saleStatus: "SALE", offerPrice: "$29.99", realPrice: "$59.99" },
        { id: 3, title: "PETS", description: "CBD Pet Treats Jerky Sticks", mg: "200 mg", offerPrice: "$29.99", realPrice: "$59.99" }
    ]

    // map for Thired three products
    const thiredProducts = [
        { id: 1, title: "PETS", description: "CBD Pet Treats Jerky Sticks", mg: "200 mg", offerPrice: "$29.99", realPrice: "$59.99" },
        { id: 2, title: "PETS", description: "CBD Pet Treats Jerky Sticks", mg: "200 mg", saleStatus: "SALE", offerPrice: "$29.99", realPrice: "$59.99" },
        { id: 3, title: "PETS", description: "CBD Pet Treats Jerky Sticks", mg: "200 mg", offerPrice: "$29.99", realPrice: "$59.99" }
    ]

    // map for Fourth three products
    const fourthProducts = [
        { id: 1, title: "PETS", description: "CBD Pet Treats Jerky Sticks", mg: "200 mg", offerPrice: "$29.99", realPrice: "$59.99" },
        { id: 2, title: "PETS", description: "CBD Pet Treats Jerky Sticks", mg: "200 mg", saleStatus: "SALE", offerPrice: "$29.99", realPrice: "$59.99" },
        { id: 3, title: "PETS", description: "CBD Pet Treats Jerky Sticks", mg: "200 mg", offerPrice: "$29.99", realPrice: "$59.99" }
    ]

    // map for Reviews
    const Reviews = [
        { id: 1, review: "So grateful to have found such a wonderful product, friendly staff and affordable prices. This whole experience has benefited my life in so many positive...", userName: "Chris Columbus" },
        { id: 2, review: "So grateful to have found such a wonderful product, friendly staff and affordable prices. This whole experience has benefited my life in so many positive...", userName: "Chris Columbus" },
        { id: 3, review: "So grateful to have found such a wonderful product, friendly staff and affordable prices. This whole experience has benefited my life in so many positive...", userName: "Chris Columbus" },
    ]

    return (
        <>
            <div className='bg-[#f4f4f4] h-fit'>
                <div className='bs-green w-100 bs-height relative overflow-hidden bs-img z-10'>
                    <div className='!z-20 m-0 tx-white md:!ps-28 px-2 md:!w-[75%] lg:!w-[50%] xl:!w-[50%] 2xl:!w-[50%] md:!text-start text-center w-[100%] flex items-center h-[100%] md:justify-center'>
                        <div>
                            <p className='fs-1 font-semibold m-0 p-0'>Hemp & Modern</p>
                            <p className='fs-1 font-semibold m-0 p-0'>Lifestyle Products</p>
                            <p className='text-lg mt-4'>Delta Life Hemp is a premier supplier to consumers of CBD and Hemp products in the US.  We offer a variety of the best brands and product lines to our incredible clients.</p>
                            <button className='py-2 px-3 fs-5 font-medium bs-white tx-black mt-4 hover:!bg-black hover:text-white'>
                                Shop Now
                            </button>
                        </div>
                    </div>
                </div>
                <div className='mt-24 flex-wrap  md:!px-28 flex jus-center px-3 items-center'>
                    <p className='font-bold fs-2'>Featured Items</p>
                    <button className='bs-green px-4 fs-5 py-2 tx-white hover:!bg-[#84b741]'>See More Products</button>
                </div>
                <div className='flex items-center jus-center lg:w-[60%] xl:w-[60%] 2xl:w-[60%] mt-5 lg:!ps-28 xl:!ps-28 2xl:!ps-28 px-3 fs-6 font-medium flex-wrap gap-3'>
                    <a href='#' className='effcts'>New Products</a>
                    <a href='#' className='effcts'>Flower</a>
                    <a href='#' className='effcts'>D8 Vape</a>
                    <a href='#' className='effcts'>D10 Vape</a>
                    <a href='#' className='effcts'>THC-O</a>
                    <a href='#' className='effcts'>Pets</a>
                </div>
                <div className='row mt-5 justify-center gap-4 pt-4 lg:!px-32 px-5 xl:!px-32 2xl:!px-32'>
                    {firstProducts.map((i) => (
                        <div key={i} className='bs-white col-md p-0 '>
                            <div className='flex w-100 justify-center relative'>
                                <span class="badge text-bg-success  rounded-full px-3 py-2 absolute top-7 right-7">{i.saleStatus}</span>
                                <img src="/images/IMG_1950-300x300_1-removebg-preview.png" className='' alt="" />
                            </div>
                            <div className='text-center'>
                                <p className='tx-green font-semibold text-lg my-3'>{i.title}</p>
                                <p className='fs-11 font-medium '>{i.description}</p>
                                <p className='text-lg mt-2'>{i.mg}</p>
                                <p className='font-bold fs-4 pb-4'>{i.offerPrice} <span className='text-decoration-line-through font-light text-[#8a8888] text-lg'>{i.realPrice}</span></p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='bs-white w-100 flex justify-center mt-24 vh-100 items-center '>
                    <div className='row w-100 md:!gap-0 gap-5'>
                        <div className='col-md-6 justify-center flex items-center'>
                            <div className='my-ring'>
                                <img src="/images/image_1-removebg-preview.png" className='ring-img' alt="" />
                            </div>
                        </div>
                        <div className='col-md-6 md:!text-start px-4 text-center'>
                            <p className='display-5 font-bold'>We are leaders of</p>
                            <p className='display-5 font-bold'>the industry</p>
                            <p className='lg:pe-32 xl:pe-32 mt-4 text-lg text-[#8a8888]'>Sapien ac cursus scelerisque non non posuere praesent ultricies. Quam pharetra elementum dolor dolor, volutpat maecenas pellentesque nulla. Eget placerat vitae, suspendisse lectus. At massa in quis tempor integer nec nullam. Facilisis nec et, morbi enim consequat. Nunc a eu facilisis vel nulla nunc cras viverra quis orci elit vulputate.</p>
                        </div>
                    </div>
                </div>
                <h2 className='text-center mt-24 fs-1 font-semibold'>New Items in Stock!</h2>
                <div className='row mt-2 justify-center gap-4 pt-4 lg:!px-32 px-5 xl:!px-32 2xl:!px-32'>
                    {secProducts.map((sp) => (
                        <div key={sp} className='bs-white col-md p-0'>
                            <div className='flex w-100 justify-center relative'>
                                <span class="badge text-bg-success  rounded-full px-3 py-2 absolute top-7 right-7">{sp.saleStatus}</span>
                                <img src="/images/IMG_1950-300x300_1-removebg-preview.png" className='' alt="" />
                            </div>
                            <div className='text-center'>
                                <p className='tx-green font-semibold text-lg my-3'>{sp.title}</p>
                                <p className='fs-11 font-medium '>{sp.description}</p>
                                <p className='text-lg mt-2'>{sp.mg}</p>
                                <p className='font-bold fs-4 pb-4'>{sp.offerPrice} <span className='text-decoration-line-through font-light text-[#8a8888] text-lg'>{sp.realPrice}</span></p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='row mt-2 justify-center gap-4 pt-4 lg:!px-32 px-5 xl:!px-32 2xl:!px-32'>
                    {thiredProducts.map((t) => (
                        <div key={t} className='bs-white col-md p-0 '>
                            <div className='flex w-100 justify-center relative'>
                                <span class="badge text-bg-success  rounded-full px-3 py-2 absolute top-7 right-7">{t.saleStatus}</span>
                                <img src="/images/IMG_1950-300x300_1-removebg-preview.png" className='' alt="" />
                            </div>
                            <div className='text-center'>
                                <p className='tx-green font-semibold text-lg my-3'>{t.title}</p>
                                <p className='fs-11 font-medium '>{t.description}</p>
                                <p className='text-lg mt-2'>{t.mg}</p>
                                <p className='font-bold fs-4 pb-4'>{t.offerPrice} <span className='text-decoration-line-through font-light text-[#8a8888] text-lg'>{t.realPrice}</span></p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='row mt-2 justify-center gap-4 pt-4 lg:!px-32 px-5 xl:!px-32 2xl:!px-32'>
                    {fourthProducts.map((f) => (
                        <div key={f} className='bs-white col-md p-0 '>
                            <div className='flex w-100 justify-center relative'>
                            <span class="badge text-bg-success  rounded-full px-3 py-2 absolute top-7 right-7">{f.saleStatus}</span>
                                <img src="/images/IMG_1950-300x300_1-removebg-preview.png" className='' alt="" />
                            </div>
                            <div className='text-center'>
                                <p className='tx-green font-semibold text-lg my-3'>{f.title}</p>
                                <p className='fs-11 font-medium '>{f.description}</p>
                                <p className='text-lg mt-2'>{f.mg}</p>
                                <p className='font-bold fs-4 pb-4'>{f.offerPrice} <span className='text-decoration-line-through font-light text-[#8a8888] text-lg'>{f.realPrice}</span></p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='banar-img mt-5'>
                    <div className="baner-filter">
                        <div className="baner-filter text-center">
                            <div className='w-100 flex flex-col justify-center items-center px-3'>
                                <p className='fs-2'>Search and browse through </p>
                                <p className='fs-2'>all of our products.</p>

                                <div className='bs-white py-2 lg:!w-[50%] xl:!w-[50%] 2xl:!w-[50%] w-100 flex px-2 mt-4'>
                                    <input type="text" className='py-3 w-75  px-2 text-lg focus:outline-none' placeholder='Search All Products' />
                                    <button className='bs-green text-lg w-25 tx-white'>Search</button>
                                </div>

                                <div className='lg:!w-[55%] xl:!w-[55%] 2xl:!w-[55%] flex flex-wrap mt-5 w-100  items-center justify-center gap-3'>
                                    <button className='baner-filter-sec border-1 border-black tx-black text-lg px-3 py-1 font-semibold'>Delta 8</button>
                                    <button className='baner-filter-sec border-1 border-black tx-black text-lg px-3 py-1 font-semibold'>Delta 9</button>
                                    <button className='baner-filter-sec border-1 border-black tx-black text-lg px-3 py-1 font-semibold'>Delta 10</button>
                                    <button className='baner-filter-sec border-1 border-black tx-black text-lg px-3 py-1 font-semibold'>Edibles</button>
                                    <button className='baner-filter-sec border-1 border-black tx-black text-lg px-3 py-1 font-semibold'>Pets</button>
                                    <button className='baner-filter-sec border-1 border-black tx-black text-lg px-3 py-1 font-semibold'>Vapes</button>
                                    <button className='baner-filter-sec border-1 border-black tx-black text-lg px-3 py-1 font-semibold'>Flowers</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bs-white w-100 flex justify-center py-24  items-center'>
                    <div className='row w-100 md:!gap-0 gap-5'>
                        <div className='col-md-6 justify-center flex items-center'>
                            <div className='my-ring'>
                                <img src="/images/IMG_1861-600x600 1.png" className='ring-img' alt="" />
                            </div>
                        </div>
                        <div className='col-md-6 md:!text-start px-4 text-center'>
                            <p className='fs-2 font-bold'>Delta Life's Mixed Fruit</p>
                            <p className='fs-2 font-bold'> Delta 9 Gummies</p>
                            <p className='lg:pe-32 xl:pe-32 mt-4 text-lg text-[#8a8888]'>We’re huge fans of this new gummy and think it was well worth the wait!    25mg per gummy, made in the USA.  Mixed fruit flavor.  </p>
                            <button className='py-2 px-3 fs-5 font-medium bs-green tx-white mt-4 hover:!bg-black'>
                                Shop Now
                            </button>
                        </div>
                    </div>
                </div>
                <h2 className='text-center mt-24 fs-1 font-semibold mb-5'>Our youtube videos</h2>
                <div className='row justify-center items-center gap-3 px-5'>
                    <div className='col-md-3 p-0'>
                        <img src="/images/Rectangle 826.png" alt="" />
                    </div>
                    <div className='col-md-3 p-0'>
                        <img src="/images/Rectangle 827.png" alt="" />
                    </div>
                    <div className='col-md-3 p-0'>
                        <img src="/images/Rectangle 828.png" alt="" />
                    </div>
                </div>
                <div className='pb-24 flex justify-center items-center bs-white mt-28'>
                    <div className='w-100'>
                        <h2 className='text-center mt-24 fs-1 font-semibold mb-5'>Recent Google Reviews</h2>
                        <div className='row justify-center items-center gap-4 px-4'>
                            {Reviews.map((elem) => (
                                <div key={elem} className='col-md-3 p-0 bg-[#f4f4f4] px-3 py-3'>
                                    <p className='text-lg font-semibold'>
                                        {elem.review}
                                    </p>
                                    <div className='flex items-center justify-between mt-3'>
                                        <div className='flex items-center justify-between gap-3 '>
                                            <img src="/images/download.jpeg" className='h-[50px] w-[50px] object-cover rounded-[100%]' alt="" />
                                            <div>
                                                <p className='text-[#8a8888]'>{elem.userName}</p>
                                                <img src="/images/Group 982.png" alt="" />
                                            </div>
                                        </div>
                                        <img src="/images/google-logo-9808 1.png" alt="" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
