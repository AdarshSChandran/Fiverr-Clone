import React from 'react'
import "./QuickAbout.scss"

const QuickAbout = () => {
  return (
    <div className='quickabout'>
        <div className="container">
            <div className="item">
                <h1>A whole world of freelance talent at your fingertips</h1>
                <div className='title'>
                    <img src="./img/check.png" alt="" />
                    The best for every budget
                </div>
                <p>
                Find high-quality services at every price point. No hourly rates, just project-based pricing.
                </p>
                <div className='title'>
                    <img src="./img/check.png" alt="" />
                    Quality work done quickly
                </div>
                <p>
                Find the right freelancer to begin working on your project within minutes.
                </p>
                <div className='title'>
                    <img src="./img/check.png" alt="" />
                    Protected payments, every time
                </div>
                <p>
                Always know what you&apos;ll pay upfront. Your payment isn&apos;t released until you approve the work.
                </p>
                <div className='title'>
                    <img src="./img/check.png" alt="" />
                    24/7 support
                </div>
                <p>
                Questions? Our round-the-clock support team is available to help anytime, anywhere.
                </p>
            </div>
            <div className="item">
                <video src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/vmvv3czyk2ifedefkau7" controls></video>
            </div>
        </div>
    </div>
  )
}

export default QuickAbout

