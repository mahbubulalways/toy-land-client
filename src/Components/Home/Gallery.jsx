import React from 'react';
import car1 from '../../assets/gallery/car1.webp'
import car2 from '../../assets/gallery/car2.jpg'
import car3 from '../../assets/gallery/car3.jpeg'
import car4 from '../../assets/gallery/car4.jpg'
import car5 from '../../assets/gallery/car5.jpg'
import car6 from '../../assets/gallery/car6.png'
import car7 from '../../assets/gallery/car7.png'
import car8 from '../../assets/gallery/car8.png'
import car9 from '../../assets/gallery/car9.jpeg'
import car10 from '../../assets/gallery/truck1.webp'
import car11 from '../../assets/gallery/truck2.jpg'
import car12 from '../../assets/gallery/truck3.jpg'
import car13 from '../../assets/gallery/car13.jpg'
import car14 from '../../assets/gallery/car14.jpg'
import car15 from '../../assets/gallery/img15.jpg'
const Gallery = () => {
    const allCar=[
        car1,car2,car3,car4,car5,car6,car7,car8,car9,car10,car11,car12,car13,car14,car15
    ]

    return (
       <div className='w-[80%] mx-auto mt-24'>
        <h1 className='text-5xl font-serif mb-4 font-semibold text-center'> Our Toy Cars Gallery</h1>
        <p className='text-center w-full md:w-[60%] mx-auto mb-8'>We are increasing our market share by offering products that our designers have provided with striking and contemporary packaging and visibly comply with the latest laws and regulations. We keep a close eye on developments in the field and respond to the latest trends in time.</p>
         <div className=' grid grid-cols-3 md:grid-cols-5 items-center'>
            {allCar.map((car,i)=><div key={i}>
                <img className='w-48' src={car} alt="" />
            </div>)}
        </div>
       </div>
    );
};

export default Gallery;