import React from 'react'

const Contact = () => {
    return (
        <div name="contact" className='w-full h-screen bg-gradient-to-b from-black to-blue-500 p-4 text-white'>
            <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-blue-500'>Contact</p>
                    <p className='py-6'>Submit a form below to get touch with me</p>
                </div>
<div className='flex justify-center items-center'>
                <form action="" className='flex flex-col w-full md:w-1/2'>
                    <input type="text" name="" placeholder="Enter Your Name" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                    <input type="text" name="" placeholder="Enter Your E-Mail" className='p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                    <textarea name="message" placeholder='Enter Your Message' rows="10" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
                    <button className='text-white bg-orange-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-150 duration-300'>Let's Talk</button>
                </form>
                </div>
            </div>


        </div>
    )
}

export default Contact
