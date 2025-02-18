import MeetingTypesList from '@/components/MeetingTypesList'
import React from 'react'

const Home = () => {
  const currentTime = new Date();
  const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const formattedDate = `on ${currentTime.toLocaleDateString('en-US', { weekday: 'long' })}, ${currentTime.toLocaleDateString()}`;

  return (
    <section className='flex size-full flex-col gap-10 text-white'>
      <div className='h-[300px] w-full rounded-[20px] bg-hero bg-cover'>
        <div className='flex flex-col h-full justify-between max-md:px-5 max-md:py-8 lg:p-11'>
          <h2 className='glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal'>Coming Soon...</h2>
          <div className='flex flex-col gap-2'>
            <h1 className='text-4xl font-extrabold'>
              {formattedTime}
            </h1>
            <p className='text-lg font-medium text-sky-1 lg:text-2xl'>
              {formattedDate}
            </p>
          </div>
        </div>
      </div>
      <MeetingTypesList />
    </section>  
  )
}

export default Home