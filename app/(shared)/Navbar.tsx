import Link from 'next/link'
import React from 'react'
import SocialLink from './SocialLink'

type Props = {}

const Navbar = (props: Props) => {
    return (
        <div className='mb-5' >
            <nav className='flex items-center justify-between px-10 py-4 bg-wh-900 text-wh-10' >
                <div className='hidden sm:block '>
                    <SocialLink  /> 
                </div>
                <div className='flex items-center justify-between gap-10'>
                    <Link href="/">Home</Link>
                    <Link href="/">Treding</Link>
                    <Link href="/">About</Link>
                </div>
                <div>
                    <p>Sign In</p>
                </div>
            </nav>
            <div className='flex justify-between gap-8 mx-10 mt-5 mb-4'>
                <div className='basis-2/3 md:mt-3'>
                    <h1 className='text-3xl font-bold md:text-5xl'>BLOG OF THE FUTURE</h1>
                    <p className='mt-3 text-sm'>
                        Blod Dedicated  towards AI and generation and job automation.
                    </p>
                </div>
                <div className='relative w-auto h-32 basis-full bg-wh-500'>
                    image right here
                </div>
            </div>
            <hr className='mx-10 border-1' />
        </div>
    )
}

export default Navbar