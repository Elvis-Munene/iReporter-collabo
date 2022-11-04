import React from 'react'
import { Link } from 'react-router-dom'

const CasesCard = ({image, title, description}) => {
  return (
        <div>
            <div className="shadow-md p-4 rounded-md">
            <div>
              <img src={image} alt="case image" />
            </div>
            <p className='pt-4 font-bold text-lg md:text-xl lg:text-2xl '>{title}</p>
            <div className='flex justify-between py-4 '>
              
            <div className='pb-2'>
              <p className='pb-2 font-bold'>{description}</p>
              
            </div>
            
          </div>
        </div>
        </div>
      )}

export default CasesCard