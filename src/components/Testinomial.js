import React from 'react'
import ProfilePic from './Assets/Selfi.jpeg';
import {AiFillStar} from 'react-icons/ai';

const Testinomial=()=> {
  return (
    <div className='work-section-wrapper'>
    <div className='work-section-top'>
        <p className='primary-subheading'>Testimonial</p>
        <h1 className='primary-heading'>What They Are Saying</h1>
        <p className='primary-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero recusandae magni quaerat. Nemo expedita dolorum sequi quae recusandae aliquid possimus in perferendis iure facere, sunt alias est doloribus laboriosam facilis.</p>

    </div>  
    <div className='Testinomial-section-bottom'>
        <img src={ProfilePic} alt='image ' style={{width:"50px"}}/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore dolorem ipsum dicta eveniet cum eaque reprehenderit eos. Porro, nulla. Repellat itaque sit neque? Quos modi possimus aliquid fugiat sequi odit?</p>
        <div className='testinomial-stars-container'>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
        </div>
        <h2>Saurabh k</h2>
    </div>    
    </div>
  )
}

export default Testinomial;
