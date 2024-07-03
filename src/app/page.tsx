"use client";

import Bargraph from '@/components/bargraph'
import Statboard from '@/components/statboard'
import { data } from '@/constants';
import React from 'react'

const Home = () => {
  return (
    <div className="min-h-full bg-indigo-50">
      <Statboard />
      <div className='w-1/2 h-96'>
        <Bargraph />
      </div>
    </div>
  )
}

export default Home