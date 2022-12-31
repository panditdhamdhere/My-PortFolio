import React from 'react'

const About = () => {
    return (
        <div name="about" className='w-full h-screen bg-gradient-to-b from-blue-500 to-black text-white'>

            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-blue-100'>About</p>
                </div>
                <p className='text-xl mt-14'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime eligendi soluta harum sunt, non porro assumenda fuga saepe alias pariatur sed, hic inventore aut. Qui nostrum voluptate similique reiciendis deserunt?</p>
                <br />
                <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit unde earum amet. Quisquam quasi incidunt molestias, voluptatem perferendis architecto illum commodi cumque tempore, rerum, placeat iure repellat enim. Laboriosam, veniam?</p>

            </div>
        </div>
    )
}

export default About
