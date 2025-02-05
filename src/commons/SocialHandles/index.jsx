import React from 'react'
import "./SocialHandles.css"
import { socialHandles } from '../../data'

const SocialHandles = () => {
  return (
    <div className='social__handles__container'>
      {
        socialHandles.map((handle,index)=>(
            <React.Fragment key={index}>
                <a href={handle.link} target='_blank' className='icon__container hover__fill'>
                    {handle.icon}
                </a>
            </React.Fragment>
        ))
      }
    </div>
  )
}

export default SocialHandles
