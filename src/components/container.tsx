"use client";

import React from 'react'

const Container = ({children}:{children: React.ReactNode}) => {
  return (
    <div className="flex-1 ml-60">
        {children}
    </div>
  )
}

export default Container