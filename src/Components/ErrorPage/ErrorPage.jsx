import React from 'react';
import { Link, useRouteError } from 'react-router-dom'
import errorImg from '../../assets/error.webp'
const ErrorPage = () => {
    const { error, status } = useRouteError()
    return (
        <div>
            <section className='flex items-center h-screen p-16 '>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
     <div className='w-full md:w-1/3'>
        <img className='rounded-2xl' src={errorImg} alt="" />
     </div>
        <div className='max-w-md text-center'>
          <h2 className='mb-8 font-bold text-9xl  text-[#0d3039]'>
            <span className='sr-only'>Error</span> {status || 404}
          </h2>
          <p className='text-2xl font-semibold text-[#0d3039] md:text-3xl mb-8'>
            {error?.message}
          </p>
          <Link
            to='/'
            className='px-8 py-3 font-semibold rounded bg-[#0d3039] text-white'
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
        </div>
    );
};

export default ErrorPage;