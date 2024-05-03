import React, { useState } from 'react';
import Login from '../Login/Login';
import { Bars3Icon,XMarkIcon} from '@heroicons/react/24/solid'

const Naver = () => {

    const [open , setOpen] = useState(false)


    const route = [
        {
            id:1,
            name:'Home'
        },

        {
            id:2,
            name:'About'
        },

        {
            id:3,
            name:'items'
        },

        {
            id:4,
            name:'products'
        },
    ]
    return (
        <nav className=' bg-slate-400  '>
               <div className='md:flex'>
                
            <div className='md:hidden'  onClick={()=>setOpen(!open) }>
                <span>
                    {open === true ? 
                 
                  <XMarkIcon className="size-6 text-blue-500" />:
                  <Bars3Icon className="size-6 text-blue-500" />
                 }</span>

            </div >

            <lu className ={` md:flex absolute md:static duration-300 pl-8 pd-4 bg-slate-400   ${open? 'top-6':'-top-36'}`}>
            {
                    route.map(rout=><Login
                         key = {rout.id}
                         rout = {rout}
                    ></Login>)
                }


            </lu> 
        </div>
        </nav>
      
    );
};

export default Naver;