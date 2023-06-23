import Link from 'next/link';
import React from 'react'

type Props = {}

type TrendingCardProps  ={
  className?:string;
};
const TrendingCard = ({className}:TrendingCardProps) =>{
  return (
    <Link
    // href={`${process.env.NEXT_PUBLIC_URL}/post/${post?.id}`} 
    className = {`${className} sm:mt-auto sm:h-full relative mt-7 block w-full h-96 hover:opacity-70  `} 
    href="/"
    > 
        <div className=' z-0 w-full h-full border-indigo-900 bg-wh-500 '>
          image
          </div>
        <div className='absolute top-0 left-0 w-full h-full z-1 bg-gradient-gradual' />
        <div className='absolute bottom-0 left-0 p-3 z-2' >
          <h4 className='inline-block px-5 py-1 font-semibold bg-accent-orange text-wh-900'>
            catorgy
          </h4>
          <div className='mt-2 text-wh-100' >Post title</div>
        </div>

    </Link>
  )
}

const Trending = (props: Props) => {
  return (
    <section className='pt-3 pb-10'>
        <div className='flex items-center gap-3'>
            <div className="px-8 py-2 text-sm font-bold bg-wh-900 text-wh-10">Trending</div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio similique corrupti saepe aliquid doloremque? </p>
        </div>
        {/* GRID  */}
        <div className=' relative  border-0 border-green-400 sm:grid grid-cols-4 grid-rows-2 gap-5 sm:h-[600px]  my-3'>
                <TrendingCard className={'col-span-2 row-span-2 bg-wh-500'} />
                <TrendingCard className={'col-span-2 row-span-1 bg-wh-500'} />
                <TrendingCard className={'col-span-1 row-span-1 bg-wh-500'} />
                <TrendingCard className={'col-span-1 row-span-1 bg-wh-500'} />
        </div>
        <p className='text-sm' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti atque necessitatibus quas expedita ex sint maiores harum? Ex at ipsum magnam voluptates possimus corrupti, id, sapiente alias iste placeat cumque.</p>
    </section>
  )
}

export default Trending