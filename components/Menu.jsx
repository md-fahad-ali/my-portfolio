import React from 'react'
// import { Home } from '@/components/Home';

function Menu() {
    return (
        <div className='bg-white relative z-[9999999999999999999999]'>
            <h1>Hello World!</h1>
            <button className='bg-white' onClick={()=>{alert("ok I am clicked")}}>Click</button>
        </div>
    )
}

export default Menu