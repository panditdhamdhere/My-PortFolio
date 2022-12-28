import React from 'react'
import HeroImage from '../Assets/heroImage.png'
import { MdKeyboardArrowRight } from 'react-icons/md'

const Home = () => {
    return (
        <div name="home" className='h-screen w-full bg-gradient-to-b from-black to-blue-500'>

            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>

                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-4xl sm:text-7xl font-bold text-white'>Hi I am Pandit👋 Frontend Web Developer</h2>
                    <p>I am young passionate web developer based in Pune India.
                        I love to solve problems through coding.
                    </p>
                    <div>
                        <button>
                            portfolio
                            <span>
                                <MdKeyboardArrowRight />
                            </span>
                        </button>

                    </div>
                </div>
                {/* <div><img src={HeroImage} alt="my pic"  className="rounded-2xl mx-auto w-2/3 md:w-full"/></div> */}
            </div>
        </div>
    )
}

export default Home
