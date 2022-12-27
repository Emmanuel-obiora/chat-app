import React from 'react'
import '../../style.css'
import Header from '../Header/Header'
import Dog1 from '../../images/dog-image-1.jpg'
import Dog2 from '../../images/dog-image-2.jpg'
import Dog3 from '../../images/dog-image-3.jpg'
import { IoIosArrowDroprightCircle } from 'react-icons/io'

const PhoneBuild = () => {
  return (
    <div>
      <span className="phone-modal"></span>
      <div className="phone-container">
        <div className="phone-pack">
          <Header />

          <div className="phone-pack_bottom">
            <p className='sender'>That sounds great. I’d be happy with that.</p>

            <p className='sender'>Could you send over some pictures of your dog, please?</p>

            <div className="chat-images">
              <img src={Dog1} alt="dog-1" />
              <img src={Dog2} alt="dog-2" />
              <img src={Dog3} alt="dog-3" />
            </div>

            <p className='receiver'>Here are a few pictures. She’s a happy girl!</p>
            <p className='receiver'>Can you make it?</p>

            <p className='sender'>She looks so happy! The time we discussed works. How long shall I take her out for?</p>

            <div className="chat-pay">
              <button type='radio'></button>
              <p className='deliverables'>30 minute walk</p>
              <strong>$29</strong>
            </div>

            <div className="chat-pay">
              <button type='radio'></button>
              <p className='deliverables'>1 hour walk</p>
              <strong>$49</strong>
            </div>

            <div className="message-input">
              <input type="text" placeholder='Type a message…'/>
              <IoIosArrowDroprightCircle className="click-arrow" />
            </div>
          </div>

        </div>
      </div>
    </div>
    
  )
}

export default PhoneBuild
