import React from 'react';
import useTitle from '../Hooks/useTitle';

const Blog = () => {
    useTitle('-blog')
    return (
        <div className='bg-[#f2f4f4] py-10'>
            <div className='w-[80%] mx-auto pt-10'>
            <div className='   space-y-4'>
            <h1 className='text-2xl font-semibold mb-2'>1.What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
            <p><span className='font-bold text-lg'>Access tokens :</span> Access tokens are used in token-based authentication to allow an application to access an API. The application receives an access token after a user successfully authenticates and authorizes access</p>
            <p><span className='font-bold text-lg'>Access tokens works :</span> When a client application needs to access a protected resource or perform an action on an API, it includes the access token in the request headers. The server then verifies the token's authenticity and permissions to grant or deny access. Access tokens are short-lived and often have a limited scope of access to mitigate security risks. After the token expires, the client application must obtain a new one to continue accessing protected resources.</p>
            <p><span className='font-bold text-lg'>Refresh tokens :</span> A refresh token is a special key that enables a client for an API or service to retrieve new access tokens without requiring the user to perform a complete login. In addition to the new access token, the service may return a new refresh token too.</p>
            <p><span className='font-bold text-lg'>Refresh tokens works : </span>When an access token expires, the client application can make a request to the authentication server using the refresh token. If the refresh token is still valid, the server responds with a new access token, allowing the client to continue accessing resources without requiring the user to reauthenticate. Refresh tokens are typically stored securely by the client application and are only sent to the authentication server when needed.</p>
             
             <h1 className='text-lg font-semibold'>we store them on the client-side</h1>
            <p>1. Browser Cookies: Storing tokens as secure HTTP-only cookies can provide a level of protection against cross-site scripting (XSS) attacks. The HTTP-only flag ensures that the cookies cannot be accessed by client-side scripts.</p>
            <p>2. Local Storage or Session Storage: While convenient, storing tokens in local storage or session storage may expose them to cross-site scripting (XSS) attacks. It is generally recommended to avoid storing sensitive tokens in these storage mechanisms unless additional security measures are implemented, such as encryption or strict content security policies.</p>
            </div>
            <div className="mt-5 ">
        <h1 className='text-2xl font-semibold'>2.Compare SQL and NoSQL databases?</h1>
        <table className= "border-collapse border border-slate-500 mt-5 ">
        <thead>
          <tr>
            <th className= "border border-slate-500 ">SQL</th>
            <th className= "border border-slate-500 ">NonSQL
</th>
           
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className= "border border-slate-500 p-2">SQL databases are primarily called RDBMS or Relational Databases.</td>
            <td className= "border border-slate-500  p-2">NoSQL databases are primarily called as Non-relational or distributed database.</td>
            
          </tr>
          <tr>
            <td className= "border border-slate-500 p-2">Structured query language SQL	</td>
            <td className= "border border-slate-500  p-2">No declarative query language
           </td>
          </tr>
          <tr>
            <td className= "border border-slate-500 p-2">SQL databases are table based databases</td>
            <td className= "border border-slate-500  p-2">NoSQL databases can be document based, key-value pairs, graph databases.
           </td>
          </tr>
          <tr>
            <td className= "border border-slate-500 p-2">Highly available network
 Infiniband, Fabric Path, etc.</td>
            <td className= "border border-slate-500  p-2">Commodity network
Ethernet, etc.
           </td>
          </tr>
          <tr>
            <td className= "border border-slate-500 p-2">Cross-platform support, Secure and free.</td>
            <td className= "border border-slate-500  p-2">Easy to use, High performance, and Flexible tool.
           </td>
          </tr>
          
        </tbody>
      </table>

        </div>
            <div className=' space-y-4  mt-10'>
            <h1 className='text-2xl font-semibold'>3.What is express js? What is Nest JS</h1>
            <p><span className='font-bold text-lg'>1. Express JS</span> Express.js is the most popular web framework for Node.js. It is designed for building web applications and APIs and has been called the de facto standard server framework for Node.js.</p>
            <p><span className='font-bold text-lg'>2. Nest JS </span>Nest.js is a NodeJS framework for building scalable server-side applications with TypeScript, it provides a suite of tools that leverage either fastify or express to facilitate rapid development and predictable readable code.</p>
            </div>
            <div className=' space-y-4  mt-10'>
            <h1 className='text-2xl font-semibold'>4.What is MongoDB aggregate and how does it work ?</h1>
            <p>MongoDB's aggregation framework is a powerful feature that allows you to perform complex data processing and analysis tasks on your MongoDB collections. The aggregation pipeline is the core component of MongoDB's aggregation</p>
            <p className='font-semibold text-lg'>Here's an overview of how the MongoDB aggregation pipeline works:</p>
            <p><span className='font-bold text-lg'>1.Match Stage:</span> The first stage is typically the $match stage, where you can specify a query filter to select a subset of documents from the collection. This stage is optional but useful for filtering the input data.</p>
            <p><span className='font-bold text-lg'>2.Projection Stage:</span> The $project stage allows you to reshape the documents in the pipeline. You can specify the fields to include or exclude from the output documents, rename fields, compute new fields using expressions, and more.</p>
            <p><span className='font-bold text-lg'>3.Sort Stage: </span> The $sort stage is used to sort the documents based on one or more fields. It is typically used after the $group stage to order the grouped data.</p>
            <p><span className='font-bold text-lg'>4.Other Stages: : </span> TMongoDB provides a wide range of additional stages such as $unwind (to deconstruct arrays), $lookup (for performing left outer joins with other collections), $facet (to execute multiple pipelines and aggregate results), and more. These stages allow you to perform complex data transformations and enrich your analysis.</p>
            </div>
        </div>
        </div>
    );
};

export default Blog;