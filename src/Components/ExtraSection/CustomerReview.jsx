import Marquee from "react-fast-marquee";
import man1 from '../../assets/man/man1.webp'
import man2 from '../../assets/man/man2.jpg'
import man3 from '../../assets/man/man3.avif'
import man4 from '../../assets/man/man4.jpg'
import man5 from '../../assets/man/man5.jpg'
import man6 from '../../assets/man/man3.avif'
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
const CustomerReview = () => {

    const reviews =[
        {
            id:102,
            img:man1,
            name:'James Oliver',
            rating:'4.7',
            text:'A toy or plaything is an object that is used primarily to provide entertainment. Simple examples include toy blocks, board games, and dolls.'
        },
        {
            id:103,
            img:man2,
            name:'John Charlie',
            rating:'4.6',
            text:'A toy or plaything is an object that is used primarily to provide entertainment. Simple examples include toy blocks, board games, and dolls.'
        },
        {
            id:104,
            img:man3,
            name:'Anderson Mason',
            rating:'4.4',
            text:'A toy or plaything is an object that is used primarily to provide entertainment. Simple examples include toy blocks, board games, and dolls.'
        },
        {
            id:105,
            img:man4,
            name:'Robert Martin',
            rating:'4.8',
            text:'A toy or plaything is an object that is used primarily to provide entertainment. Simple examples include toy blocks, board games, and dolls.'
        },
        {
            id:106,
            img:man5,
            name:'Michael Oliver',
            rating:'4.2',
            text:'A toy or plaything is an object that is used primarily to provide entertainment. Simple examples include toy blocks, board games, and dolls.'
        },
        {
            id:107,
            img:man6,
            name:'Richard Liam',
            rating:'4.5',
            text:'A toy or plaything is an object that is used primarily to provide entertainment. Simple examples include toy blocks, board games, and dolls.'
        },

    ]
    


    return (
     
          <div className="w-[80%] mx-auto mt-20">
            <h1 className='text-5xl font-serif mb-8 font-semibold text-center'>Customer Reviews</h1>
            <Marquee speed={100}>
                <div className="flex gap-10 mt-14">
                {
                    reviews.map(review=><div key={review.id} className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className='w-40 h-40 rounded-full' src={review.img} alt="Shoes" /></figure>
                    <div className="card-body">
                      <h2 className="card-title">{review.name}</h2>
                      <p>{review.text}</p>
                      <p><Rating className='text-yellow-500' style={{ maxWidth: 150 }} value={review.rating} readOnly/></p>
                    </div>
                  </div>)
                }
            
                </div>

</Marquee>
          </div>
        
    );
};

export default CustomerReview;