import React from 'react'
import { SLACKS } from '../data/Slackdata'
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Slack() {
  return (
    <div className='slack-container' style={{overflow:"hidden"}}>
      <div className="slack">
        <div className='d-flex justify-content-between cols'>
        {SLACKS.map ((slack) => (
          <div className='m-1 colss ' sm={4} lg={1}key={slack.id} >
          

              <div  className="conts noselect">
              <div className="canvas">
                <div className="tracker tr-1"></div>
                <div className="tracker tr-2"></div>
                <div className="tracker tr-3"></div>
                <div className="tracker tr-4"></div>
                <div className="tracker tr-5"></div>
                <div className="tracker tr-6"></div>
                <div className="tracker tr-7"></div>
                <div className="tracker tr-8"></div>
                <div className="tracker tr-9"></div>
                <div className="tracker tr-10"></div>
                <div className="tracker tr-11"></div>
                <div className="tracker tr-12"></div>
                <div className="tracker tr-13"></div>
                <div className="tracker tr-14"></div>
                <div className="tracker tr-15"></div>
                <div className="tracker tr-16"></div>
                <div className="tracker tr-17"></div>
                <div className="tracker tr-18"></div>
                <div className="tracker tr-19"></div>
                <div className="tracker tr-20"></div>
                <div className="tracker tr-21"></div>
                <div className="tracker tr-22"></div>
                <div className="tracker tr-23"></div>
                <div className="tracker tr-24"></div>
                <div className="tracker tr-25"></div>
                <div id="card">
                {/* <p id="prompt">HOVER OVER :D</p> */}
                  <div className="title text-dark text-center pt-2"><LazyLoadImage className='slackimg ' loading='lazy' src={slack.slackImage} alt="" /> <p className='text-center my-3' style={{fontSize:"12px",fontWeight:"500"}}> {slack.slackName}</p></div>
                 
                  
                </div>
              </div>
              </div>
            {/* // <Items key={product.id} data = {product} /> */}
         
          
          </div>
                    ))}

        </div>
      </div>
    </div>
  )
}
