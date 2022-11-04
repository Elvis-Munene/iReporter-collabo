import React from "react";

const Footer = () => {
  return (
    <div className='flex flex-col flex-wrap items-center justify-center bg-black w-full'>
        <div className='flex flex-row items-center justify-evenly align-top w-4/5 mx-auto px-4 py-4'>
            <div className='flex flex-col '>
                <h1 className='text-base md:text-lg lg:text-xl font-bold text-white'>Talk to us</h1>
                <p className='text-md py-2 text-white'>+254 567 890</p>
                <p className='text-lg py-2 text-white'>
                <a href='mailto:someone@gmail.com'>Send Email</a>
                </p>
                <p className='text-lg text-white'>iReporter Street, <br/>Nairobi 00100</p>
            </div>
            <div className='flex flex-col'>
                <h1 className='text-base md:text-lg lg:text-xl font-bold text-white'>About Us</h1>
                <a href='#' className='px-4 py-2 text-md text-white'>Contact</a>
                <a href='#' className='px-4 py-2 text-md text-white'>Company</a>
                <a href='#' className='px-4 py-2 text-md text-white'>About Us</a>
                <a href='#' className='px-4 py-2 text-md text-white'>Our Team</a>
            </div>
            <div className='flex flex-col'>
                <h1 className='text-base md:text-lg lg:text-xl font-bold text-white'>Quick Links</h1>
                <a href='#' className='px-4 py-2 text-md text-white'>Support</a>
                <a href='#' className='px-4 py-2 text-md text-white'>Red Flags</a>
                <a href='#' className='px-4 py-2 text-md text-white'>Feedback</a>
                <a href='#' className='px-4 py-2 text-md text-white'>Stories</a>
            </div>
            <div className='flex flex-col'>
                <h1 className='text-base md:text-lg lg:text-xl font-bold text-white'>Social Media</h1>
                <a href='#' className='px-4 py-2 text-lg text-white'>Facebook</a>
                <a href='#' className='px-4 py-2 text-lg text-white'>Instagram</a>
                <a href='#' className='px-4 py-2 text-lg text-white'>Twitter</a>
            </div>
        </div>
        
        <p className='text-lg text-white text-center'><span className="pink-text">© 2022 iReporter</span> All rights reserved.</p>
        
    </div>
);
};

export default Footer;