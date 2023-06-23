import React from 'react'
import SocialLink from './SocialLink'
import Subscribe from './Subscribe'

type Props = {}

const Sidebar = (props: Props) => {
  return (
    <section>
        <h4 className='bg-wh-900 py-3 px-5 text-wh-50 text-xs font-bold text-center' >Subscribe And Follow</h4>
        <div className="m-5">
            <SocialLink isDark />
        </div>
        <Subscribe />
        <div className='my-8 bg-wh-900'> Advert Image</div>
        <h4 className='bg-wh-900 py-3 px-5 text-wh-50 text-xs font-bold text-center' >About the Blog</h4>
        <div className='my-8 bg-wh-900'> PRfoile Image</div>
        <h4 className=' py-3 px-5 text-wh-500  font-bold text-center' >Geoffrey Epstein</h4>
        <p className='text-wh-500 text-center text-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, beatae.
        </p>



    </section>
  )
}

export default Sidebar