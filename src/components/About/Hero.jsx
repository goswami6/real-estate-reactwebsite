import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
   
      <section className=' pt-[99px]'>
        <div className='relative max bg-custom-image bg-cover bg-center bh-no-repeat h-[655px] w-full'>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
            <div className='container relative top-32 xs:top-52'>
                <span className='medium-20 text-[#fff]'>Welcom to Crown</span>
                <h1 className='h1 capitalize max-w-[50rem] text-white'>Discover Exceptional Homes with Crown</h1>
                <p className='my-10 max-w-[33rem] text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Aut voluptatibus ad est quae placeat deleniti repudiandae. Ab voluptatem labore assumenda distinctio, tenetur adipisci sit.</p>
                    <div className='inline-flex items-center justify-center gap-4 bg-white rounded-xl '>
                        <div className='text-center regular-14 leading-tight pl-5 pt-3 pb-3'>
                            <h5 className='uppercase font-bold'>10%off </h5>
                            <p className='regular-14'>on All Properties</p>
                        </div>
                        <Link to={'/listing'} className=' bg-black p-4 text-white mr-2 rounded-3xl'>Shop Now</Link>
                    </div>
            </div>
        </div>
      </section>
   
  )
}

export default Hero
