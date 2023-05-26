import React from 'react';
import img2 from '../../assets/images/img2.png'
import delivery from '../../assets/icon/delivery.avif'
import saving from '../../assets/icon/saving.jpg'
import gift from '../../assets/icon/gift.jpg'
import moneyBack from '../../assets/icon/moneyback.png'
import support from '../../assets/icon/support.webp'
import guide from '../../assets/icon/guide.jpeg'
const OurService = () => {
    return (
        <div className='w-[80%] mx-auto mt-24'>
            <h1 className='text-red-600 text-center text-xl'>THE PRODUCTS</h1>
            <h1 className='py-3 font-semibold text-center text-5xl font-serif'>Our Services</h1>
            <p className='text-center w-full md:w-[60%] mx-auto mb-10'>We are increasing our market share by offering products that our designers have provided with striking and contemporary packaging and visibly comply with the latest laws and regulations. We keep a close eye on developments in the field and respond to the latest trends in time.</p>
            <div className='grid grid-cols-1 md:grid-cols-3 items-center'>

            <div data-aos="zoom-in-down">

            <div>
            <div className='flex items-center gap-3'>
                <img className='w-36 h-36 rounded-full' src={delivery} alt="" />
                <div>
                    <h1 className='text-2xl font-semibold'>Worldwide Delivery</h1>
                    <p className='text-gray-600'>On order over $150-7 days</p>
                </div>
            </div>
            <div className='flex items-center gap-3'>
                <img className='w-36 h-36 rounded-full' src={saving} alt="" />
                <div>
                    <h1 className='text-2xl font-semibold'>Great Saving</h1>
                    <p className='text-gray-600'>How to save money?</p>
                </div>
            </div>
            <div className='flex items-center gap-3'>
                <img className='w-36 h-36 rounded-full' src={gift} alt="" />
                <div>
                    <h1 className='text-2xl font-semibold'>Gift Voucher</h1>
                    <p className='text-gray-600'>Good Gifts for Good Relations!</p>
                </div>
            </div>
            </div>
            </div>

            
             
             <div>
                <img src={img2} alt="" />
             </div>
             <div>
            <div className='flex items-center gap-3'>
                <img className='w-36 h-36 rounded-full' src={moneyBack} alt="" />
                <div>
                <h1 className='text-2xl font-semibold'>Money Back Guarantee</h1>
                    <p className='text-gray-600'>Send within 30 days</p>
                </div>
            </div>
            <div className='flex items-center gap-3'>
                <img className='w-36 h-36 rounded-full' src={support} alt="" />
                <div>
                    <h1 className='text-2xl font-semibold'>24X7 Support</h1>
                    <p className='text-gray-600'>Call us 24/7 at 000-123-456</p>
                </div>
            </div>
            <div className='flex items-center gap-3'>
                <img className='w-36 h-36 rounded-full' src={guide} alt="" />
                <div>
                    <h1 className='text-2xl font-semibold'>Shopping Guide</h1>
                    <p className='text-gray-600'>Shopping guide here</p>
                </div>
            </div>
            </div>
        
            </div>
        </div>
    );
};

export default OurService;