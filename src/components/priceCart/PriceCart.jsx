import React from 'react';
import Feature from '../feature/Feature';


const PriceCart = ({price}) => {
    return (
        <div className='bg-indigo-400  mt-4  rounded-md p-4'>
             
            <p className='text-2xl font-extrabold text-green-700 text-center'>{price.id}</p>
            <p className='text-2xl font-bold text-center'>{price.name}</p>

            {
                price.features.map((feature,idx) =><Feature
                kry = {idx}
                feature= {feature}
                ></Feature> )


                
                
            }
           

        </div>
      
            
        
    );
};

export default PriceCart;