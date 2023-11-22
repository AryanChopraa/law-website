import React from 'react'
import Card from './Card'

const Content = () => {
  return (
    <div className='container mx-auto'>
        <div className='flex flex-row items-center justify-center'>
            <img src='https://edzorblaw.com/wp-content/uploads/2023/03/fin-leaf-left.png'  className='h-auto w-28'/>
            <p className='text-5xl font-semibold text-[#01324E]'>The Edzorb Law Difference</p>
            <img src='https://edzorblaw.com/wp-content/uploads/2023/03/fin-leaf-right.png' className='h-auto w-28'/>
        </div>
        <Card/>
    </div>
  )
}

export default Content