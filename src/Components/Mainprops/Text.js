import React from 'react';
import Textp from './Props';

function Text() {
  return (
    <>
    <div className='nn'>
      <div className='Text'>
        <div className='Main_text'>
          <h1>How Dolo Works</h1>
        </div>
        <div className='Main_p'>
          <p>Img Elements Must Have An Alt Prop, Either with meaningful text, or an empty string for decorative images</p>
        </div>
      </div>

      <div className='Container'>
        <Textp title='Discover' text='Img Elements Must Have An Alt Prop, Either with meaningful text'/>
        <Textp title1='order' text1='Img Elements Must Have An Alt Prop, Either with meaningful text'/>
        <Textp title2='purchase' text2='Img Elements Must Have An Alt Prop, Either with meaningful text'/>
        <Textp title3='Enjoy' text3='Img Elements Must Have An Alt Prop, Either with meaningful text'/>
      </div>
      
      </div>
    </>
  )
}

export default Text