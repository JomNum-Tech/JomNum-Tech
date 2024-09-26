import Button1 from '@/components/buttons/Button1'
import React from 'react'

export default function page() {
  return (
    <section className='w-full flex justify-center items-center'>
        <div className='bg-black w-[90%] mt-6 py-14 rounded-2xl grid gap-y-3'>
            <h1 className='text-white text-[40px] text-center'>Say By to Mannauly!!!</h1>
            <p className='text-gray-200 text-center text-[18px]'>Build and Deploy now</p>
            <div className='flex justify-center gap-6 mt-3'>
                <Button1 title='Deploy Now' />
                <Button1 title='Deploy Overview' />
            </div>
        </div>
    </section>
  )
}
