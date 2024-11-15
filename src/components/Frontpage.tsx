"use client";
import React from 'react'
import { Tilt } from 'react-tilt';
import { Button } from './ui/button';
const defaultOptions = {
  reverse: false,  // reverse the tilt direction
  max: 35,     // max tilt rotation (degrees)
  perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1,    // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000,   // Speed of the enter/exit transition
  transition: true,   // Set a transition on enter/exit.
  axis: null,   // What axis should be disabled. Can be X or Y.
  reset: false,    // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

const Frontpage = () => {
  const checkUsername = () => {
    // API end point to search for user in the database
  }

  return (
    <div className='text-white'>
      <div className="flex">
        <div className="flex md:px-6 xl:ml-6 px-3 items-center justify-center gap-4 flex-col">
          <h1 className="text-xl md:text-3xl xl:text-5xl">Everything you are. In one, simple link in bio.</h1>
          <p>Join people using <span className="font-bold">follow tree</span> for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
        </div>
        <div className='flex justify-center'>
          <Tilt options={defaultOptions} className="w-9/12">
            <img src="/pngtree.png" alt="" />
          </Tilt>
        </div>
      </div>
      <div className="flex gap-2 ml-10"><input type="text" className='w-1/3 bg-transparent border rounded-full px-3' placeholder='Enter your Username' />
        {/* Hit api endpoint to check if the user is available in the database. */}
        <Button onClick={checkUsername}>Check Availibility</Button>
      </div>
      {/* next section, view your visits */}
      <div className='bg-green-900 py-5 mt-10'>
        <div className="flex flex-col md:flex-row py-10">
          <div className="section1 text-xl md:text-3xl xl:text-4xl w-full xl:ml-5 mx-3 leading-tight md:leading-normal xl:leading-relaxed flex flex-col">
            <div>
            Share your <span className="font-bold">FollowTree</span> on any Platform, Find your audience, generate QR code for your follow tree.
            </div>
            <div className="w-1/2"><Button className='w-full'>Get started for free</Button></div>
          </div>
          <div className="section2 flex w-full justify-center items-center">
            <Tilt options={defaultOptions}>
              <img src="/template3.png" alt="" />
            </Tilt>
          </div>
        </div>
          
      </div>
    </div>  
  )
}

export default Frontpage