import React from 'react'

const Card = (props) => {
  return (
    <div>
        <a href={props.ele.url} target='_blank' className='cursor-pointer'>
            <div className='h-40 w-44 bg-white rounded-xl overflow-hidden'>
              <img className='h-full w-full object-cover' src={props.ele.download_url}></img>
            </div>
            <h2 className='font-bold text-lg flex justify-center'>{props.ele.author}</h2>
        </a>
    </div>
  )
}

export default Card;
