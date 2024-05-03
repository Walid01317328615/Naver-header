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
        <div className='md:flex'>
            <div className='md:hidden'  onClick={()=>setOpen(!open) }>
                <span>{open === true ?   <Bars3Icon className="size-6 text-blue-500" />: <XMarkIcon className="size-6 text-blue-500" />}</span>



            </div>

            
                {
                    route.map(rout=><Login
                         key = {rout.id}
                         rout = {rout}
                    ></Login>)
                }
            
            
        </div>
    );
};

export default Naver;