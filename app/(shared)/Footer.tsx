import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className='px-10 py-10 bg-wh-900 text-wh-50'>
        <div className='justify-between gap-16 mx-auto sm:flex'>
            {/* First column  */}
            <div className='mt-16 basis-1/2 sm:mt-0'>
                <h4 className='font-bold'>BLOG OF THE FUTURE</h4>
                <p className='my-5'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit est iure, quis harum aspernatur asperiores quia, accusantium laboriosam cupiditate nihil quam vero officiis dicta repellat illum eum soluta eos ullam.
                </p>
                <p>© Blog of the Future All Rights Reserved.</p>
            </div>
            {/* Second column  */}
            <div className='mt-16 basis-1/4 sm:mt-0'>
                <h4 className='font-bold'>LINKS</h4>
                <p className='my-5'>Some Random Link</p>
                <p className='my-5'>Some Random Link</p>
                <p className='my-5'>Some Random Link</p>
            </div>
            {/* Third column  */}
            <div className='mt-16 basis-1/4 sm:mt-0'>
                <h4 className='font-bold'>Contact US</h4>
                <p className='my-5'>Some Random Link</p>
                <p className='my-5'>Some Random Link</p>
                <p className='my-5'>Some Random Link</p>
            </div>
        </div>

    </footer>
  )
}

export default Footer