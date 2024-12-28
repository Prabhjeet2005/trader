import React from 'react'

const Card = ({logo,logoDescription}) => {
  return (
    <div className='flex p-20 gap-4 text-center flex-col'>
      <img src={logo} alt='card-logo' className='' />
      <p className='text-xs font-thin'>{logoDescription}</p>
    </div>
  )
}

export default Card