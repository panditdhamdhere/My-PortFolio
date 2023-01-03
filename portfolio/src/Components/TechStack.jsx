import React from 'react'
import html from '../Assets/html.png'
import css from '../Assets/css.png'
import javascript from '../Assets/javascript.png'
import tailwind from '../Assets/tailwind.png'
import github from '../Assets/github.png'
import reactImage from '../Assets/react.png'
import nextjs from '../Assets/nextjs.png'
import git from '../Assets/git.png'

const TechStack = () => {
    
        const techs = [
            {
                id: 1,
                src: html,
                title: 'HTML',
                style: 'shadow-orange-500'
            },

            {
                id: 2,
                src: css,
                title: 'CSS 3',
                style: 'shadow-blue-500'
            },

            {
                id: 3,
                src: javascript,
                title: 'JavaScript',
                style: 'shadow-yellow-500'
            },

            {
                id: 4,
                src: tailwind,
                title: 'Tailwind',
                style: 'shadow-sky-400'
            },

            {
                id: 5,
                src: reactImage,
                title: 'React',
                style: 'shadow-blue-600'
            },

            {
                id: 6,
                src: git,
                title: 'Git',
                style: 'shadow-orange-700'
            },

            {
                id: 7,
                src: nextjs,
                title: 'NextJS',
                style: 'shadow-white'
            },

            {
                id: 8,
                src: github,
                title: 'GitHub',
                style: 'shadow-black'
            }
        ];
    



    return (
        <div name="techstack" className='bg-gradient-to-b from-blue-500 to-black w-full h-screen'>

            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
                <div>
                    <p className='text-4xl font-bold border-b-4 border-blue-500 p-2 inline'>Langueges & Tools</p>
                    <p className='py-6'>These are the technoligies I Have been working on</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                    {
                        techs.map(({ id, src, title, style }) => (

                            <div 
                            key={id}
                            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                                <img src={src} alt="" className='w-20 mx-auto'/>
                                <p className='mt-4'>{title}</p>
                            </div>
                        ))
                    };
                </div>
            </div>
        </div>
    )
}

export default TechStack
