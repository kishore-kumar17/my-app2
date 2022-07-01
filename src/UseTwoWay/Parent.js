import React, { useState } from 'react'
import { Child } from './Child'

export const Parent = () => {
    const[first,setFirst]=useState('parent')
  return (
    <div>
        <h1>{first}</h1>
         {/* 2 way binding and passing state to parent components  */}
        <Child data="Kishore"/>
        <Child changes={text=>setFirst(text)}/>
    </div>
  )
}








