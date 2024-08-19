'use client'
import React from 'react'
import LoginCarousel from '../components/LoginCarousel';
import Loginn from '../forms/LoginForm';


export default function Login() {

  return (
    <div className='w-full h-screen bg-primary relative flex text-white'>
      <div className="relative text-xl -translate-x-[20%] margin-40 h-full w-[50%] md:w-[70%] rounded-r-[50px] overflow-hidden -skew-x-12" >
        <div className='w-[120%] relative  h-[100%] skew-x-12 ' >
          <LoginCarousel items={components} />
        </div>

      </div>
      <div className='h-full w-[50%] md:w-[35%] relative  flex flex-col '>
        <p className='max-w-[400px] text-center mt-[20%] text-4xl font-roboto mr-20  font-semibold'>Welcome Back</p>
        <p className='max-w-[400px] text-center mt-4 text-sm font-roboto mr-20 mb-20 font-medium'>Please Login To Continue</p>

        <Loginn />
      </div>

    </div>
  )
}


const CarouselComponent = ({ item }) => {
  return (
    <div className='w-full h-full relative'>
      <div className='absolute top-0 left-0 h-full w-full bg-black opacity-45' />
      <p className='absolute bottom-[100px]  text-white left-[18%] font-roboto text-2xl    indent-20 w-[60%]'>
        "{item.text}"</p>
      <img height={0} width={0} sizes='100vw' className='w-full  h-full  ' src={item.image} alt='' />
    </div>)
}
const components = [
  < CarouselComponent item={{ text: "Quality is never an accident; it is always the result of high intention and sincere effort.", image: 'https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?q=80&w=1620&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} />,
  < CarouselComponent item={{ text: "Excellence in service is the foundation of a remarkable hotel experience.", image: 'https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} />,
  < CarouselComponent item={{ text: "Our mission is simple: to deliver unforgettable moments through quality service.", image: 'https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} />,
  < CarouselComponent item={{ text: "A hotel is only as good as the service it provides; we aim for the best.", image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} />,

]




