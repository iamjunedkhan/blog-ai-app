import React from 'react'
import Image from 'next/image'
import twitter from './../../public/assets/social_twitter.png'
import facebook from './../../public/assets/social_facebook.png'
import google from './../../public/assets/social_google.png'
import instagram from './../../public/assets/social_instagram.png'
import pinterest from './../../public/assets/social_pinterest.png'
type Props = {
    isDark?:boolean
}

const SocialLink = ({isDark=false}: Props) => {
  return (
    <div className='flex items-center justify-between gap-7'>
                <a href='/' target="_blank" rel="noreferrer" >
                    <Image 
                    className={` ${isDark?'brightness-0':''} hover:opacity-50`}
                    alt="twitter"
                    src={twitter}
                    width={20}
                    height={20}
                    />
                </a>
                <a href='/' target="_blank" rel="noreferrer" >
                    <Image 
                    className={` ${isDark?'brightness-0':''} hover:opacity-50`}
                    alt="twitter"
                    src={facebook}
                    width={20}
                    height={20}
                    />
                </a>
                <a href='/' target="_blank" rel="noreferrer" >
                    <Image 
                    className={` ${isDark?'brightness-0':''} hover:opacity-50`}
                    alt="twitter"
                    src={google}
                    width={20}
                    height={20}
                    />
                </a>
                <a href='/' target="_blank" rel="noreferrer" >
                    <Image 
                    className={` ${isDark?'brightness-0':''} hover:opacity-50`}
                    alt="twitter"
                    src={instagram}
                    width={20}
                    height={20}
                    />
                </a>
                <a href='/' target="_blank" rel="noreferrer" >
                    <Image 
                    className={` ${isDark?'brightness-0':''} hover:opacity-50`}
                    alt="twitter"
                    src={pinterest}
                    width={20}
                    height={20}
                    />
                </a>
    </div>
  )
}

export default SocialLink