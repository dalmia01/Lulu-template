import React from 'react';
import {Link} from 'react-router-dom';
import fb from '../assets/images/icons_fb.png';
import twit from '../assets/images/icons_twitter.png';
import insta from '../assets/images/icons_insta.png';

const FixedWidgets = props =>{
  return (
    <div className='fixed_widgets'>
      <div className='social_wrapper'>
        <Link className='social_icon' to='/'>
          <img src={fb} />
        </Link>
        <Link className='social_icon' to='/'>
          <img src={twit} />
        </Link>
        <Link className='social_icon' to='/'>
          <img src={insta} />
        </Link>
      </div>
      <div className='scroll_top'>
        <div className='scroll_line'></div>
        <div className='scroll_text'>Go top</div>
      </div>
    </div>
  );
}

export default FixedWidgets;
